"use client";

import { useState, useCallback, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { Category, Product, Stats, FormState, FormErrors } from "@/types";
import { deleteCategoryAction } from "@/app/actions/admin";
import { isAppError } from "@/types/error";

export function useAdmin() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stats, setStats] = useState<Stats>({
        totalProducts: 0,
        totalClicks: 0,
        topProduct: "N/A",
        topProductsList: [],
        recentProductsList: []
    });

    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const fetchCategories = useCallback(async () => {
        try {
            const { data, error } = await supabase
                .from("categories")
                .select("*")
                .order("name", { ascending: true });

            if (error) throw error;
            setCategories((data as Category[]) || []);
            return data as Category[];
        } catch (err) {
            console.error("Error fetching categories:", err);
            return [];
        }
    }, []);

    const fetchProducts = useCallback(async () => {
        try {
            const { data, error } = await supabase
                .from("products")
                .select(`
                    *,
                    category:categories(name)
                `)
                .order("created_at", { ascending: false });

            if (error) throw error;
            setProducts(data as Product[] || []);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    }, []);

    const fetchStats = useCallback(async () => {
        try {
            const { data: products, error, count } = await supabase
                .from("products")
                .select("name, clicks", { count: "exact" });

            if (error) throw error;

            const totalProductsCount = count || 0;
            const totalClicks = products?.reduce((acc: number, p: any) => acc + (p.clicks || 0), 0) || 0;
            const sortedProducts = products ? [...products].sort((a, b) => (b.clicks || 0) - (a.clicks || 0)) : [];
            const topProduct = sortedProducts[0]?.name || "N/A";
            const topProductsList = sortedProducts.slice(0, 5) as Pick<Product, 'name' | 'clicks'>[];

            const { data: recent } = await supabase
                .from("products")
                .select("name, clicks, created_at, mrp_price")
                .order("created_at", { ascending: false })
                .limit(5);

            setStats({
                totalProducts: totalProductsCount,
                totalClicks,
                topProduct,
                topProductsList,
                recentProductsList: (recent || []) as Partial<Product>[]
            });
        } catch (err) {
            console.error("Error fetching stats:", err);
        }
    }, []);

    const fetchInitialData = useCallback(async () => {
        setIsLoading(true);
        await Promise.all([fetchCategories(), fetchStats(), fetchProducts()]);
        setIsLoading(false);
    }, [fetchCategories, fetchStats, fetchProducts]);

    useEffect(() => {
        fetchInitialData();
    }, [fetchInitialData]);

    const deleteCategory = async (id: string) => {
        // Optimistic Update
        const previousCategories = [...categories];
        setCategories(prev => prev.filter(c => c.id !== id));

        try {
            const result = await deleteCategoryAction(id);
            if (!result.success) throw new Error(result.error);
            setStatus({ type: "success", message: "Category removed" });
            return { success: true };
        } catch (err: unknown) {
            // Rollback
            setCategories(previousCategories);
            const message = isAppError(err) ? err.message : "Failed to delete category";
            setStatus({ type: "error", message });
            return { success: false, error: message };
        }
    };

    const deleteProduct = async (id: string) => {
        // Optimistic Update
        const previousProducts = [...products];
        setProducts(prev => prev.filter(p => p.id !== id));

        try {
            const { error } = await supabase.from("products").delete().eq("id", id);
            if (error) throw error;
            
            setStatus({ type: "success", message: "Product deleted successfully" });
            fetchStats(); // Refresh stats in background
            return { success: true };
        } catch (err: unknown) {
            // Rollback
            setProducts(previousProducts);
            const message = isAppError(err) ? err.message : "Failed to delete product";
            setStatus({ type: "error", message });
            return { success: false, error: message };
        }
    };

    const addCategory = async (name: string) => {
        try {
            const { error } = await supabase.from("categories").insert([{ name: name.trim() }]);
            if (error) throw error;
            setStatus({ type: "success", message: "Category added successfully" });
            fetchCategories();
            return { success: true };
        } catch (err: unknown) {
            const message = isAppError(err) ? err.message : "Failed to create category";
            setStatus({ type: "error", message });
            return { success: false, error: message };
        }
    };

    const saveProduct = async (productData: any, imageFiles: File[], editingProduct: Product | null, existingImageUrls: string[] = []) => {
        setIsSubmitting(true);
        try {
            let finalImageUrls = [...existingImageUrls];

            if (imageFiles.length > 0) {
                const uploadedUrls = await Promise.all(imageFiles.map(file => uploadToCloudinary(file)));
                finalImageUrls = [...finalImageUrls, ...uploadedUrls];
            }

            const dataToSave = {
                ...productData,
                image_urls: finalImageUrls,
                image_url: finalImageUrls[0] || "",
            };

            if (editingProduct) {
                const { error } = await supabase
                    .from("products")
                    .update(dataToSave)
                    .eq("id", editingProduct.id);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from("products")
                    .insert([dataToSave]);
                if (error) throw error;
            }

            setStatus({ type: "success", message: editingProduct ? "Product updated!" : "Product added!" });
            fetchInitialData();
            return { success: true };
        } catch (err: unknown) {
            const message = isAppError(err) ? err.message : "Failed to save product";
            setStatus({ type: "error", message });
            return { success: false, error: message };
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        categories,
        products,
        stats,
        isLoading,
        isSubmitting,
        status,
        setStatus,
        deleteCategory,
        deleteProduct,
        addCategory,
        saveProduct,
        refreshData: fetchInitialData
    };
}

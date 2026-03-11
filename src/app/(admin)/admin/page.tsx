"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    LayoutDashboard,
    Boxes,
    LogOut,
    Package,
    ChevronRight,
    Loader2,
    Menu,
    X
} from "lucide-react";

import { supabase } from "@/lib/supabase";
import { uploadToCloudinary } from "@/lib/cloudinary";

// Modular Components
import DashboardOverview from "@/components/admin/DashboardOverview";
import InventoryView from "@/components/admin/InventoryView";
import ProductForm from "@/components/admin/ProductForm";
import CategoryModal from "@/components/admin/CategoryModal";

// Types
import { Category, Product, Stats, FormState, FormErrors } from "@/types";
import { deleteCategoryAction } from "@/app/actions/admin";
import { isAppError } from "@/types/error";

import { useAdmin } from "@/hooks/useAdmin";
import ConfirmationModal from "@/components/ui/ConfirmationModal";

export default function AdminPage() {
    const router = useRouter();
    const {
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
        refreshData
    } = useAdmin();

    const [activeTab, setActiveTab] = useState<"home" | "inventory">("home");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [inventoryTab, setInventoryTab] = useState<"list" | "add">("list");
    const [inventorySearch, setInventorySearch] = useState("");
    const [newCategoryName, setNewCategoryName] = useState("");
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [modalError, setModalError] = useState<string | null>(null);
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [deletingCategoryId, setDeletingCategoryId] = useState<string | null>(null);
    const [confirmingDeleteId, setConfirmingDeleteId] = useState<string | null>(null);
    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; type: 'product' | 'category'; id: string; title: string }>({
        isOpen: false,
        type: 'product',
        id: '',
        title: ''
    });

    // Form State
    const [formData, setFormData] = useState<FormState>({
        name: "",
        brand: "",
        mrp_price: "",
        discount_price: "",
        size: "",
        description: "",
        category_id: "",
    });
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const handleCreateCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCategoryName.trim()) return;
        setIsAddingCategory(true);
        const result = await addCategory(newCategoryName);
        if (result.success) {
            setNewCategoryName("");
            setIsCategoryModalOpen(false);
        }
        setIsAddingCategory(false);
    };

    const handleDeleteCategory = async (id: string) => {
        setModalError(null);
        setDeletingCategoryId(id);
        const result = await deleteCategory(id);
        if (!result.success) {
            setModalError(result.error || "Failed to delete");
        } else {
            setConfirmingDeleteId(null);
        }
        setDeletingCategoryId(null);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        document.cookie = 'sb-auth-token=; path=/; max-age=0; SameSite=Lax';
        router.push("/admin/login");
        router.refresh();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            const newFiles = [...imageFiles, ...files].slice(0, 3); // Limit to 3 images
            setImageFiles(newFiles);

            const newPreviews: string[] = [];
            let loaded = 0;
            newFiles.forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    newPreviews.push(reader.result as string);
                    loaded++;
                    if (loaded === newFiles.length) {
                        setImagePreviews(newPreviews);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const removeImage = (index: number) => {
        const newFiles = imageFiles.filter((_, i) => i !== index);
        const newPreviews = imagePreviews.filter((_, i) => i !== index);
        setImageFiles(newFiles);
        setImagePreviews(newPreviews);
    };

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            brand: product.brand || "",
            mrp_price: product.mrp_price.toString(),
            discount_price: product.discount_price.toString(),
            size: product.size || "",
            description: product.description || "",
            category_id: product.category_id,
        });
        setImagePreviews(product.image_urls || [product.image_url]);
        setImageFiles([]); // Reset files, we use previews to show existing
        setInventoryTab("add"); // Switch to form tab
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetForm = () => {
        setEditingProduct(null);
        setFormData({
            name: "",
            brand: "",
            mrp_price: "",
            discount_price: "",
            size: "",
            description: "",
            category_id: categories[0]?.id || "",
        });
        setImageFiles([]);
        setImagePreviews([]);
        setStatus(null);
        setFormErrors({});
    };

    const validateForm = (): boolean => {
        const errors: FormErrors = {};

        if (!formData.name.trim()) errors.name = "Commercial name is required";
        else if (formData.name.trim().length < 3) errors.name = "Name must be at least 3 characters";

        if (!formData.category_id) errors.category_id = "Please select a catalog category";

        const mrp = parseFloat(formData.mrp_price);
        if (isNaN(mrp) || mrp <= 0) errors.mrp_price = "Valid MRP is required";

        const discount = parseFloat(formData.discount_price);
        if (!isNaN(discount) && !isNaN(mrp) && discount > mrp) {
            errors.discount_price = "Offer price cannot exceed MRP";
        }

        if (!formData.description.trim()) errors.description = "Product narrative is required";
        else if (formData.description.trim().length < 20) errors.description = "Description should be at least 20 characters for catalog quality";

        if (imagePreviews.length === 0 && imageFiles.length === 0) {
            errors.images = "At least one Image is required";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setStatus({ type: "error", message: "Please resolve the highlighted errors before publishing." });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const productData = {
            name: formData.name,
            brand: formData.brand,
            mrp_price: parseFloat(formData.mrp_price) || 0,
            discount_price: parseFloat(formData.discount_price) || 0,
            size: formData.size,
            description: formData.description,
            category_id: formData.category_id,
        };

        const result = await saveProduct(productData, imageFiles, editingProduct);
        if (result.success) {
            resetForm();
            setInventoryTab("list");
        }
    };

    const handleDelete = (id: string) => {
        const product = products.find(p => p.id === id);
        setDeleteModal({
            isOpen: true,
            type: 'product',
            id,
            title: product?.name || 'this product'
        });
    };

    const confirmDelete = async () => {
        const { type, id } = deleteModal;
        if (type === 'product') {
            await deleteProduct(id);
        }
        setDeleteModal(prev => ({ ...prev, isOpen: false }));
    };

    const filteredInventory = products.filter(p =>
        p.name.toLowerCase().includes(inventorySearch.toLowerCase()) ||
        p.brand?.toLowerCase().includes(inventorySearch.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-primary/10">
            {/* Sidebar Overlay for Mobile */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 w-72 bg-white border-r border-slate-200 flex flex-col z-50 transition-transform duration-300 transform 
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:z-20 lg:overflow-y-auto no-scrollbar
            `}>
                <div className="p-8">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex flex-col gap-2">
                            <div className="relative w-32 h-8">
                                <Image
                                    src="/Images/logo.svg"
                                    alt="Depro Trading Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-0.5">Admin Dashboard</span>
                        </div>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="lg:hidden p-2 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <nav className="space-y-2">
                        <button
                            onClick={() => {
                                setActiveTab("home");
                                setIsSidebarOpen(false);
                            }}
                            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold text-sm ${activeTab === "home" ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                        >
                            <LayoutDashboard size={20} />
                            Overview
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab("inventory");
                                setIsSidebarOpen(false);
                            }}
                            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold text-sm ${activeTab === "inventory" ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                        >
                            <Boxes size={20} />
                            Inventory
                        </button>
                    </nav>
                </div>

                <div className="mt-auto p-8">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold text-sm text-rose-500 hover:bg-rose-50"
                    >
                        <LogOut size={20} />
                        Log out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-h-screen pb-20 w-full overflow-x-hidden">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-slate-100 flex items-center justify-between px-6 md:px-10 py-4 md:py-6">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <div className="flex items-center gap-2 md:gap-4">
                            <h2 className="text-base md:text-lg font-black text-slate-900 capitalize tracking-tight">{activeTab}</h2>
                            <ChevronRight className="text-slate-300 hidden md:block" size={16} />
                            <span className="text-xs md:text-sm font-bold text-slate-400 hidden md:block">Dashboard Control</span>
                        </div>
                    </div>
                </header>

                <div className="p-4 md:p-10 max-w-6xl mx-auto">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-[60vh]">
                            <Loader2 className="w-10 h-10 text-primary animate-spin" />
                        </div>
                    ) : (
                        <AnimatePresence mode="wait">
                            {activeTab === "home" ? (
                                <DashboardOverview key="home" stats={stats} />
                            ) : (
                                <motion.div
                                    key="inventory"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-8"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                                {inventoryTab === "list" ? "Warehouse Inventory" : editingProduct ? "Modify Product Asset" : "Add New Product"}
                                            </h3>
                                            <p className="text-slate-400 text-sm font-bold mt-1">
                                                {inventoryTab === "list" ? "Manage and monitor your catalog assets." : editingProduct ? `Editing: ${editingProduct.name}` : "Populate your catalog with new arrivals."}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => setIsCategoryModalOpen(true)}
                                                className="flex items-center gap-3 bg-white border border-slate-200 text-slate-600 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm active:scale-[0.98]"
                                            >
                                                Categories
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (inventoryTab === "list") {
                                                        resetForm();
                                                        setInventoryTab("add");
                                                    } else {
                                                        setInventoryTab("list");
                                                    }
                                                }}
                                                className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98]"
                                            >
                                                {inventoryTab === "list" ? "New Product" : (
                                                    <>
                                                        <span className="hidden md:inline">View </span>
                                                        Inventory
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Status Messages */}
                                    {status && (
                                        <div className={`p-5 rounded-3xl flex items-center justify-between gap-4 ${status.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-rose-50 text-rose-700 border border-rose-100"}`}>
                                            <p className="font-bold text-xs tracking-wide">{status.message}</p>
                                            <button onClick={() => setStatus(null)} className="opacity-40 hover:opacity-100 transition-opacity">Dismiss</button>
                                        </div>
                                    )}

                                    {inventoryTab === "list" ? (
                                        <InventoryView
                                            inventorySearch={inventorySearch}
                                            setInventorySearch={setInventorySearch}
                                            products={products}
                                            filteredInventory={filteredInventory}
                                            handleEdit={handleEdit}
                                            handleDelete={handleDelete}
                                        />
                                    ) : (
                                        <ProductForm
                                            formData={formData}
                                            setFormData={setFormData}
                                            formErrors={formErrors}
                                            setFormErrors={setFormErrors}
                                            imagePreviews={imagePreviews}
                                            isSubmitting={isSubmitting}
                                            editingProduct={editingProduct}
                                            categories={categories}
                                            handleSubmit={handleSubmit}
                                            handleImageChange={handleImageChange}
                                            removeImage={removeImage}
                                            resetForm={resetForm}
                                            setInventoryTab={setInventoryTab}
                                        />
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}

                    <CategoryModal
                        isOpen={isCategoryModalOpen}
                        onClose={() => {
                            setIsCategoryModalOpen(false);
                            setModalError(null);
                        }}
                        categories={categories}
                        newCategoryName={newCategoryName}
                        setNewCategoryName={setNewCategoryName}
                        handleCreateCategory={handleCreateCategory}
                        handleDeleteCategory={handleDeleteCategory}
                        isAddingCategory={isAddingCategory}
                        modalError={modalError}
                        setModalError={setModalError}
                        deletingCategoryId={deletingCategoryId}
                        confirmingDeleteId={confirmingDeleteId}
                        setConfirmingDeleteId={setConfirmingDeleteId}
                    />

                    <ConfirmationModal
                        isOpen={deleteModal.isOpen}
                        onClose={() => setDeleteModal(prev => ({ ...prev, isOpen: false }))}
                        onConfirm={confirmDelete}
                        title={`Delete ${deleteModal.type === 'product' ? 'Product' : 'Category'}`}
                        message={`Are you sure you want to permanently remove "${deleteModal.title}" from the catalog? This action cannot be undone.`}
                        confirmText="Delete Asset"
                    />
                </div>
            </main>
        </div>
    );
}

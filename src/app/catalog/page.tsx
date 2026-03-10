"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ShoppingBag, Eye, ArrowRight, ChevronDown, X, Loader2, Tag, ChevronLeft, ArrowUpRight, MessageSquare } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

interface Product {
    id: string;
    name: string;
    brand: string;
    mrp_price: number;
    discount_price: number;
    size: string;
    description: string;
    image_url: string;
    image_urls: string[];
    category: {
        name: string;
    };
}

interface Category {
    id: string;
    name: string;
}

export default function CatalogPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        setIsLoading(true);
        try {
            // Fetch categories
            const { data: catData } = await supabase
                .from("categories")
                .select("*")
                .order("name");

            setCategories(catData || []);

            // Fetch products with category names
            const { data: prodData, error } = await supabase
                .from("products")
                .select(`
                    *,
                    category:categories(name)
                `)
                .order("created_at", { ascending: false });

            if (error) throw error;
            setProducts((prodData as unknown as Product[]) || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleProductClick = async (product: Product) => {
        try {
            await supabase.rpc("increment_product_clicks", { product_id: product.id });
        } catch (error) {
            console.error("Error incrementing clicks:", error);
        }

        // WhatsApp Redirection
        const message = `Hello Depro Trading! I'm interested in the following product from your architectural catalog:\n\n*Product:* ${product.name}\n*Brand:* ${product.brand || 'N/A'}\n*Price:* ₹${product.discount_price > 0 ? product.discount_price : product.mrp_price}\n*Category:* ${product.category?.name || 'General'}\n\nPlease provide more details.`;
        window.open(`https://wa.me/918086188200?text=${encodeURIComponent(message)}`, '_blank');
    };

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "All" || product.category?.name === selectedCategory;
        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-white relative overflow-hidden">
            <Navbar />

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <section className="pt-24 lg:pt-32 pb-6 lg:pb-12">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Header Section */}
                    <div className="mb-6 md:mb-10">
                        <SectionHeader
                            subtitle="Architectural Warehouse"
                            title="Global Standards. Local Precision."
                            highlight="Precision."
                            description="Explore our curated inventory of 5,000+ premium hardware components, architectural sections, and professional workshop essentials. Designed for those who demand excellence in every detail."
                        />
                    </div>

                    {/* Search & Filter Bar - Refined with Dropdown */}
                    <div className="mb-10 relative z-50">
                        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 md:gap-6 bg-white/60 backdrop-blur-xl p-3 md:p-4 rounded-3xl md:rounded-[40px] border border-white shadow-2xl shadow-slate-200/50">

                            {/* Search Input */}
                            <div className="relative flex-1">
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
                                    <Search size={22} strokeWidth={2.5} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search architectural assets..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white border border-slate-100 pl-14 md:pl-16 pr-6 py-4 md:py-5 rounded-2xl md:rounded-3xl text-xs md:text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-primary transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                )}
                            </div>

                            {/* Category Dropdown - Handles 10+ categories elegantly */}
                            <div className="relative min-w-[280px]">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className={cn(
                                        "w-full flex items-center justify-between px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-3xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all border-2",
                                        selectedCategory !== "All"
                                            ? "bg-primary border-primary text-white shadow-xl shadow-primary/20"
                                            : "bg-white/50 border-slate-100 text-slate-900 hover:bg-white hover:border-primary/30"
                                    )}
                                >
                                    <span className="flex items-center gap-3">
                                        <Filter size={16} />
                                        {selectedCategory === "All" ? "All Categories" : selectedCategory}
                                    </span>
                                    <ChevronDown size={18} className={cn("transition-transform duration-300", isDropdownOpen ? "rotate-180" : "")} />
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-0 right-0 mt-4 bg-white/90 backdrop-blur-2xl rounded-4xl border border-white shadow-2xl z-50 overflow-hidden max-h-[400px] overflow-y-auto no-scrollbar"
                                        >
                                            <div className="p-3">
                                                <button
                                                    onClick={() => {
                                                        setSelectedCategory("All");
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={cn(
                                                        "w-full text-left px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all mb-2",
                                                        selectedCategory === "All" ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-primary/5 hover:text-primary"
                                                    )}
                                                >
                                                    Universe (All)
                                                </button>
                                                <div className="h-px bg-slate-100 my-2 mx-4" />
                                                {categories.map((cat) => (
                                                    <button
                                                        key={cat.id}
                                                        onClick={() => {
                                                            setSelectedCategory(cat.name);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className={cn(
                                                            "w-full text-left px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all mb-1",
                                                            selectedCategory === cat.name ? "bg-primary text-white" : "text-slate-500 hover:bg-primary/5 hover:text-primary"
                                                        )}
                                                    >
                                                        {cat.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Grid Status */}
                    <div className="flex flex-row items-center justify-between mb-8 md:mb-12 px-2 gap-4">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
                            <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                                {isLoading ? (
                                    <span className="flex items-center gap-2 italic">
                                        Synchronizing...
                                    </span>
                                ) : (
                                    <>
                                        <span className="sm:inline hidden">Showing </span>
                                        <span className="text-slate-900 tracking-tighter">{filteredProducts.length}</span>
                                        <span className="sm:inline hidden"> Premium Results</span>
                                        <span className="sm:hidden inline"> Results</span>
                                    </>
                                )}
                            </p>
                        </div>
                        {!isLoading && selectedCategory !== "All" && (
                            <button
                                onClick={() => setSelectedCategory("All")}
                                className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-1.5 md:gap-2 hover:gap-3 transition-all bg-primary/5 px-4 py-2 rounded-full border border-primary/10"
                            >
                                <X size={10} className="md:w-[12px] md:h-[12px]" /> Reset Filter
                            </button>
                        )}
                    </div>

                    {isLoading ? (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white/50 backdrop-blur-sm rounded-3xl md:rounded-5xl h-[250px] md:h-[400px] animate-pulse border border-white" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                            {filteredProducts.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} onInquire={handleProductClick} />
                            ))}
                        </div>
                    )}

                    {!isLoading && filteredProducts.length === 0 && (
                        <div className="py-6 text-center max-w-xl mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-3xl md:rounded-full bg-white shadow-soft mb-4 md:mb-6 text-slate-300 border border-slate-100"
                            >
                                <Search size={MediaQueryListEvent ? 24 : 32} className="w-6 h-6 md:w-10 md:h-10" strokeWidth={1.5} />
                            </motion.div>
                            <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-2 md:mb-3 tracking-tight">No results found</h3>
                            <p className="text-slate-500 mb-6 md:mb-8 max-w-xs mx-auto text-[11px] md:text-base leading-relaxed font-medium">
                                We couldn't find matches. Our physical inventory grows daily—we might still have it.
                            </p>
                            <a
                                href="https://wa.me/918086188200"
                                className="bg-primary text-white px-6 md:px-10 py-3.5 md:py-5 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] inline-flex items-center gap-2 md:gap-3 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95"
                            >
                                Custom Search <ArrowUpRight size={12} className="md:w-4 md:h-4" />
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* Product Collections & Trade Support */}
            <section className="py-6 lg:py-12 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-0" />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-10 gap-8 md:gap-10">
                        <SectionHeader
                            subtitle="Strategic Partners"
                            title="Enterprise Solutions."
                            highlight="Enterprise"
                            description="Optimized procurement solutions for construction firms, interior contractors, and large-scale industrial projects across the region."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Premium Sourcing Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-3xl md:rounded-5xl p-6 md:p-8 lg:p-12 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 md:mb-10 shadow-xl shadow-primary/20 transition-transform group-hover:rotate-12">
                                    <ShoppingBag className="text-white w-6 h-6 md:w-8 md:h-8" size={MediaQueryListEvent ? 24 : 32} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 tracking-tight leading-tight">Request <br /> Premium Sourcing</h3>
                                <p className="text-sm md:text-lg text-slate-400 mb-8 md:mb-10 max-w-md leading-relaxed font-medium">
                                    Can't find a specific luxury finish or architectural profile? Our experts bridge the gap between your design and global manufacturing.
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href="https://wa.me/918086188200"
                                        className="bg-primary hover:bg-white hover:text-slate-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 inline-block text-center shadow-lg"
                                    >
                                        Inquire via WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Trade Support Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-brand-muted border-2 border-slate-50 rounded-3xl md:rounded-5xl p-8 md:p-12 group hover:border-primary/30 transition-all duration-500 shadow-soft hover:shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[60px] translate-x-1/2 translate-y-1/2" />

                            <div className="flex flex-col h-full relative z-10">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mb-8 md:mb-10 transition-all group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:scale-110">
                                    <ArrowRight className="text-slate-900 group-hover:text-primary transition-colors w-6 h-6 md:w-8 md:h-8" size={MediaQueryListEvent ? 24 : 32} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">Bulk Trade <br /> Support</h3>
                                <p className="text-sm md:text-lg text-slate-500 mb-8 md:mb-10 max-w-md leading-relaxed font-medium">
                                    We offer specialized pricing and logistic support for wholesale buyers and development companies looking for consistency and volume.
                                </p>
                                <div className="mt-auto">
                                    <button className="text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4 group-hover:gap-6 transition-all">
                                        Partner with Depro <ArrowRight size={18} className="md:w-5 md:h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}

function ProductCard({ product, index, onInquire }: { product: Product, index: number, onInquire: (product: Product) => void }) {
    const images = product.image_urls && product.image_urls.length > 0 ? product.image_urls : [product.image_url];
    const [currentImg, setCurrentImg] = useState(0);

    const nextImg = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImg((prev) => (prev + 1) % images.length);
    };

    const prevImg = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 8) * 0.05 }}
            className="bg-brand-beige rounded-[24px] md:rounded-5xl overflow-hidden shadow-soft border border-slate-100/60 group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-700 flex flex-col h-full relative"
        >
            {/* Image Slider Section - Flush Design */}
            <div className="aspect-[16/10] md:aspect-[4/3] bg-slate-50 relative overflow-hidden shrink-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                    >
                        <Image
                            src={images[currentImg]}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                {images.length > 1 && (
                    <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        <button
                            onClick={prevImg}
                            className="w-10 h-10 bg-black/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-lg active:scale-90"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextImg}
                            className="w-10 h-10 bg-black/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-lg active:scale-90"
                        >
                            <ChevronLeft size={20} className="rotate-180" />
                        </button>
                    </div>
                )}

                {/* Slider Progress Indicator */}
                {images.length > 1 && (
                    <div className="absolute bottom-0 inset-x-0 flex gap-0.5 z-10 px-0.5">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1 flex-1 transition-all duration-500 overflow-hidden ${idx === currentImg ? "bg-primary" : "bg-black/5"}`}
                            />
                        ))}
                    </div>
                )}

                {/* Inquire Button Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px] flex items-center justify-center">
                    <button
                        onClick={() => onInquire(product)}
                        className="p-5 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 hover:bg-emerald-500 hover:text-white"
                    >
                        <MessageSquare size={28} />
                    </button>
                </div>
            </div>

            <div className="p-3 md:p-6 pb-4 md:pb-8 flex flex-col flex-1 relative">
                <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-2 md:mb-4">
                    <span className="text-[7px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 md:px-3 md:py-1.5 rounded-lg border border-slate-100 group-hover:border-primary/20 group-hover:text-primary transition-colors inline-block">
                        {product.category?.name || "General"}
                    </span>
                    {product.size && (
                        <span className="text-[7px] md:text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 md:px-3 md:py-1.5 rounded-lg border border-primary/20 flex items-center gap-1 md:gap-1.5">
                            <Tag size={8} strokeWidth={3} className="w-1.5 h-1.5 md:w-2.5 md:h-2.5" />
                            {product.size}
                        </span>
                    )}
                </div>

                {product.brand && (
                    <p className="text-[7px] md:text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1 md:mb-1.5">
                        {product.brand}
                    </p>
                )}

                <h3 className="text-[11px] md:text-xl font-black text-slate-900 mb-1 md:mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {product.name}
                </h3>

                <p className="text-[9px] md:text-sm text-slate-500 mb-3 md:mb-4 line-clamp-2 leading-relaxed font-medium hidden xs:block">
                    {product.description || "Premium architectural asset."}
                </p>

                <div className="flex items-center justify-between p-1 md:p-3 mt-auto bg-slate-50/50 rounded-xl md:rounded-2xl border border-slate-100 group-hover:bg-white group-hover:border-primary/20 transition-all duration-500">
                    <div className="flex flex-col">
                        {product.discount_price > 0 && product.discount_price < product.mrp_price ? (
                            <div className="flex flex-row items-baseline gap-1.5 md:gap-2">
                                <span className="text-[13px] md:text-xl font-black text-primary tracking-tight leading-none">₹{product.discount_price}</span>
                                <span className="text-[7px] md:text-[10px] font-bold text-slate-400 line-through leading-none">₹{product.mrp_price}</span>
                            </div>
                        ) : (
                            <span className="text-[13px] md:text-xl font-black text-slate-900 tracking-tight leading-none">₹{product.mrp_price}</span>
                        )}
                    </div>

                    <button
                        onClick={() => onInquire(product)}
                        className="w-6 h-6 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm shrink-0"
                    >
                        <MessageSquare size={10} className="md:w-[18px] md:h-[18px]" />
                    </button>
                </div>
            </div>
        </motion.div >
    );
}


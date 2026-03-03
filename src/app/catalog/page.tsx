"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ShoppingBag, Eye, ArrowRight, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { categories, products } from "@/data/products";

export default function CatalogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-brand-muted">
            <Navbar />

            {/* Expanded Product Grid */}
            <section className="pt-32 pb-20 md:pt-32">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Header: Search & Filter - Simplified Premium Design */}
                    <div className="flex flex-col md:flex-row items-center gap-8 justify-between mb-12">

                        {/* Search Input - Ultra Clean */}
                        <div className="relative w-full md:w-[450px]">
                            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
                                <Search size={20} strokeWidth={2.5} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products, brands, or materials..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white border border-slate-200/60 pl-16 pr-6 py-5 rounded-[24px] text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all shadow-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            )}
                        </div>

                        {/* Category Dropdown - Branded Look */}
                        <div className="relative w-full md:w-80">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full flex items-center justify-between bg-slate-900 text-white px-8 py-5 rounded-[24px] text-[9px] font-black uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 shadow-xl shadow-slate-900/10 active:scale-[0.98]"
                            >
                                <span className="flex items-center gap-3">
                                    {selectedCategory}
                                </span>
                                <ChevronDown className={`transition-transform duration-500 ${isDropdownOpen ? "rotate-180" : ""}`} size={16} />
                            </button>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                                        className="absolute top-full right-0 mt-4 w-full md:w-[400px] bg-white border border-slate-100 rounded-[32px] shadow-2xl overflow-hidden z-50 p-3 grid grid-cols-1 gap-1.5"
                                    >
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => {
                                                    setSelectedCategory(cat);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-7 py-4 rounded-[20px] text-[9px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat
                                                    ? "bg-primary text-white shadow-[0_10px_20px_-5px_rgba(255,131,126,0.3)]"
                                                    : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Grid Status */}
                    <div className="flex items-center justify-between mb-12">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                            Showing <span className="text-primary">{filteredProducts.length}</span> Results
                        </p>
                        {selectedCategory !== "All" && (
                            <button
                                onClick={() => setSelectedCategory("All")}
                                className="text-[10px] font-black text-primary uppercase tracking-[0.2em] border-b-2 border-primary/20 hover:border-primary transition-all"
                            >
                                Reset Category
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 8) * 0.05 }}
                                className="bg-white rounded-4xl overflow-hidden shadow-soft border border-slate-100 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="aspect-square bg-slate-100 relative overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-md">
                                            <Eye className="text-white" size={20} />
                                        </div>
                                        <button className="px-6 py-3 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all active:scale-95 shadow-lg shadow-black/20">
                                            Inquire Now
                                        </button>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-base font-black text-slate-900 mb-2 group-hover:text-primary transition-colors min-h-14 flex items-center leading-tight">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{product.price}</span>
                                        <div className="flex items-center gap-2 text-slate-400 group-hover:text-primary transition-colors">
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="py-32 text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-white shadow-soft mb-8 text-slate-200"
                            >
                                <Search size={48} />
                            </motion.div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4">No results found</h3>
                            <p className="text-slate-500 mb-10 max-w-sm mx-auto text-lg leading-relaxed">We may have what you're looking for offline. Our inventory grows daily.</p>
                            <a
                                href="https://wa.me/918086188200"
                                className="bg-primary text-white px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] inline-block hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
                            >
                                Request Custom Search
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* Product Collections (Hero Reordered to Bottom) */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
                            Product <span className="text-primary">Collections</span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12">
                            A curated inventory of 5,000+ premium hardware components, architectural sections, and professional workshop essentials. Depro Trading bridges the gap between high-end design and manufacturing precision.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Premium Sourcing Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-4xl p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 transition-transform group-hover:scale-125 duration-700" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-primary/20">
                                    <ShoppingBag className="text-white" size={28} />
                                </div>
                                <h3 className="text-3xl font-black mb-4">Request Premium Sourcing</h3>
                                <p className="text-slate-400 text-sm md:text-base mb-8 max-w-md leading-relaxed">
                                    Can't find a specific luxury finish or architectural profile? Our experts bridge the gap between your design and global manufacturing.
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href="https://wa.me/918086188200"
                                        className="bg-primary hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 inline-block text-center"
                                    >
                                        Inquire via WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Trade Support Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border-2 border-slate-100 rounded-4xl p-10 group hover:border-primary/30 transition-all duration-500 shadow-soft hover:shadow-xl"
                        >
                            <div className="flex flex-col h-full">
                                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/5 group-hover:border-primary/20">
                                    <ArrowRight className="text-slate-900 group-hover:text-primary transition-colors" size={28} />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Bulk Trade Support</h3>
                                <p className="text-slate-500 text-sm md:text-base mb-8 max-w-md leading-relaxed">
                                    Optimized procurement solutions for construction firms, interior contractors, and large-scale industrial projects.
                                </p>
                                <div className="mt-auto">
                                    <button className="text-primary text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 group-hover:gap-5 transition-all">
                                        Partner with Depro <ArrowRight size={18} />
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

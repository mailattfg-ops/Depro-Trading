import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MousePointer2, Pencil, X } from 'lucide-react';
import Image from 'next/image';
import { Product } from '@/types';

interface InventoryViewProps {
    inventorySearch: string;
    setInventorySearch: (val: string) => void;
    products: Product[];
    filteredInventory: Product[];
    handleEdit: (product: Product) => void;
    handleDelete: (id: string) => void;
}

export default function InventoryView({
    inventorySearch,
    setInventorySearch,
    products,
    filteredInventory,
    handleEdit,
    handleDelete
}: InventoryViewProps) {
    return (
        <div className="space-y-8">
            {/* Search & Stats Bar */}
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-6">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Quick search by name or brand..."
                        value={inventorySearch}
                        onChange={(e) => setInventorySearch(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-16 pr-6 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                </div>
                <div className="flex items-center gap-8 px-4">
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total</p>
                        <p className="text-lg font-black text-slate-900">{products.length}</p>
                    </div>
                    <div className="w-px h-8 bg-slate-100" />
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Filtered</p>
                        <p className="text-lg font-black text-primary">{filteredInventory.length}</p>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            {filteredInventory.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredInventory.map((product) => (
                        <motion.div
                            layout
                            key={product.id}
                            className="bg-white rounded-[32px] border border-slate-100 p-5 md:p-6 flex flex-col xs:flex-row gap-5 md:gap-6 group hover:shadow-xl hover:shadow-slate-200/50 transition-all border-b-4 hover:border-b-primary"
                        >
                            <div className="w-full xs:w-24 h-48 xs:h-24 rounded-2xl bg-slate-50 overflow-hidden relative shrink-0 border border-slate-100">
                                <Image
                                    src={product.image_url}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[9px] font-black text-primary uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded-md">
                                            {product.category?.name || 'Uncategorized'}
                                        </span>
                                        <div className="flex items-center gap-1 text-[10px] font-black text-slate-400">
                                            <MousePointer2 size={10} />
                                            {product.clicks || 0}
                                        </div>
                                    </div>
                                    <h4 className="text-sm font-black text-slate-900 truncate pr-4">{product.name}</h4>
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight mb-2">{product.brand}</p>
                                    <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">
                                        {product.description || "No narrative provided..."}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex flex-col">
                                        <span className="text-[11px] font-black text-slate-900 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-2">
                                            ₹{product.discount_price || product.mrp_price}
                                            {product.discount_price > 0 && product.discount_price < product.mrp_price && (
                                                <span className="text-[9px] text-slate-300 line-through font-bold">₹{product.mrp_price}</span>
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={() => handleEdit(product)}
                                            className="p-2.5 text-slate-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                                            title="Edit Product"
                                        >
                                            <Pencil size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="p-2.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                                            title="Delete Product"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-[40px] border border-slate-100 p-20 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-slate-50 rounded-[32px] flex items-center justify-center mb-8 text-slate-200">
                        <Search size={48} />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight">No products found</h4>
                    <p className="text-slate-400 text-sm font-bold max-w-xs mx-auto">
                        Try adjusting your search criteria or add a new product to the catalog.
                    </p>
                </div>
            )}
        </div>
    );
}

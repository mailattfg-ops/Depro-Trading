import React from 'react';
import {
    Plus,
    X,
    Loader2,
    Check,
    Upload,
    Maximize,
    FileText,
    ChevronRight,
    Image as ImageIcon
} from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FormState, Category, Product, FormErrors } from '@/types';

interface ProductFormProps {
    formData: FormState;
    setFormData: React.Dispatch<React.SetStateAction<FormState>>;
    formErrors: FormErrors;
    setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
    imagePreviews: string[];
    isSubmitting: boolean;
    editingProduct: Product | null;
    categories: Category[];
    handleSubmit: (e: React.FormEvent) => void;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    removeImage: (index: number) => void;
    resetForm: () => void;
    setInventoryTab: (tab: "list" | "add") => void;
}

export default function ProductForm({
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    imagePreviews,
    isSubmitting,
    editingProduct,
    categories,
    handleSubmit,
    handleImageChange,
    removeImage,
    resetForm,
    setInventoryTab
}: ProductFormProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
            {/* Left Column: Media & Meta (4/12) */}
            <div className="lg:col-span-4 space-y-6 md:space-y-8">
                {/* Media Section */}
                <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-sm border border-slate-100 p-6 md:p-8 pt-8 md:pt-10">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <Upload className="text-primary" size={20} />
                            <h4 className="text-sm font-black text-slate-900 tracking-tight uppercase">High-Res Media</h4>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded-md uppercase tracking-widest">{imagePreviews.length}/3</span>
                    </div>

                    <div className="space-y-4">
                        <div
                            onClick={() => document.getElementById('image-upload')?.click()}
                            className="aspect-square rounded-[32px] bg-slate-50 border-2 border-dashed border-slate-100 flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all group overflow-hidden relative"
                        >
                            {imagePreviews.length > 0 ? (
                                <Image src={imagePreviews[0]} alt="Primary" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                                <>
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-300 mb-4 shadow-sm group-hover:text-primary group-hover:scale-110 transition-all">
                                        <Upload size={24} />
                                    </div>
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">Primary Asset</p>
                                </>
                            )}
                            <input id="image-upload" type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
                        </div>

                        {/* Gallery Thumbnails */}
                        {imagePreviews.length > 0 && (
                            <div className="grid grid-cols-4 gap-3">
                                {imagePreviews.map((url, idx) => (
                                    <div key={idx} className="group relative aspect-square rounded-2xl bg-slate-50 overflow-hidden border border-slate-100">
                                        <Image src={url} alt={`Gallery ${idx}`} fill className="object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(idx)}
                                            className="absolute inset-0 bg-rose-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                                        >
                                            <X size={16} />
                                        </button>
                                        {idx === 0 && (
                                            <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-black/50 backdrop-blur-md rounded-md text-[7px] font-black text-white uppercase tracking-tighter">
                                                MAIN
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {imagePreviews.length < 3 && (
                                    <button
                                        type="button"
                                        onClick={() => document.getElementById('image-upload')?.click()}
                                        className="aspect-square rounded-2xl border-2 border-dashed border-slate-100 flex items-center justify-center text-slate-300 hover:border-primary/40 hover:text-primary hover:bg-slate-50 transition-all"
                                    >
                                        <Plus size={20} />
                                    </button>
                                )}
                            </div>
                        )}

                        <AnimatePresence>
                            {formErrors.images && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-[10px] font-bold text-rose-500 mt-2 ml-1 uppercase tracking-wider"
                                >
                                    {formErrors.images}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Description Section */}
                <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-sm border border-slate-100 p-6 md:p-8 pt-8 md:pt-10">
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="text-primary" size={20} />
                        <h4 className="text-sm font-black text-slate-900 tracking-tight uppercase">Product Narrative</h4>
                    </div>
                    <textarea
                        required
                        value={formData.description}
                        onChange={(e) => {
                            setFormData(p => ({ ...p, description: e.target.value }));
                            if (formErrors.description) setFormErrors(prev => ({ ...prev, description: undefined }));
                        }}
                        placeholder="Elaborate on material quality, finish, warranty..."
                        className={`w-full bg-slate-50 border ${formErrors.description ? 'border-rose-200 focus:border-rose-300' : 'border-slate-100'} rounded-[24px] p-6 min-h-[160px] text-sm font-bold text-slate-900 focus:outline-none focus:bg-white transition-all outline-none resize-none shadow-inner leading-relaxed`}
                    />
                    <AnimatePresence>
                        {formErrors.description && (
                            <motion.p
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-[10px] font-black text-rose-500 uppercase tracking-widest mt-4 ml-2"
                            >
                                {formErrors.description}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Right Column: Main Form (8/12) */}
            <div className="lg:col-span-8">
                <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-6 md:p-10 lg:p-14">
                        <div className="space-y-8 md:space-y-12">
                            {/* Section 1: Identity */}
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-2 h-6 bg-primary rounded-full" />
                                    <h4 className="text-lg font-black text-slate-900 tracking-tight">Product Identification</h4>
                                </div>

                                <div className="space-y-6">
                                    <div className="group">
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1 group-focus-within:text-primary transition-colors">Commercial Name</label>
                                        <input
                                            type="text" required value={formData.name}
                                            onChange={(e) => {
                                                setFormData(p => ({ ...p, name: e.target.value }));
                                                if (formErrors.name) setFormErrors(prev => ({ ...prev, name: undefined }));
                                            }}
                                            placeholder="e.g. Victorian Series Brass Lever"
                                            className={`w-full bg-slate-50/50 border ${formErrors.name ? 'border-rose-200 focus:border-rose-300' : 'border-slate-100'} rounded-[20px] px-8 py-5 text-sm font-bold text-slate-900 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all shadow-inner`}
                                        />
                                        <AnimatePresence>
                                            {formErrors.name && (
                                                <motion.p
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="text-[10px] font-black text-rose-500 uppercase tracking-widest mt-3 ml-2"
                                                >
                                                    {formErrors.name}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1 group-focus-within:text-primary transition-colors">Manufacturing Brand</label>
                                            <input
                                                type="text" value={formData.brand}
                                                onChange={(e) => setFormData(p => ({ ...p, brand: e.target.value }))}
                                                placeholder="e.g. Yale, Godrej"
                                                className="w-full bg-slate-50/50 border border-slate-100 rounded-[20px] px-8 py-5 text-sm font-bold text-slate-900 focus:outline-none focus:bg-white focus:border-primary/40 transition-all shadow-inner"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1 group-focus-within:text-primary transition-colors">Catalog Category</label>
                                            <div className="relative">
                                                <select
                                                    required value={formData.category_id}
                                                    onChange={(e) => {
                                                        setFormData(p => ({ ...p, category_id: e.target.value }));
                                                        if (formErrors.category_id) setFormErrors(prev => ({ ...prev, category_id: undefined }));
                                                    }}
                                                    className={`w-full bg-slate-50/50 border ${formErrors.category_id ? 'border-rose-200' : 'border-slate-100'} rounded-[20px] px-8 py-5 text-sm font-bold text-slate-900 focus:outline-none focus:bg-white appearance-none cursor-pointer shadow-inner pr-12`}
                                                >
                                                    <option value="">Select Category</option>
                                                    {categories.map(cat => (
                                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                                    ))}
                                                </select>
                                                <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 rotate-90" size={16} />
                                            </div>
                                            <AnimatePresence>
                                                {formErrors.category_id && (
                                                    <motion.p
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="text-[10px] font-black text-rose-500 uppercase tracking-widest mt-3 ml-2"
                                                    >
                                                        {formErrors.category_id}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Commercials */}
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-2 h-6 bg-primary rounded-full" />
                                    <h4 className="text-lg font-black text-slate-900 tracking-tight">Pricing & Metrics</h4>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="group">
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1 group-focus-within:text-primary transition-colors">MRP (Base)</label>
                                        <div className="relative">
                                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 font-bold">₹</span>
                                            <input
                                                type="number" step="0.01" value={formData.mrp_price}
                                                onChange={(e) => {
                                                    setFormData(p => ({ ...p, mrp_price: e.target.value }));
                                                    if (formErrors.mrp_price) setFormErrors(prev => ({ ...prev, mrp_price: undefined }));
                                                }}
                                                placeholder="0.00"
                                                className={`w-full bg-slate-50/50 border ${formErrors.mrp_price ? 'border-rose-200' : 'border-slate-100'} rounded-[20px] pl-12 pr-6 py-5 text-sm font-bold text-slate-900 focus:outline-none focus:bg-white transition-all shadow-inner`}
                                            />
                                        </div>
                                        <AnimatePresence>
                                            {formErrors.mrp_price && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="text-[9px] font-black text-rose-500 uppercase tracking-widest mt-2 ml-1"
                                                >
                                                    {formErrors.mrp_price}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <div className="group">
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1 group-focus-within:text-primary transition-colors">Offer Price</label>
                                        <div className="relative">
                                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40 font-bold">₹</span>
                                            <input
                                                type="number" step="0.01" value={formData.discount_price}
                                                onChange={(e) => {
                                                    setFormData(p => ({ ...p, discount_price: e.target.value }));
                                                    if (formErrors.discount_price) setFormErrors(prev => ({ ...prev, discount_price: undefined }));
                                                }}
                                                placeholder="0.00"
                                                className={`w-full bg-slate-50/50 border ${formErrors.discount_price ? 'border-rose-200' : 'border-primary/10'} rounded-[20px] pl-12 pr-6 py-5 text-sm font-bold text-slate-900 focus:outline-none focus:bg-white transition-all shadow-inner`}
                                            />
                                        </div>
                                        <AnimatePresence>
                                            {formErrors.discount_price && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="text-[9px] font-black text-rose-500 uppercase tracking-widest mt-2 ml-1"
                                                >
                                                    {formErrors.discount_price}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <div className="group">
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1 group-focus-within:text-primary transition-colors">Display Size</label>
                                        <input
                                            type="text" value={formData.size}
                                            onChange={(e) => setFormData(p => ({ ...p, size: e.target.value }))}
                                            placeholder="e.g. 10 inches"
                                            className="w-full bg-slate-50/50 border border-slate-100 rounded-[20px] px-8 py-5 text-sm font-bold text-slate-900 focus:outline-none focus:bg-white transition-all shadow-inner"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Action */}
                            <div className="pt-2 md:pt-8">
                                <div className="flex flex-col md:flex-row gap-4 pt-2 md:pt-8">
                                    {editingProduct && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                resetForm();
                                                setInventoryTab("list");
                                            }}
                                            className="flex-1 bg-white border border-slate-200 text-slate-600 py-6 rounded-3xl text-[12px] font-black uppercase tracking-[0.2em] transition-all hover:bg-slate-50 active:scale-[0.98]"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`${editingProduct ? 'flex-2' : 'w-full'} bg-slate-900 hover:bg-primary text-white py-6 rounded-3xl text-[12px] font-black uppercase tracking-[0.2em] transition-all shadow-2xl shadow-slate-900/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-4 group relative overflow-hidden`}
                                    >
                                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                        {isSubmitting ? (
                                            <Loader2 size={24} className="animate-spin" />
                                        ) : (
                                            <>
                                                {editingProduct ? <Check size={22} className="group-hover:scale-110 transition-transform duration-500" /> : <Plus size={22} className="group-hover:rotate-90 transition-transform duration-500" />}
                                                {editingProduct ? "Update Product" : "Publish Product"}
                                            </>
                                        )}
                                    </button>
                                </div>
                                <p className="text-center text-[9px] text-slate-400 font-black uppercase tracking-widest mt-6">Secure data-driven sync with central catalog</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

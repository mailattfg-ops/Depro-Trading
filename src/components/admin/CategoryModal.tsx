import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, X, Plus, Loader2 } from 'lucide-react';
import { Category } from '@/types';

interface CategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    categories: Category[];
    newCategoryName: string;
    setNewCategoryName: (name: string) => void;
    handleCreateCategory: (e: React.FormEvent) => void;
    handleDeleteCategory: (id: string) => void;
    isAddingCategory: boolean;
    modalError: string | null;
    setModalError: (error: string | null) => void;
    deletingCategoryId: string | null;
    confirmingDeleteId: string | null;
    setConfirmingDeleteId: (id: string | null) => void;
}

export default function CategoryModal({
    isOpen,
    onClose,
    categories,
    newCategoryName,
    setNewCategoryName,
    handleCreateCategory,
    handleDeleteCategory,
    isAddingCategory,
    modalError,
    setModalError,
    deletingCategoryId,
    confirmingDeleteId,
    setConfirmingDeleteId
}: CategoryModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden border border-slate-100"
                    >
                        <div className="p-6 md:p-10">
                            <div className="flex items-center justify-between mb-6 md:mb-8">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                                        <Tag className="text-primary" size={20} md-size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">Manage Categories</h3>
                                        <p className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-0.5">Global Catalog Library</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 md:p-3 text-slate-300 hover:text-slate-900 hover:bg-slate-50 rounded-xl md:rounded-2xl transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Error Message */}
                            {modalError && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="bg-rose-50 border border-rose-100 text-rose-600 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-6"
                                >
                                    {modalError}
                                </motion.div>
                            )}

                            {/* Add New Category Form */}
                            <form onSubmit={handleCreateCategory} className="flex gap-2 md:gap-3 mb-4 md:mb-6 lg:mb-10">
                                <input
                                    type="text"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                    placeholder="New cat name..."
                                    className="flex-1 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all w-full"
                                />
                                <button
                                    type="submit"
                                    disabled={isAddingCategory || !newCategoryName.trim()}
                                    className="bg-slate-900 hover:bg-primary text-white p-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all disabled:opacity-50 shrink-0 flex items-center justify-center min-w-[44px] md:min-w-[56px] shadow-lg shadow-slate-900/10"
                                >
                                    {isAddingCategory ? <Loader2 size={18} className="animate-spin" /> : <Plus size={20} />}
                                </button>
                            </form>

                            {/* Categories List */}
                            <div className="space-y-2 md:space-y-3 max-h-[300px] md:max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                                <div className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 md:mb-4 sticky top-0 bg-white py-2">
                                    Existing Categories ({categories.length})
                                </div>
                                {categories.length > 0 ? (
                                    categories.map((cat) => (
                                        <div
                                            key={cat.id}
                                            className="group flex items-center justify-between p-3 md:p-4 bg-slate-50/50 hover:bg-white border border-slate-100 rounded-xl md:rounded-2xl transition-all hover:shadow-md"
                                        >
                                            <span className="text-xs md:text-sm font-bold text-slate-700 group-hover:text-primary transition-colors truncate pr-4">{cat.name}</span>
                                            <div className="flex items-center gap-2 shrink-0">
                                                {confirmingDeleteId === cat.id ? (
                                                    <div className="flex items-center gap-1.5 md:gap-2">
                                                        <button
                                                            onClick={() => setConfirmingDeleteId(null)}
                                                            className="px-2 md:px-3 py-1.5 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-all font-sans"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteCategory(cat.id)}
                                                            disabled={deletingCategoryId === cat.id}
                                                            className="px-3 md:px-4 py-1.5 bg-rose-500 text-white rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest hover:bg-rose-600 transition-all flex items-center gap-2 font-sans"
                                                        >
                                                            {deletingCategoryId === cat.id ? <Loader2 size={10} className="animate-spin" /> : "Confirm Delete"}
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => {
                                                            setModalError(null);
                                                            setConfirmingDeleteId(cat.id);
                                                        }}
                                                        className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg md:rounded-xl transition-all"
                                                        title="Delete Category"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 md:py-10">
                                        <p className="text-slate-400 text-xs md:text-sm font-bold italic">No categories found.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="p-4 md:p-6 bg-slate-50/50 border-t border-slate-100 text-center">
                            <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Depro Trading Hub • Verified Catalog Sync</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

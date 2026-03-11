"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'warning' | 'info';
    isLoading?: boolean;
}

export default function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    variant = 'danger',
    isLoading = false
}: ConfirmationModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const variants = {
        danger: {
            icon: <AlertCircle className="text-rose-500" size={24} />,
            bg: "bg-rose-50",
            button: "bg-rose-500 hover:bg-rose-600 shadow-rose-200",
            border: "border-rose-100"
        },
        warning: {
            icon: <AlertCircle className="text-amber-500" size={24} />,
            bg: "bg-amber-50",
            button: "bg-amber-500 hover:bg-amber-600 shadow-amber-200",
            border: "border-amber-100"
        },
        info: {
            icon: <AlertCircle className="text-primary" size={24} />,
            bg: "bg-primary/5",
            button: "bg-primary hover:bg-primary-dark shadow-primary/20",
            border: "border-primary/10"
        }
    };

    const style = variants[variant];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
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
                        className="relative w-full max-w-md bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
                    >
                        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
                            <div className="flex flex-col items-center text-center">
                                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6", style.bg)}>
                                    {style.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                                    {title}
                                </h3>
                                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                                    {message}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-10">
                                <button
                                    onClick={onClose}
                                    disabled={isLoading}
                                    className="flex-1 px-6 py-4 rounded-2xl bg-slate-50 text-slate-600 text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all border border-slate-100 active:scale-95"
                                >
                                    {cancelText}
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onConfirm();
                                    }}
                                    disabled={isLoading}
                                    className={cn(
                                        "flex-1 px-6 py-4 rounded-2xl text-white text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2",
                                        style.button,
                                        isLoading && "opacity-70 cursor-not-allowed"
                                    )}
                                >
                                    {isLoading ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                    ) : (
                                        <Check size={16} />
                                    )}
                                    {confirmText}
                                </button>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-center">
                            <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                Depro Security Verification Layer
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

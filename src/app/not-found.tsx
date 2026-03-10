"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 relative overflow-hidden font-sans">
            {/* Decorative background elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] aspect-square bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] aspect-square bg-primary/5 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-2xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Brand Logo */}
                    <Link href="/" className="inline-block mb-12">
                        <div className="relative w-40 h-10">
                            <Image
                                src="/Images/logo.svg"
                                alt="Depro Trading"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* 404 Illustration Area */}
                    <div className="relative mb-8 md:mb-12">
                        <motion.h1
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1, type: "spring" }}
                            className="text-[120px] md:text-[200px] font-black text-slate-900/5 leading-none select-none"
                        >
                            404
                        </motion.h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[40px] shadow-2xl shadow-primary/10 border border-slate-100 flex items-center justify-center text-primary"
                            >
                                <Search size={48} strokeWidth={2.5} />
                            </motion.div>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                        Asset Not Found
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg font-medium mb-12 max-w-md mx-auto leading-relaxed">
                        The resource you are looking for has been moved or doesn't exist in our current catalog.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-xl shadow-slate-900/10 active:scale-95 group"
                        >
                            <Home size={18} />
                            Return Home
                            <ArrowLeft size={18} className="rotate-180 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-600 px-10 py-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all active:scale-95"
                        >
                            <ArrowLeft size={18} />
                            Previous Page
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 pt-8 border-t border-slate-100"
                >
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
                        Depro Trading Hub • Error Control System
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

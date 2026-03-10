"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { servicesPreviewData } from "@/data/homeData";
import { cn } from "@/lib/utils";

export default function ServicesPreview() {
    return (
        <section className="py-6 lg:py-12 bg-brand-muted relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 lg:mb-16 gap-4 lg:gap-6">
                    <SectionHeader
                        subtitle={servicesPreviewData.subtitle}
                        title={servicesPreviewData.title}
                        highlight={servicesPreviewData.highlight}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/services"
                            className="text-sm group flex items-center gap-1 bg-white text-slate-900 px-4 py-4 rounded-2xl font-bold shadow-soft hover:shadow-xl transition-all border border-slate-100"
                        >
                            View All Services
                            <ArrowUpRight size={20} className="text-primary group-hover:rotate-45 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 md:auto-rows-[180px]">

                    {servicesPreviewData.services.map((service, index) => {
                        const isLarge = service.size === "large";
                        const isSmall = service.size === "small";
                        const isMedium = service.size === "medium";
                        const isDark = service.title === "Aluminum Fabrication"; // Matching original dark card logic
                        const isPrimary = service.title === "Wholesale Supply"; // Matching original primary card logic

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "rounded-3xl md:rounded-5xl p-6 md:p-8 lg:p-10 shadow-soft border relative overflow-hidden group transition-all",
                                    isLarge ? "md:col-span-4 lg:col-span-3 md:row-span-2 bg-white border-slate-100" :
                                        isSmall ? "md:col-span-2 lg:col-span-3 md:row-span-1" :
                                            "md:col-span-2 lg:col-span-3 md:row-span-2",
                                    isDark ? "bg-slate-900 text-white shadow-2xl border-transparent" :
                                        isPrimary ? "bg-primary text-white shadow-2xl shadow-primary/20 border-transparent" :
                                            "bg-white border-slate-100"
                                )}
                            >
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    {isSmall ? (
                                        <div className="flex items-center justify-between">
                                            <div className={cn("font-bold text-xl leading-tight", isDark ? "text-white" : "text-slate-900")}>
                                                {service.title.split(" ").map((word, i) => (
                                                    <span key={i}>{word} <br /></span>
                                                ))}
                                            </div>
                                            <div className={cn("p-2 rounded-lg", isDark ? "bg-white/10 text-primary" : "bg-primary/5 text-primary")}>
                                                <service.icon size={24} />
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className={cn(
                                                "rounded-2xl flex items-center justify-center mb-4 md:mb-6",
                                                isLarge ? "w-12 h-12 md:w-16 md:h-16 bg-primary/10 text-primary" :
                                                    isPrimary ? "w-12 h-12 md:w-14 md:h-14 bg-white/20 text-white" :
                                                        "w-12 h-12 md:w-14 md:h-14 bg-primary/5 text-primary"
                                            )}>
                                                <service.icon size={isLarge ? 32 : 28} />
                                            </div>
                                            <div>
                                                <h3 className={cn(
                                                    "font-black mb-2 md:mb-4",
                                                    isLarge ? "text-2xl md:text-3xl text-slate-900" : "text-xl md:text-2xl",
                                                    isPrimary ? "text-white" : "text-slate-900"
                                                )}>
                                                    {service.title.split(" ").map((word, i) => (
                                                        <span key={i}>{word} <br className="hidden md:block" /></span>
                                                    ))}
                                                </h3>
                                                <p className={cn(
                                                    "text-xs md:text-sm mb-4 md:mb-6",
                                                    isLarge ? "text-slate-600 max-w-xs" :
                                                        isPrimary ? "text-white/80" : "text-slate-500"
                                                )}>
                                                    {service.description}
                                                </p>
                                                {isLarge ? (
                                                    <Link href="/contact#contact" className="inline-flex items-center gap-2 text-primary font-bold group text-sm">
                                                        Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                    </Link>
                                                ) : isMedium && !isPrimary ? (
                                                    <Link href="/contact#contact" className="py-3 px-4 bg-slate-50 rounded-xl block text-center text-slate-700 font-bold text-xs hover:bg-primary hover:text-white transition-all">
                                                        Enquire Now
                                                    </Link>
                                                ) : isPrimary ? (
                                                    <div className="flex items-center gap-2 text-white/60 text-[9px] md:text-[10px] font-black uppercase tracking-widest pt-2 md:pt-4">
                                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                                        Active Partnerships
                                                    </div>
                                                ) : null}
                                            </div>
                                        </>
                                    )}
                                </div>
                                {isLarge && <div className="absolute top-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />}
                                {isDark && <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

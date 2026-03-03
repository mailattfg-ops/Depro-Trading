"use client";

import { motion } from "framer-motion";
import { Hammer, Home, Construction, DoorClosed, Grid, ArrowUpRight, ChevronRight, Ruler, Wrench } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
    {
        icon: Grid,
        title: "Carpet Hardware",
        description: "Specialized tools and fittings for professional carpet installation and maintenance.",
        size: "large",
        color: "bg-orange-50",
    },
    {
        icon: Construction,
        title: "Aluminum Fabrication",
        description: "High-quality aluminum profiles and hardware.",
        size: "small",
        color: "bg-slate-50",
    },
    {
        icon: Ruler,
        title: "Interior Works",
        description: "Bespoke hardware for modern transformations.",
        size: "small",
        color: "bg-slate-50",
    },
    {
        icon: DoorClosed,
        title: "Door Hardware",
        description: "Premium locks, handles, and hinges for security and elegance.",
        size: "medium",
        color: "bg-white",
    },
    {
        icon: Wrench,
        title: "Wholesale Supply",
        description: "Bulk hardware for large-scale projects and contractors.",
        size: "medium",
        color: "bg-white",
    },
];

export default function ServicesPreview() {
    return (
        <section className="py-12 bg-brand-muted relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <SectionHeader
                        subtitle="Our Expertise"
                        title="Hardware Mastery."
                        highlight="Mastery."
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
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[180px]">

                    {/* Featured/Large Item - Carpet Hardware */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 lg:col-span-3 row-span-2 bg-white rounded-5xl p-10 shadow-soft border border-slate-100 relative overflow-hidden group"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                <Grid size={32} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4">Carpet <br />Hardware</h3>
                                <p className="text-slate-600 max-w-xs mb-8">Specialized tools and fittings for professional carpet installation and maintenance projects.</p>
                                <Link href="/contact#contact" className="inline-flex items-center gap-2 text-primary font-bold group">
                                    Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="absolute top-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                    </motion.div>

                    {/* Small Item - Aluminum */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 lg:col-span-3 row-span-1 bg-slate-900 rounded-5xl p-8 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex items-center justify-between">
                                <div className="text-white font-bold text-xl leading-tight">Aluminum <br />Fabrication</div>
                                <div className="p-2 bg-white/10 rounded-lg text-primary">
                                    <Construction size={24} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>

                    {/* Small Item - Interior */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 lg:col-span-3 row-span-1 bg-white rounded-5xl p-8 shadow-soft border border-slate-100 relative overflow-hidden group"
                    >
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex items-center justify-between">
                                <div className="text-slate-900 font-bold text-xl leading-tight">Interior <br />Works</div>
                                <div className="p-2 bg-primary/5 rounded-lg text-primary">
                                    <Ruler size={24} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Medium Item - Door Hardware */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 lg:col-span-3 row-span-2 bg-white rounded-5xl p-10 shadow-soft border border-slate-100 relative overflow-hidden group"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
                                <DoorClosed size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Door Hardware</h3>
                                <p className="text-slate-500 text-sm mb-6">Premium locks, handles, and hinges for security and elegance in every room.</p>
                                <Link href="/contact#contact" className="p-3 bg-slate-50 rounded-xl block text-center text-slate-700 font-bold text-xs hover:bg-primary hover:text-white transition-all">
                                    Enquire Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Medium Item - Wholesale */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 lg:col-span-3 row-span-2 bg-primary rounded-5xl p-10 shadow-2xl shadow-primary/20 relative overflow-hidden group"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                                <Wrench size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Wholesale Supply</h3>
                                <p className="text-white/80 text-sm mb-6">Bulk hardware supply services tailored for contractors and large-scale builders.</p>
                                <div className="flex items-center gap-2 text-white/60 text-[10px] font-black uppercase tracking-widest border-t border-white/10 pt-4">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                    Active Partnerships
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

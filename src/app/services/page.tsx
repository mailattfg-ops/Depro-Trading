"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Home } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { servicesHeroData, featuredPackageData, allServices } from "@/data/servicesData";

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 md:pt-40 pb-12 bg-brand-muted relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1">
                            <SectionHeader
                                subtitle={servicesHeroData.subtitle}
                                title={servicesHeroData.title}
                                highlight={servicesHeroData.highlight}
                                description={servicesHeroData.description}
                                className="mb-8"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex-1 relative"
                        >
                            <div className="aspect-square lg:aspect-4/3 bg-slate-900 rounded-5xl overflow-hidden shadow-hard relative group">
                                <Image
                                    src="/Images/serviceimg.webp"
                                    alt={servicesHeroData.image.alt}
                                    fill
                                    className="object-cover opacity-50 transition-opacity duration-700"
                                />

                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Recommended Section */}
            <section className="py-12 bg-brand-muted">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary/5 rounded-5xl p-8 md:p-16 border border-primary/10 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12"
                    >

                        <div className="flex-1 relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
                                {featuredPackageData.title.split(" ").slice(0, -2).join(" ")} <br />
                                <span className="text-primary">{featuredPackageData.highlight}</span>
                            </h2>
                            <p className="text-slate-600 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-xl">
                                {featuredPackageData.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {featuredPackageData.features.map((item) => (
                                    <div key={item} className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-bold text-slate-700 shadow-sm border border-slate-100/50">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <ShieldCheck size={14} />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/contact#contact"
                                className="bg-primary text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 w-fit hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 hover:-translate-y-1"
                            >
                                {featuredPackageData.cta}
                                <ArrowRight size={20} strokeWidth={3} />
                            </Link>
                        </div>

                        <div className="w-full lg:w-1/3 aspect-square bg-white rounded-4xl shadow-xl p-8 flex flex-col items-center justify-center text-center gap-6 relative group">
                            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary transition-transform group-hover:rotate-12">
                                <Home size={48} />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Starts from</span>
                                <p className="text-4xl font-black text-slate-900 mt-1">{featuredPackageData.priceLevel}</p>
                            </div>
                            <p className="text-xs text-slate-400">{featuredPackageData.priceNote}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="py-12 bg-brand-muted">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {allServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 2) * 0.1 }}
                                className="bg-white p-10 md:p-14 rounded-5xl shadow-soft border border-slate-100 flex flex-col gap-10 hover:shadow-hard transition-all duration-500 hover:-translate-y-2 group"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <service.icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <div className="text-7xl font-black text-slate-50 select-none group-hover:text-slate-100 transition-colors">
                                        0{index + 1}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <h3 className="text-3xl font-black text-slate-900 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Product Specialized</span>
                                    <div className="flex flex-wrap gap-2">
                                        {service.details.map((detail) => (
                                            <span key={detail} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-500 hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 mt-auto">
                                    <Link
                                        href="/contact#contact"
                                        className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                                    >
                                        Request Technical Data
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}

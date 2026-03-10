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
            <section className="pt-24 lg:pt-32 pb-6 lg:pb-12 bg-brand-muted relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-12">
                        <div className="flex-1">
                            <SectionHeader
                                subtitle={servicesHeroData.subtitle}
                                title={servicesHeroData.title}
                                highlight={servicesHeroData.highlight}
                                description={servicesHeroData.description}
                                className="mb-6 md:mb-8"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex-1 w-full lg:w-auto relative"
                        >
                            <div className="aspect-square lg:aspect-4/3 bg-slate-900 rounded-3xl md:rounded-5xl overflow-hidden shadow-hard relative group">
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
            <section className="py-6 lg:py-12 bg-brand-muted">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary/5 rounded-3xl md:rounded-[48px] p-6 md:p-10 lg:p-16 border border-primary/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12"
                    >

                        <div className="flex-[1.5] relative z-10 w-full text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 mb-4 md:mb-6 leading-[1.1]">
                                {featuredPackageData.title.split(" ").slice(0, -2).join(" ")} <br className="hidden lg:block" />
                                <span className="text-primary">{featuredPackageData.highlight}</span>
                            </h2>
                            <p className="text-slate-600 text-sm md:text-base lg:text-xl font-medium mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                                {featuredPackageData.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 text-left">
                                {featuredPackageData.features.map((item) => (
                                    <div key={item} className="flex items-center gap-2.5 md:gap-3 bg-white/50 backdrop-blur-sm px-4 py-2 md:py-3 rounded-xl md:rounded-2xl text-[10px] md:text-xs lg:text-sm font-bold text-slate-700 shadow-sm border border-slate-100/50">
                                        <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <ShieldCheck size={10} className="md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px]" />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/contact#contact"
                                className="bg-primary text-white px-8 md:px-10 py-4 lg:py-5 rounded-xl md:rounded-2xl font-black flex items-center gap-3 w-fit mx-auto md:mx-0 hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 hover:-translate-y-1 text-xs md:text-sm lg:text-base"
                            >
                                {featuredPackageData.cta}
                                <ArrowRight size={18} className="md:w-5 md:h-5" strokeWidth={3} />
                            </Link>
                        </div>

                        <div className="w-full md:w-auto md:flex-1 aspect-square md:aspect-auto md:min-h-[340px] lg:aspect-square bg-white rounded-3xl md:rounded-[40px] shadow-xl p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center gap-4 lg:gap-6 relative group border border-slate-100">
                            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-primary/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-primary transition-transform group-hover:rotate-12">
                                <Home className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                            </div>
                            <div>
                                <span className="text-[10px] md:text-[11px] lg:text-sm font-black text-slate-400 uppercase tracking-widest">Starts from</span>
                                <p className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-1 lg:mt-2">{featuredPackageData.priceLevel}</p>
                            </div>
                            <p className="text-[10px] md:text-[11px] text-slate-400 font-bold">{featuredPackageData.priceNote}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="py-6 lg:py-12 bg-brand-muted">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-12">
                        {allServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 2) * 0.1 }}
                                className="bg-white p-6 md:p-8 lg:p-14 rounded-3xl md:rounded-[40px] lg:rounded-5xl shadow-soft border border-slate-100 flex flex-col gap-4 md:gap-6 lg:gap-8 hover:shadow-hard transition-all duration-500 hover:-translate-y-2 group"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/5 rounded-2xl md:rounded-3xl flex items-center justify-center text-primary shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <service.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" strokeWidth={1.5} />
                                    </div>
                                    <div className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-50 select-none group-hover:text-slate-100 transition-colors">
                                        0{index + 1}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 md:gap-3 lg:gap-5">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 md:gap-4">
                                    <span className="text-[9px] md:text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Product Specialized</span>
                                    <div className="flex flex-wrap gap-2">
                                        {service.details.map((detail) => (
                                            <span key={detail} className="px-2.5 md:px-3 py-1 md:py-1.5 bg-slate-50 border border-slate-100 rounded-lg lg:rounded-xl text-[10px] md:text-xs lg:text-sm font-medium text-slate-500 hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-2 md:pt-4 mt-auto">
                                    <Link
                                        href="/contact#contact"
                                        className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-xs md:text-sm lg:text-base"
                                    >
                                        Request Technical Data
                                        <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
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

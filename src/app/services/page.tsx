"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { Hammer, Home, Construction, DoorClosed, Grid, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const allServices = [
    {
        icon: Grid,
        title: "Carpet Hardware",
        description: "Our carpet hardware range includes everything from specialized kickers and cutters to high-grade adhesives and transition strips. We ensure your flooring is laid with precision.",
        details: ["Carpet Kickers", "Seam Tape", "Tack Strips", "Carpet Shears", "Trimmers"],
        id: "carpet-hardware",
    },
    {
        icon: Home,
        title: "Interior Works",
        description: "We provide comprehensive interior hardware for residential and commercial transformations. Our products combine aesthetics with long-lasting durability.",
        details: ["Decorative Trims", "Mounting Hardware", "Curtain Rods", "Wall Fixings", "Cabinet Hardware"],
        id: "interior-works",
    },
    {
        icon: Construction,
        title: "Aluminum Fabrication",
        description: "Premium aluminum hardware for modern fabrications. We supply profiles, connectors, and specialized tools for windows, doors, and partition walls.",
        details: ["Aluminum Profiles", "Corner Connectors", "Glass Channels", "Weather Stripping", "Hinges & Handles"],
        id: "aluminum-fabrication",
    },
    {
        icon: DoorClosed,
        title: "Door Fixer Services",
        description: "Specialized in door hardware and professional fixing. We supply and install high-quality locks, closers, and security fittings for all door types.",
        details: ["Door Closers", "Deadbolts", "Security Hinges", "Door Stops", "Emergency Exit Hardware"],
        id: "door-fixer-services",
    },
    {
        icon: Hammer,
        title: "Hardware Retail",
        description: "Our retail outlet offers a curated selection of premium hardware for DIY enthusiasts and homeowners seeking quality tools and fittings.",
        details: ["Hand Tools", "Power Tool Accessories", "Screws & Nails", "General Fittings", "Safety Gear"],
        id: "hardware-retail",
    },
    {
        icon: Grid,
        title: "Wholesale Supply",
        description: "Dedicated wholesale division for bulk hardware requirements. We offer competitive pricing and reliable logistics for large-scale procurement.",
        details: ["Bulk Fasteners", "Contractor Kits", "Industrial Hardware", "Building Materials", "Logistical Support"],
        id: "wholesale-supply",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-12 bg-brand-muted relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-primary/10">
                                <ShieldCheck size={14} fill="currentColor" className="opacity-80" />
                                Premium Hardware Solutions
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                Technical <br />
                                <span className="text-primary">Expertise.</span>
                            </h1>
                            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                Comprehensive hardware solutions designed for durability, precision, and modern infrastructure needs. We supply premium materials that set the standard for quality.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex-1 relative"
                        >
                            <div className="aspect-square lg:aspect-4/3 bg-slate-900 rounded-5xl overflow-hidden shadow-hard relative group">
                                <div className="absolute inset-0 bg-linear-to-tr from-primary/40 to-transparent mix-blend-overlay z-10" />
                                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1504148455328-4972fefebfee?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="text-center p-12 backdrop-blur-md bg-white/10 rounded-4xl border border-white/20 m-8">
                                        <Hammer size={80} className="text-white mx-auto mb-6 opacity-80" />
                                        <p className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Hardware Engineering</p>
                                    </div>
                                </div>
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
                        <div className="absolute top-8 left-8 bg-primary text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                            Recommended
                        </div>

                        <div className="flex-1 relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
                                Complete Interior <br />
                                <span className="text-primary">Hardware Package</span>
                            </h2>
                            <p className="text-slate-600 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-xl">
                                Our most popular service for new homeowners and offices. A bundled approach to all your interior hardware needs with professional consultation and installation.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {["Premium Quality", "Expert Installers", "2-Year Warranty", "Free Consultation"].map((item) => (
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
                                INQUIRE NOW
                                <ArrowRight size={20} strokeWidth={3} />
                            </Link>
                        </div>

                        <div className="w-full lg:w-1/3 aspect-square bg-white rounded-4xl shadow-xl p-8 flex flex-col items-center justify-center text-center gap-6 relative group">
                            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary transition-transform group-hover:rotate-12">
                                <Home size={48} />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Starts from</span>
                                <p className="text-4xl font-black text-slate-900 mt-1">Premium</p>
                            </div>
                            <p className="text-xs text-slate-400">Custom pricing based on project scope</p>
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

                                <div className="pt-4 border-t border-slate-50 mt-auto">
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

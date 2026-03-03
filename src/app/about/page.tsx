"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Users, Award, Briefcase } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-12 bg-brand-muted relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
                <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-primary/10">
                                <Users size={14} fill="currentColor" className="opacity-80" />
                                Our Story
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                Building Trust with <br />
                                <span className="text-primary">Excellence.</span>
                            </h1>
                            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl">
                                Founded with a vision to revolutionize the hardware supply chain in Kerala, Depro Trading has grown into a premier destination for specialized interior and infrastructure hardware. We believe that quality materials are the foundation of every great space.
                            </p>

                            <div className="flex items-center gap-12 border-t border-slate-100 pt-10">
                                <div className="flex flex-col gap-1">
                                    <span className="text-5xl font-black text-slate-900 tracking-tighter">10+</span>
                                    <span className="text-primary font-black uppercase tracking-widest text-[10px]">Years in Business</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-5xl font-black text-slate-900 tracking-tighter">500+</span>
                                    <span className="text-primary font-black uppercase tracking-widest text-[10px]">Hardware Lines</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex-1 relative"
                        >
                            <div className="aspect-square lg:aspect-4/3 bg-slate-900 rounded-5xl overflow-hidden shadow-hard relative group">
                                <div className="absolute inset-0 bg-linear-to-tr from-primary/40 to-transparent mix-blend-overlay z-10" />
                                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="text-center p-12 backdrop-blur-md bg-white/10 rounded-4xl border border-white/20 m-8">
                                        <Briefcase size={80} className="text-white mx-auto mb-6 opacity-80" />
                                        <p className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Professional Infrastructure</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative float */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-4xl shadow-2xl border border-slate-100 hidden md:block"
                            >
                                <Target size={40} className="text-primary" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-12 bg-brand-muted relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-soft border border-slate-100 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -mr-32 -mt-32 rounded-full blur-3xl opacity-50" />

                        <div className="flex-1 flex flex-col gap-10">
                            <div className="flex flex-col gap-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Target size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Our <span className="text-primary">Mission</span></h3>
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    To provide high-quality, durable hardware solutions that empower contractors and homeowners to build reliable and aesthetically beautiful spaces. We strive to be the most trusted name in hardware retail and wholesale supply.
                                </p>
                            </div>
                        </div>

                        <div className="w-px h-64 bg-slate-100 hidden lg:block" />
                        <div className="w-full h-px bg-slate-100 lg:hidden" />

                        <div className="flex-1 flex flex-col gap-10">
                            <div className="flex flex-col gap-6">
                                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                                    <Eye size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Our <span className="text-primary">Vision</span></h3>
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    To expand our footprint across national markets while maintaining local excellence, sets new standards in material quality, customer service, and technical innovation within the interior hardware industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-12 bg-brand-muted relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight"
                        >
                            Core <span className="text-primary">Values.</span>
                        </motion.h2>
                        <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                            The principles that guide every interaction and project at Depro Trading.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                        {[
                            { icon: Shield, title: "Quality", desc: "We source only ISO-certified and field-tested hardware components." },
                            { icon: Users, title: "Customer Centric", desc: "Your project success is our priority, with personalized technical support." },
                            { icon: Award, title: "Reliability", desc: "Timely delivery and consistent supply for even the largest wholesale orders." },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center gap-8 group"
                            >
                                <div className="w-32 h-32 rounded-5xl bg-slate-50 flex items-center justify-center text-primary shadow-soft relative overflow-hidden transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <value.icon size={48} strokeWidth={1.5} className="relative z-10" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{value.title}</h4>
                                    <p className="text-slate-500 leading-relaxed font-medium max-w-xs">{value.desc}</p>
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

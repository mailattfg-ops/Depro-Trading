"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Contact from "@/components/home/Contact";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-12 bg-brand-muted relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1"
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-primary/10">
                                Contact Us
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                Let's Build <br />
                                <span className="text-primary">Together.</span>
                            </h1>
                            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                Have a project in mind or need technical consultation? Our experts are here to help you find the perfect hardware solutions.
                            </p>
                        </motion.div>

                        <div className="flex-1 hidden lg:block">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 bg-white rounded-4xl shadow-soft border border-slate-100 flex flex-col gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <div className="font-black text-xs">HQ</div>
                                    </div>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Main Office</p>
                                    <p className="text-sm font-bold text-slate-900 leading-relaxed">NK Complex, Chattiparamba, Kodur PO, Malappuram - 676504</p>
                                </div>
                                <div className="mt-8 p-8 bg-slate-900 rounded-4xl shadow-hard flex flex-col gap-4 text-white">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                                        <div className="font-black text-xs">24/7</div>
                                    </div>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Support</p>
                                    <p className="text-sm font-bold text-white leading-relaxed">deprotrading@gmail.com <br /> +91 97441 23456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reuse the Contact Component */}
            <div className="relative z-10">
                <Contact />
            </div>

            {/* Map Section Placeholder */}
            <section className="py-12 bg-brand-muted">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="h-[400px] w-full bg-slate-100 relative rounded-5xl overflow-hidden shadow-soft border border-slate-200">
                        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-slate-400">
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">Map View</span>
                            <div className="w-16 h-1 bg-slate-200" />
                            <p className="max-w-xs text-center text-xs">NK Complex, Chattiparamba, Kodur PO, Malappuram - 676504</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}

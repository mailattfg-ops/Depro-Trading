"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Contact from "@/components/home/Contact";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { contactHeroData } from "@/data/contactData";
import { footerLinks } from "@/data/navigation";

export default function ContactPage() {
    const { contactInfo } = footerLinks;

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 lg:pt-32 pb-6 lg:pb-12 bg-brand-muted relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1"
                        >
                            <SectionHeader
                                subtitle={contactHeroData.subtitle}
                                title={contactHeroData.title}
                                highlight={contactHeroData.highlight}
                                description={contactHeroData.description}
                                className="mb-0 lg:mb-0"
                            />
                        </motion.div>

                        <div className="flex-1 hidden lg:block">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 bg-white rounded-3xl md:rounded-4xl shadow-soft border border-slate-100 flex flex-col gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <div className="font-black text-xs">HQ</div>
                                    </div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Main Office</p>
                                    <p className="text-sm font-bold text-slate-900 leading-relaxed">{contactInfo.address}</p>
                                </div>
                                <div className="mt-8 p-8 bg-slate-900 rounded-3xl md:rounded-4xl shadow-hard flex flex-col gap-4 text-white">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                                        <div className="font-black text-xs">24/7</div>
                                    </div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Support</p>
                                    <p className="text-sm font-bold text-white leading-relaxed">{contactInfo.email} <br /> {contactInfo.phone}</p>
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

            {/* Map Section */}
            <section className="py-6 lg:py-12 bg-brand-muted">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="h-[300px] md:h-[400px] w-full bg-slate-100 relative rounded-3xl md:rounded-5xl overflow-hidden shadow-soft border border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5213714419683!2d76.08722427451985!3d10.999454255041384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cb6d51c3013b%3A0x7f7af8812432450c!2sDepro%20Trading!5e0!3m2!1sen!2sin!4v1772516700054!5m2!1sen!2sin"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, ArrowRight } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        requirement: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const businessName = "Depro Trading";
        const message = `Hello ${businessName},
I would like to enquire about your services.

Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Requirement: ${formData.requirement}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918086188200?text=${encodedMessage}`, "_blank");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-12 bg-slate-950 relative overflow-hidden">
            {/* High-Intensity Background Accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-0 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-0 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6"
                    >
                        Ready to begin?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter"
                    >
                        START YOUR <br />
                        <span className="text-primary uppercase">Next Project.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Floating Info Section (4 Columns) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-4xl flex flex-col gap-4 group hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Direct Line</h4>
                                <p className="text-white/60 font-medium text-lg">+91 80861 88200</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-4xl flex flex-col gap-4 group hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Email Us</h4>
                                <p className="text-white/60 font-medium text-lg">info@deprotrading.com</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-4xl flex flex-col gap-4 group hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Visit HQ</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    NK Complex, Chattiparamba,<br />
                                    Kodur PO, Malappuram - 676504
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Integrated Form (8 Columns) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 bg-white rounded-5xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4">
                                <span className="w-12 h-1 bg-primary rounded-full" />
                                Get a Fast Quote
                            </h3>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-4 focus:outline-none focus:border-primary transition-all text-slate-900 font-bold placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Contact Number"
                                            className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-4 focus:outline-none focus:border-primary transition-all text-slate-900 font-bold placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="location"
                                        required
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Project Location"
                                        className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-4 focus:outline-none focus:border-primary transition-all text-slate-900 font-bold placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="requirement"
                                        required
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        placeholder="Tell us about your requirements..."
                                        rows={3}
                                        className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-4 focus:outline-none focus:border-primary transition-all text-slate-900 font-bold placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white p-7 rounded-3xl font-black text-lg flex items-center justify-center gap-4 shadow-2xl shadow-primary/40 hover:bg-black transition-all group"
                                    >
                                        Submit to WhatsApp
                                        <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                                    </button>
                                </div>

                                <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                    <MessageSquare size={14} className="text-primary" />
                                    We usually respond within 2-4 hours
                                </p>
                            </form>
                        </div>

                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-12 -mt-12" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

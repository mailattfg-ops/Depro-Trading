"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

export default function CreativeSection() {
    return (
        <section className="py-12 bg-brand-muted relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="flex flex-col gap-10">
                        <SectionHeader
                            title="Crafting Excellence in Every Project."
                            highlight="Every Project."
                            description="We take pride in turning spaces into functional masterpieces. From retail hardware supply to wholesale interior solutions, your journey to better infrastructure starts here."
                        />

                        <div className="grid grid-cols-2 gap-10 pt-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-5xl font-black text-slate-900 tracking-tighter">98%</span>
                                <span className="text-primary font-black uppercase tracking-widest text-[10px]">Satisfaction</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-5xl font-black text-slate-900 tracking-tighter">2.5k</span>
                                <span className="text-primary font-black uppercase tracking-widest text-[10px]">Delivered</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white border border-slate-100 p-10 md:p-14 rounded-5xl shadow-hard relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl" />

                            <Quote className="text-primary opacity-20 mb-8" size={64} />

                            <p className="text-xl md:text-2xl text-slate-800 font-bold italic leading-relaxed mb-10 relative z-10">
                                &quot;Depro Trading provided the entire hardware solution for our new office complex. Their aluminum fabrication work and carpet hardware are top-notch.&quot;
                            </p>

                            <div className="flex items-center gap-5 relative z-10">
                                <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden border-2 border-primary/20 p-1">
                                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white text-xl font-black">
                                        AK
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-black text-slate-900 leading-none mb-1">Arun Kumar</span>
                                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Zenith Spaces</span>
                                    <div className="flex items-center gap-1 mt-2">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} size={14} className="text-primary fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

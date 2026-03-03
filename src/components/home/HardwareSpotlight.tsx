"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Info, Plus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const hotspots = [
    {
        id: 1,
        x: "30%",
        y: "40%",
        title: "Premium Door Handles",
        desc: "Marine-grade stainless steel with ergonomic grip.",
        detail: "Wholesale available"
    },
    {
        id: 2,
        x: "65%",
        y: "25%",
        title: "Aluminum Profiles",
        desc: "Precision-engineered for architectural perfection.",
        detail: "Custom sizes"
    },
    {
        id: 3,
        x: "50%",
        y: "75%",
        title: "Carpet Tools",
        desc: "Professional-grade fittings for seamless finish.",
        detail: "ISO Certified"
    }
];

export default function HardwareSpotlight() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section className="py-12 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="relative aspect-4/5 md:aspect-square bg-slate-100 rounded-5xl overflow-hidden shadow-2xl group">
                        <Image
                            src="/images/hero-hardware.png"
                            alt="Hardware Collection"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20" />

                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute translate-x-[-50%] translate-y-[-50%]"
                                style={{ top: spot.y, left: spot.x }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    onClick={() => setActive(active === spot.id ? null : spot.id)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 transition-colors ${active === spot.id ? "bg-primary text-white" : "bg-white/20 text-white"
                                        }`}
                                >
                                    <Plus className={`transition-transform duration-500 ${active === spot.id ? "rotate-45" : ""}`} size={20} />
                                </motion.button>

                                {active === spot.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-white p-6 rounded-3xl shadow-2xl z-50 border border-slate-100"
                                    >
                                        <h4 className="font-black text-slate-900 mb-2">{spot.title}</h4>
                                        <p className="text-slate-500 text-sm mb-4 leading-relaxed">{spot.desc}</p>
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 py-1 px-3 rounded-full w-fit">
                                            <Info size={12} />
                                            {spot.detail}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8">
                        <SectionHeader
                            subtitle="Innovation in Detail"
                            title="The Anatomy of Quality."
                            highlight="Quality."
                            description="We don't just supply hardware; we curate excellence. Every component in our catalog undergoes rigorous quality checks to ensure it meets the demands of modern architecture."
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                            <div className="p-8 bg-brand-muted rounded-4xl border border-slate-100">
                                <div className="text-3xl font-black text-slate-900 mb-2">Grade-A</div>
                                <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">Metals & Materials</div>
                            </div>
                            <div className="p-8 bg-brand-muted rounded-4xl border border-slate-100">
                                <div className="text-3xl font-black text-slate-900 mb-2">Anti-Corrosive</div>
                                <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">Durability Tested</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Info } from "lucide-react";
import Link from "next/link";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-warm-grey">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg-v2.png"
                    alt="Premium Interior Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 pt-12 pb-10 grow flex flex-col justify-end">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

                    {/* Left Typography Side */}
                    <div className="lg:col-span-6 xl:col-span-5 pb-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex flex-col gap-6"
                        >
                            <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-white leading-[0.95] tracking-tight">
                                PREMIUM <br />
                                INTERIOR <br />
                                SOLUTIONS <span className="text-3xl align-top">®</span>
                            </h1>

                            <div className="flex items-center gap-4 text-white/80 font-medium tracking-wide italic">
                                <span>Quality hardware that builds trust</span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <MagneticButton>
                                    <Link
                                        href="/catalog"
                                        className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white rounded-full font-bold text-base hover:bg-black transition-all hover:scale-105"
                                    >
                                        EXPLORE
                                    </Link>
                                </MagneticButton>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Architectural Card Area */}
                    <div className="lg:col-span-6 xl:col-span-7 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Main White Card Case */}
                            <div className="bg-white rounded-[4rem] p-4 lg:p-6 shadow-2xl relative overflow-visible max-w-2xl ml-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-6">
                                    <div className="pt-4 pl-4">
                                        <div className="flex gap-2 mb-4">
                                            <span className="px-4 py-1.5 border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider">Wholesale</span>
                                            <span className="px-4 py-1.5 border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider">Retail</span>
                                            <span className="px-4 py-1.5 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-wider">Elite</span>
                                        </div>
                                        <h2 className="text-3xl font-serif text-slate-900 mb-2 leading-tight">
                                            Precision & Performance
                                        </h2>
                                        <p className="text-slate-500 font-medium text-sm">
                                            Wholesale & fabrication experts.
                                        </p>
                                    </div>

                                    {/* Video/Interaction Thumbnail */}
                                    <div className="relative group cursor-pointer pr-4 md:pr-0">
                                        <div className="bg-orange-50 aspect-3/2 rounded-3xl overflow-hidden relative">
                                            <Image
                                                src="/Images/hero-hardware-v2.png"
                                                alt="Hardware Detail"
                                                fill
                                                className="object-cover"
                                            />

                                        </div>
                                    </div>
                                </div>

                                {/* Main Highlight Image */}
                                <div className="relative w-full h-[200px] md:h-[250px] rounded-[3rem] overflow-hidden shadow-inner group bg-slate-100">
                                    <Image
                                        src="/images/hero-hardware.png"
                                        alt="Premium Hardware Solutions"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="relative z-10 w-full bg-black/10 backdrop-blur-2xl border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                        {/* Material Info */}
                        <div className="md:col-span-4 lg:col-span-3">
                            <div className="flex items-start gap-6">
                                <div className="relative w-24 h-24 rounded-3xl overflow-hidden bg-primary flex-shrink-0 shadow-lg border-2 border-white/20">
                                    <Image
                                        src="/images/material-3d.png"
                                        alt="Material Layers"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-white text-xl font-serif mb-2">Verified quality only!</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Imported and locally sourced premium grade hardware.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Customer Stats */}
                        <div className="md:col-span-3 lg:col-span-3 flex flex-col items-center md:items-start">
                            <div className="flex -space-x-3 mb-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-slate-200">
                                        <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" width={40} height={40} />
                                    </div>
                                ))}
                            </div>
                            <span className="text-4xl font-serif text-white mb-1">1k+</span>
                            <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Project Partners</span>
                        </div>

                        {/* Corporate CTA */}
                        <div className="md:col-span-5 lg:col-span-6 flex flex-col md:flex-row md:items-center justify-between gap-8 md:pl-12 border-l border-white/10">
                            <div>
                                <h3 className="text-2xl md:text-3xl text-white font-serif max-w-sm leading-tight uppercase">
                                    Experience the anatomy of quality hardware
                                </h3>
                            </div>
                            <Link href="/contact#contact" className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm border-b border-white/30 pb-2 hover:border-primary transition-all">
                                LEARN MORE
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

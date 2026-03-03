"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const kodiaProducts = [
    { src: "/Images/kodiaLock_11zon.jpeg", alt: "Kodia Premium Lock Model 1" },
    { src: "/Images/lock2_11zon.jpeg", alt: "Kodia Premium Lock Model 2" },
    { src: "/Images/lock3_11zon.jpeg", alt: "Kodia Premium Lock Model 3" },
    { src: "/Images/lock34jpeg_11zon.jpeg", alt: "Kodia Premium Lock Model 4" },
    { src: "/Images/lockmodel5_11zon.jpg", alt: "Kodia Premium Lock Model 5" },
];

export default function FeaturedBrand() {
    return (
        <section className="py-12 bg-brand-muted relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                    {/* Left Side: Brand Context */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 flex flex-col items-start"
                    >
                        <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-primary"></span>
                            Featured Partner
                        </span>

                        <div className="relative w-48 h-24 sm:w-64 sm:h-32 mb-8">
                            <Image
                                src="/Images/kodiaLogot_11zon.jpeg"
                                alt="Kodia Brand Logo"
                                fill
                                className="object-contain object-left mix-blend-multiply"
                            />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 leading-tight">
                            Uncompromising Security Meets Elegant Design.
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
                            Depro Trading is proud to feature Kodia's exclusive line of premium locks. Engineered for ultimate security and meticulously crafted to complement high-end architectural aesthetics.
                        </p>

                        <Link href="/contact#contact" className="group flex items-center gap-3 text-sm font-semibold tracking-wider text-slate-900 border-b-2 border-slate-900 pb-2 hover:text-primary hover:border-primary transition-colors">
                            EXPLORE THE COLLECTION
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Right Side: Product Showcase Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                            {kodiaProducts.slice(0, 5).map((product, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative group overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-sm
                                        ${index === 0 ? "col-span-2 row-span-2 aspect-4/5 sm:aspect-square" : "aspect-square"}
                                    `}
                                >
                                    <Image
                                        src={product.src}
                                        alt={product.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

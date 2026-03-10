"use client";

import { motion } from "framer-motion";
import { roadmapData } from "@/data/homeData";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Roadmap() {
    return (
        <section className="py-6 lg:py-12 bg-brand-muted overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    align="center"
                    title={roadmapData.title}
                    highlight={roadmapData.highlight}
                    description={roadmapData.description}
                    className="mb-8 md:mb-12 lg:mb-16"
                />

                <div className="relative">

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
                        {roadmapData.steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="flex flex-col items-center text-center relative"
                            >
                                {/* Step Circle */}
                                <div className="relative mb-8">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center relative z-10 border-4 border-slate-50"
                                    >
                                        <step.icon className="text-primary" size={32} />
                                    </motion.div>

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white z-20">
                                        {index + 1}
                                    </div>

                                    {/* Glowing background */}
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse z-0" />
                                </div>

                                <div className="flex flex-col gap-3 max-w-[200px]">
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900">{step.title}</h3>
                                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

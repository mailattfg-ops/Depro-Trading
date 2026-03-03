"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, Lightbulb, Wrench, Headset } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
    {
        icon: Search,
        title: "Consultation",
        description: "Initial discussion to understand your project requirements and hardware needs.",
        color: "bg-blue-500",
    },
    {
        icon: ClipboardCheck,
        title: "Diagnosis",
        description: "Our experts evaluate the specific technical constraints and measurements.",
        color: "bg-orange-500",
    },
    {
        icon: Lightbulb,
        title: "Solution Recommendation",
        description: "We propose the best-fit hardware and materials for your specific use-case.",
        color: "bg-purple-500",
    },
    {
        icon: Wrench,
        title: "Implementation",
        description: "Precision fitting and implementation of the hardware solutions.",
        color: "bg-green-500",
    },
    {
        icon: Headset,
        title: "Support",
        description: "Ongoing assistance and maintenance to ensure long-term reliability.",
        color: "bg-primary",
    },
];

export default function Roadmap() {
    return (
        <section className="py-12 bg-brand-muted overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    align="center"
                    title="Our Process Roadmap"
                    highlight="Process Roadmap"
                    description="A systematic approach to delivering high-quality hardware solutions from concept to completion."
                    className="mb-20"
                />

                <div className="relative">
                    {/* Animated Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-1 bg-slate-100 -z-10 overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "0%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="h-full w-full bg-linear-to-r from-primary/20 via-primary to-primary/20"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
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
                                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
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

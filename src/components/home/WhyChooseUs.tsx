"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Users, Cpu, Heart, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
    {
        icon: Users,
        title: "Expert Team",
        description: "Our professionals bring years of technical expertise to every hardware project.",
    },
    {
        icon: Cpu,
        title: "Advanced Tech",
        description: "We utilize modern equipment for superior durable hardware solutions.",
    },
    {
        icon: Heart,
        title: "Personalized Care",
        description: "Tailored solutions that match your specific interior or commercial requirements.",
    },
    {
        icon: ShieldCheck,
        title: "Trusted Service",
        description: "Built on reliability and trust, delivering high-quality hardware for over a decade.",
    },
];

const stats = [
    { label: "Years Experience", value: 12 },
    { label: "Happy Clients", value: 1500 },
    { label: "Products", value: 500 },
    { label: "Projects", value: 2500 },
];

function Counter({ value, label }: { value: number; label: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    // Round the value to the nearest integer as it changes
    const rounded = useTransform(springValue, (latest) => Math.floor(latest));

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    return (
        <div ref={ref} className="flex flex-col items-center">
            <div className="flex items-baseline gap-1">
                <motion.span className="text-4xl md:text-6xl font-black text-slate-900">
                    {rounded}
                </motion.span>
                <span className="text-primary text-2xl font-bold">+</span>
            </div>
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">{label}</span>
        </div>
    );
}

export default function WhyChooseUs() {
    return (
        <section className="py-12 bg-brand-muted relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
                    <div className="lg:col-span-5">
                        <SectionHeader
                            subtitle="The Depro Advantage"
                            title="Building a Legacy."
                            highlight="Legacy."
                            description="We combine quality craftsmanship with premium products to deliver hardware solutions that exceed expectations. Our commitment to excellence has made us a trusted partner for over a decade."
                        />
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 gap-x-8 gap-y-12">
                        {stats.map((stat) => (
                            <Counter key={stat.label} value={stat.value} label={stat.label} />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-4xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-soft group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

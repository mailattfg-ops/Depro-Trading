"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { aboutHeroData, missionVisionData, coreValuesData } from "@/data/aboutData";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 lg:pt-32 pb-6 lg:pb-12 bg-brand-muted relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
                <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        <div className="flex-1">
                            <SectionHeader
                                subtitle={aboutHeroData.subtitle}
                                title={aboutHeroData.title}
                                highlight={aboutHeroData.highlight}
                                description={aboutHeroData.description}
                                className="mb-6 md:mb-10"
                            />

                            <div className="flex items-center gap-6 md:gap-12 pt-2 md:pt-4 lg:pt-8 justify-center lg:justify-start">
                                {aboutHeroData.stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
                                        <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{stat.value}</span>
                                        <span className="text-primary font-black uppercase tracking-widest text-[9px] md:text-[10px]">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex-1 w-full lg:w-auto relative"
                        >
                            <div className="aspect-square lg:aspect-4/3 bg-slate-900 rounded-3xl md:rounded-5xl overflow-hidden shadow-hard relative group">
                                <Image
                                    src="/Images/aboutus.webp"
                                    alt="Professional Infrastructure"
                                    fill
                                    className="object-cover opacity-50 transition-opacity duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-6 lg:py-12 bg-brand-muted relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-3xl md:rounded-[4rem] p-6 md:p-12 lg:p-16 shadow-soft border border-slate-100 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -mr-32 -mt-32 rounded-full blur-3xl opacity-50" />

                        <div className="flex-1 flex flex-col gap-6 md:gap-10 w-full">
                            <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto lg:mx-0">
                                    <missionVisionData.mission.icon size={MediaQueryListEvent ? 28 : 32} className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight">Our <span className="text-primary">Mission</span></h3>
                                <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-medium">
                                    {missionVisionData.mission.description}
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-px h-px lg:h-64 bg-slate-100" />

                        <div className="flex-1 flex flex-col gap-6 md:gap-10 w-full">
                            <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mx-auto lg:mx-0">
                                    <missionVisionData.vision.icon size={MediaQueryListEvent ? 28 : 32} className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight">Our <span className="text-primary">Vision</span></h3>
                                <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-medium">
                                    {missionVisionData.vision.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-6 lg:py-12 bg-brand-muted relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 md:mb-6 tracking-tight"
                        >
                            Core <span className="text-primary">Values.</span>
                        </motion.h2>
                        <p className="text-slate-600 text-[10px] md:text-lg lg:text-xl font-bold max-w-2xl mx-auto px-4 md:px-0 opacity-80">
                            The principles that guide every interaction and project at Depro Trading.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
                        {coreValuesData.values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center gap-3 md:gap-5 lg:gap-6 group"
                            >
                                <div className="w-14 h-14 md:w-24 lg:w-32 md:h-24 lg:h-32 rounded-2xl md:rounded-[32px] lg:rounded-5xl bg-slate-50 flex items-center justify-center text-primary shadow-soft relative overflow-hidden transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <value.icon className="w-6 h-6 md:w-10 lg:w-12 md:h-10 lg:h-12 relative z-10" strokeWidth={2} />
                                </div>
                                <div className="flex flex-col gap-1 md:gap-2 lg:gap-4">
                                    <h4 className="text-xs md:text-xl lg:text-2xl font-black text-slate-900 uppercase tracking-tight">{value.title}</h4>
                                    <p className="text-[9px] md:text-sm lg:text-base text-slate-500 leading-relaxed font-bold max-w-xs px-2">{value.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqData } from "@/data/homeData";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-12 bg-brand-muted">
            <div className="max-w-4xl mx-auto px-4">
                <SectionHeader
                    align="center"
                    title={faqData.title}
                    highlight={faqData.highlight}
                    description={faqData.description}
                    className="mb-16"
                />

                <div className="flex flex-col gap-4">
                    {faqData.faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-primary bg-primary/5 shadow-soft" : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`text-lg font-bold transition-colors ${isOpen ? "text-primary" : "text-slate-900"}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                        {isOpen ? (
                                            <Minus size={20} className="text-primary" />
                                        ) : (
                                            <Plus size={20} className="text-slate-400" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
    {
        question: "What types of hardware do you specialize in?",
        answer: "We specialize in a wide range of hardware, including carpet fittings, interior work supplies, aluminum fabrication components, door fixing hardware, and general construction hardware for both retail and wholesale.",
    },
    {
        question: "Do you provide installation services?",
        answer: "Yes, we have an expert team for door fixing and professional hardware implementation to ensure every product is installed to the highest standards.",
    },
    {
        question: "Can I buy hardware in bulk for large projects?",
        answer: "Absolutely! We cater to wholesale requirements and provide competitive pricing for contractors, builders, and large-scale commercial project developers.",
    },
    {
        question: "Where is Depro Trading located?",
        answer: "We are located at NK Complex, Chattiparamba, Kodur PO, Malappuram, Kerala. You are welcome to visit our showroom to explore our product range.",
    },
    {
        question: "How can I get a custom quote for aluminum fabrication?",
        answer: "You can reach out to us via our contact form or directly through WhatsApp. Our technical team will consult with you to provide a detailed and transparent quote based on your requirements.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-12 bg-brand-muted">
            <div className="max-w-4xl mx-auto px-4">
                <SectionHeader
                    align="center"
                    title="Frequently Asked Questions"
                    highlight="Questions"
                    description="Find quick answers to common queries about our hardware products and services."
                    className="mb-16"
                />

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
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
                                            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-primary/10">
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

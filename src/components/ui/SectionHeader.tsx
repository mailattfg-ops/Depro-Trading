"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    align?: "left" | "center";
    highlight?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function SectionHeader({
    title,
    subtitle,
    description,
    align = "left",
    highlight,
    className = "",
    children,
}: SectionHeaderProps) {
    const isCentered = align === "center";

    const renderTitle = () => {
        if (!highlight) return title;
        // Case-insensitive split that keeps the separator
        const parts = title.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
        return parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase()
                ? <span key={i} className="text-primary">{part}</span>
                : part
        );
    };

    return (
        <div className={`flex flex-col w-full ${isCentered ? "items-center text-center mx-auto" : "items-start text-left"} ${className}`}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-black uppercase tracking-[0.2em] text-xs inline-block"
                >
                    {subtitle}
                </motion.span>
            )}

            {children}

            <motion.h2
                initial={{ opacity: 0, x: isCentered ? 0 : -20, y: isCentered ? 20 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-slate-900 mb-2 leading-tight"
            >
                {renderTitle()}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`text-slate-600 text-lg leading-relaxed ${isCentered ? "max-w-3xl" : "max-w-2xl"}`}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}

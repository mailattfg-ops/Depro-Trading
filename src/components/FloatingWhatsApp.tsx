"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/918086188200"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group pointer-events-auto"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-50 scale-125 group-hover:hidden" />
            <MessageSquare size={28} className="relative z-10" />

            <div className="absolute right-full mr-3 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-slate-100">
                Chat with us on WhatsApp
            </div>
        </motion.a>
    );
}

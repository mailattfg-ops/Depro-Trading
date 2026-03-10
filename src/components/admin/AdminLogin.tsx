"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { isAppError } from "@/types/error";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            router.push('/admin');
            router.refresh();
        } catch (err: unknown) {
            setError(isAppError(err) ? err.message : "Invalid credentials. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 selection:bg-primary/30">
            {/* Background Decor - REMOVED */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative"
            >
                <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] md:rounded-[40px] p-8 md:p-12 shadow-2xl">
                    <div className="flex flex-col items-center mb-8 md:mb-10">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-white">
                            <Lock size={32} />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight text-center">
                            Depro <span className="text-primary italic">Admin</span>
                        </h1>
                        <p className="text-slate-400 mt-2 text-[10px] md:text-sm font-bold uppercase tracking-widest text-center">
                            Restricted Access
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-rose-500/20 border border-rose-500/20 text-rose-200 p-4 rounded-2xl text-xs font-bold text-center"
                            >
                                {error}
                            </motion.div>
                        )}

                        <div className="space-y-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-5 flex items-center text-slate-500">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    required
                                    placeholder="Admin Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-800/50 border border-white/5 rounded-2xl pl-14 pr-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold"
                                />
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-5 flex items-center text-slate-500">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    required
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-slate-800/50 border border-white/5 rounded-2xl pl-14 pr-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary/90 text-white h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin" size={20} />
                            ) : (
                                <>
                                    Enter Dashboard
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-xs text-slate-500 font-bold uppercase tracking-widest leading-loose">
                        Restricted System Access
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

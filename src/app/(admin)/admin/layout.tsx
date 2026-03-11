'use client';

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            // Allow access to the login page without a session
            if (pathname === "/admin/login") {
                setAuthorized(true);
                setIsLoading(false);
                return;
            }

            // Sync auth check with our custom cookie storage Instead of relying on memory session
            // The memory session can fall out of sync with the cookie, causing the "black screen" 
            const cookies = document.cookie.split(';');
            const authCookie = cookies.find(c => c.trim().startsWith('sb-auth-token='));

            if (!authCookie) {
                setAuthorized(false);
                router.push("/admin/login");
            } else {
                setAuthorized(true);
            }
            setIsLoading(false);
        };

        checkAuth();
    }, [pathname, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Verifying Credentials...</p>
                </div>
            </div>
        );
    }

    if (!authorized) {
        return null; // Prevents flash of content while redirecting
    }

    return (
        <div className="admin-wrapper">
            {children}
        </div>
    );
}

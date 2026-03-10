import React from 'react';
import { LucideIcon, TrendingUp } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    colorClass: string;
    trendLabel?: string;
    trendIcon?: LucideIcon;
    trendColor?: string;
}

export default function StatCard({
    title,
    value,
    icon: Icon,
    colorClass,
    trendLabel,
    trendIcon: TrendIcon = TrendingUp,
    trendColor = "text-emerald-500 bg-emerald-50"
}: StatCardProps) {
    return (
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/50">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${colorClass}`}>
                <Icon size={24} />
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{title}</p>
            <h3 className="text-3xl font-black text-slate-900 truncate">{value}</h3>
            {trendLabel && (
                <div className={`mt-4 flex items-center gap-2 text-[10px] font-black w-fit px-2.5 py-1 rounded-lg uppercase tracking-wider ${trendColor}`}>
                    <TrendIcon size={12} />
                    {trendLabel}
                </div>
            )}
        </div>
    );
}

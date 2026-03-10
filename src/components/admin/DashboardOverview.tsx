import React from 'react';
import { motion } from 'framer-motion';
import { Package, MousePointer2, TrendingUp, Plus, ImageIcon, Bell } from 'lucide-react';
import { Stats } from '@/types';
import StatCard from './StatCard';
import Image from 'next/image';

interface DashboardOverviewProps {
    stats: Stats;
}

export default function DashboardOverview({ stats }: DashboardOverviewProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-10"
        >
            {/* Welcome Banner */}
            <div className="bg-slate-900 rounded-[32px] md:rounded-[40px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden relative min-h-[200px] md:min-h-[240px]">
                <div className="absolute top-[-20%] right-[-5%] w-[50%] md:w-[30%] h-[150%] bg-primary/20 blur-[80px] md:blur-[100px] rounded-full rotate-12" />
                <div className="relative z-10 max-w-md text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 italic tracking-tight">Welcome, Admin!</h3>
                    <p className="text-slate-400 text-xs md:text-sm font-bold leading-relaxed mb-6 md:mb-8">
                        Your store is performing great. Here's a quick look at your business metrics and recent activity.
                    </p>
                </div>
                <div className="relative z-10 hidden md:block lg:pr-10">
                    <TrendingUp className="text-primary opacity-20" size={120} />
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard
                    title="Total Products"
                    value={stats.totalProducts}
                    icon={Package}
                    colorClass="bg-blue-50 text-blue-500"
                    trendLabel="Inventory Active"
                />
                <StatCard
                    title="Total Clicks"
                    value={stats.totalClicks}
                    icon={MousePointer2}
                    colorClass="bg-primary/10 text-primary"
                    trendLabel="Active Engagement"
                    trendColor="text-primary text-[10px] font-black bg-primary/10"
                    trendIcon={MousePointer2}
                />
                <StatCard
                    title="Top Item"
                    value={stats.topProduct}
                    icon={TrendingUp}
                    colorClass="bg-amber-50 text-amber-500"
                    trendLabel="Most Viewed"
                    trendColor="text-amber-500 bg-amber-50"
                />
            </div>

            {/* Detailed Insights Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Most Viewed Products */}
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-slate-900 tracking-tight">Most Viewed</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Top Performance</p>
                            </div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">All Time</span>
                    </div>
                    <div className="flex-1 p-4 space-y-2">
                        {stats.topProductsList.length > 0 ? stats.topProductsList.map((product, idx) => (
                            <div key={idx} className="group flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all cursor-default">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[11px] font-black text-slate-400 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                        {idx + 1}
                                    </div>
                                    <span className="text-[13px] font-bold text-slate-700 group-hover:text-slate-900 transition-colors truncate max-w-[180px]">
                                        {product.name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[13px] font-black text-slate-900">{product.clicks}</span>
                                    <MousePointer2 size={12} className="text-slate-300" />
                                </div>
                            </div>
                        )) : (
                            <div className="flex flex-col items-center justify-center py-12 text-slate-300">
                                <Package size={40} className="mb-4 opacity-20" />
                                <p className="text-xs font-bold italic">No data yet</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Recently Added Products */}
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                                <Plus size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-slate-900 tracking-tight">Recently Added</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">New Arrivals</p>
                            </div>
                        </div>
                        <Bell size={18} className="text-slate-300" />
                    </div>
                    <div className="flex-1 p-4 space-y-2">
                        {stats.recentProductsList.length > 0 ? stats.recentProductsList.map((product, idx) => (
                            <div key={idx} className="group flex items-center justify-between p-4 rounded-2xl hover:bg-emerald-50/50 transition-all cursor-default">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-emerald-200 group-hover:bg-white transition-all">
                                        <ImageIcon size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-bold text-slate-700 group-hover:text-slate-900 transition-colors truncate max-w-[160px]">
                                            {product.name}
                                        </p>
                                        <p className="text-[10px] text-slate-400 font-medium tracking-tight">
                                            {product.created_at ? new Date(product.created_at).toLocaleDateString() : 'N/A'}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-[12px] font-black text-slate-900">₹{product.mrp_price}</span>
                            </div>
                        )) : (
                            <div className="flex flex-col items-center justify-center py-12 text-slate-300">
                                <Plus size={40} className="mb-4 opacity-20" />
                                <p className="text-xs font-bold italic">No products added</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

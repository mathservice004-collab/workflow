import React, { useState } from 'react';
import {
    LayoutDashboard,
    Unlink,
    BookOpen,
    BrainCircuit,
    Settings,
    Search,
    Bell,
    Plus,
    Slack,
    Database,
    Cloud,
    ChevronRight,
    Zap,
    Clock,
    User,
    LogOut,
    Command
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for tailwind classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Sidebar Items
const MENU_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'connectors', label: 'Connectors', icon: Unlink },
    { id: 'knowledge', label: 'Knowledge Base', icon: BookOpen },
    { id: 'insights', label: 'AI Insights', icon: BrainCircuit },
    { id: 'settings', label: 'Settings', icon: Settings },
];

// Content Components
const Dashboard = () => (
    <div className="space-y-8 max-w-6xl mx-auto">
        <header className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold tracking-tight">Workspace <span className="gradient-text">Pulse</span></h1>
            <p className="text-zinc-500 text-sm">Real-time status of your connected knowledge ecosystem.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { label: 'Total Index', value: '14,281', sub: '+241 today', icon: Database, color: 'text-indigo-400' },
                { label: 'Sync Status', value: 'Optimal', sub: '99.9% uptime', icon: Zap, color: 'text-amber-400' },
                { label: 'Active Query', value: '124', sub: 'Last 10 mins', icon: Clock, color: 'text-emerald-400' },
            ].map((stat, i) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-6 rounded-2xl glass-hover"
                >
                    <div className="flex justify-between items-start mb-4">
                        <stat.icon className={cn("w-5 h-5", stat.color)} />
                        <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full text-zinc-400 uppercase tracking-widest font-bold">Live</span>
                    </div>
                    <div className="text-2xl font-bold mb-1 tracking-tight">{stat.value}</div>
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500">{stat.label}</span>
                        <span className="text-xs font-semibold text-zinc-400">{stat.sub}</span>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="glass p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] rounded-full" />
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Command className="w-5 h-5 text-indigo-400" />
                    Context Flow
                </h3>
                <div className="space-y-6">
                    {[
                        { title: 'Project X Roadmap', time: '2m ago', platform: 'Notion', user: 'Sarah' },
                        { title: 'Marketing Feedback', time: '14m ago', platform: 'Slack', user: 'Alex' },
                        { title: 'Financial Report v2', time: '1h ago', platform: 'Google Drive', user: 'System' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-white/5 rounded-xl transition-colors">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-white/5 font-bold text-zinc-600 text-xs">
                                    {item.platform[0]}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold group-hover:text-indigo-400 transition-colors">{item.title}</div>
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-tighter">{item.platform} • By {item.user}</div>
                                </div>
                            </div>
                            <div className="text-[10px] text-zinc-600 font-mono tracking-tighter">{item.time}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="glass p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-2">Connected Connectors</h3>
                <p className="text-xs text-zinc-500 mb-8">Manage authorization for your data sources.</p>

                <div className="grid grid-cols-2 gap-4">
                    {[
                        { name: 'Slack', icon: Slack, status: 'Active', active: true },
                        { name: 'Notion', icon: Database, status: 'Active', active: true },
                        { name: 'G-Drive', icon: Cloud, status: 'Paused', active: false },
                        { name: 'Custom', icon: Plus, status: 'Action', active: false },
                    ].map((c) => (
                        <div key={c.name} className={cn(
                            "p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3",
                            c.active ? "bg-indigo-500/5 border-indigo-500/20" : "bg-white/[0.02] border-white/5 hover:border-white/10"
                        )}>
                            <div className={cn("p-2 rounded-lg", c.active ? "bg-indigo-500/20 text-indigo-400" : "bg-zinc-800 text-zinc-500")}>
                                <c.icon className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-xs font-bold">{c.name}</div>
                                <div className={cn("text-[8px] uppercase tracking-widest", c.active ? "text-indigo-400" : "text-zinc-600")}>{c.status}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
);

const Connectors = () => (
    <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-4xl font-black mb-4 tracking-tighter">Add <span className="gradient-text">Intelligence</span></h2>
        <p className="text-zinc-500 mb-12">Select workspace to index and analyze for better context flow.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                { id: 'slack', name: 'Slack Workspace', desc: 'Sync channels, threads and messages for team context.', icon: Slack, color: '#4A154B' },
                { id: 'notion', name: 'Notion Workspace', desc: 'Index databases, pages and comments.', icon: Database, color: '#000000' },
                { id: 'drive', name: 'Google Workspace', desc: 'Analyze docs, sheets and presentations.', icon: Cloud, color: '#4285F4' },
            ].map((p) => (
                <div key={p.id} className="glass p-8 rounded-3xl glass-hover flex flex-col items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10" style={{ backgroundColor: `${p.color}20`, color: p.color }}>
                        <p.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold">{p.name}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                    <button className="mt-4 flex items-center gap-2 text-sm font-bold text-indigo-400 hover:gap-3 transition-all underline underline-offset-8">
                        Connect Service <ChevronRight className="w-4 h-4 underline-none" />
                    </button>
                </div>
            ))}
            <div className="border border-dashed border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-3 text-zinc-600 hover:border-white/20 transition-all cursor-pointer">
                <Plus className="w-8 h-8" />
                <span className="text-xs font-bold uppercase tracking-widest">Custom API Connector</span>
            </div>
        </div>
    </div>
);

export default function App() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [searchFocused, setSearchFocused] = useState(false);

    return (
        <div className="flex h-screen w-full bg-black overflow-hidden selection:bg-indigo-500/30">
            {/* Dynamic Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[150px] rounded-full delay-1000 animate-pulse" />
            </div>

            {/* Sidebar */}
            <aside className="w-64 glass border-r border-white/5 flex flex-col z-50">
                <div className="p-8 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                        <Command className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-extrabold text-lg tracking-tighter">Context<span className="text-indigo-500">Flow</span></span>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {MENU_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 text-sm font-medium",
                                activeTab === item.id
                                    ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-inner"
                                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                            )}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="p-6">
                    <div className="glass p-4 rounded-2xl relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-12 h-12 bg-indigo-500/20 rounded-full blur-xl group-hover:w-16 transition-all" />
                        <div className="text-[10px] font-bold text-zinc-500 mb-2 tracking-widest uppercase">Pro Plan</div>
                        <div className="text-xs font-bold text-white mb-2 underline">Manage Billing</div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '84%' }}
                                className="h-full bg-indigo-500"
                            />
                        </div>
                        <div className="mt-2 text-[8px] text-zinc-600 flex justify-between uppercase font-bold tracking-tighter">
                            <span>8.4 GB Used</span>
                            <span>10 GB Total</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 z-10">
                {/* Top Navbar */}
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 glass">
                    <div className={cn(
                        "flex items-center gap-3 bg-white/5 border rounded-2xl px-5 py-2.5 transition-all duration-500 w-[400px]",
                        searchFocused ? "border-indigo-500/50 bg-white/10 w-[500px]" : "border-white/5"
                    )}>
                        <Search className={cn("w-4 h-4 transition-colors", searchFocused ? "text-indigo-400" : "text-zinc-500")} />
                        <input
                            type="text"
                            placeholder="Instant find across all sources..."
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                            className="bg-transparent border-none outline-none text-sm w-full font-medium"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-black hover:z-10 cursor-pointer">
                                    {['A', 'J', 'S'][i - 1]}
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-black bg-indigo-600 flex items-center justify-center text-[10px] cursor-pointer">+</div>
                        </div>

                        <div className="h-8 w-[1px] bg-white/10" />

                        <div className="flex items-center gap-4">
                            <button className="p-2.5 rounded-xl hover:bg-white/5 text-zinc-400 transition-colors relative">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-black" />
                            </button>
                            <div className="flex items-center gap-3 pl-2 border-l border-white/5">
                                <div className="text-right hidden sm:block">
                                    <div className="text-xs font-bold">Admin Workspace</div>
                                    <div className="text-[10px] text-zinc-500 font-medium">Free Tier • Standard</div>
                                </div>
                                <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-indigo-500 to-violet-600 p-[1px]">
                                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center overflow-hidden">
                                        <User className="w-5 h-5 text-indigo-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <section className="flex-1 overflow-y-auto p-10 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            {activeTab === 'dashboard' && <Dashboard />}
                            {activeTab === 'connectors' && <Connectors />}
                            {['knowledge', 'insights', 'settings'].includes(activeTab) && (
                                <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                                    <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mb-6">
                                        <Cloud className="w-10 h-10 text-indigo-500/40 animate-bounce" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter italic">Module <span className="gradient-text">Syncing</span></h3>
                                    <p className="text-zinc-500 text-sm max-w-xs">{activeTab} module is being optimized for your workspace architecture. Please stand by.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </section>
            </main>
        </div>
    );
}

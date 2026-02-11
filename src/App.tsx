import React, { useState } from 'react';
import {
    LayoutDashboard,
    Link2,
    Files,
    Network,
    PieChart,
    Settings,
    Menu,
    Bell,
    Search,
    Plus,
    Slack,
    ChevronRight,
    Database,
    CloudCloud,
    FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy Data
const CONNECTORS = [
    { id: 'slack', name: 'Slack', icon: <Slack size={20} />, status: 'active', info: '3,421 messages indexed' },
    { id: 'notion', name: 'Notion', icon: <Database size={20} />, status: 'active', info: '152 pages indexed' },
    { id: 'drive', name: 'Google Drive', icon: <CloudCloud size={20} />, status: 'pending', info: 'Synching...' },
];

const RECENT_DOCS = [
    { id: 1, title: 'Product Roadmap Q3', source: 'Notion', time: '2 hours ago' },
    { id: 2, title: 'Feedback from #marketing', source: 'Slack', time: '5 hours ago' },
    { id: 3, title: 'API Documentation v2', source: 'Drive', time: '1 day ago' },
];

export default function App() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'connectors', label: 'Connectors', icon: Link2 },
        { id: 'documents', label: 'Knowledge Base', icon: Files },
        { id: 'graph', label: 'Context Graph', icon: Network },
        { id: 'insights', label: 'Insights', icon: PieChart },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-black overflow-hidden font-sans">
            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? 260 : 80 }}
                className="glass border-r border-white/5 flex flex-col z-20"
            >
                <div className="p-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center animate-glow">
                        <Network className="text-white" size={20} />
                    </div>
                    {isSidebarOpen && (
                        <span className="font-bold text-lg tracking-tight gradient-text">ContextFlow</span>
                    )}
                </div>

                <nav className="flex-1 px-3 space-y-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                                    ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)]'
                                    : 'text-zinc-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <item.icon size={20} />
                            {isSidebarOpen && <span className="font-medium">{item.label}</span>}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-white transition-colors"
                    >
                        <Menu size={20} />
                        {isSidebarOpen && <span className="text-sm">Collapse Sidebar</span>}
                    </button>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Header */}
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 z-10 glass">
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-96 focus-within:border-indigo-500/50 transition-all">
                        <Search className="text-zinc-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search anything across your workspace..."
                            className="bg-transparent border-none outline-none text-sm text-white w-full"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-zinc-400 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full border-2 border-black" />
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20 p-[1px]">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-bold">JD</div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {activeTab === 'dashboard' && <DashboardView />}
                            {activeTab === 'connectors' && <ConnectorsView />}
                            {/* Other views would follow similar patterns */}
                            {['documents', 'graph', 'insights', 'settings'].includes(activeTab) && (
                                <div className="flex flex-col items-center justify-center h-[60vh] text-zinc-500 uppercase tracking-widest text-xs">
                                    <div className="p-4 rounded-full bg-white/5 mb-4 animate-pulse">
                                        <LayoutDashboard size={40} className="text-zinc-700" />
                                    </div>
                                    {activeTab} Module coming soon
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            </main>
        </div>
    );
}

function DashboardView() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back, <span className="gradient-text">Creator</span></h1>
                <p className="text-zinc-500">Your workspace is 100% indexed. 3,572 items analyzed today.</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <StatsCard label="Connected Nodes" value="12" sub="Across 3 platforms" trend="+2 this week" />
                <StatsCard label="Recent Sync" value="4m ago" sub="Slack #dev-channel" trend="Up to date" />
                <StatsCard label="System Load" value="Optimal" sub="Latency: 42ms" trend="99.9% uptime" />
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Files size={18} className="text-indigo-400" />
                            Recent Documents
                        </h3>
                        <button className="text-xs text-indigo-400 hover:text-indigo-300">View All</button>
                    </div>
                    <div className="space-y-4">
                        {RECENT_DOCS.map(doc => (
                            <div key={doc.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/5">
                                        <FileText size={18} className="text-zinc-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">{doc.title}</h4>
                                        <span className="text-xs text-zinc-500">{doc.source}</span>
                                    </div>
                                </div>
                                <div className="text-xs text-zinc-600">{doc.time}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card rounded-2xl p-6 overflow-hidden relative">
                    <div className="mb-6">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Network size={18} className="text-purple-400" />
                            Context Graph Preview
                        </h3>
                    </div>
                    <div className="h-48 flex items-center justify-center relative">
                        {/* Fake Graph Visualization */}
                        <div className="absolute w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center animate-pulse">
                            <div className="w-3 h-3 rounded-full bg-indigo-500" />
                        </div>
                        {[0, 60, 120, 180, 240, 300].map(deg => (
                            <div
                                key={deg}
                                className="absolute w-8 h-8 rounded-full bg-white/10 border border-white/10"
                                style={{ transform: `rotate(${deg}deg) translateX(80px)` }}
                            />
                        ))}
                        <svg className="absolute inset-0 w-full h-full opacity-20">
                            <line x1="50%" y1="50%" x2="60%" y2="30%" stroke="white" strokeWidth="1" />
                            <line x1="50%" y1="50%" x2="40%" y2="70%" stroke="white" strokeWidth="1" />
                        </svg>
                    </div>
                    <p className="text-xs text-center text-zinc-500 mt-4">Exploring 48 potential connections found in your workspace.</p>
                </div>
            </div>
        </div>
    );
}

function ConnectorsView() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Workspace Connectors</h1>
                    <p className="text-zinc-500">Manage and monitor your data flow integrations.</p>
                </div>
                <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                    <Plus size={20} />
                    Add Connector
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CONNECTORS.map(connector => (
                    <div key={connector.id} className="glass-card rounded-2xl p-6 flex flex-col justify-between h-48">
                        <div className="flex items-center justify-between">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                {connector.icon}
                            </div>
                            <span className={`text-[10px] px-2 py-1 rounded-full border uppercase tracking-widest ${connector.status === 'active'
                                    ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5'
                                    : 'text-amber-400 border-amber-500/20 bg-amber-500/5'
                                }`}>
                                {connector.status}
                            </span>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">{connector.name}</h4>
                            <p className="text-xs text-zinc-500">{connector.info}</p>
                        </div>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <button className="text-xs text-zinc-400 hover:text-white transition-colors">Settings</button>
                            <ChevronRight size={16} className="text-zinc-600" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function StatsCard({ label, value, sub, trend }) {
    return (
        <div className="glass-card rounded-2xl p-6">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">{label}</span>
            <div className="mt-2 flex items-end gap-3">
                <span className="text-2xl font-bold">{value}</span>
                <span className="text-[10px] text-indigo-400 mb-1 font-medium">{trend}</span>
            </div>
            <p className="mt-1 text-xs text-zinc-600">{sub}</p>
        </div>
    );
}

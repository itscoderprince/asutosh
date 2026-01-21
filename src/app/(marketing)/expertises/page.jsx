'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    ArrowUpRight,
    LayoutGrid,
    List,
    MapPin,
    Award,
    Building2,
    Globe,
    Zap,
    Wind,
    Droplets,
    Cpu,
    Leaf,
    Activity,
    Layers,
    BarChart3,
    User,
    Check
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

// --- DATA ---
const MARKETS = [
    { title: "Smart Infrastructure", subtitle: "Ease of Living", desc: "Digital systems for modern urban environments.", image: "https://asutos.com/wp-content/uploads/2025/06/ccd26c03a75d1fdd43147be107d680e3.jpg", icon: Building2 },
    { title: "Nature Based Solution", subtitle: "Climate Change", desc: "Restoring natural ecosystems for resilience.", image: "https://asutos.com/wp-content/uploads/2025/06/00950a53c3d1d40c77ae78729a843a9f.jpg", icon: Leaf },
    { title: "Water Management", subtitle: "Natural Resource", desc: "End-to-end water management solutions.", image: "https://asutos.com/wp-content/uploads/2025/06/8c7b807da7ce240f6fd5756041e01e71.jpg", icon: Droplets },
    { title: "Trenchless Tech", subtitle: "Underground", desc: "Non-disruptive pipeline rehabilitation.", image: "https://asutos.com/wp-content/uploads/2025/06/305c3a35de9ed2df8b0bb43ddc2422c1.jpg", icon: Layers },
    { title: "CleanTech", subtitle: "Renewable Energy", desc: "Advanced waste-to-energy technologies.", image: "https://asutos.com/wp-content/uploads/2025/06/5403eec9747b56a4d89a8f4767e9013a.jpg", icon: Wind },
    { title: "Digital Systems", subtitle: "Technology", desc: "AI and IoT for industrial optimization.", image: "https://asutos.com/wp-content/uploads/2025/06/16b436e3702ffcb459c2fcb598f2f7e9.jpg", icon: Cpu },
];

const SOLUTIONS = [
    { title: "Smart Cities", cat: "Green Building", image: "https://asutos.com/wp-content/uploads/2025/06/ef55b28c6e251ffcffceb41106848c6b-2-500x360.jpg" },
    { title: "Smart Mobility", cat: "Transportation", image: "https://asutos.com/wp-content/uploads/2025/06/f2985c3ec77c8417f1ab8c4419d14781-500x360.jpg" },
    { title: "Ease of Living", cat: "Quality of Life", image: "https://asutos.com/wp-content/uploads/2025/06/f874f861bd3b1e0f4f62f3f59a2068fb-500x360.jpg" },
    { title: "Natural Climate", cat: "Environmental", image: "https://asutos.com/wp-content/uploads/2025/06/4fcf0e7d12038be07a367b896ca6c8ac-500x360.jpg" },
    { title: "Wetland Rejuvenation", cat: "Water Reclamation", image: "https://asutos.com/wp-content/uploads/2025/06/b52fcefd6d342961829ea0a0dd1974b7-500x360.jpg" },
    { title: "Forest Conservation", cat: "Afforestation", image: "https://asutos.com/wp-content/uploads/2025/06/6a74f2ab79c74530778043402524acad-500x360.jpg" },
    { title: "Utility Rehab", cat: "Conditional Assessment", image: "https://asutos.com/wp-content/uploads/2025/06/23c6e3c5183d9d145a430bd54b384f47-500x360.jpg" },
    { title: "Microtunneling", cat: "Drilling", image: "https://asutos.com/wp-content/uploads/2025/06/e7dda80a7788977a341c34e7bfaa4678-500x360.jpg" },
];

const SERVICES = [
    {
        id: 1,
        title: "Data-driven Governance",
        category: "Digital",
        image: "https://asutos.com/wp-content/uploads/2023/02/c61a7899bdd2ebfa6b3499b5a6aaa471-1.jpg",
        status: "Featured",
        rating: 4.67,
        reviews: 3,
        description: "Advanced analytics and digital frameworks for transparent institutional management."
    },
    {
        id: 2,
        title: "Digital Governance & e-Services",
        category: "Digital",
        image: "https://asutos.com/wp-content/uploads/2023/02/8bed93f5fe7f2ea61d84f8f1fdfd8f4b.jpg",
        status: "Featured",
        rating: 4.47,
        reviews: 3,
        description: "End-to-end citizen services and backend process automation for public sectors."
    },
    {
        id: 3,
        title: "Smart Traffic Management",
        category: "Mobility",
        image: "https://asutos.com/wp-content/uploads/2023/02/f268686a534e152d91cecf23008db405-1.jpg",
        status: "Featured",
        rating: 4.4,
        reviews: 2,
        description: "AI-based logistics and urban mobility optimization for congestion-free cities."
    },
    {
        id: 4,
        title: "Biodiversity Assessments",
        category: "Environmental",
        image: "https://asutos.com/wp-content/uploads/2023/02/aab0847687b4f9f867b16054d5bc0422.jpg",
        status: "Featured",
        rating: 4.33,
        reviews: 3,
        description: "Scientific evaluation of local flora/fauna to mitigate development impact."
    }
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function ExpertisePage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [viewMode, setViewMode] = useState("grid");

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/breadcrumb-01.jpg"
                        alt="Hero"
                        className="w-full h-full object-cover opacity-30 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
                </div>

                <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                            Global Capabilities
                        </Badge>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                            Explore Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                Expertise
                            </span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                            We don't just build infrastructure; we engineer experiences that
                            make societies more resilient, sustainable, and connected.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-14 px-8 rounded-full text-sm uppercase tracking-widest shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]">
                                View Solutions
                            </Button>
                            <Button variant="outline" size="lg" className="border-slate-700 bg-transparent text-white hover:bg-white/5 hover:text-white font-bold h-14 px-8 rounded-full text-sm uppercase tracking-widest">
                                Our Methodology
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- COMPANY INTRO (Split Layout) --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                                <img
                                    src="https://asutos.com/wp-content/uploads/2025/06/2f2dfaa4326c5bc01d5f7d7ff7b4c259.jpg"
                                    alt="Transforming Society"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-slate-100 rounded-[2.5rem] -z-0 hidden md:block" />

                            {/* Floating Card */}
                            <div className="absolute top-10 -right-6 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] z-20 animate-bounce-slow">
                                <Globe className="w-8 h-8 text-emerald-600 mb-3" />
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Reach</p>
                                <p className="text-lg font-bold text-slate-900">Global Expertise, Local Impact</p>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-8 bg-emerald-500" />
                                <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Who We Are</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1]">
                                Creating the new <span className="relative inline-block text-emerald-600">
                                    standards
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                                </span> for a sustainable future.
                            </h2>

                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    We partner with clients operating on all continents to plan, design, and engineer solutions that address urbanization and capture the power of digitalization.
                                </p>
                                <p>
                                    From smart city grids to nature-based climate solutions, our work is defined by precision, innovation, and a deep commitment to the environment.
                                </p>
                            </div>

                            <div className="mt-10 flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                                    <img src="https://asutos.com/wp-content/uploads/2025/06/1649845576450.jpeg" alt="CEO" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Ashutosh Paswan</h4>
                                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">CEO & Founder</p>
                                </div>
                                <div className="ml-auto">
                                    <img src="https://asutos.com/wp-content/uploads/2023/01/signature.png" alt="Signature" className="h-8 opacity-50" />
                                    {/* Placeholder for signature image if available, else remove */}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- MARKETS (Bento Grid) --- */}
            <section className="py-24 bg-slate-950 text-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <Badge className="bg-slate-800 text-slate-300 mb-4 px-3 py-1 uppercase tracking-widest font-bold border-none">Key Sectors</Badge>
                            <h2 className="text-3xl md:text-5xl font-black mb-4">Core <span className="text-emerald-500">Markets</span></h2>
                            <p className="text-slate-400 text-lg">Whatever your needs, our technical experts mobilize rich heritage and innovation to solve complex challenges.</p>
                        </div>
                        <Button variant="outline" className="border-slate-700 text-white hover:bg-emerald-600 hover:border-emerald-600 hover:text-white font-bold px-8 h-12 rounded-full uppercase tracking-widest transition-all">
                            View All Markets
                        </Button>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {MARKETS.map((market, i) => (
                            <motion.div variants={itemVariants} key={i} className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 bg-slate-900">
                                {/* Image Background */}
                                <img
                                    src={market.image}
                                    alt={market.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 backdrop-blur-md flex items-center justify-center mb-4 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                        <market.icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{market.subtitle}</p>
                                    <h3 className="text-2xl font-bold mb-3 leading-tight">{market.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        {market.desc}
                                    </p>
                                </div>

                                {/* Hover Arrow */}
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- SOLUTIONS (Masonry-style Grid) --- */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">End-to-End <span className="text-emerald-600">Solutions</span></h2>
                        <p className="text-slate-600 text-lg">
                            From concept to commissioning, we deliver integrated solutions that span the entire infrastructure lifecycle.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {SOLUTIONS.map((sol, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${i === 0 || i === 7 ? 'col-span-2 row-span-2 aspect-[2/1]' : 'col-span-1 aspect-square'}`}
                            >
                                <img src={sol.image} alt={sol.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                                    <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-2 backdrop-blur-md text-[9px] uppercase tracking-wider font-bold">
                                        {sol.cat}
                                    </Badge>
                                    <h4 className={`text-white font-bold leading-none ${i === 0 || i === 7 ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                                        {sol.title}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SERVICES (Filterable) --- */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col items-center mb-12">
                        <Badge className="bg-emerald-50 text-emerald-700 mb-4 px-4 py-1 uppercase tracking-widest font-black">Capabilities</Badge>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center">Service Catalogue</h2>

                        {/* Filter Tabs */}
                        <div className="mt-10 flex flex-wrap justify-center gap-2">
                            {["All", "Digital", "Mobility", "Environmental"].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`
                                        relative px-6 py-2.5 rounded-full text-sm font-bold transition-all
                                        ${selectedCategory === cat ? 'text-white' : 'text-slate-500 hover:bg-slate-100'}
                                    `}
                                >
                                    {selectedCategory === cat && (
                                        <motion.div layoutId="activePill" className="absolute inset-0 bg-slate-900 rounded-full" />
                                    )}
                                    <span className="relative z-10">{cat}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <AnimatePresence mode='popLayout'>
                            {SERVICES.filter(s => selectedCategory === "All" || s.category === selectedCategory).map((service) => (
                                <motion.div
                                    layout
                                    key={service.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="group"
                                >
                                    <Card className="h-full bg-white border-slate-100 hover:border-emerald-100 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] transition-all duration-300 rounded-3xl overflow-hidden flex flex-col">
                                        <div className="h-48 overflow-hidden relative">
                                            <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-white/95 text-slate-900 border-none shadow-sm font-bold text-[9px] uppercase tracking-wider">
                                                    {service.status}
                                                </Badge>
                                            </div>
                                        </div>
                                        <CardHeader className="p-6 pb-2">
                                            <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                                                <Activity className="w-3 h-3" /> {service.category}
                                            </div>
                                            <CardTitle className="text-lg font-bold text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
                                                {service.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-6 pt-2 flex-grow">
                                            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                                {service.description}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="p-6 pt-0">
                                            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                                                <Award className="w-4 h-4 fill-current" />
                                                <span>{service.rating}</span>
                                                <span className="text-slate-300 ml-1 font-normal">({service.reviews} reviews)</span>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { label: "Happy Clients", count: "356", icon: User },
                            { label: "Projects Done", count: "850+", icon: Check },
                            { label: "Satisfaction", count: "99%", icon: Award },
                            { label: "Global Regions", count: "12", icon: Globe }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">{stat.count}</h4>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-emerald-400 transition-colors">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
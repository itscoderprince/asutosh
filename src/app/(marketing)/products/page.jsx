'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Search,
    ChevronRight,
    Package,
    ShieldCheck,
    BarChart3,
    Check,
    ArrowUpRight,
    LayoutGrid,
    List,
    Filter
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// --- DATA ---
const PRODUCTS = [
    {
        id: 1,
        title: "Biogas Digester",
        categories: ["CleanTech", "Nature Based"],
        image: "https://asutos.com/wp-content/uploads/2023/01/7-3.jpg",
        description: "Advanced anaerobic digestion system for efficient waste-to-energy conversion.",
        specs: { "Material": "PE-HD", "Capacity": "5-50m3" },
        status: "Available"
    },
    {
        id: 2,
        title: "Desalination Plant",
        categories: ["Water"],
        image: "https://asutos.com/wp-content/uploads/2023/01/Asutos.jpg",
        description: "Modular reverse osmosis units providing high-quality potable water from brackish sources.",
        specs: { "Tech": "Reverse Osmosis", "Efficiency": "98%" },
        status: "In Stock"
    },
    {
        id: 3,
        title: "Effluent Treatment Plus",
        categories: ["CleanTech", "Water"],
        image: "https://asutos.com/wp-content/uploads/2023/01/casestudy_Sustainable-Wastewater.png",
        description: "Industrial-grade wastewater treatment with zero liquid discharge capabilities.",
        specs: { "Input": "Industrial", "Process": "Bio-Chemical" },
        status: "Consultation"
    },
    {
        id: 4,
        title: "Food Waste Digester",
        categories: ["CleanTech"],
        image: "https://asutos.com/wp-content/uploads/2023/01/Asutos-2.jpg",
        description: "Compact on-site organic waste processors for commercial and institutional use.",
        specs: { "Cycle": "24h", "Reduction": "85%" },
        status: "Available"
    },
    {
        id: 5,
        title: "Gas Traps for Biogas",
        categories: ["CleanTech", "Nature Based"],
        image: "https://asutos.com/wp-content/uploads/2025/10/12.jpg",
        description: "Certified safety components for biogas systems, ensuring safe gas handling.",
        specs: { "Build": "SS316", "Pressure": "10 Bar" },
        status: "In Stock"
    },
    {
        id: 6,
        title: "H2S Scrubber - BioPro",
        categories: ["CleanTech", "Nature Based"],
        image: "https://asutos.com/wp-content/uploads/2023/01/8-2.jpg",
        description: "Biological H2S removal systems for biogas purification and engine protection.",
        specs: { "Efficiency": "99%", "Maintenance": "Low" },
        status: "Available"
    },
    {
        id: 7,
        title: "Multijet AMR Water Meter",
        categories: ["Water", "Smart Infra"],
        image: "https://asutos.com/wp-content/uploads/2023/01/6-1.jpg",
        description: "Smart AMR/AMI water meters with integrated IoT connectivity for precise billing.",
        specs: { "IP": "IP68", "Battery": "10 Years" },
        status: "Bulk Ready"
    },
    {
        id: 8,
        title: "Industrial Wastewater Plant",
        categories: ["CleanTech", "Water"],
        image: "https://asutos.com/wp-content/uploads/2023/01/5032321c4fc0f138e469e0092cb463a4.jpg",
        description: "Scalable MBR and SBR solutions for high-strength industrial effluent.",
        specs: { "Tech": "MBR/SBR", "Capacity": "Custom" },
        status: "Custom Build"
    },
    {
        id: 9,
        title: "Hydrostream Potable WTP",
        categories: ["CleanTech", "Water"],
        image: "https://asutos.com/wp-content/uploads/2023/01/3.jpg",
        description: "End-to-end water treatment solutions for public and private drinking water supplies.",
        specs: { "Compliance": "WHO/IS", "Source": "Flexible" },
        status: "Consultation"
    },
];

const CATEGORIES = ["All", "CleanTech", "Nature Based", "Water", "Smart Infra"];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 20 }
    }
};

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [viewMode, setViewMode] = useState("grid");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = PRODUCTS.filter(p => {
        const matchesCategory = selectedCategory === "All" || p.categories.includes(selectedCategory);
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">

            {/* --- REFINED HERO --- */}
            <section className="relative pt-20 pb-12 bg-white border-b border-slate-200 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex justify-center mb-4">
                            <span className="bg-emerald-500/10 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-emerald-500/20">
                                Global Industrial Solutions
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-3">
                            Engineered <span className="text-emerald-600">Excellence.</span>
                        </h1>
                        <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed font-medium">
                            Premium infrastructure hardware designed for long-term scalability and
                            unmatched operational reliability.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-5 rounded-lg shadow-sm">
                                Download Catalogue
                            </Button>
                            <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-bold px-6 py-5 rounded-lg">
                                Contact Sales
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT AREA --- */}
            <section className="py-8 container mx-auto px-4 max-w-full lg:px-8">

                {/* TOOLBAR */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 px-2">

                    {/* View Switcher */}
                    <div className="flex items-center bg-white p-1 rounded-lg border border-slate-200 shadow-sm order-2 md:order-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-slate-100 text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
                            title="Grid View"
                        >
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-slate-100 text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
                            title="List View"
                        >
                            <List className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-x-auto no-scrollbar max-w-full order-1 md:order-2">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`relative px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all rounded-lg whitespace-nowrap ${selectedCategory === cat
                                    ? "text-white"
                                    : "text-slate-500 hover:text-slate-800"
                                    }`}
                            >
                                {selectedCategory === cat && (
                                    <motion.div
                                        layoutId="activeTabMode"
                                        className="absolute inset-0 bg-slate-900 rounded-lg z-0"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64 order-3">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                            placeholder="Search catalogue..."
                            className="pl-9 h-10 bg-white border-slate-200 text-sm focus:ring-emerald-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* 4-COLUMN GRID / LIST VIEW WITH STAGGERED REVEAL */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    key={`${viewMode}-${selectedCategory}`}
                    className={viewMode === 'grid'
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        : "flex flex-col gap-4 max-w-5xl mx-auto"}
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    variants={cardVariants}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    className="h-full"
                                >
                                    {viewMode === 'grid' ? (
                                        /* GRID CARD */
                                        <Card className="bg-white border-slate-200 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden group">
                                            <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                <div className="absolute top-2 right-2">
                                                    <Badge className="bg-white/95 text-slate-800 border-slate-200 shadow-sm font-bold text-[9px] py-0.5 uppercase tracking-tighter">
                                                        {product.status}
                                                    </Badge>
                                                </div>

                                                <div className="absolute bottom-3 left-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                                    <Button size="icon" className="h-8 w-8 rounded-full bg-white text-emerald-600 hover:bg-emerald-600 hover:text-white shadow-md">
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>

                                            <CardHeader className="p-5 pb-2">
                                                <div className="flex flex-wrap gap-1 mb-2">
                                                    {product.categories.slice(0, 1).map(c => (
                                                        <span key={c} className="text-[9px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                                                            {c}
                                                        </span>
                                                    ))}
                                                </div>
                                                <CardTitle className="text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight line-clamp-1">
                                                    {product.title}
                                                </CardTitle>
                                            </CardHeader>

                                            <CardContent className="p-5 pt-0 flex-grow">
                                                <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed font-medium">
                                                    {product.description}
                                                </p>
                                                <div className="grid grid-cols-1 gap-1.5 pt-3 border-t border-slate-100">
                                                    {Object.entries(product.specs).map(([k, v]) => (
                                                        <div key={k} className="flex justify-between items-center">
                                                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{k}</span>
                                                            <span className="text-[10px] text-slate-700 font-bold">{v}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>

                                            <CardFooter className="p-5 pt-0">
                                                <Button className="w-full bg-slate-900 group-hover:bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest h-9 rounded-md transition-colors">
                                                    View Specs
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ) : (
                                        /* LIST CARD */
                                        <div className="flex bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-emerald-500/30 hover:shadow-md transition-all duration-300 group h-40">
                                            <div className="w-40 md:w-60 overflow-hidden relative shrink-0">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute top-2 left-2">
                                                    <Badge className="bg-white/90 backdrop-blur text-slate-900 text-[9px] font-bold uppercase tracking-wider border-none">
                                                        {product.status}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="flex-grow p-4 md:p-6 flex flex-col justify-center relative">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <div className="flex gap-2 items-center mb-1.5">
                                                            <span className="text-[9px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                                                                {product.categories[0]}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-lg font-extrabold text-slate-950 group-hover:text-emerald-700 transition-colors">
                                                            {product.title}
                                                        </h3>
                                                    </div>
                                                    <Button size="sm" variant="outline" className="hidden md:flex border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-200 text-[10px] font-bold h-8 px-3 uppercase tracking-wider">
                                                        Data Sheet
                                                    </Button>
                                                </div>
                                                <p className="text-xs text-slate-500 line-clamp-2 mb-4 max-w-2xl">
                                                    {product.description}
                                                </p>
                                                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-auto">
                                                    {Object.entries(product.specs).map(([k, v]) => (
                                                        <div key={k} className="flex gap-2 items-center">
                                                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{k}:</span>
                                                            <span className="text-[10px] text-slate-700 font-bold">{v}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full py-20 text-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50"
                            >
                                <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    <Package className="w-6 h-6 text-slate-300" />
                                </div>
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">No Matches Found</h3>
                                <p className="text-xs text-slate-500 mt-1 mb-4">Try adjusting your filters or search query.</p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                                    className="h-8 text-xs"
                                >
                                    Clear All Filters
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* --- INDUSTRIAL CTA --- */}
            <section className="py-12 bg-slate-950 border-t border-slate-900 overflow-hidden relative mt-12">
                <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Industrial Systems Procurement</h2>
                        <p className="text-slate-400 text-xs md:text-sm font-medium opacity-70 max-w-lg">
                            Dedicated supply chain prioritization for large-scale institutional projects.
                            Get access to volume pricing and priority support.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 h-10 uppercase tracking-wide text-xs">
                            Request Quote
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5 font-bold px-8 h-10 uppercase tracking-wide text-xs">
                            Talk to Expert
                        </Button>
                    </div>
                </div>
            </section>

            {/* --- CERTIFICATION BAR --- */}
            <section className="py-6 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
                    {['ISO 9001:2015', 'CE CERTIFIED', 'RoHS COMPLIANT', 'BIS APPROVED'].map(label => (
                        <div key={label} className="flex items-center gap-2 group cursor-default">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 grayscale group-hover:grayscale-0 transition-all" />
                            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-600 group-hover:text-slate-900 transition-colors">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}
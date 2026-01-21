'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin,
    Calendar,
    ArrowUpRight,
    LayoutGrid,
    List,
    Layers,
    Filter,
    Search
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// --- DATA ---
const PROJECTS = [
    {
        id: 1,
        title: "Ahmedabad Pipeline Rehab",
        category: "Trenchless",
        image: "https://asutos.com/wp-content/uploads/2022/12/Vortex-UV-CIPP-500x360.jpg",
        location: "Ahmedabad, GJ",
        year: "2024",
        status: "Completed",
        client: "Municipal Corp.",
        description: "Large-scale rehabilitation of urban sewage conduits using non-disruptive CIPP technology.",
    },
    {
        id: 2,
        title: "Baikunthpur Water Supply",
        category: "Water",
        image: "https://asutos.com/wp-content/uploads/2025/06/ten-news-new_0-500x360.jpg",
        location: "Baikunthpur, UP",
        year: "2023",
        status: "Completed",
        client: "UP Jal Nigam",
        description: "State-wide mission-driven project providing clean drinking water to over 150 rural habitations.",
    },
    {
        id: 3,
        title: "Bengaluru Pond Cleanup",
        category: "Nature Based",
        image: "https://asutos.com/wp-content/uploads/2025/06/SS-Lake-304-scaled.jpg-500x360.webp",
        location: "Bengaluru, KA",
        year: "2024",
        status: "Ongoing",
        client: "BBMP",
        description: "Ecological restoration and bioremediation of urban water bodies to restore natural biodiversity.",
    },
    {
        id: 4,
        title: "Naperville Smart City",
        category: "Smart Cities",
        image: "https://asutos.com/wp-content/uploads/2022/12/imengine.public.prod_.pdh_.navigacloud.com-2-500x360.jpeg",
        location: "Naperville, IL",
        year: "2023",
        status: "Completed",
        client: "City Council",
        description: "Integration of smart IoT sensors and street-level data collection for optimized urban planning.",
    },
    {
        id: 5,
        title: "Chandigarh Waste Legacy",
        category: "Nature Based",
        image: "https://asutos.com/wp-content/uploads/2022/12/dumpsite-biomining-500x360.webp",
        location: "Chandigarh",
        year: "2024",
        status: "Completed",
        client: "Planning Dept",
        description: "Clearing historical dumpsites through scientific biomining and material recovery processes.",
    },
    {
        id: 6,
        title: "New Delhi GIS Mapping",
        category: "Water",
        image: "https://asutos.com/wp-content/uploads/2022/12/Leica-DSX-APL-1097-scaled-1-500x360.jpg",
        location: "New Delhi",
        year: "2022",
        status: "Completed",
        client: "Delhi Jal Board",
        description: "Underground utility mapping using GPR and GIS for precise digital twin creation.",
    },
    {
        id: 7,
        title: "Deoria Multi-village scheme",
        category: "Water",
        location: "Deoria, UP",
        image: "https://asutos.com/wp-content/uploads/2025/06/Image-4-1024x768-1-500x360.jpg",
        year: "2024",
        status: "Ongoing",
        client: "Jal Shakti Abhiyan",
        description: "Comprehensive piped water supply scheme for remote clusters in North India.",
    },
    {
        id: 8,
        title: "Prayagraj Smart City",
        category: "Smart Cities",
        location: "Prayagraj, UP",
        image: "https://asutos.com/wp-content/uploads/2022/12/da3970cff18f7adc3ab84211ba7e853f-500x360.jpg",
        year: "2023",
        status: "Completed",
        client: "ASCL",
        description: "UAV-based survey and 3D modeling for infrastructure development and planning.",
    },
];

const CATEGORIES = ["All", "Water", "Smart Cities", "Trenchless", "Nature Based"];

// --- COMPONENTS ---

// A sleek category filter pill
const FilterPill = ({ label, isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={`
            relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-out
            ${isSelected ? "text-white" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}
        `}
    >
        {isSelected && (
            <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-slate-900 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
        )}
        <span className="relative z-10">{label}</span>
    </button>
);

// The Main Project Card
const ProjectCard = ({ project, viewMode }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`group relative ${viewMode === 'list' ? 'col-span-full' : ''}`}
        >
            <Card className={`
                h-full overflow-hidden bg-white border border-slate-200 transition-all duration-500
                hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-slate-300
                ${viewMode === 'list' ? 'flex flex-row h-48' : 'flex flex-col'}
            `}>
                {/* Image Section */}
                <div className={`
                    relative overflow-hidden bg-slate-100
                    ${viewMode === 'list' ? 'w-1/3 min-w-[240px]' : 'aspect-[4/3]'}
                `}>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold uppercase tracking-widest border-none shadow-sm">
                            {project.category}
                        </Badge>
                    </div>

                    {/* Quick Action (Grid Only) */}
                    {viewMode === 'grid' && (
                        <div className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <Button size="icon" className="bg-white text-slate-900 hover:bg-emerald-500 hover:text-white rounded-full w-8 h-8 shadow-lg">
                                <ArrowUpRight className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-5 relative">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{project.status}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
                                {project.title}
                            </h3>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Meta Data Footer */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                <span className="font-medium text-slate-700">{project.location.split(',')[0]}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                <span className="font-medium text-slate-700">{project.year}</span>
                            </div>
                        </div>

                        {/* List View Extra Button */}
                        {viewMode === 'list' && (
                            <Button variant="outline" size="sm" className="h-8 text-xs font-semibold hover:bg-slate-50 hover:text-emerald-700">
                                View Case Study
                            </Button>
                        )}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [viewMode, setViewMode] = useState("grid");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = PROJECTS.filter(p => {
        const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans">

            {/* --- HEADER SECTION --- */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
                <div className="container mx-auto px-4 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                        {/* Title & Breadcrumb */}
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                                Global Portfolio
                            </h1>
                            <p className="text-sm text-slate-500">
                                Engineering excellence across {PROJECTS.length} strategic locations.
                            </p>
                        </div>

                        {/* Controls Toolbar */}
                        <div className="flex items-center gap-2">
                            {/* Search */}
                            <div className="relative w-full md:w-64">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                                <Input
                                    placeholder="Search projects..."
                                    className="pl-9 h-9 bg-slate-50 border-slate-200 text-sm focus:ring-emerald-500"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block" />

                            {/* View Toggle */}
                            <div className="flex p-1 bg-slate-100 rounded-lg border border-slate-200">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    <LayoutGrid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Category Filter Bar */}
                    <div className="mt-6 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                        {CATEGORIES.map((cat) => (
                            <FilterPill
                                key={cat}
                                label={cat}
                                isSelected={selectedCategory === cat}
                                onClick={() => setSelectedCategory(cat)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <main className="container mx-auto px-4 lg:px-8 py-8">
                <motion.div
                    layout
                    className={`
                        grid gap-6
                        ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 max-w-5xl mx-auto'}
                    `}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    viewMode={viewMode}
                                />
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full py-20 text-center"
                            >
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Layers className="w-8 h-8 text-slate-300" />
                                </div>
                                <h3 className="text-lg font-medium text-slate-900">No projects found</h3>
                                <p className="text-slate-500 mt-1">Try adjusting your filters or search query.</p>
                                <Button
                                    variant="outline"
                                    className="mt-4"
                                    onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                                >
                                    Reset Filters
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </main>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}
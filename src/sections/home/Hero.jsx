'use client'

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// --- Data ---
const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
        subheading: "Innovate Your Business & Grow Fast",
        heading: "Pioneering The Future of Digital Business Strategy",
        buttonText: "Get Started Now",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2340&auto=format&fit=crop",
        subheading: "Strategic Vision For Complex Projects",
        heading: "The Modern Architecture of Sustainable Success",
        buttonText: "View Our Projects",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop",
        subheading: "Collaborate With Our Expert Teams",
        heading: "Building A Better World Together Through Synergy",
        buttonText: "Join The Team",
    },
];

const AUTOPLAY_TIME = 6000; // 6 seconds

// --- Components ---

const Button = ({ children, className, ...props }) => (
    <button
        className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-11 px-8 ${className}`}
        {...props}
    >
        {children}
    </button>
);

// Typography Animation
const AnimatedHeading = ({ text }) => {
    const words = text.split(" ");
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.8 },
        }),
    };
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 },
        },
        hidden: { opacity: 0, y: 20 },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg gap-x-3 gap-y-1"
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index}>{word}</motion.span>
            ))}
        </motion.div>
    );
};

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    // Functions to handle navigation
    const paginate = useCallback((newDirection) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
    }, []);

    const nextSlide = useCallback(() => paginate(1), [paginate]);
    const prevSlide = useCallback(() => paginate(-1), [paginate]);

    // --- Animation Variants ---
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
        }),
        center: {
            x: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                duration: 0.8,
            },
        },
        exit: (direction) => ({
            x: direction < 0 ? "100%" : "-100%",
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                duration: 0.8,
            },
        }),
    };

    const imageVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "-20%" : "20%",
            scale: 1.3,
            opacity: 0,
        }),
        center: {
            x: "0%",
            scale: 1,
            opacity: 1,
            transition: {
                x: { duration: 1.2, ease: "easeOut" },
                scale: { duration: 1.5, ease: "easeOut" },
                opacity: { duration: 0.5 },
            },
        },
        exit: (direction) => ({
            x: direction < 0 ? "-20%" : "20%",
            opacity: 0.5,
            transition: { duration: 0.5 },
        }),
    };

    return (
        <div className="relative w-full h-[calc(100vh-4rem)] min-h-[600px] overflow-hidden bg-black group">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">

                {/* Main Slide */}
                <motion.div
                    key={current}
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                >
                    {/* Parallax Image */}
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        variants={imageVariants}
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                    {/* Content (Bottom Left) */}
                    <div className="relative z-10 h-full flex items-end justify-start text-left">
                        <div className="max-w-[90%] md:max-w-4xl space-y-6 pb-32 pl-6 sm:pl-12 md:pl-20 pr-6">

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                <span className="inline-block rounded-full bg-emerald-600/20 px-4 py-1.5 text-sm md:text-base font-semibold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                                    {slides[current].subheading}
                                </span>
                            </motion.div>

                            <AnimatedHeading text={slides[current].heading} />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 0.6 }}
                            >
                                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 text-lg px-8 py-6 rounded-full font-semibold shadow-lg shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95 group">
                                    {slides[current].buttonText}
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* --- Controls --- */}

            {/* Left Arrow (Center Left) */}
            <div className="absolute top-1/2 left-4 z-20 -translate-y-1/2 hidden md:block">
                <button
                    onClick={prevSlide}
                    className="p-4 rounded-full bg-black/20 text-white/70 backdrop-blur-md hover:bg-white/20 hover:text-white transition-all border border-white/10 hover:scale-110 active:scale-95 group"
                >
                    <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Right Arrow (Center Right) */}
            <div className="absolute top-1/2 right-4 z-20 -translate-y-1/2 hidden md:block">
                <button
                    onClick={nextSlide}
                    className="p-4 rounded-full bg-black/20 text-white/70 backdrop-blur-md hover:bg-white/20 hover:text-white transition-all border border-white/10 hover:scale-110 active:scale-95 group"
                >
                    <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Progress Bar Indicators (Bottom Center) */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > current ? 1 : -1);
                            setCurrent(index);
                        }}
                        className="group flex flex-col gap-2 outline-none focus:outline-none"
                    >
                        <div className="flex items-center gap-3">
                            <span className={`text-xs font-bold font-mono transition-colors duration-300 ${index === current ? "text-emerald-400" : "text-white/40 group-hover:text-white/70"}`}>
                                0{index + 1}
                            </span>
                            <div className="relative h-[3px] w-20 bg-white/10 rounded-full overflow-hidden transition-all duration-300 group-hover:bg-white/20">
                                {index === current && (
                                    <motion.div
                                        className="absolute top-0 left-0 h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: AUTOPLAY_TIME / 1000, ease: "linear" }}
                                        onAnimationComplete={() => {
                                            if (index === current) nextSlide();
                                        }}
                                    />
                                )}
                                {index < current && (
                                    <div className="absolute top-0 left-0 h-full w-full bg-emerald-500/30" />
                                )}
                            </div>
                        </div>
                    </button>
                ))}
            </div>

        </div>
    );
}
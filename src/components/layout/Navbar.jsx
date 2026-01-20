'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Search,
    User,
    Menu,
    LogIn,
    UserPlus,
    LogOut,
    UserCircle,
    ChevronDown
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription
} from "@/components/ui/sheet";

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm font-sans transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
            <div className="container mx-auto px-4 h-full flex items-center justify-between">

                {/* --- LOGO --- */}
                <div className="flex-shrink-0 mr-8">
                    <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 duration-300">
                        {/* Using Next.js Image Component */}
                        <Image
                            src="/logo.jpg"
                            alt="Asutos Logo"
                            width={150} // Set an appropriate intrinsic width (adjust based on actual image ratio)
                            height={40} // Set an appropriate intrinsic height
                            className={`transition-all duration-300 object-contain ${scrolled ? "h-7" : "h-9"} w-auto`} // Tailwind handles the display size
                            priority // Loads image immediately since it's above the fold
                        />
                    </Link>
                </div>

                {/* --- DESKTOP NAVIGATION --- */}
                <div className="hidden lg:flex flex-1 items-center justify-start gap-2">
                    <NavLink href="/expertises">Expertises</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/products">Products</NavLink>
                    <NavLink href="/news">Insights</NavLink>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-emerald-600 hover:scale-110 focus:outline-none">
                                Overview
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48 mt-2 animate-in fade-in-0 zoom-in-95 duration-200">
                            <DropdownMenuItem asChild>
                                <Link href="/about" className="cursor-pointer font-medium text-slate-600 focus:text-emerald-700">
                                    About Us
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/event-page" className="cursor-pointer font-medium text-slate-600 focus:text-emerald-700">
                                    Events
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* --- RIGHT ACTIONS --- */}
                <div className="flex items-center gap-3">

                    <div className="relative flex items-center">
                        <div className={`
                overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] flex items-center
                ${isSearchOpen ? "w-64 opacity-100 mr-2" : "w-0 opacity-0"}
              `}>
                            <Input
                                placeholder="Search..."
                                className="h-9 rounded-full bg-slate-100 border-none focus-visible:ring-emerald-500"
                            />
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="text-slate-600 transition-transform duration-300 hover:scale-110 hover:text-emerald-600 hover:bg-transparent"
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-slate-600 transition-transform duration-300 hover:scale-110 hover:text-emerald-600 hover:bg-transparent">
                                <User className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 p-2">

                            {isLoggedIn ? (
                                <>
                                    <div className="flex items-center gap-2 p-2 mb-2 bg-slate-50 rounded-md">
                                        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                                            <UserCircle className="h-5 w-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold text-slate-700">John Doe</span>
                                            <span className="text-xs text-slate-500">user@example.com</span>
                                        </div>
                                    </div>
                                    <DropdownMenuItem className="cursor-pointer text-slate-600 focus:text-emerald-700 focus:bg-emerald-50">
                                        <UserCircle className="mr-2 h-4 w-4" />
                                        <span>My Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        className="cursor-pointer text-red-600 focus:text-red-700 focus:bg-red-50"
                                        onClick={() => setIsLoggedIn(false)}
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Logout</span>
                                    </DropdownMenuItem>
                                </>
                            ) : (
                                <>
                                    <div className="px-2 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Account
                                    </div>
                                    <DropdownMenuItem asChild>
                                        <Link href="/login" className="cursor-pointer text-slate-600 focus:text-emerald-700 focus:bg-emerald-50">
                                            <LogIn className="mr-2 h-4 w-4" />
                                            <span>Login</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/register" className="cursor-pointer text-slate-600 focus:text-emerald-700 focus:bg-emerald-50">
                                            <UserPlus className="mr-2 h-4 w-4" />
                                            <span>Register</span>
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuSeparator />
                                    <div className="p-1">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full text-xs h-7 hover:border-emerald-500 hover:text-emerald-600"
                                            onClick={() => setIsLoggedIn(true)}
                                        >
                                            (Demo Toggle)
                                        </Button>
                                    </div>
                                </>
                            )}

                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Mobile Menu Trigger */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-slate-600 hover:text-emerald-600 hover:bg-transparent">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px]">
                                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                                <SheetDescription className="sr-only">
                                    Browse website sections and manage your account.
                                </SheetDescription>

                                <div className="flex flex-col gap-6 mt-6">
                                    <div className="w-32 relative h-10">
                                        <Image
                                            src="http://asutos.com/wp-content/uploads/2022/12/asutos-logo-jpg.jpg"
                                            alt="Logo"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>

                                    <nav className="flex flex-col gap-4">
                                        <MobileLink href="/expertises">Expertises</MobileLink>
                                        <MobileLink href="/projects">Projects</MobileLink>
                                        <MobileLink href="/products">Products</MobileLink>
                                        <MobileLink href="/news">Insights</MobileLink>

                                        <div className="my-2 border-t border-slate-100" />
                                        <p className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Overview</p>
                                        <MobileLink href="/about">About Us</MobileLink>
                                        <MobileLink href="/event-page">Events</MobileLink>
                                    </nav>

                                    <div className="mt-auto border-t pt-4">
                                        {isLoggedIn ? (
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                                                onClick={() => setIsLoggedIn(false)}
                                            >
                                                <LogOut className="mr-2 h-4 w-4" /> Logout
                                            </Button>
                                        ) : (
                                            <div className="grid grid-cols-2 gap-3">
                                                <Button variant="outline" className="w-full text-emerald-700 border-emerald-200 hover:bg-emerald-50">Login</Button>
                                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Register</Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>
        </header>
    );
}

function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className="px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-emerald-600 hover:scale-110"
        >
            {children}
        </Link>
    );
}

function MobileLink({ href, children }) {
    return (
        <Link
            href={href}
            className="block px-2 py-1 text-lg font-medium text-slate-700 hover:text-emerald-600 hover:translate-x-1 transition-transform"
        >
            {children}
        </Link>
    );
}
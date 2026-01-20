"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Send,
    Phone,
    Mail,
    MapPin
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 font-sans">
            <div className="container mx-auto px-6">

                {/* --- MAIN GRID LAYOUT --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* COLUMN 1: Brand & About */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="inline-block">
                            <div className="relative h-12 w-40">
                                <Image
                                    src="/logo.jpg"
                                    alt="Asutos Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            To take trivial example which us ever undertakes laborious physica exercise except obsome.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <SocialIcon
                                href="#"
                                icon={<Twitter className="w-4 h-4" />}
                                hoverColor="hover:bg-[#1DA1F2]" // Twitter Blue
                            />
                            <SocialIcon
                                href="#"
                                icon={<Facebook className="w-4 h-4" />}
                                hoverColor="hover:bg-[#1877F2]" // Facebook Blue
                            />
                            <SocialIcon
                                href="#"
                                icon={<Instagram className="w-4 h-4" />}
                                hoverColor="hover:bg-[#E1306C]" // Instagram Pink
                            />
                            <SocialIcon
                                href="#"
                                icon={<Linkedin className="w-4 h-4" />}
                                hoverColor="hover:bg-[#0A66C2]" // LinkedIn Blue
                            />
                        </div>
                    </div>

                    {/* COLUMN 2: Pages Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                            Pages
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink href="/about">About us</FooterLink>
                            <FooterLink href="/news">Community Blog</FooterLink>
                            <FooterLink href="/team">Work with Us</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/contact">Contact us</FooterLink>
                        </ul>
                    </div>

                    {/* COLUMN 3: Newsletter */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                            Newsletter
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-600 rounded-full"></span>
                        </h3>
                        <p className="text-sm mb-4">
                            Subscribe our newsletter to get our latest update & news.
                        </p>

                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <Input
                                    type="email"
                                    placeholder="Email address"
                                    className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:ring-emerald-600 pr-12 h-12"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="absolute right-1 top-1 bottom-1 h-10 w-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                                >
                                    <Send className="w-4 h-4" />
                                    <span className="sr-only">Subscribe</span>
                                </Button>
                            </div>

                            <div className="flex items-start gap-2">
                                <Checkbox id="terms" className="border-slate-600 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600 mt-1" />
                                <Label htmlFor="terms" className="text-xs mt-1 text-slate-500 cursor-pointer hover:text-slate-300 leading-tight">
                                    I agree to all terms and policies
                                </Label>
                            </div>
                        </form>
                    </div>

                    {/* COLUMN 4: Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                            Contact
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-600 rounded-full"></span>
                        </h3>
                        <div className="space-y-6">
                            <ContactItem
                                icon={<Phone className="w-5 h-5" />}
                                title="Drop a Line"
                                text="+00 (123) 456 889"
                            />
                            <ContactItem
                                icon={<Mail className="w-5 h-5" />}
                                title="Email Address"
                                text="contact@example.com"
                            />
                            <ContactItem
                                icon={<MapPin className="w-5 h-5" />}
                                title="Visit Office"
                                text="583 Main Street, NY, USA"
                            />
                        </div>
                    </div>

                </div>

                {/* --- COPYRIGHT BOTTOM BAR --- */}
                <div className="mt-16 pt-8 border-t border-slate-900 text-center text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Asutos. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// --- HELPER COMPONENTS ---

function FooterLink({ href, children }) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm hover:text-emerald-500 transition-colors flex items-center gap-2 group"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors"></span>
                {children}
            </Link>
        </li>
    );
}

// --- UPDATED SOCIAL ICON ---
function SocialIcon({ href, icon, hoverColor }) {
    return (
        <Link
            href={href}
            // 1. Added 'group' class here
            // 2. Removed 'transition-all' to stop background scaling, kept 'transition-colors'
            className={`group w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:text-white transition-colors duration-300 ease-in-out ${hoverColor}`}
        >
            {/* 3. Wrapped icon in a span that scales on group-hover */}
            <span className="transform transition-transform duration-300 group-hover:scale-125">
                {icon}
            </span>
        </Link>
    );
}

function ContactItem({ icon, title, text }) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-emerald-500 border border-slate-800">
                {icon}
            </div>
            <div>
                <h4 className="text-white text-sm font-semibold mb-1">{title}</h4>
                <p className="text-sm text-slate-400">{text}</p>
            </div>
        </div>
    );
}
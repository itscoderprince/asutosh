import Link from "next/link";
import {
    MapPin,
    Mail,
    ShoppingCart,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TopBar() {
    return (
        <div className="w-full bg-slate-950 text-slate-300 text-xs sm:text-sm border-b border-slate-800">
            <div className="container mx-auto px-4 h-12 flex items-center justify-between">

                {/* LEFT SECTION - Contact Info */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                        <MapPin className="h-4 w-4 text-sky-500" />
                        <span>100 Howard Street, Spokane, WA, USA</span>
                    </div>

                    <Link
                        href="mailto:contact@asutos.com"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <Mail className="h-4 w-4" />
                        <span>contact@asutos.com</span>
                    </Link>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">

                    {/* Navigation Links */}
                    <div className="flex items-center gap-4">
                        <Link href="/our-services" className="hover:text-white transition-colors">
                            Our Services
                        </Link>
                        <Link href="/contact" className="hover:text-white transition-colors">
                            Contact Us
                        </Link>
                    </div>

                    <Separator orientation="vertical" className="h-4 bg-slate-700 hidden sm:block" />

                    {/* Cart Section */}
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="relative hover:bg-slate-800 hover:text-white h-8 w-8 text-slate-300">
                            <ShoppingCart className="h-4 w-4" />
                            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-sky-600 hover:bg-sky-700 text-white border-none">
                                0
                            </Badge>
                            <span className="sr-only">View Cart</span>
                        </Button>
                    </div>

                    <Separator orientation="vertical" className="h-4 bg-slate-700 hidden sm:block" />

                    {/* Social Icons with Brand Colors */}
                    <div className="hidden sm:flex items-center gap-1">
                        <SocialButton
                            icon={<Facebook className="h-3.5 w-3.5" />}
                            href="https://facebook.com"
                            colorClass="hover:text-[#1877F2]" // Facebook Blue
                        />
                        <SocialButton
                            icon={<Twitter className="h-3.5 w-3.5" />}
                            href="https://twitter.com"
                            colorClass="hover:text-[#1DA1F2]" // Twitter Blue
                        />
                        <SocialButton
                            icon={<Instagram className="h-3.5 w-3.5" />}
                            href="https://instagram.com"
                            colorClass="hover:text-[#E1306C]" // Instagram Pink
                        />
                        <SocialButton
                            icon={<Linkedin className="h-3.5 w-3.5" />}
                            href="https://linkedin.com"
                            colorClass="hover:text-[#0A66C2]" // LinkedIn Blue
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Updated Helper Component
function SocialButton({ icon, href, colorClass }) {
    return (
        <Button
            variant="ghost"
            size="icon"
            className={`h-7 w-7 text-slate-400 hover:bg-slate-800 rounded-full transition-colors ${colorClass}`}
            asChild
        >
            <Link href={href} target="_blank">
                {icon}
            </Link>
        </Button>
    );
}
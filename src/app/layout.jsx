import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// 1. Import your persistent layout components


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Asutos - Engineering Sustainable Solutions",
    template: "%s | Asutos"
  },
  description: "World-class engineering services for sustainable infrastructure, smart cities, water management, and clean technology solutions.",
  keywords: ["sustainable engineering", "smart cities", "water solutions", "clean technology", "infrastructure"],
  authors: [{ name: "Asutos" }],
  creator: "Asutos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asutos.com",
    title: "Asutos - Engineering Sustainable Solutions",
    description: "World-class engineering services for sustainable infrastructure",
    siteName: "Asutos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asutos - Engineering Sustainable Solutions",
    description: "World-class engineering services for sustainable infrastructure",
    creator: "@asutos",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* 2. Render Header Components at the top */}
        <TopBar />
        <Navbar />

        {/* 3. Render the specific page content */}
        {/* 'flex-grow' ensures the footer stays at the bottom even on empty pages */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 4. Render Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
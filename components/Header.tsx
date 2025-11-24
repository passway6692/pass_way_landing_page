// components/Header.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-2xl border-b border-orange-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.jpg"
              width={70}
              height={70}
              alt="Pass Way"
              className="rounded-full ring-4 ring-orange-500/60 shadow-2xl"
            />
            <span className="text-4xl font-black hidden md:block">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Pass
              </span>{" "}
              <span className="text-white">Way</span>
            </span>
          </div>

          {/* Buttons + Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-8 py-6 rounded-full shadow-2xl"
            >
              <a href="#download" className="flex items-center gap-3">
                <FaGooglePlay className="w-8 h-8" /> Android
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-500 hover:border-orange-500 text-gray-300 font-bold text-lg px-8 py-6 rounded-full flex items-center gap-3"
            >
              <FaAppStoreIos className="w-8 h-8" /> iOS (قريبًا)
            </Button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-300">
              <Link href="/about" className="hover:text-orange-400 transition">
                عن Pass Way
              </Link>
              <Link
                href="/privacy"
                className="hover:text-orange-400 transition"
              >
                الخصوصية
              </Link>
              <Link href="/terms" className="hover:text-orange-400 transition">
                الشروط
              </Link>
              <Link
                href="/contact"
                className="hover:text-orange-400 transition"
              >
                تواصل
              </Link>
            </div>

            {/* Mobile Links */}
            <div className="flex md:hidden flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/about" className="hover:text-orange-400">
                عن
              </Link>
              <Link href="/privacy" className="hover:text-orange-400">
                الخصوصية
              </Link>
              <Link href="/terms" className="hover:text-orange-400">
                الشروط
              </Link>
              <Link href="/contact" className="hover:text-orange-400">
                تواصل
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

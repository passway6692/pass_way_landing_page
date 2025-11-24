// components/Header.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Shield, Phone, FileText, Info, Home, Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define menu items without optional 'items' since none have submenus
  const menuItems = [
    { title: "عن Pass Way", url: "/about", icon: <Info className="size-5" /> },
    {
      title: "سياسة الخصوصية",
      url: "/privacy",
      icon: <Shield className="size-5" />,
    },
    {
      title: "الشروط والأحكام",
      url: "/terms",
      icon: <FileText className="size-5" />,
    },
    {
      title: "تواصل معنا",
      url: "/contact",
      icon: <Phone className="size-5" />,
    },
    { title: "الرئيسية", url: "/", icon: <Home className="size-5" /> },
  ] satisfies { title: string; url: string; icon: React.ReactNode }[];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-2xl border-b border-orange-500/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.jpg"
              width={70}
              height={70}
              alt="Pass Way"
              className="rounded-full ring-4 ring-orange-500/60 shadow-2xl"
            />
            <span className="text-4xl font-black">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Pass
              </span>{" "}
              <span className="text-white">Way</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {/* الحل السحري: asChild + Link داخل NavigationMenuLink */}
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.url}
                      className="text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors px-4 py-2 rounded-md"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Download Buttons */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-8 py-6 rounded-full shadow-2xl flex items-center gap-3"
            >
              <a href="#download">
                <FaGooglePlay className="w-7 h-7" /> Android
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-500 hover:border-orange-500 text-gray-300 hover:text-white font-bold text-lg px-8 py-6 rounded-full flex items-center gap-3"
            >
              <FaAppStoreIos className="w-7 h-7" /> iOS (قريبًا)
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              width={60}
              height={60}
              alt="Pass Way"
              className="rounded-full ring-4 ring-orange-500/60 shadow-xl"
            />
            <span className="text-2xl font-black">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Pass
              </span>{" "}
              <span className="text-white">Way</span>
            </span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 backdrop-blur-xl border-orange-500/20 w-[85vw]"
            >
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src="/logo.jpg"
                      width={60}
                      height={60}
                      alt="Pass Way"
                      className="rounded-full ring-4 ring-orange-500/60"
                    />
                    <span className="text-2xl font-black text-white">
                      Pass Way
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-10 flex flex-col gap-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="flex items-center gap-4 py-4 text-xl font-medium text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                ))}

                <div className="mt-10 space-y-4 flex  flex-col items-center justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="w-[70%] bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-8 rounded-full"
                  >
                    <a
                      href="#download"
                      className="flex items-center justify-center gap-3"
                    >
                      <FaGooglePlay className="w-8 h-8" /> حمل التطبيق - Android
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-[70%] border-2 border-gray-500 hover:border-orange-500 text-gray-300 hover:text-white font-bold text-lg py-8 rounded-full flex items-center justify-center gap-3"
                  >
                    <FaAppStoreIos className="w-8 h-8" /> iOS (قريبًا)
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

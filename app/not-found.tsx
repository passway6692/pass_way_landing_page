// app/not-found.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Home, Frown } from "lucide-react";

export default function NotFound() {
  return (
    <>
      {/* خلفية درامية */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/2.jpg" //
          alt=""
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-black/90 to-slate-950/90" />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-9xl md:text-[12rem] lg:text-[16rem] font-black leading-none mb-8">
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl">
              4
            </span>
            <span className="text-white drop-shadow-2xl">0</span>
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
              4
            </span>
          </h1>

          {/* الرسالة الرئيسية */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-orange-400 mb-8"
          >
            أووبس! الطريق ده مش موجود
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-2xl md:text-4xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            يمكن الصفحة اتحركت، أو إنك كتبت الرابط غلط، أو إن السواق غيّر الخط
            <Frown className="inline-block ml-3 w-12 h-12 text-orange-400" />
          </motion.p>

          {/* الأزرار */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-2xl px-16 py-10 rounded-full shadow-2xl flex items-center gap-4 group"
            >
              <Link href="/">
                <Home className="w-10 h-10 group-hover:scale-110 transition" />
                ارجع الرئيسية
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 font-bold text-2xl px-16 py-10 rounded-full backdrop-blur flex items-center gap-4 group"
            >
              <Link href="/" className="flex items-center gap-4">
                <ArrowLeft className="w-10 h-10 group-hover:-translate-x-2 transition" />
                خدني مكان آمن
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

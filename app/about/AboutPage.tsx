// app/about/page.tsx
"use client";
import { MotionDiv } from "@/components/MotionDiv";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  Zap,
  HeartHandshake,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function AboutPage() {
  return (
    <MotionDiv>
      <ParticlesBackground />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/5.jpg"
          alt="عن Pass Way"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* امسح الـ MotionDiv الخارجي، واستخدم motion.div عادي */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-tight mb-8"
          >
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Pass
            </span>
            <span className="text-white">Way</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-5xl md:text-7xl font-black text-orange-400 mb-10"
          >
            من إحنا؟
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="text-3xl md:text-5xl max-w-5xl mx-auto font-medium text-gray-200 leading-relaxed"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}
          >
            منصة مصرية 100% بتحب الناس وبتفهم مشاكل المواصلات اليومية
          </motion.p>
        </motion.div>
      </section>

      {/* القصة + الهدف */}
      <section className="py-32 bg-gradient-to-b from-black to-slate-950 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl lg:text-8xl font-black mb-10 text-orange-400">
                القصة بدأت منين؟
              </h2>
              <div className="space-y-8 text-2xl md:text-3xl leading-relaxed text-gray-300">
                <p>
                  كل يوم بنسمع نفس الكلام:المواصلات غالية،الأوبر بيغلي في
                  الزحمة،الباص متأخر ومش مريح...
                </p>
                <p className="text-orange-300 font-bold">
                  قولنا لأ. لازم نعمل حاجة أذكى وأوفر وأكثر أمانًا.
                </p>
                <p>
                  عشان كده عملنا{" "}
                  <span className="text-orange-400 font-black">Pass Way</span> —
                  عشان الناس تركب براحة، تدفع أقل، وتعرف بالظبط هتدفع كام من أول
                  لحظة.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-500/20 to-amber-600/20 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/30 shadow-2xl">
                <HeartHandshake className="w-32 h-32 mx-auto mb-8 text-orange-400" />
                <p className="text-4xl font-black text-center text-orange-300">
                  هدفنا بسيط:
                </p>
                <p className="text-3xl text-center mt-6 text-gray-200">
                  نوفر عليك من 40-60% من تمن المواصلات اليومية
                  <br />
                  ونخليك تسافر براحة وسعر ثابت
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ليه Pass Way مختلف؟ */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-8xl font-black mb-20 text-orange-400"
          >
            ليه الناس بتحب{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Pass Way
            </span>
            ؟
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {[
              {
                icon: Shield,
                title: "أمان مطلق",
                desc: "سائقين وركاب متحقق منهم",
              },
              { icon: Zap, title: "سعر ثابت", desc: "من غير زيادة ولا مفاجآت" },
              {
                icon: Users,
                title: "مجتمع موثوق",
                desc: "تقييمات + سجل رحلات",
              },
              {
                icon: Sparkles,
                title: "حجز مرن",
                desc: "يوم.. أسبوع.. براحتك",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-orange-500/20 hover:border-orange-500/40 transition-all hover:scale-105 shadow-2xl"
              >
                <item.icon className="w-20 h-20 mx-auto mb-6 text-orange-400" />
                <h3 className="text-3xl font-black mb-4 text-orange-300">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* الفريق + الرؤية */}
      <section className="py-32 bg-gradient-to-b from-slate-950 to-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-8xl font-black mb-16 text-orange-400"
          >
            إحنا مش بس تطبيق
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl max-w-5xl mx-auto font-medium text-gray-200 leading-relaxed mb-20"
          >
            إحنا ناس زيكم فاهمين إن المشوار اليومي مش مجرد مواصلات…
            <br />
            ده جزء من يومك، من راحتك، من فلوسك.
          </motion.p>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-3xl px-20 py-12 rounded-full shadow-2xl"
            >
              <Link href="#download">
                <CheckCircle className="w-12 h-12 ml-4" />
                ابدأ توفر دلوقتي
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}

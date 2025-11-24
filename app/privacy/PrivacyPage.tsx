"use client";
import ParticlesBackground from "@/components/ParticlesBackground";
import {
  Shield,
  Lock,
  EyeOff,
  Smartphone,
  Mail,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";

export default function PrivacyPage() {
  const sections = [
    {
      icon: Shield,
      title: "نحترم خصوصيتك 100%",
      color: "text-orange-400",
      desc: "في Pass Way، خصوصيتك مش مجرد كلام… دي أولوية مطلقة. بنتعامل مع بياناتك كأنها بياناتنا.",
    },
    {
      icon: Lock,
      title: "إيه اللي بنجمعه بالظبط؟",
      items: [
        "اسمك ورقم تليفونك (عشان نتواصل معاك)",
        "موقعك الحالي ووجهتك (لازم نعرف نوديك فين)",
        "بيانات الرحلات (تاريخ، وقت، خط السير)",
        "طريقة الدفع (مش بنخزن بيانات الكارت أبدًا)",
      ],
    },
    {
      icon: EyeOff,
      title: "إيه اللي مابنعملوش أبدًا؟",
      color: "text-red-400",
      items: [
        "ما بنبيعش بياناتك لأي حد",
        "ما بنشاركش موقعك مع طرف تالت إلا في حالة الطوارئ",
        "ما بنستخدمش بياناتك في إعلانات",
        "ما بنخزنش بيانات بطاقتك البنكية",
      ],
    },
  
    {
      icon: Mail,
      title: "حقوقك كمستخدم",
      items: [
        "تقدر تطلب حذف كل بياناتك في أي وقت",
        "تقدر تعترض على أي استخدام لبياناتك",
        "كل طلباتك بتتنفذ خلال 72 ساعة كحد أقصى",
      ],
    },
  ];

  return (
    <MotionDiv>
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/privacy-bg.jpg" // صورة قفل ذكي، أو درع رقمي، أو بصمة إصبع، أو شاشة موبايل بقفل
          alt="سياسة الخصوصية - Pass Way"
          fill
          priority
          className="object-cover brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-tight mb-8">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                خصوصيتك
              </span>{" "}
              <br />
              <span className="text-white">في أمان</span>
            </h1>

            <p className="text-4xl md:text-6xl font-bold text-orange-400 mb-6">
              بياناتك = أمانتك عندنا
            </p>

            <p className="text-2xl md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ما تقلقش… إحنا مش بنخون الثقة. كل حاجة بتتعامل بسرية تامة وأمان
              عالي جدًا.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* المحتوى الرئيسي */}
      <section className="py-32 bg-gradient-to-b from-black to-slate-950 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-orange-500/20 shadow-2xl overflow-hidden hover:border-orange-500/40 transition-all"
              >
                <div
                  className={`bg-gradient-to-r ${
                    section.color
                      ? section.color + "/20"
                      : "from-orange-500/20 to-amber-600/20"
                  } p-8 text-center`}
                >
                  <section.icon className="w-20 h-20 mx-auto text-orange-400" />
                  <h2
                    className={`text-4xl font-black mt-4 ${
                      section.color ? section.color : "text-orange-300"
                    }`}
                  >
                    {section.title}
                  </h2>
                </div>

                <div className="p-10 space-y-6 text-xl md:text-2xl text-gray-300">
                  {section.desc && (
                    <p className="text-center font-medium text-orange-200">
                      {section.desc}
                    </p>
                  )}
                  {section.items?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* آخر تحديث + تواصل */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 text-center bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/20"
          >
            <p className="text-3xl font-bold text-orange-400 mb-4">
              آخر تحديث: 24 نوفمبر 2025
            </p>
            <p className="text-xl text-gray-400 mb-8">
              أي سؤال عن بياناتك؟ كلمنا فورًا:
            </p>
            <a
              href="mailto:support@passwayegy.com"
              className="inline-flex items-center gap-3 text-2xl font-bold text-orange-400 hover:text-amber-300 transition"
            >
              <Mail className="w-8 h-8" />
              support@passwayegy.com
            </a>
          </motion.div>
        </div>
      </section>
    </MotionDiv>
  );
}

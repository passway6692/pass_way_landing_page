/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  CheckCircle,
  Sparkles,
  Facebook,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

import Image from "next/image";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PassWayFinalMaster() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("particles") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color:
          Math.random() > 0.6
            ? "rgba(251, 146, 60, 0.3)"
            : "rgba(15, 23, 42, 0.5)",
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <>
      <canvas
        id="particles"
        className="fixed inset-0 pointer-events-none z-10"
      />

      <main
        className="relative min-h-screen overflow-x-hidden bg-slate-950"
        dir="rtl"
      >
        {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-black/95 backdrop-blur-2xl border-b border-orange-500/20"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-6 py-5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.jpg"
                width={70}
                height={70}
                alt="Pass Way"
                className="rounded-full ring-4 ring-orange-500/60 shadow-2xl"
              />
              <span className="text-4xl font-black hidden md:block  ">
                <span className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Pass
                </span>{" "}
                <span className="text-white">Way</span>
              </span>
            </div>

            <div className="flex gap-6">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-amber-600 text-white font-black text-xl px-12 py-7 rounded-full shadow-2xl"
              >
                <a href="#download">
                  <FaGooglePlay className="ml-3 w-8 h-8" /> Android
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-500 text-gray-300 hover:bg-white/10 hover:border-orange-500 font-bold text-xl px-12 py-7 rounded-full transition"
              >
                <FaAppStoreIos className="ml-3 w-8 h-8" /> iOS (قريبًا)
              </Button>
            </div>
          </div>
        </motion.header>

        {/* HERO */}
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden pt-24">
          <Image
            src="/1.jpg"
            alt="Pass Way"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-linear-to-br from-orange-600/25 via-transparent to-slate-900/70" />

          <div className="container mx-auto px-6 relative z-20 text-center text-white mt-32">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black leading-tight mb-8">
                <span className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Pass
                </span>{" "}
                <span className="text-white">Way</span>
                <span className="block text-5xl sm:text-7xl lg:text-8xl mt-4 text-orange-400 drop-shadow-2xl">
                  رحلتك اليومية…
                </span>
              </h1>

              <p className="text-5xl sm:text-7xl lg:text-8xl font-black mb-12">
                <span className="bg-linear-to-r from-white via-orange-200 to-amber-300 bg-clip-text text-transparent">
                  بس شكل أذكى وأوفر
                </span>
              </p>

              <p
                className="text-2xl sm:text-3xl lg:text-4xl max-w-5xl mx-auto mb-16 font-medium leading-relaxed"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}
              >
                احجز مشاويرك اليومية بطريقة مرنة ومنظمة وسعر ثابت — من غير
                انتظار أتوبيس ولا أسعار لحظية بتجنن.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-10">
                <Button className="bg-orange-500 hover:bg-amber-600 text-white font-black text-3xl px-20 py-10 rounded-full shadow-2xl hover:scale-105 transition">
                  <Sparkles className="ml-5 w-10 h-10" /> حمل التطبيق الآن
                </Button>
                <Button
                  variant="outline"
                  className="border-4 border-white text-white hover:bg-white/10 font-black text-3xl px-20 py-10 rounded-full backdrop-blur"
                >
                  <FaAppStoreIos className="ml-5 w-10 h-10" /> iOS قريبًا
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
          >
            <ChevronDown className="w-12 h-12" />
          </motion.div>
        </section>

        {/* ليه Pass Way؟ */}
        <section className="py-32 bg-linear-to-b from-slate-950 to-black text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-6xl lg:text-8xl font-black mb-20 text-orange-400"
            >
              ليه{" "}
              <span className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Pass
              </span>{" "}
              Way؟
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {[
                { title: "حجز مرن", desc: "احجز قبلها بوقت مناسب حسب خط سيرك" },
                {
                  title: "سعر ثابت وواضح",
                  desc: "بدون مفاجآت أو زيادات مفاجئة",
                },
                {
                  title: "اختيارات متعددة",
                  items: ["حجز فردي", "حجز ثنائي", "حجز ثلاثي "],
                },
                {
                  title: "دفع إلكتروني آمن",
                  desc: "60 دقيقة للدفع وإلا يتلغى الحجز تلقائيًا",
                },
                {
                  title: "راكب وسائق متحقق منهم",
                  desc: "بيانات واضحة، تقييمات، وسجل رحلات",
                },
                {
                  title: "إلغاء مجاني",
                  desc: "قبل الرحلة بـ 8 ساعات استرجاع 100%",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-orange-500/10 shadow-2xl hover:border-orange-500/30 transition"
                >
                  <h3 className="text-4xl font-black mb-4 text-orange-400">
                    {item.title}
                  </h3>
                  <p className="text-xl leading-relaxed text-gray-300">
                    {item.desc}
                  </p>
                  {item.items && (
                    <div className="mt-6 space-y-3">
                      {item.items.map((it, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center gap-3"
                        >
                          <CheckCircle className="w-8 h-8 text-orange-400" />
                          <span className="text-lg text-gray-200">{it}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* إزاى الخدمة بتشتغل؟ */}
        <section className="py-32 bg-black text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-6xl lg:text-8xl font-black text-center mb-24 text-orange-400">
              إزاى الخدمة بتشتغل؟
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {[
                {
                  num: "01",
                  title: "حدّد الحجز المناسب ليك",
                  items: [
                    "الحجز الثلاثى (3 أفراد) — أوفر",
                    "الحجز الثنائى (فردين)",
                    "حجز خاص — رحلة فردية",
                  ],
                },
                {
                  num: "02",
                  title: "اختار خط سيرك",
                  desc: "نقطة ركوب • نزول • موعد • عدد الأيام",
                },
                {
                  num: "03",
                  title: "شوف التكلفة قبل ما تؤكد",
                  desc: "السعر واضح 100% قبل الحجز",
                },
                {
                  num: "04",
                  title: "ادفع إلكترونيًا",
                  desc: "60 دقيقة وإلا الحجز يتلغى تلقائيًا",
                },
                {
                  num: "05",
                  title: "اتعرف على السائق",
                  desc: "اسم • عربية • تقييم • رقم",
                },
                {
                  num: "06",
                  title: "جهّز نفسك للرحلة",
                  desc: "إشعار • تتبع • تواصل مباشر",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-40 h-40 mx-auto mb-8 bg-linear-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-6xl font-black text-white shadow-2xl">
                    {step.num}
                  </div>
                  <h3 className="text-4xl font-black mb-4 text-orange-400">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-300">{step.desc}</p>
                  {step.items && (
                    <div className="mt-8 space-y-4">
                      {step.items.map((it, idx) => (
                        <div
                          key={idx}
                          className="bg-orange-500/10 backdrop-blur px-8 py-4 rounded-full text-lg font-bold text-orange-300 border border-orange-500/20"
                        >
                          {it}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* للسائقين */}
        <section className="py-32 bg-linear-to-b from-black to-slate-950 text-white">
          <div className="container mx-auto px-6 text-center max-w-5xl">
            <h2 className="text-6xl lg:text-8xl font-black mb-12 text-orange-400">
              للسائقين: اكسب زيادة
            </h2>
            <p className="text-4xl mb-16 text-orange-300">
              بخط سير ثابت وركاب منظمين
            </p>
            <div className="grid md:grid-cols-3 gap-10 text-2xl">
              {[
                "حجوزات مسبقة — عارف جدولك قبلها",
                "سعر ثابت مناسب",
                "رحلات مستقرة بدون لف كتير",
                "أفضل سعر صافي للكيلو متر",
                "عمولة بسيطة وواضحة",
                "دعم فني سريع",
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-orange-500/10 hover:border-orange-500/30 transition"
                >
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                  <p className="text-gray-200">{t}</p>
                </div>
              ))}
            </div>
            <Button className="mt-20 bg-linear-to-r from-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-500 text-white font-black text-3xl px-24 py-12 rounded-full shadow-2xl">
              سجل كابتن دلوقتي
            </Button>
          </div>
        </section>

        {/* تسعير + من إحنا؟ */}
        <section className="py-32 bg-linear-to-b from-slate-950 to-black text-white">
          <div className="container mx-auto px-6 space-y-32 text-center">
            <div>
              <h2 className="text-6xl lg:text-8xl font-black mb-12 text-orange-400">
                تسعير مرن وعادل
              </h2>
              <p className="text-3xl lg:text-4xl font-medium text-gray-300">
                نوع الحجز • المسافة • بدون ذروة • بدون مفاجآت
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-black mb-10">
                <span className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Pass
                </span>{" "}
                <span className="text-white">Way</span> — من إحنا؟
              </h2>
              <p className="text-2xl lg:text-3xl leading-relaxed text-gray-300">
                منصة مصرية بتربط الناس اللي رايحين نفس الاتجاه بسعر ثابت وبأمان
                تام
              </p>
            </div>
          </div>
        </section>

        {/* الأمان + المقارنة + FAQ */}
        <section className="py-32 bg-black text-white">
          <div className="container mx-auto px-6 space-y-32">
            {/* الأمان */}
            <div className="text-center">
              <h2 className="text-6xl lg:text-8xl font-black mb-20 text-orange-400">
                الأمان أولوية مطلقة
              </h2>
              <div className="grid md:grid-cols-4 gap-10">
                {[
                  "بيانات متحققة",
                  "خط سير ثابت",
                  "تقييم بعد كل رحلة",
                  "دعم 24/7",
                ].map((t) => (
                  <div
                    key={t}
                    className="bg-white/5 p-10 rounded-2xl border border-orange-500/10"
                  >
                    <Shield className="w-20 h-20 mx-auto mb-6 text-orange-400" />
                    <p className="text-2xl font-bold text-gray-200">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ليه هو الأفضل؟ */}
            <div className="text-center">
              <h2 className="text-6xl lg:text-8xl font-black mb-20 text-orange-400">
                ليه{" "}
                <span className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Pass
                </span>{" "}
                Way هو البديل الأفضل؟
              </h2>
              <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto text-xl">
                {[
                  "أوفر 40–60% من الطلب اللحظي",
                  "أنضف وأريح من الباصات (2–3 ركاب فقط)",
                  "دفع إلكتروني مسبق = مافيش كاش",
                  "Matching ذكي يضمن الراحة",
                  "Zero Surge Pricing",
                  "أمان ومتابعة أعلى",
                ].map((t, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500/30 transition"
                  >
                    <CheckCircle className="w-12 h-12 text-orange-400 mb-4" />
                    <p className="text-gray-200">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-6xl font-black text-center mb-16 text-orange-400">
                أسئلة شائعة
              </h2>
              <Accordion type="single" collapsible className="space-y-6">
                {[
                  {
                    q: "لو السائق لغى الرحلة؟",
                    a: "بنبلّغك فورًا ورصيدك جاهز معانا — تستخدمه في حجز جديد أو تطلب استرجاع فوري",
                  },
                  {
                    q: "لازم أشترك فترة طويلة؟",
                    a: "لأ، احجز يوم… أو أسبوع… براحتك",
                  },
                  {
                    q: "ده مشوار لحظي؟",
                    a: "لأ — ده حجز مرن بين ناس ماشية في نفس الاتجاه، مش خدمة طلب لحظي",
                  },
                  {
                    q: "يعني إيه رحلات مشتركة؟",
                    a: "3 ركاب فقط على نفس الطريق، بدون تغيير خط السير",
                  },
                  {
                    q: "لو اتأخرت؟",
                    a: "في انتظار 5 دقائق فقط لأن الرحلة محجوزة مسبقًا",
                  },
                  { q: "لو الكابتن اتأخر؟", a: "الدعم بيتابع فورًا" },
                  { q: "الدفع إزاي؟", a: "إنستا باي والمحافظ الإلكترونية" },
                  { q: "ينفع أحجز أكتر من يوم؟", a: "أيوه، حتى أسبوع كامل" },
                  {
                    q: "ممكن ألغي الحجز؟",
                    a: "أكيد — قبل 8 ساعات استرجاع 100% بدون مصاريف",
                  },
                ].map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-white/5 backdrop-blur rounded-2xl border border-orange-500/10 hover:border-orange-500/30 transition"
                  >
                    <AccordionTrigger className="text-2xl font-bold text-orange-400 px-8">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-xl px-8 leading-relaxed text-gray-300">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        {/* <section id="download" className="relative py-40 text-white">
          <Image
            src="/4.jpg"
            alt="Download"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-linear-to-t from-orange-900/90 via-slate-900/60 to-transparent" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-7xl lg:text-9xl font-black mb-16 text-orange-400"
            >
              جاهز تبدأ توفر؟
            </motion.h2>
            <p className="text-4xl lg:text-5xl mb-20 max-w-5xl mx-auto text-gray-200">
              حمل التطبيق واستمتع بحجز مرن • سعر ثابت • أمان تام
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-12">
              <Link
                href={"/"}
                target="_blank"
                className={
                  "  bg-white text-orange-600 hover:bg-gray-100 font-black text-4xl px-32 py-16 rounded-full shadow-2xl"
                }
              >
                <FaGooglePlay className="w-16 h-16 ml-6" /> حمل من Google Play
              </Link>
              <Link
                href={"/"}
                className={
                  buttonVariants("outline") +
                  "border-4 border-white text-white hover:bg-white/10 font-black text-4xl px-32 py-16 rounded-full"
                }
              >
                <FaAppStoreIos className="w-16 h-16 ml-6" /> iOS قريبًا
              </Link>
            </div>
          </div>
        </section> */}

        <section
          id="download"
          className="relative py-32 lg:py-44 overflow-hidden"
        >
          {/* الخلفية */}
          <Image
            src="/4.jpg"
            alt="حمل التطبيق"
            fill
            className="object-cover brightness-50"
            priority
          />

          {/* Overlay متعدد الطبقات */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-slate-900/70 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              {/* العنوان */}
              <motion.h2
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-6xl sm:text-7xl lg:text-9xl font-black mb-10 lg:mb-16 text-orange-400 drop-shadow-2xl"
              >
                جاهز تبدأ توفر؟
              </motion.h2>

              {/* النص الفرعي */}
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl mb-16 lg:mb-24 font-medium text-gray-200 leading-relaxed"
              >
                حمل التطبيق واستمتع بحجز مرن • سعر ثابت • أمان تام
              </motion.p>

              {/* أزرار التحميل */}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center items-center gap-10 lg:gap-16"
              >
                {/* Google Play */}
                <Link
                  href="https://play.google.com/store/apps/details?id=com.yourapp.package" // غيّر الرابط
                  target="_blank"
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:shadow-orange-500/50 hover:-translate-y-3"
                >
                  <div className="flex items-center gap-6 px-12 py-9 lg:px-16 lg:py-11">
                    <div className="bg-black rounded-2xl p-4 shadow-2xl">
                      <FaGooglePlay className="w-14 h-14 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 text-lg font-semibold">
                        احصل عليه من
                      </p>
                      <p className="text-4xl lg:text-5xl font-black text-gray-900">
                        Google Play
                      </p>
                    </div>
                  </div>
                  {/* تأثير اللمعان */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
                </Link>

                {/* App Store - قريبًا */}
                <div className="relative group">
                  <Link
                    href="#" // أو ضع الرابط لما يتوفر
                    target="_blank"
                    className="relative block rounded-3xl bg-gradient-to-br from-gray-900 to-black shadow-2xl transition-all duration-500 hover:shadow-cyan-500/40 hover:-translate-y-3 overflow-hidden cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="flex items-center gap-6 px-12 py-9 lg:px-16 lg:py-11 opacity-80">
                      <div className="bg-white rounded-2xl p-4 shadow-2xl">
                        <FaAppStoreIos className="w-14 h-14 text-black" />
                      </div>
                      <div className="text-right">
                        <p className="text-4xl lg:text-5xl font-black text-white">
                          App Store
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 bg-black text-white text-center border-t border-orange-500/20">
          <div className="container mx-auto px-6">
            <p className="text-4xl font-black mb-6">
              © 2025{" "}
              <span className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Pass
              </span>{" "}
              <span className="text-white">Way</span> — من تنفيذ Tanfeez
            </p>
            <p className="text-3xl text-orange-400 mb-10">معاك في كل خطوة</p>

            <p className="text-xl lg:text-2xl text-gray-400 max-w-5xl mx-auto leading-relaxed mb-10">
              Pass Way is proudly accelerated by{" "}
              <a
                href="http://fastercapital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline hover:text-amber-300"
              >
                FasterCapital
              </a>{" "}
              as part of their Startup Support Programs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-3xl">
              <Link
                href="https://web.facebook.com/PassWayHeadOffice"
                target="_blank"
                className="flex items-center gap-4 hover:text-orange-400 transition"
              >
                <Facebook className="w-12 h-12" /> تابعنا على فيسبوك
              </Link>
              <a
                href="http://fastercapital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-amber-400 transition"
              >
                <Sparkles className="w-10 h-10" /> Accelerated by FasterCapital
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

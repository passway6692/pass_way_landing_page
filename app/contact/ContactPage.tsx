// app/contact/page.tsx
"use client";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  MessageCircle,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";
import { MotionDiv } from "@/components/MotionDiv";

export default function ContactPage() {
  return (
    <MotionDiv>
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/4.jpg" // صورة طريق + ناس بتسأل أو موبايل بتطبيق
          alt="تواصل مع Pass Way"
          fill
          priority
          className="object-cover brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

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
              تواصل
            </span>{" "}
            <span className="text-white">معانا</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-4xl md:text-6xl font-black text-orange-400 mb-10"
          >
            إحنا هنا عشانك 24/7
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            className="text-3xl md:text-5xl max-w-4xl mx-auto font-medium text-gray-200 leading-relaxed"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}
          >
            سؤال؟ مشكلة في حجز؟ اقتراح حلو؟ كلمنا في أي وقت
          </motion.p>
        </motion.div>
      </section>

      {/* طرق التواصل */}
      <section className="py-32 bg-gradient-to-b from-black to-slate-950 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-8xl font-black mb-20 text-orange-400"
          >
            كلمنا بأي طريقة تحبها
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: "واتساب مباشر",
                desc: "أسرع رد",
                link: "https://wa.me/201234567890",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: Phone,
                title: "اتصل بينا",
                desc: "من 9 صباحًا لـ 11 مساءً",
                link: "tel:+201234567890",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: Mail,
                title: "إيميل",
                desc: "support@passwayegy.com",
                link: "mailto:support@passwayegy.com",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: Facebook,
                title: "فيسبوك",
                desc: "رد في أقل من ساعة",
                link: "https://facebook.com/PassWayHeadOffice",
                color: "from-blue-600 to-indigo-700",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <Link
                  href={item.link}
                  target="_blank"
                  className="block bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-orange-500/20 hover:border-orange-500/50 transition-all hover:scale-105 shadow-2xl"
                >
                  <div
                    className={`w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} p-6 shadow-xl group-hover:scale-110 transition`}
                  >
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-3 text-orange-300">
                    {item.title}
                  </h3>
                  <p className="text-xl text-gray-300">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* متوسط وقت الرد + دعم */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500/20 to-amber-600/20 backdrop-blur-xl rounded-3xl p-16 border border-orange-500/30 shadow-2xl"
          >
            <Clock className="w-24 h-24 mx-auto mb-8 text-orange-400" />
            <h2 className="text-5xl lg:text-7xl font-black mb-8 text-orange-300">
              متوسط وقت الرد: أقل من 5 دقايق
            </h2>
            <p className="text-3xl text-gray-200 leading-relaxed">
              فريق الدعم شغال 24/7 عشانك، حتى في الأجازات والعيد
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-3xl px-24 py-12 rounded-full shadow-2xl flex items-center gap-4 mx-auto"
            >
              <Link href="#download">
                <Send className="w-12 h-12" />
                حمل التطبيق وابدأ توفر
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* رسالة أخيرة */}
      <section className="py-32 bg-gradient-to-b from-slate-950 to-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-orange-400 max-w-4xl mx-auto leading-relaxed"
          >
            مش مجرد خدمة عملاء…
            <br />
            <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              ده عيلتك اللي بتسوق معاك كل يوم
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center gap-8"
          >
            <CheckCircle className="w-16 h-16 text-orange-400" />
            <CheckCircle className="w-16 h-16 text-orange-400" />
            <CheckCircle className="w-16 h-16 text-orange-400" />
          </motion.div>
        </div>
      </section>
    </MotionDiv>
  );
}

// app/terms/page.tsx
"use client";
import ParticlesBackground from "@/components/ParticlesBackground";
import {
  FileText,
  Clock,
  Shield,
  Ban,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";

export default function TermsPage() {
  const terms = [
    {
      icon: FileText,
      title: "الحجز والدفع",
      items: [
        "الحجز يُلغى تلقائيًا إذا لم يتم الدفع خلال 60 دقيقة من تأكيد الحجز",
        "الدفع إلكتروني فقط عبر المحافظ الإلكترونية أو إنستا باي",
        "السعر ثابت وواضح 100% قبل تأكيد الحجز",
        "إذا كانت الرحلة تبدأ بعد أقل من 8 ساعات: لازم تدفع خلال ساعة واحدة فقط من الحجز",
        "إذا كانت الرحلة تبدأ بعد أكثر من 8 ساعات: معاك وقت للدفع حتى يتبقى 8 ساعات على الرحلة (وقتها هيبقى معاك ساعة واحدة للدفع)",
      ],
    },
    {
      icon: Clock,
      title: "الإلغاء والاسترداد",
      color: "text-green-400",
      items: [
        "إلغاء مجاني 100% إذا كان قبل الرحلة بـ 8 ساعات أو أكثر",
        "إلغاء قبل الرحلة بأقل من 8 ساعات وحتى 6 ساعات: خصم 30% من قيمة الحجز",
        "إلغاء قبل الرحلة بأقل من 6 ساعات: لا يوجد استرداد",
      ],
    },
    {
      icon: Shield,
      title: "قواعد الرحلة",
      items: [
        "الراكب والسائق ملزمين بالمواعيد المحددة  ",
        "ممنوع التدخين أو تناول الأكل ذو الرائحة القوية داخل العربية",
        "جميع السائقين تم التحقق من هويتهم وبياناتهم وسجلهم المروري",
      ],
    },
    {
      icon: AlertCircle,
      title: "المسؤولية والأمان",
      color: "text-orange-400",
      items: [
        "يحق للشركة إلغاء أو تعطيل أي حساب يخالف الشروط بدون إنذار مسبق",
        "ممنوع مشاركة تفاصيل الرحلة (مكان الركوب، رقم السائق، إلخ) خارج التطبيق",
        "التطبيق للاستخدام الشخصي فقط وغير مسموح باستخدامه تجاريًا",
      ],
    },
    {
      icon: Ban,
      title: "ممنوع تمامًا",
      color: "text-red-400",
      items: [
        "نقل بضائع أو مواد محظورة قانونيًا",
        "استخدام التطبيق في أي نشاط غير قانوني",
        "إنشاء حسابات وهمية أو ببيانات مزيفة",
        "محاولة التلاعب بنظام الحجز أو الأسعار",
      ],
    },
  ];

  return (
    <MotionDiv>
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/terms-bg.jpg"
          alt="الشروط والأحكام - Pass Way"
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
                الشروط
              </span>{" "}
              <span className="text-white">&</span>
              <br />
              <span className="text-white">الأحكام</span>
            </h1>

            <p className="text-4xl md:text-6xl font-bold text-orange-400 mb-6">
              عشان نكون كلنا على نفس الطريق
            </p>

            <p className="text-2xl md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              باستخدامك Pass Way، أنت بتوافق على القواعد دي عشان نضمن تجربة
              آمنة، عادلة، ومريحة للكل
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* المحتوى الرئيسي */}
      <section className="py-32 bg-gradient-to-b from-black to-slate-950 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {terms.map((section, i) => (
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
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <CheckCircle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* آخر تحديث */}
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
            <p className="text-xl text-gray-400">
              يحق لشركة Pass Way تعديل الشروط في أي وقت مع إشعار المستخدمين عبر
              التطبيق أو البريد الإلكتروني
            </p>
          </motion.div>
        </div>
      </section>
    </MotionDiv>
  );
}

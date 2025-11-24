// app/terms/page.tsx
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import { MotionDiv } from "@/components/MotionDiv";

export const metadata = { title: "الشروط والأحكام | Pass Way" };

export default function Terms() {
  return (
    <>
      <ParticlesBackground />
      <MotionDiv>
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-black text-center mb-16 text-orange-400">
            الشروط والأحكام
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 space-y-8 leading-relaxed bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-orange-500/20">
            <p>باستخدامك Pass Way فأنت توافق على الآتي:</p>
            <p>• الحجز يلغى تلقائيًا إذا لم يتم الدفع خلال 60 دقيقة</p>
            <p>• إلغاء مجاني 100% قبل الرحلة بـ 8 ساعات</p>
            <p>• يحق للشركة إلغاء أي حساب يخالف القواعد</p>
            <p>• السائق والراكب ملزمين بالمواعيد</p>
            <p>آخر تحديث: 24 نوفمبر 2025</p>
          </div>
        </div>
      </MotionDiv>
    </>
  );
}

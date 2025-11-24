// app/about/page.tsx
import { MotionDiv } from "@/components/MotionDiv";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata = {
  title: "عن Pass Way - مشاوير يومية أرخص وأذكى في مصر",
  description: "منصة مصرية لحجز مشاوير يومية مشتركة بسعر ثابت وأمان تام",
};

export default function About() {
  return (
    <>
      <ParticlesBackground />
      <MotionDiv>
        <div className="container mx-auto px-6 pt-32 pb-20 min-h-screen text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-12">
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Pass
            </span>{" "}
            <span className="text-white">Way</span>
          </h1>
          <p className="text-3xl md:text-5xl font-bold text-orange-400 mb-10">
            من إحنا؟
          </p>
          <div className="max-w-4xl mx-auto text-2xl md:text-3xl leading-relaxed text-gray-300 space-y-8">
            <p>
              منصة مصرية 100% بتربط الركاب مع سائقين موثوقين في رحلات يومية بين
              المحافظات.
            </p>
            <p>
              هدفنا: نوفر عليك من 40-60% من تمن المواصلات اليومية، ونخليك تسافر
              براحة وسعر ثابت من غير أي مفاجآت.
            </p>
            <p>الأمان أولوية مطلقة ✓ الدفع إلكتروني ✓ إلغاء مجاني ✓ حجز مرن</p>
          </div>
        </div>
      </MotionDiv>
    </>
  );
}

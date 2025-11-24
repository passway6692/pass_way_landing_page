// app/privacy/page.tsx   ← خلّيه Server Component (مفيش "use client")
import { MotionDiv } from "@/components/MotionDiv"; // هنعمل المكون ده تحت
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata = {
  title: "سياسة الخصوصية | Pass Way",
  description: "سياسة خصوصية تطبيق باس واي - حجز مشاوير يومية مشتركة في مصر",
};

export default function Privacy() {
  return (
    <>
      <ParticlesBackground />
      <MotionDiv>
        <div className="container mx-auto px-6 max-w-5xl pt-32 pb-20 min-h-screen">
          <h1 className="text-6xl md:text-8xl font-black text-center mb-16 text-orange-400">
            سياسة الخصوصية
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 space-y-8 leading-relaxed bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-orange-500/20">
            <p>آخر تحديث: 24 نوفمبر 2025</p>
            <p>
              في Pass Way نحترم خصوصيتك تمامًا وملتزمون بحماية بياناتك الشخصية.
            </p>
            <p>
              نجمع فقط: الاسم، رقم التليفون، الموقع، وبيانات الرحلات اللازمة
              لتقديم الخدمة.
            </p>
            <p>لا نبيع بياناتك أبدًا لأي طرف ثالث.</p>
            <p>كل البيانات مشفرة ومحمية بأعلى معايير الأمان.</p>
            <p className="text-orange-400">للتواصل: support@passwayegy.com</p>
          </div>
        </div>
      </MotionDiv>
    </>
  );
}

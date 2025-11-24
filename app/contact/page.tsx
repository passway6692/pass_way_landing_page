// app/contact/page.tsx
import ParticlesBackground from "@/components/ParticlesBackground";
import { MotionDiv } from "@/components/MotionDiv";

export const metadata = { title: "تواصل مع Pass Way" };

export default function Contact() {
  return (
    <>
      <ParticlesBackground />
      <MotionDiv>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-16 text-orange-400">
            تواصل معانا
          </h1>
          <div className="text-3xl md:text-5xl space-y-10 text-gray-300">
            <p>
              الإيميل:{" "}
              <a
                href="mailto:support@passwayegy.com"
                className="text-orange-400 hover:underline"
              >
                support@passwayegy.com
              </a>
            </p>
            <p>
              فيسبوك:{" "}
              <a
                href="https://facebook.com/PassWayHeadOffice"
                target="_blank"
                className="text-orange-400 hover:underline"
              >
                PassWayHeadOffice
              </a>
            </p>
            <p>واتساب: 010xxx</p>
          </div>
        </div>
      </MotionDiv>
    </>
  );
}

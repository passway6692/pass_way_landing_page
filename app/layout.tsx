/* eslint-disable @next/next/no-page-custom-font */
// app/layout.tsx
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header"; // ← جديد
import ParticlesBackground from "@/components/ParticlesBackground"; // ← جديد (لكل الصفحات)

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cairo",
});

// Metadata عام للموقع كله (الصفحات الفردية هتكمل عليه)
export const metadata: Metadata = {
  title: {
    default: "Pass Way - حجز مشاوير يومية بسعر ثابت في مصر",
    template: "%s | Pass Way",
  },
  description:
    "احجز مشاويرك اليومية بين المحافظات بسعر ثابت ✓ حجز فردي وثنائي وثلاثي ✓ دفع إلكتروني آمن ✓ حمل تطبيق Pass Way الآن",
  keywords:
    "باس واي, pass way, حجز مشاوير, مشاوير يومية, مشاوير مشتركة, رحلات بين المحافظات, سعر ثابت, بديل أوبر, بديل كريم, passway",
  authors: [{ name: "Pass Way", url: "https://passwayegy.com" }],
  creator: "Pass Way",
  publisher: "Pass Way",
  metadataBase: new URL("https://passwayegy.com"),

  openGraph: {
    title: "Pass Way - مشاوير يومية أرخص وأذكى في مصر",
    description: "وفر من 40-60% على مشاويرك مع سعر ثابت ودفع إلكتروني",
    url: "https://passwayegy.com",
    siteName: "Pass Way",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }], // اعمل الصورة دي 1200×630
    locale: "ar_EG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pass Way - أرخص وأذكى مشاوير يومية في مصر",
    description: "سعر ثابت ✓ دفع إلكتروني ✓ إلغاء مجاني ✓ حمل التطبيق الآن",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://passwayegy.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@700;900&family=Tajawal:wght@800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="msvalidate.01" content="180EE1D47272A99C3E0FCE1CCE0948F0" />
        {/* OG Image حقيقية (مهمة جدًا للسوشيال ميديا) */}
        <meta
          property="og:image"
          content="https://passwayegy.com/og-image.jpg"
        />
        <meta
          name="twitter:image"
          content="https://passwayegy.com/og-image.jpg"
        />
      </head>

      <body className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Particles في الخلفية لكل الموقع */}
          <ParticlesBackground />

          <Header />

          <main className="relative z-20 pt-28 md:pt-32 lg:pt-36">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "باس واي | Pass Way - حجز مشاوير يومية مشتركة بسعر ثابت في مصر",
  description:
    "احجز مشاويرك اليومية بين المحافظات بسعر ثابت وواضح مقدمًا ✓ حجز فردي وثنائي وثلاثي ✓ دفع إلكتروني آمن ✓ إلغاء مجاني ✓ حمل تطبيق Pass Way الآن من جوجل بلاي",

  keywords: [
    "باس واي",
    "pass way",
    "حجز مشاوير",
    "مشاوير يومية",
    "مشاوير مشتركة",
    "رحلات بين المحافظات",
    "سعر ثابت",
    "بديل أوبر",
    "بديل كريم",
    "حجز مشوار مصر",
    "توفير فلوس المواصلات",
    "تطبيق مشاوير",
    "حجز ميكروباص",
    "مواصلات يومية",
  ].join(", "),

  authors: [{ name: "Pass Way", url: "https://passwayegy.com" }],
  creator: "Pass Way",
  publisher: "Pass Way",

  metadataBase: new URL("https://passwayegy.com"),
  openGraph: {
    title: "Pass Way - مشاوير يومية أرخص وأذكى في مصر",
    description:
      "وفر من 40-60% على مشاويرك اليومية مع حجز مرن وسعر ثابت ودفع إلكتروني",
    url: "https://passway.app",
    siteName: "Pass Way",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pass Way - حجز مشاوير يومية بسعر ثابت",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pass Way  ",
    description:
      "سعر ثابت  دفع إلكتروني  إلغاء مجاني  حمل التطبيق الآن   ارخص وأذكى مشاوير يومية في مصر  ",
    images: ["/logo.jpg"],
    creator: "@passway_app", //
  },

  alternates: {
    canonical: "https://passwayegy.com",
    languages: {
      "ar-EG": "https://passwayegy.com",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      </head>
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}

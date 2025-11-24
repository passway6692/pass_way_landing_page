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
  title: "Pass Way — مشاركة الرحلات بين المحافظات بسهولة وأمان",
  description: "اطلب رحلة أو اعرض مقعد فارغ. وفر فلوسك وسافر بأمان.",
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

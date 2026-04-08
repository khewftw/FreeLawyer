import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

// Оптимизированное подключение шрифта
const openSans = Open_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Федеральный центр юридической поддержки населения — Бесплатная консультация",
  description:
    "Профессиональная юридическая помощь по всей России. Бесплатная горячая линия, консультации по гражданскому, семейному, трудовому и уголовному праву. Защита ваших прав — наш приоритет.",
  keywords:
    "юридическая помощь, бесплатная консультация, адвокат, юрист, правовая поддержка, защита прав",
  icons: {
    icon: "/favicon.jpg",
    apple: "/moscow.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      {/* Применяем класс шрифта напрямую к body */}
      <body className={`${openSans.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
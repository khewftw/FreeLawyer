import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Федеральный центр юридической поддержки населения — Бесплатная консультация",
  description:
    "Профессиональная юридическая помощь по всей России. Бесплатная горячая линия, консультации по гражданскому, семейному, трудовому и уголовному праву. Защита ваших прав — наш приоритет.",
  keywords:
    "юридическая помощь, бесплатная консультация, адвокат, юрист, правовая поддержка, защита прав",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

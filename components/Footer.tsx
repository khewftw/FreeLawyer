"use client";

import { Phone, Mail } from "lucide-react";
import Image from "next/image"; // Импортируем Image

const SITEMAP = [
  {
    title: "Навигация",
    links: [
      { href: "#about", label: "О центре" },
      { href: "#services", label: "Услуги" },
      { href: "#experts", label: "Специалисты" },
      { href: "#timeline", label: "О нас" },
    ],
  },
  {
    title: "Информация",
    links: [
      { href: "#gallery", label: "Галерея" },
      { href: "#contacts", label: "Контакты" },
      { href: "#", label: "Политика конфиденциальности" },
      { href: "#", label: "Пользовательское соглашение" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-inverted" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* Заменили блок с иконкой на логотип */}
              <Image
                src="/moscow.png"
                alt="Логотип Федерального центра"
                width={40}
                height={40}
                className="rounded object-contain shrink-0"
              />
              <span className="font-bold text-[15px] leading-tight">
                Федеральный центр
                <br />
                юридической поддержки
              </span>
            </div>
            <p className="text-sm text-text-inverted/70 leading-relaxed max-w-sm">
              Профессиональная юридическая помощь по всей России.
              Бесплатные консультации, судебное представительство
              и полное правовое сопровождение.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="tel:+79085872787"
                className="inline-flex items-center gap-2 text-sm text-text-inverted/80 hover:text-text-inverted transition-colors"
              >
                <Phone className="w-4 h-4" />
                8 908 587 27 87
              </a>
              <a
                href="mailto:ufo-centr74@yandex.ru"
                className="inline-flex items-center gap-2 text-sm text-text-inverted/80 hover:text-text-inverted transition-colors"
              >
                <Mail className="w-4 h-4" />
                ufo-centr74@yandex.ru
              </a>
            </div>
          </div>

          {SITEMAP.map((col) => (
            <div key={col.title}>
              <p className="font-bold text-sm mb-3">{col.title}</p>
              <nav aria-label={col.title}>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-text-inverted/70 hover:text-text-inverted transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-xs text-text-inverted/50">
              © {new Date().getFullYear()} Федеральный центр юридической
              поддержки населения. Все права защищены.
            </p>
            <p className="text-xs text-text-inverted/50">
              ИНН 7460072945 · КПП 746001001 · ОГРН 1257400029468
            </p>
          </div>
          <p className="mt-3 text-[11px] text-text-inverted/40 leading-relaxed max-w-3xl">
            Информация на сайте не является публичной офертой. Результат
            юридической консультации зависит от конкретных обстоятельств дела.
            Ознакомьтесь с политикой конфиденциальности и условиями обработки
            персональных данных перед подачей заявки.
          </p>
        </div>
      </div>
    </footer>
  );
}
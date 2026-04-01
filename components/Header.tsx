"use client";

import { useState } from "react";
import { Phone, Menu, X, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#about", label: "О центре" },
  { href: "#services", label: "Услуги" },
  { href: "#experts", label: "Специалисты" },
  { href: "#timeline", label: "О нас" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg-main border-b border-border-card shadow-sm">
      <div className="mx-auto max-w-[1200px] px-5 flex items-center justify-between h-16 md:h-[72px]">
        <a
          href="#"
          className="flex items-center gap-3 shrink-0"
          aria-label="На главную"
        >
          <div className="w-10 h-10 rounded bg-dark-blue flex items-center justify-center">
            <Scale className="w-5 h-5 text-text-inverted" />
          </div>
          <span className="hidden sm:block font-bold text-[15px] leading-tight text-dark-blue">
            Федеральный центр
            <br />
            юридической поддержки
          </span>
        </a>

        <nav
          className="hidden lg:flex items-center gap-6"
          aria-label="Основная навигация"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-primary hover:text-secondary-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+78001234567"
            className="flex items-center gap-2 text-secondary-blue font-bold text-[15px]"
            aria-label="Позвонить: 8-800-123-45-67"
          >
            <Phone className="w-4 h-4" />
            8-800-123-45-67
          </a>
          <a
            href="#contacts"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-red text-text-inverted font-bold text-sm uppercase rounded tracking-wide hover:bg-primary-red-hover transition-colors"
          >
            Заказать звонок
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-border-card bg-bg-main"
            aria-label="Мобильная навигация"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-primary hover:text-secondary-blue transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+78001234567"
                className="flex items-center gap-2 text-secondary-blue font-bold text-[15px] mt-2"
              >
                <Phone className="w-4 h-4" />
                8-800-123-45-67
              </a>
              <a
                href="#contacts"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-red text-text-inverted font-bold text-sm uppercase rounded tracking-wide hover:bg-primary-red-hover transition-colors mt-1"
                onClick={() => setMobileOpen(false)}
              >
                Заказать звонок
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

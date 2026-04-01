"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Heart,
  ShieldAlert,
  Briefcase,
  Building2,
  Home,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCategory {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const CATEGORIES: ServiceCategory[] = [
  {
    icon: Scale,
    title: "Гражданское право",
    items: [
      "Защита прав потребителей",
      "Имущественные споры и взыскание долгов",
      "Наследственные дела и оспаривание завещаний",
    ],
  },
  {
    icon: Heart,
    title: "Семейное право",
    items: [
      "Расторжение брака и раздел имущества",
      "Определение места жительства детей",
      "Взыскание и оспаривание алиментов",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Уголовное право",
    items: [
      "Защита обвиняемых и подозреваемых",
      "Экономические преступления",
      "Обжалование приговоров и реабилитация",
    ],
  },
  {
    icon: Briefcase,
    title: "Трудовое право",
    items: [
      "Незаконное увольнение и восстановление",
      "Взыскание невыплаченной зарплаты",
      "Защита при дискриминации на работе",
    ],
  },
  {
    icon: Building2,
    title: "Корпоративное право",
    items: [
      "Регистрация и ликвидация юрлиц",
      "Корпоративные споры и сделки M&A",
      "Защита интеллектуальной собственности",
    ],
  },
  {
    icon: Home,
    title: "Жилищное право",
    items: [
      "Споры с застройщиками и долевое участие",
      "Приватизация и оформление собственности",
      "Выселение и защита прав жильцов",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-bg-secondary py-16 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.h2
          id="services-heading"
          className="font-bold text-[28px] text-dark-blue text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          Направления юридической помощи
        </motion.h2>
        <p className="text-center text-sm text-text-secondary mb-10 max-w-xl mx-auto">
          Оказываем полный спектр правовых услуг для граждан и бизнеса
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.article
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
              className="bg-bg-main border border-border-card rounded p-5"
            >
              <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <cat.icon className="w-5 h-5 text-secondary-blue" />
              </div>
              <h3 className="font-bold text-lg text-dark-blue">{cat.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-red shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacts"
                className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-primary-red text-text-inverted text-sm font-bold rounded hover:bg-primary-red-hover transition-colors"
              >
                Консультация
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

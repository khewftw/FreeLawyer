"use client";

import { motion } from "framer-motion";
import {
  Building,
  FileText,
  Users,
  BookOpen,
  Award,
  Scale,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  span: string;
  gradient: string;
  icon: LucideIcon;
}

const ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Главный офис центра",
    span: "sm:col-span-2 sm:row-span-2",
    gradient: "from-blue-100 to-blue-200",
    icon: Building,
  },
  {
    id: 2,
    title: "Рабочий кабинет юриста",
    span: "",
    gradient: "from-amber-50 to-amber-100",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Образцы правовых документов",
    span: "",
    gradient: "from-rose-50 to-rose-100",
    icon: FileText,
  },
  {
    id: 4,
    title: "Переговорная комната",
    span: "",
    gradient: "from-emerald-50 to-emerald-100",
    icon: Users,
  },
  {
    id: 5,
    title: "Библиотека правовых актов",
    span: "sm:col-span-2",
    gradient: "from-indigo-50 to-indigo-100",
    icon: BookOpen,
  },
  {
    id: 6,
    title: "Награды и сертификаты",
    span: "",
    gradient: "from-purple-50 to-purple-100",
    icon: Award,
  },
  {
    id: 7,
    title: "Зал судебных заседаний",
    span: "",
    gradient: "from-sky-50 to-sky-100",
    icon: Scale,
  },
  {
    id: 8,
    title: "Корпоративное мероприятие",
    span: "",
    gradient: "from-orange-50 to-orange-100",
    icon: GraduationCap,
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-bg-main py-16 md:py-20"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.h2
          id="gallery-heading"
          className="font-bold text-[28px] text-dark-blue text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          Галерея
        </motion.h2>
        <p className="text-center text-base text-text-secondary mb-10 max-w-xl mx-auto">
          Наш офис, рабочий процесс и корпоративная жизнь центра
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
              className={`relative rounded overflow-hidden border border-border-card bg-gradient-to-br ${item.gradient} ${item.span} cursor-pointer group`}
            >
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-sm font-bold text-dark-blue bg-bg-main/80 backdrop-blur-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <item.icon
                  className="w-10 h-10 text-dark-blue/20"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

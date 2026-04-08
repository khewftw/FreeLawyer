"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  {
    year: "2010",
    title: "Основание центра",
    text: "Федеральный центр юридической поддержки населения учреждён в Москве группой практикующих адвокатов с целью обеспечения доступной правовой помощи.",
  },
  {
    year: "2013",
    title: "Региональная экспансия",
    text: "Открыты филиалы в Санкт-Петербурге, Казани и Екатеринбурге. Штат юристов увеличен до 15 специалистов.",
  },
  {
    year: "2016",
    title: "Запуск горячей линии",
    text: "Введена бесплатная федеральная горячая линия 8-800, обеспечивающая круглосуточный доступ к юридическим консультациям.",
  },
  {
    year: "2019",
    title: "10 000 выигранных дел",
    text: "Достигнута отметка в 10 000 успешно завершённых дел. Центр получил статус «Лидер правовой защиты» по версии Ассоциации юристов России.",
  },
  {
    year: "2022",
    title: "Цифровизация услуг",
    text: "Запущен онлайн-кабинет клиента с возможностью дистанционного ведения дел, подачи документов и отслеживания хода судебного процесса.",
  },
  {
    year: "2025",
    title: "Федеральное признание",
    text: "Центр вошёл в ТОП-5 юридических организаций России. Более 30 специалистов, 12 000+ выигранных дел, представительства в 8 городах.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="bg-bg-secondary py-16 md:py-20"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.h2
          id="timeline-heading"
          className="font-bold text-[28px] text-dark-blue text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          История и достижения центра
        </motion.h2>

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border-card"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10 md:gap-0">
            {MILESTONES.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10 md:py-6"
                >
                  <div
                    className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-red border-[3px] border-bg-secondary z-10"
                    aria-hidden="true"
                  />

                  {isLeft ? (
                    <>
                      <div className="md:text-right md:pr-10">
                        <span className="inline-block text-xs font-bold text-text-inverted bg-secondary-blue rounded px-2 py-0.5 mb-2">
                          {m.year}
                        </span>
                        <h3 className="font-bold text-lg text-dark-blue">
                          {m.title}
                        </h3>
                        <p className="mt-1 text-base text-text-secondary leading-relaxed">
                          {m.text}
                        </p>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="md:pl-10">
                        <span className="inline-block text-xs font-bold text-text-inverted bg-secondary-blue rounded px-2 py-0.5 mb-2">
                          {m.year}
                        </span>
                        <h3 className="font-bold text-lg text-dark-blue">
                          {m.title}
                        </h3>
                        <p className="mt-1 text-base text-text-secondary leading-relaxed">
                          {m.text}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

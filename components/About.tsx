"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Правовая защита",
    text: "Полное юридическое сопровождение: от первичной консультации до представительства в суде любой инстанции.",
  },
  {
    icon: Users,
    title: "Команда экспертов",
    text: "Штат из 30+ практикующих юристов и адвокатов с узкой специализацией по каждому направлению права.",
  },
  {
    icon: Award,
    title: "Гарантия результата",
    text: "Более 95% выигранных дел. Прозрачная система оплаты и поэтапный контроль хода дела.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-bg-main py-16 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2
            id="about-heading"
            className="font-bold text-[28px] text-dark-blue"
          >
            О нашем центре
          </h2>
          <p className="mt-4 text-[15px] text-text-secondary leading-relaxed">
            Федеральный центр юридической поддержки населения оказывает
            квалифицированную правовую помощь гражданам по всей территории
            Российской Федерации. Мы помогаем разобраться в сложных правовых
            ситуациях и защищаем интересы наших клиентов на каждом этапе.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.article
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-bg-main border border-border-card rounded p-5 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <feat.icon className="w-6 h-6 text-secondary-blue" />
              </div>
              <h3 className="font-bold text-lg text-dark-blue">{feat.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {feat.text}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-bg-dark rounded p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          {[
            { value: "12 000+", label: "Выигранных дел" },
            { value: "30+", label: "Практикующих юристов" },
            { value: "15 лет", label: "Успешной практики" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-bold text-2xl text-text-inverted">
                {stat.value}
              </p>
              <p className="text-sm text-text-inverted/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

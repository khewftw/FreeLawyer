"use client";

import { motion } from "framer-motion";
import { Phone, Send, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-image.jpg')" }}
      aria-label="Главный баннер"
    >
      <div className="absolute inset-0 bg-white/85" />

      <div className="absolute top-0 left-0 z-10 w-full h-1.5 flex">
        <div className="flex-1 bg-bg-main" />
        <div className="flex-1 bg-secondary-blue" />
        <div className="flex-1 bg-primary-red" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-secondary-blue" />
              <span className="text-sm font-medium text-secondary-blue">
                Федеральный центр юридической поддержки
              </span>
            </div>

            <h1 className="font-bold text-[32px] md:text-[36px] leading-tight text-text-primary">
              Бесплатная{" "}
              <span className="text-primary-red">юридическая консультация</span>{" "}
              по всей России
            </h1>
            <p className="mt-4 text-[15px] md:text-base text-text-secondary leading-relaxed max-w-lg">
              Защитим ваши права в любой правовой ситуации. Опытные адвокаты и
              юристы по гражданскому, семейному, трудовому и уголовному праву.
              Первичная консультация — бесплатно.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary-blue" />
              <a
                href="tel:+78001234567"
                className="text-secondary-blue font-bold text-xl"
              >
                8-800-123-45-67
              </a>
            </div>

            <p className="mt-2 text-xs text-text-secondary">
              Бесплатная горячая линия — ежедневно с 9:00 до 21:00
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-bg-main rounded shadow-lg p-6 md:p-8 border border-border-card">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="font-bold text-lg text-text-primary">
                    Заявка отправлена!
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    Юрист перезвонит вам в течение 15 минут
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-bold text-xl text-dark-blue mb-1">
                    Получите бесплатную консультацию
                  </h2>
                  <p className="text-sm text-text-secondary mb-5">
                    Опишите вашу ситуацию — мы подберём специалиста
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      required
                      className="w-full px-4 py-3 border border-border-card rounded text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-secondary-blue transition-colors"
                      aria-label="Ваше имя"
                    />
                    <input
                      type="tel"
                      placeholder="Номер телефона"
                      required
                      className="w-full px-4 py-3 border border-border-card rounded text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-secondary-blue transition-colors"
                      aria-label="Номер телефона"
                    />
                    <select
                      className="w-full px-4 py-3 border border-border-card rounded text-sm text-text-secondary focus:outline-none focus:border-secondary-blue transition-colors"
                      aria-label="Тип юридической проблемы"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Выберите тип проблемы
                      </option>
                      <option>Гражданское право</option>
                      <option>Семейное право</option>
                      <option>Трудовые споры</option>
                      <option>Уголовное право</option>
                      <option>Жилищные вопросы</option>
                      <option>Другое</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary-red text-text-inverted font-bold text-sm uppercase rounded hover:bg-primary-red-hover transition-colors mt-1"
                    >
                      Получить консультацию
                    </button>
                    <p className="text-xs text-text-secondary text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой
                      конфиденциальности
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

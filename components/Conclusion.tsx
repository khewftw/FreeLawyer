"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Conclusion() {
  return (
    <section
      className="bg-bg-secondary py-12 md:py-20"
      aria-labelledby="conclusion-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2
            id="conclusion-heading"
            className="font-bold text-2xl sm:text-[28px] text-dark-blue leading-tight"
          >
            Ваше право — наша ответственность
          </h2>
          <p className="mt-4 text-sm sm:text-[15px] text-text-secondary leading-relaxed">
            Не откладывайте решение юридических вопросов. Чем раньше вы
            обратитесь за помощью, тем выше шансы на успешный исход дела. Наши
            специалисты готовы приступить к работе прямо сейчас — первичная
            консультация бесплатна.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-red text-text-inverted font-bold text-sm uppercase rounded hover:bg-primary-red-hover transition-colors w-full sm:w-auto"
            >
              Получить консультацию
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#experts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-secondary-blue text-secondary-blue font-bold text-sm uppercase rounded hover:bg-secondary-blue hover:text-text-inverted transition-colors w-full sm:w-auto"
            >
              Наши специалисты
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 sm:mt-16 text-center"
        >
          {/* Контейнер для текста над номером: добавил max-w и mx-auto для лучшего переноса */}
          <div className="text-sm text-text-secondary flex flex-col sm:flex-row items-center justify-center gap-2 mb-2 max-w-[280px] sm:max-w-none mx-auto">
            <Phone className="w-4 h-4 shrink-0 text-primary-red" />
            <span className="leading-tight">
              Остались вопросы? Бесплатная юридическая помощь
            </span>
          </div>
          
          <a
            href="tel:+79085872787"
            className="text-primary-red font-bold text-[32px] xs:text-[40px] sm:text-[52px] md:text-[64px] leading-none block my-4 transition-transform hover:scale-105"
          >
            8 (908) 587 27 87
          </a>
          
          <p className="text-[16px] sm:text-xs text-text-secondary opacity-80">
            Звонок по России бесплатный, ежедневно 9:00 – 21:00
          </p>
        </motion.div>
      </div>
    </section>
  );
}
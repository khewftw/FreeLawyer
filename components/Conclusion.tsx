"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Conclusion() {
  return (
    <section
      className="bg-bg-secondary py-16 md:py-20"
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
            className="font-bold text-[28px] text-dark-blue"
          >
            Ваше право — наша ответственность
          </h2>
          <p className="mt-4 text-[15px] text-text-secondary leading-relaxed">
            Не откладывайте решение юридических вопросов. Чем раньше вы
            обратитесь за помощью, тем выше шансы на успешный исход дела. Наши
            специалисты готовы приступить к работе прямо сейчас — первичная
            консультация бесплатна.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-red text-text-inverted font-bold text-sm uppercase rounded hover:bg-primary-red-hover transition-colors"
            >
              Получить консультацию
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#experts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-secondary-blue text-secondary-blue font-bold text-sm uppercase rounded hover:bg-secondary-blue hover:text-text-inverted transition-colors"
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
          className="mt-12 text-center"
        >
          <p className="text-sm text-text-secondary flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Бесплатная горячая линия
          </p>
          <a
            href="tel:+78001234567"
            className="text-secondary-blue font-bold text-2xl md:text-3xl"
          >
            8-800-123-45-67
          </a>
          <p className="mt-1 text-xs text-text-secondary">
            Бесплатно по России, ежедневно 9:00 – 21:00
          </p>
        </motion.div>
      </div>
    </section>
  );
}

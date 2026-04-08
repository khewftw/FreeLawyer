"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contacts"
      className="bg-bg-main py-16 md:py-20"
      aria-labelledby="contacts-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.h2
          id="contacts-heading"
          className="font-bold text-[28px] text-dark-blue text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          Контакты
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-red mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm text-text-primary">Адрес</p>
                  <p className="text-sm text-text-secondary">
                  г.Челябинск, пр-кт Победы, д. 160, 3й этаж, офис 341б
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-red mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm text-text-primary">
                    Горячая линия
                  </p>
                  <a
                    href="tel:+79085872787"
                    className="text-sm text-secondary-blue font-medium"
                  >
                    8 908 587 27 87
                  </a>
                  <span className="text-xs text-text-secondary ml-2">
                    (бесплатно)
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-red mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm text-text-primary">Email</p>
                  <a
                    href="mailto:ufo-centr74@yandex.ru"
                    className="text-sm text-secondary-blue font-medium"
                  >
                    ufo-centr74@yandex.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-red mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm text-text-primary">
                    Время работы
                  </p>
                  <p className="text-sm text-text-secondary">
                    Пн–Пт: 9:00 – 20:00, Сб: 10:00 – 16:00
                  </p>
                  <p className="text-sm text-text-secondary">
                    Горячая линия: ежедневно 9:00 – 21:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded border border-border-card bg-bg-secondary">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A325de0c04f4bdf298af23341903aa102df2373f090c2b24795c5e1aed7cc041e&amp;source=constructor"
                width={560}
                height={240}
                className="h-[240px] w-full max-w-[560px] border-0"
                title="Карта: офис в Челябинске"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-bg-main border border-border-card rounded p-6 md:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="font-bold text-lg text-text-primary">
                    Заявка отправлена!
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    Юрист свяжется с вами в течение 15 минут
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-lg text-dark-blue mb-1">
                    Запишитесь на консультацию
                  </h3>
                  <p className="text-base text-text-secondary mb-5">
                    Опишите вашу ситуацию — мы подберём подходящего специалиста
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
                      aria-label="Направление права"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Выберите направление
                      </option>
                      <option>Гражданское право</option>
                      <option>Семейное право</option>
                      <option>Уголовное право</option>
                      <option>Трудовое право</option>
                      <option>Корпоративное право</option>
                      <option>Жилищное право</option>
                      <option>Другое</option>
                    </select>
                    <textarea
                      placeholder="Кратко опишите вашу ситуацию"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-border-card rounded text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-secondary-blue transition-colors resize-none"
                      aria-label="Описание ситуации"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary-red text-text-inverted font-bold text-sm uppercase rounded hover:bg-primary-red-hover transition-colors mt-1"
                    >
                      Отправить заявку
                    </button>
                    <p className="text-xs text-text-secondary text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой
                      конфиденциальности и обработкой персональных данных
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

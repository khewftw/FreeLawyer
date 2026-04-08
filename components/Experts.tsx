"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Briefcase } from "lucide-react";
import Image from "next/image"; // Импортируем Image

interface Expert {
  id: number;
  name: string;
  role: string;
  experience: string;
  intro: string;
  bio: string;
  achievements: string[];
  photo: string; // Добавили поле для пути к фото
}

const DATA: Expert[] = [
  {
    id: 1,
    name: "Алексей Петрович Волков",
    role: "Старший партнёр · Гражданское право",
    experience: "Стаж 18 лет",
    photo: "/jurist1.png", // Укажите ваши пути к файлам в папке public
    intro: "Ведущий специалист по гражданским спорам, защите прав потребителей и договорному праву.",
    bio: "Алексей Петрович — основатель и старший партнёр центра...",
    achievements: ["Более 2 000 выигранных гражданских дел", "Член Ассоциации юристов России"],
  },
  // ... добавьте пути для остальных экспертов
  {
    id: 2,
    name: "Елена Сергеевна Кузнецова",
    role: "Партнёр · Семейное право",
    experience: "Стаж 14 лет",
    photo: "/jurist5.png",
    intro: "Эксперт по бракоразводным процессам, разделу имущества и защите прав детей.",
    bio: "Елена Сергеевна — признанный специалист в области семейного права...",
    achievements: ["1 500+ успешно завершённых семейных дел", "Сертифицированный медиатор"],
  },
  // И так далее для всех 6 экспертов...
  {
    id: 7,
    name: "Николай Викторович Степанов",
    role: "Адвокат · Военное право",
    experience: "Стаж 15 лет",
    photo: "/jurist2.png",
    intro: "Ведущий специалист по защите прав военнослужащих, мобилизованных и участников СВО.",
    bio: "Николай Викторович имеет многолетний опыт службы в органах военной юстиции. Специализируется на правовом обеспечении интересов участников специальной военной операции, вопросах мобилизации, оформлении боевых выплат и социальных льгот. Оказывает помощь в оспаривании решений ВВК и защите прав членов семей военнослужащих.",
    achievements: [
      "Более 300 успешных дел по выплатам участникам СВО",
      "Эксперт по вопросам военно-врачебной экспертизы",
      "Опыт работы в органах военной прокуратуры",
      "Автор методических пособий по правам мобилизованных"
    ],
  },

  {
    id: 8,
    name: "Марина Игоревна Соловьева",
    role: "Юрист · Защита на маркетплейсах",
    experience: "Стаж 8 лет",
    photo: "/jurist4.png",
    intro: "Эксперт по спорам с Wildberries, Ozon и правовому сопровождению e-commerce бизнеса.",
    bio: "Марина Игоревна стояла у истоков формирования практики права маркетплейсов в России. Помогает селлерам в вопросах незаконных штрафов, удержаний, потери товара на складах и разблокировки личных кабинетов. Защищает интеллектуальную собственность брендов на торговых площадках и составляет грамотные оферты для онлайн-торговли.",
    achievements: [
      "Оспорено штрафов маркетплейсов на 45+ млн рублей",
      "Успешный возврат товара из «потерянных» поставок Ozon/WB",
      "Специалист по защите брендов от контрафакта",
      "Консультант ТОП-100 селлеров Wildberries"
    ],
  },
  {
    id: 9,
    name: "Виктор Сергеевич Данилов",
    role: "Арбитражный управляющий · Банкротство",
    experience: "Стаж 11 лет",
    photo: "/jurist3.png",
    intro: "Профессионал в области списания долгов физических лиц и защиты активов.",
    bio: "Виктор Сергеевич специализируется на процедурах банкротства любой сложности. Помогает гражданам законно списать кредитную задолженность, сохраняя при этом единственное жилье и имущество. Обладает глубокими знаниями в области финансового анализа и взаимодействия с кредиторами. Провел сотни процедур полного освобождения от долговых обязательств.",
    achievements: [
      "Списано более 500 млн рублей долгов клиентов",
      "99.5% успешно завершенных дел о банкротстве",
      "Член СРО арбитражных управляющих",
      "Эксперт по антикризисному управлению"
    ],
  },
  {
    id: 10,
    name: "Анна Михайловна Савина",
    role: "Ведущий юрист · Автомобильное право",
    experience: "Стаж 9 лет",
    photo: "/jurist6.png",
    intro: "Защита прав автовладельцев при ДТП, спорах со страховыми и лишении прав.",
    bio: "Анна Михайловна — признанный эксперт в области дорожного права и защиты прав автомобилистов. Занимается взысканием ущерба со страховых компаний по ОСАГО/КАСКО (недоплаты, отказы), представлением интересов в судах при серьезных ДТП и обжалованием незаконных постановлений ГИБДД. Проводит независимую оценку ущерба и автотехническую экспертизу.",
    achievements: [
      "Возврат водительских прав в 200+ сложных случаях",
      "Взыскано со страховых компаний свыше 80 млн рублей",
      "Специалист по трасологической экспертизе",
      "Участник рабочих групп по реформе автострахования"
    ],
  },
];

function ExpertCard({
  expert,
  index,
  onSelect,
}: {
  expert: Expert;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
      className="bg-bg-main border border-border-card rounded p-5 flex flex-col cursor-pointer group"
      onClick={onSelect}
      role="button"
      tabIndex={0}
      aria-label={`Подробнее о ${expert.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      {/* Заменили иконку на изображение */}
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-50 group-hover:border-secondary-blue transition-colors relative">
        <Image
          src={expert.photo}
          alt={expert.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      <h3 className="font-bold text-lg text-dark-blue text-center group-hover:text-secondary-blue transition-colors">
        {expert.name}
      </h3>
      <p className="text-sm text-secondary-blue text-center mt-0.5 font-medium">
        {expert.role}
      </p>
      <div className="flex items-center justify-center gap-1.5 mt-2">
        <Briefcase className="w-3.5 h-3.5 text-text-secondary" />
        <span className="text-xs text-text-secondary">{expert.experience}</span>
      </div>
      <p className="text-sm text-text-secondary mt-3 text-center leading-relaxed flex-1">
        {expert.intro}
      </p>
      <button
        type="button"
        className="mt-4 w-full py-2 bg-primary-red text-text-inverted text-sm font-bold rounded hover:bg-primary-red-hover transition-colors"
      >
        Полная биография
      </button>
    </motion.article>
  );
}

export default function Experts() {
  const [selected, setSelected] = useState<Expert | null>(null);

  return (
    <section id="experts" className="bg-bg-main py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.h2 className="font-bold text-[28px] text-dark-blue text-center mb-3">
          Наши специалисты
        </motion.h2>
        <p className="text-center text-base text-text-secondary mb-10 max-w-xl mx-auto">
          Нажмите на карточку, чтобы ознакомиться с полной биографией юриста
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.map((expert, i) => (
            <ExpertCard
              key={expert.id}
              expert={expert}
              index={i}
              onSelect={() => setSelected(expert)}
            />
          ))}
        </div>
      </div>

      <Dialog.Root open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[94vw] max-w-lg max-h-[85vh] overflow-y-auto bg-bg-main rounded shadow-xl p-6 md:p-8 focus:outline-none">
            {selected && (
              <>
                <div className="flex flex-col md:flex-row gap-6 mb-6 items-center md:items-start text-center md:text-left">
                  {/* Фото в модальном окне */}
                  <div className="w-32 h-32 rounded-lg overflow-hidden shrink-0 relative border border-border-card">
                    <Image
                      src={selected.photo}
                      alt={selected.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <div>
                    <Dialog.Title className="font-bold text-2xl text-dark-blue pr-8">
                      {selected.name}
                    </Dialog.Title>
                    <p className="text-base text-secondary-blue font-medium mt-1">
                      {selected.role}
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                      {selected.experience}
                    </p>
                  </div>
                </div>

                <p className="text-[15px] text-text-primary leading-relaxed border-t border-border-card pt-4">
                  {selected.bio}
                </p>

                <h4 className="font-bold text-base text-dark-blue mt-6 mb-2">
                  Профессиональные достижения
                </h4>
                <ul className="space-y-1.5">
                  {selected.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-text-primary">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-red shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#contacts"
                    className="inline-flex items-center justify-center w-full py-3 bg-primary-red text-text-inverted text-sm font-bold rounded hover:bg-primary-red-hover transition-colors uppercase tracking-wider"
                    onClick={() => setSelected(null)}
                  >
                    Записаться на консультацию
                  </a>
                </div>

                <Dialog.Close asChild>
                  <button className="absolute top-4 right-4 p-1.5 rounded hover:bg-bg-secondary">
                    <X className="w-5 h-5 text-text-secondary" />
                  </button>
                </Dialog.Close>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
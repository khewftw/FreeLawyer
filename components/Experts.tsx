"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, User, Briefcase } from "lucide-react";

interface Expert {
  id: number;
  name: string;
  role: string;
  experience: string;
  intro: string;
  bio: string;
  achievements: string[];
}

const DATA: Expert[] = [
  {
    id: 1,
    name: "Алексей Петрович Волков",
    role: "Старший партнёр · Гражданское право",
    experience: "Стаж 18 лет",
    intro:
      "Ведущий специалист по гражданским спорам, защите прав потребителей и договорному праву.",
    bio: "Алексей Петрович — основатель и старший партнёр центра. Окончил юридический факультет МГУ им. М.В. Ломоносова с отличием. Специализируется на сложных гражданских спорах, включая крупные имущественные дела и защиту прав потребителей. Под его руководством центр добился возмещения ущерба клиентам на общую сумму свыше 500 млн рублей. Регулярно выступает экспертом на федеральных телеканалах по вопросам гражданского законодательства.",
    achievements: [
      "Более 2 000 выигранных гражданских дел",
      "Член Ассоциации юристов России",
      "Эксперт по защите прав потребителей",
      "Автор 15 публикаций в ведущих юридических изданиях",
    ],
  },
  {
    id: 2,
    name: "Елена Сергеевна Кузнецова",
    role: "Партнёр · Семейное право",
    experience: "Стаж 14 лет",
    intro:
      "Эксперт по бракоразводным процессам, разделу имущества и защите прав детей.",
    bio: "Елена Сергеевна — признанный специалист в области семейного права. Окончила МГЮА им. О.Е. Кутафина. Ведёт сложнейшие бракоразводные процессы, дела о разделе имущества супругов, определении места жительства детей и взыскании алиментов. Особый приоритет — защита интересов несовершеннолетних. Является медиатором и практикует внесудебное урегулирование семейных споров.",
    achievements: [
      "1 500+ успешно завершённых семейных дел",
      "Сертифицированный медиатор",
      "Специалист по международному семейному праву",
      "Лектор курсов повышения квалификации для юристов",
    ],
  },
  {
    id: 3,
    name: "Дмитрий Андреевич Соколов",
    role: "Адвокат · Уголовное право",
    experience: "Стаж 20 лет",
    intro:
      "Адвокат по уголовным делам с опытом защиты в судах всех инстанций, включая Верховный Суд РФ.",
    bio: "Дмитрий Андреевич — один из наиболее опытных уголовных адвокатов центра. Выпускник Санкт-Петербургского государственного университета. На протяжении 20 лет ведёт дела по экономическим преступлениям, делам о мошенничестве, превышении должностных полномочий и реабилитации. Многократно добивался оправдательных приговоров и прекращения уголовных дел. Входит в реестр адвокатов г. Москвы.",
    achievements: [
      "Более 800 уголовных дел в качестве защитника",
      "47 оправдательных приговоров",
      "Практика в Верховном Суде РФ",
      "Член Адвокатской палаты г. Москвы",
    ],
  },
  {
    id: 4,
    name: "Ирина Владимировна Белова",
    role: "Руководитель практики · Трудовое право",
    experience: "Стаж 12 лет",
    intro:
      "Специализируется на трудовых спорах, незаконных увольнениях и защите прав работников.",
    bio: "Ирина Владимировна возглавляет направление трудового права в центре. Окончила Российскую академию народного хозяйства и государственной службы. Представляет интересы работников в спорах с работодателями: незаконные увольнения, невыплата заработной платы, дискриминация, нарушение условий труда. Успешно ведёт коллективные трудовые споры и дела о восстановлении на работе.",
    achievements: [
      "1 200+ выигранных трудовых споров",
      "Восстановление на работе в 98% случаев",
      "Эксперт по коллективным трудовым спорам",
      "Консультант Трудовой инспекции г. Москвы",
    ],
  },
  {
    id: 5,
    name: "Михаил Юрьевич Козлов",
    role: "Партнёр · Корпоративное право",
    experience: "Стаж 16 лет",
    intro:
      "Специалист по корпоративным спорам, сделкам M&A и сопровождению бизнеса.",
    bio: "Михаил Юрьевич — ведущий корпоративный юрист центра с международным опытом. Получил степень LLM в King's College London. Консультирует средний и крупный бизнес по вопросам корпоративного управления, структурирования сделок, защиты активов и разрешения акционерных споров. Провёл юридическое сопровождение сделок на общую сумму более 2 млрд рублей.",
    achievements: [
      "Сопровождение 50+ крупных корпоративных сделок",
      "Степень LLM (King's College London)",
      "Экспертиза в международном коммерческом арбитраже",
      "Член Международной ассоциации юристов (IBA)",
    ],
  },
  {
    id: 6,
    name: "Наталья Александровна Морозова",
    role: "Ведущий юрист · Жилищное право",
    experience: "Стаж 10 лет",
    intro:
      "Эксперт по жилищным спорам, долевому строительству и защите прав собственников.",
    bio: "Наталья Александровна специализируется на всех аспектах жилищного права. Окончила Уральский государственный юридический университет. Защищает права дольщиков, помогает в спорах с управляющими компаниями, ведёт дела по выселению, приватизации и оспариванию кадастровой стоимости. Особая экспертиза — защита прав обманутых участников долевого строительства.",
    achievements: [
      "900+ жилищных дел с положительным исходом",
      "Возврат квартир 200+ обманутым дольщикам",
      "Эксперт по ФЗ-214 о долевом строительстве",
      "Автор практических рекомендаций по жилищным спорам",
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
      className="bg-bg-main border border-border-card rounded p-5 flex flex-col cursor-pointer"
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
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
        <User className="w-8 h-8 text-secondary-blue" />
      </div>
      <h3 className="font-bold text-lg text-dark-blue text-center">
        {expert.name}
      </h3>
      <p className="text-xs text-secondary-blue text-center mt-0.5 font-medium">
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
    <section
      id="experts"
      className="bg-bg-main py-16 md:py-20"
      aria-labelledby="experts-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5">
        <motion.h2
          id="experts-heading"
          className="font-bold text-[28px] text-dark-blue text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          Наши специалисты
        </motion.h2>
        <p className="text-center text-sm text-text-secondary mb-10 max-w-xl mx-auto">
          Нажмите на карточку, чтобы ознакомиться с полной биографией
          и профессиональными достижениями юриста
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

      <Dialog.Root
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[94vw] max-w-lg max-h-[85vh] overflow-y-auto bg-bg-main rounded shadow-xl p-6 md:p-8 focus:outline-none"
            aria-describedby="expert-bio-description"
          >
            {selected && (
              <>
                <Dialog.Title className="font-bold text-2xl text-dark-blue pr-8">
                  {selected.name}
                </Dialog.Title>
                <p className="text-sm text-secondary-blue font-medium mt-0.5">
                  {selected.role}
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  {selected.experience}
                </p>

                <p
                  id="expert-bio-description"
                  className="mt-4 text-[15px] text-text-primary leading-relaxed"
                >
                  {selected.bio}
                </p>

                <h4 className="font-bold text-base text-dark-blue mt-6 mb-2">
                  Профессиональные достижения
                </h4>
                <ul className="space-y-1.5">
                  {selected.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2 text-sm text-text-primary"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-red shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="#contacts"
                    className="inline-flex items-center justify-center w-full py-2.5 bg-primary-red text-text-inverted text-sm font-bold rounded hover:bg-primary-red-hover transition-colors"
                    onClick={() => setSelected(null)}
                  >
                    Записаться на консультацию
                  </a>
                </div>

                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="absolute top-4 right-4 p-1.5 rounded hover:bg-bg-secondary transition-colors"
                    aria-label="Закрыть"
                  >
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

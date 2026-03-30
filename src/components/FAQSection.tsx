import { Section } from './Section';
import { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: 'Betaalt mijn locatie voor de machine?',
    answer:
      'Nee. Luxevia investeert in de dispenser en het beheer. U kiest hoe u meeverdient: een vaste huur per maand voor het ter beschikking stellen van de plek, of een vooraf afgesproken percentage op de omzet uit sprays. Alles leggen we vooraf schriftelijk vast. U koopt de machine niet.'
  },
  {
    question: 'Wat is het verschil tussen vaste huur en omzetpercentage?',
    answer:
      'Met vaste huur per maand ontvangt u een vast bedrag, ongeacht hoe druk het is. Met een omzetpercentage varieert uw aandeel mee met het aantal verkochte sprays. Beide modellen zijn vooraf helder af te spreken; we denken mee wat past bij uw locatie.'
  },
  {
    question: 'Hoe werkt betalen per spray voor de bezoeker?',
    answer:
      'De gast kiest op het 10,1″ touchscreen een geur, ziet de prijs en betaalt via de geïntegreerde terminal (contactloos, QR of kaart, afhankelijk van de configuratie). Daarna geeft de machine één gecontroleerde spray. Geen tussenkomst van uw personeel nodig.'
  },
  {
    question: 'Welke specificaties heeft de dispenser?',
    answer:
      'We werken met de Marwey countertop-unit: 10,1″ touchscreen, vijf reservoirs van elk 100 ml, afmetingen 750 × 210 × 445 mm, gewicht 22 kg, piekvermogen circa 30 W, Wi‑Fi en 4G. Behuizing van verzinkt staal en acryl. Extra: digitale signage op het scherm, remote monitoring, CE- en ISO-conformiteit volgens leveranciersdocumentatie.'
  },
  {
    question: 'Kan ik na de pilot stoppen?',
    answer:
      'Ja. De pilot heeft een vaste looptijd. Daarna besluit u of u door wilt met huur- of omzetmodel. Wilt u niet verlengen, dan wordt de plaatsing netjes afgerond volgens de afspraken. U zit niet vast aan een machine die u zelf heeft gekocht.'
  },
  {
    question: 'Wat moet ik technisch regelen?',
    answer:
      'Vooral een geschikte plek met normale stroom en voldoende bereik voor Wi‑Fi of 4G. Luxevia verzorgt installatie, inrichting en onderhoud van de unit. Uw team hoeft geen technische kennis van de dispenser te hebben.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" eyebrow="Veelgestelde vragen" title="Antwoorden voor een snelle beslissing.">
      <div className="card-surface divide-y divide-slate-800/70">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <details
              key={item.question}
              open={isOpen}
              className="group"
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(isOpen ? null : index);
              }}
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-sm sm:text-base text-slate-100">
                <span>{item.question}</span>
                <span
                  className={`ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 text-xs transition-transform ${
                    isOpen ? 'rotate-45 border-brand-gold text-brand-gold' : ''
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm text-slate-300">{item.answer}</div>
            </details>
          );
        })}
      </div>
    </Section>
  );
}

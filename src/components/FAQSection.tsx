import { Section } from './Section';
import { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: 'Kost het mij iets om mee te doen?',
    answer:
      'Nee. Loma draagt alle kosten: de machine, installatie, parfums, onderhoud en bevoorrading. U biedt alleen een plekje en een stopcontact.'
  },
  {
  question: 'Hoe verdien ik eraan?',
  answer:
    'U ontvangt een vooraf afgesproken percentage van de omzet die de parfumdispenser op uw locatie genereert. Hoe meer de dispenser wordt gebruikt, hoe hoger uw opbrengst. Het omzetpercentage wordt vooraf transparant afgesproken en vastgelegd.'
},
  {
    question: 'Wat als het niet bevalt?',
    answer:
      'Na de proefperiode kunt u kosteloos stoppen. Wij halen de machine op zonder verdere verplichtingen. Geen opzegtermijn, geen boete.'
  },
  {
    question: 'Voor welke locaties is dit geschikt?',
    answer:
      'Voor elke locatie met voldoende bezoekersstroom: sportscholen, hotels, winkelcentra, horeca, eventlocaties en premium retail. Samen bepalen we de beste positie.'
  },
  {
    question: 'Hoe groot is de machine?',
    answer:
      '750 × 210 × 445 mm en weegt 22 kg. Compact genoeg voor wandmontage of plaatsing op een balie, zonder het interieur te domineren.'
  },
  {
    question: 'Wie vult de machine bij en lost storingen op?',
    answer:
      'Loma. Wij monitoren de machine op afstand via Wi-Fi of 4G. Bijvullen en onderhoud regelen wij proactief. Uw personeel hoeft niets te doen.'
  },
  {
    question: 'Hoe betalen bezoekers?',
    answer:
      'Bezoekers kiezen een geur op het 10,1″ touchscreen en betalen contactloos of via QR-code. De betaling en spray verlopen binnen enkele seconden.'
  },
  {
    question: 'Is de machine veilig en gecertificeerd?',
    answer:
      'CE- en ISO-gecertificeerd en voorzien van twee jaar fabrieksgarantie. Het materiaal is gegalvaniseerd staal met acrylpanelen — robuust en professioneel.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      eyebrow="Veelgestelde vragen"
      title="Heldere antwoorden, geen kleine lettertjes"
    >
      <div className="card-surface divide-y divide-sky-100">
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
              <summary className="flex cursor-pointer items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-sm sm:text-base text-slate-800">
                <span>{item.question}</span>
                <span
                  className={`ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-sky-200 text-xs transition-transform ${
                    isOpen ? 'rotate-45 border-brand-gold text-brand-gold' : ''
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm text-slate-600">
                {item.answer}
              </div>
            </details>
          );
        })}
      </div>
    </Section>
  );
}

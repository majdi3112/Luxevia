import { Section } from './Section';
import { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: 'Voor welke locaties is dit geschikt?',
    answer:
      'De machines zijn ontwikkeld voor locaties met hoge loopstromen zoals sportscholen, hotels, winkelcentra, bars, clubs, events en premium retail. Samen kijken we naar de meest logische positie binnen uw locatie.'
  },
  {
    question: 'Hoe werkt betalen per spray?',
    answer:
      'Bezoekers kiezen een geur op het scherm, zien vooraf duidelijk de prijs per spray en betalen vervolgens contactloos of met kaart via de geïntegreerde betaalterminal. Na succesvolle betaling geeft de machine direct één gecontroleerde spray af.'
  },
  {
    question: 'Hoe groot is de machine?',
    answer:
      'De standaardunit is ongeveer 23 × 41 × 70 cm en weegt circa 30 kg. Daarmee is de machine compact genoeg voor wandmontage of plaatsing op een stevige console.'
  },
  {
    question: 'Is branding op maat mogelijk?',
    answer:
      'Ja. Frontpanelen, digitale visuals op het scherm en eventueel omrandende elementen kunnen worden aangepast aan uw merkidentiteit of aan campagnes van partners.'
  },
  {
    question: 'Kan dit eerst als pilot getest worden?',
    answer:
      'Ja. We bieden pilotplaatsingen waarin we gedurende een afgesproken periode data verzamelen over gebruik, omzet en feedback. Op basis daarvan besluiten we gezamenlijk over opschaling.'
  },
  {
    question: 'Is het concept geschikt voor meerdere branches?',
    answer:
      'Zeker. Overal waar bezoekers zich willen opfrissen en waarde hechten aan een verzorgde uitstraling, kan de parfum vending machine waarde toevoegen. We stemmen de uitvoering af op uw specifieke branche en doelgroep.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      eyebrow="Veelgestelde vragen"
      title="Heldere antwoorden voor beslissers."
    >
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
              <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm text-slate-300">
                {item.answer}
              </div>
            </details>
          );
        })}
      </div>
    </Section>
  );
}


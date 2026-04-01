import { Section } from './Section';

const STEPS = [
  {
    title: '1. Wij plaatsen de machine',
    description:
      'Samen bepalen we de ideale plek. Luxevia levert, installeert en richt de dispenser in met premium geuren — volledig op onze kosten.'
  },
  {
    title: '2. Bezoekers kiezen & betalen',
    description:
      'Uw gasten selecteren een geur op het 10,1″ touchscreen en betalen contactloos per spray. Snel, hygiënisch en zonder personeel.'
  },
  {
    title: '3. U ontvangt uw vergoeding',
    description:
      'Elke maand ontvangt u een vaste huur of een afgesproken deel van de omzet. Wij regelen bevoorrading en onderhoud.'
  }
];

export function HowItWorksSection() {
  return (
    <Section
      id="werkwijze"
      eyebrow="Hoe het werkt"
      title="In drie stappen live op uw locatie."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] items-start">
        <div className="space-y-4 sm:space-y-5">
          {STEPS.map((step, index) => (
            <article
              key={step.title}
              className="card-surface p-5 sm:p-6 flex gap-4"
            >
              <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-gold/10 border border-brand-gold/70 text-xs font-semibold text-brand-gold">
                {index + 1}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300">{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="card-surface relative mt-1 p-5 sm:p-6">
          <p className="text-sm font-medium text-slate-200">
            Twee verdienmodellen
          </p>
          <div className="mt-3 space-y-3">
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
              <p className="font-medium text-brand-gold">Optie A — Vaste huur</p>
              <p className="mt-1 text-xs">
                U ontvangt een vast maandelijks bedrag, ongeacht het aantal sprays. Voorspelbaar en stabiel.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
              <p className="font-medium text-brand-gold">Optie B — Omzetpercentage</p>
              <p className="mt-1 text-xs">
                U deelt mee in de omzet via een vooraf afgesproken percentage. Hoe meer sprays, hoe meer u verdient.
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Beide modellen worden vooraf transparant vastgelegd. Geen verborgen kosten, geen verrassingen.
          </p>
        </div>
      </div>
    </Section>
  );
}

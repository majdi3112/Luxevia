import { Section } from './Section';

const STEPS = [
  {
    title: '1. Plaatsing op locatie',
    description:
      'Samen bepalen we de beste positie in uw ruimte. De machine wordt geïnstalleerd, aangesloten en ingericht met passende geuren.'
  },
  {
    title: '2. Bezoeker kiest & betaalt',
    description:
      'De bezoeker kiest een geur op het touchscreen, volgt de korte instructie en betaalt contactloos of met kaart per spray.'
  },
  {
    title: '3. Parfum spray on demand',
    description:
      'De machine geeft een gecontroleerde parfum spray af. Hygiënisch, snel en zonder extra druk op uw personeel.'
  }
];

export function HowItWorksSection() {
  return (
    <Section
      id="werkwijze"
      eyebrow="Hoe het werkt"
      title="In drie duidelijke stappen operationeel."
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
            Ervaring voor de bezoeker
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Duidelijke instructies op het 10&quot; touchscreen.</li>
            <li>• Betaling in enkele seconden via contactloze terminals.</li>
            <li>• Korte wachttijd door snelle dispensing en vaste sprayhoeveelheid.</li>
            <li>• Altijd dezelfde kwaliteit door gecontroleerde dosering.</li>
          </ul>
          <div className="mt-5 rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-xs text-slate-300">
            <p className="font-medium text-slate-100">Prijsindicatie</p>
            <p className="mt-1">
              Richtprijs per spray: <span className="text-brand-gold font-semibold">± €1</span>. De exacte prijsstelling
              en omzetverdeling worden per locatie afgestemd.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}


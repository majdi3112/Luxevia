import { Section } from './Section';

const STEPS = [
  {
    title: '1. Wij plaatsen de machine',
    description:
      'Samen bepalen we de ideale plek. Loma levert, installeert en richt de dispenser in. Volledig op onze kosten.'
  },
  {
    title: '2. Bezoekers kiezen & betalen',
    description:
      'Uw gasten selecteren een geur op het touchscreen en betalen contactloos per spray. Snel, hygiënisch en zonder personeel.'
  },
  {
    title: '3. U ontvangt uw vergoeding',
    description:
      'Elke maand ontvangt u het vooraf afgesproken percentage van de omzet die de parfumdispenser op uw locatie genereert. Wij verzorgen de bevoorrading, het onderhoud en de volledige opvolging.'
  }
];

export function HowItWorksSection() {
  return (
    <Section
      id="werkwijze"
      eyebrow="Hoe het werkt"
      title="In drie stappen op uw locatie"
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
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </Section>
  );
}

import { Section } from './Section';

const STEPS = [
  {
    title: '1. Afspraak over model en plek',
    description:
      'We bekijken samen de beste plek en het verdienmodel: vaste huur per maand of een vooraf vastgelegd percentage van de spray-omzet. Alles staat zwart op wit voordat we starten.'
  },
  {
    title: '2. Luxevia plaatst en koppelt',
    description:
      'Wij leveren de Marwey-dispenser, vullen de geuren in en sluiten aan op stroom en netwerk (Wi‑Fi of 4G). Uw team hoeft niets te installeren.'
  },
  {
    title: '3. Bezoeker betaalt, u verdient mee',
    description:
      'De gast kiest op het touchscreen, betaalt contactloos of met kaart en ontvangt één spray. Omzet wordt volgens uw contract verrekend – transparant en periodiek afgestemd.'
  }
];

export function HowItWorksSection() {
  return (
    <Section
      id="werkwijze"
      eyebrow="Hoe het werkt"
      title="Drie stappen. Geen gedoe op de werkvloer."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] items-start">
        <div className="space-y-4 sm:space-y-5">
          {STEPS.map((step, index) => (
            <article key={step.title} className="card-surface p-5 sm:p-6 flex gap-4">
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
          <p className="text-sm font-medium text-slate-200">Wat de bezoeker merkt</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Duidelijke stappen op het 10,1″ touchscreen.</li>
            <li>• Snel betalen: contactloos, QR of kaart via de terminal.</li>
            <li>• Vaste sprayhoeveelheid: hygiënisch en voorspelbaar.</li>
            <li>• Digitale signage op het scherm voor campagnes of uitleg.</li>
          </ul>
          <div className="mt-5 rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-xs text-slate-300">
            <p className="font-medium text-slate-100">Voor uw administratie</p>
            <p className="mt-1">
              Sprayprijs en verdeling stemmen we per locatie af. Of u nu voor huur of omzetdeel kiest: er zijn geen
              kosten voor aanschaf van de machine door uw organisatie.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

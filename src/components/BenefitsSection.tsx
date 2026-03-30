import { Section } from './Section';

const BENEFITS = [
  {
    title: 'Geen investering, geen eigendomsrisico',
    description:
      'De machine en het beheer zijn van Luxevia. U hoeft geen apparaat te kopen en draait geen voorraad- of technisch risico op de hardware.'
  },
  {
    title: 'Kies huur of omzetpercentage',
    description:
      'Vaste huur per maand geeft rust in uw begroting. Een afgesproken percentage op de spray-omzet koppelt uw inkomsten direct aan het succes op de vloer.'
  },
  {
    title: 'Extra service, premium uitstraling',
    description:
      'Bezoekers krijgen een snelle, luxe geurbeleving. Het design sluit aan bij strakke interieurs en versterkt uw merk als gastheer.'
  },
  {
    title: 'Compact en plaatsbaar bij de doorloop',
    description:
      'Tafel- of balieformaat, geschikt voor zones waar mensen langskomen. Weinig ruimte, veel zichtbaarheid.'
  },
  {
    title: 'Weinig vraag aan uw team',
    description:
      'Betaling en uitleg verloopt via touchscreen en terminal. Uw medewerkers hoeven niet te doseren of te kasseren.'
  },
  {
    title: 'Proefplaatsing zonder dwang',
    description:
      'Start met een pilot. Bevalt het niet, dan stopt u na de afgesproken periode – zonder langdurige verplichting.'
  }
];

export function BenefitsSection() {
  return (
    <Section
      id="voordelen"
      eyebrow="Voordelen voor uw locatie"
      title="Risico bij ons. Rendement en beleving bij u."
    >
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {BENEFITS.map((benefit) => (
          <article key={benefit.title} className="card-surface p-5 sm:p-6 flex flex-col gap-2">
            <h3 className="text-base font-semibold text-white">{benefit.title}</h3>
            <p className="text-sm text-slate-300">{benefit.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

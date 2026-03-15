import { Section } from './Section';

const BENEFITS = [
  {
    title: 'Extra service voor bezoekers',
    description: 'Een directe, tastbare service die comfort verhoogt en positief bijdraagt aan de totale ervaring op locatie.'
  },
  {
    title: 'Premium uitstraling',
    description: 'Het design sluit aan bij moderne interieurs en versterkt een luxe, verzorgde indruk.'
  },
  {
    title: 'Nieuwe omzetmogelijkheid',
    description: 'Per spray betaald model met transparante verdeling. Extra inkomsten zonder extra personeel.'
  },
  {
    title: 'Compact formaat',
    description: 'Past op een muur of wand en neemt minimale vloeroppervlakte in beslag.'
  },
  {
    title: 'Lage drempel voor gebruik',
    description: 'Duidelijke instructies, snelle transactie en contactloos betalen zorgen voor hoge adoptie.'
  },
  {
    title: 'Pilotvriendelijk',
    description: 'Geschikt voor tijdelijke plaatsingen en A/B‑tests op verschillende locaties.'
  }
];

export function BenefitsSection() {
  return (
    <Section
      id="voordelen"
      eyebrow="Voordelen voor locatie-eigenaren"
      title="Service, uitstraling en omzet in één compacte unit."
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


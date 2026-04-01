import { Section } from './Section';

const BENEFITS = [
  {
    title: 'Geen investering nodig',
    description: 'Luxevia draagt alle kosten: machine, installatie, parfums en onderhoud. U biedt alleen ruimte en een stopcontact.'
  },
  {
    title: 'Geen risico',
    description: 'Bevalt het niet? Na de proefperiode kunt u kosteloos stoppen. Wij halen de machine op, zonder verplichtingen.'
  },
  {
    title: 'Flexibel verdienmodel',
    description: 'Kies wat bij u past: een vaste maandelijkse huurvergoeding of een percentage van de omzet.'
  },
  {
    title: 'Extra service voor uw gasten',
    description: 'Bied bezoekers een luxe, tastbare ervaring die comfort verhoogt en positief bijdraagt aan hun beleving.'
  },
  {
    title: 'Premium uitstraling',
    description: 'Een strakke, compacte machine die past bij moderne interieurs en uw locatie een verzorgde indruk geeft.'
  },
  {
    title: 'Volledig ontzorgd',
    description: 'Wij monitoren op afstand, vullen bij en lossen storingen op. Uw personeel hoeft niets te doen.'
  }
];

export function BenefitsSection() {
  return (
    <Section
      id="voordelen"
      eyebrow="Voordelen voor uw locatie"
      title="Verdien mee zonder zorgen."
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

import { Section } from './Section';

const LOCATIONS = [
  {
    title: 'Sportscholen',
    description: 'Leden frissen zich op na de workout. Hoge gebruiksfrequentie en een perfecte match met persoonlijke verzorging.',
    icon: '🏋️'
  },
  {
    title: 'Hotels',
    description: 'Extra service in lobby, op verdiepingen of bij de lift. Gasten waarderen de luxe touch.',
    icon: '🏨'
  },
  {
    title: 'Winkelcentra',
    description: 'Hoge loopstroom bij entrees, toiletten en passagezones. Meer beleving, langere verblijfstijd.',
    icon: '🛍️'
  },
  {
    title: 'Horeca',
    description: 'Bied gasten een opfrismoment tijdens hun bezoek. Past bij restaurants, bars en clubs.',
    icon: '🍽️'
  },
  {
    title: 'Events',
    description: 'Premium touchpoint op beurzen, congressen en festivals. Onderscheidend en memorabel.',
    icon: '🎟️'
  },
  {
    title: 'Premium retail',
    description: 'Versterk het merkgevoel in luxe winkels en flagship stores. Past naadloos in het interieur.',
    icon: '🛒'
  }
];

export function LocationSection() {
  return (
    <Section
      id="locaties"
      eyebrow="Ideale locaties"
      title="Overal waar bezoekers langskomen."
      subtitle="Hoe hoger de loopstroom, hoe meer sprays — en hoe meer u verdient. Luxevia past bij elke omgeving met voldoende bezoekers."
    >
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {LOCATIONS.map((location) => (
          <article key={location.title} className="card-surface p-5 sm:p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-slate-700/80 text-lg">
                <span aria-hidden>{location.icon}</span>
              </div>
              <h3 className="text-base font-semibold text-white">{location.title}</h3>
            </div>
            <p className="text-sm text-slate-300">{location.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

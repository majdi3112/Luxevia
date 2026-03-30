import { Section } from './Section';

const LOCATIONS = [
  {
    title: 'Sportscholen',
    description:
      'Na de training even opfrissen: extra service die past bij een premium sportschool, zonder extra personeel.',
    icon: '🏋️'
  },
  {
    title: 'Hotels',
    description:
      'Lobby, liftzone of lounge: gasten waarderen een snelle geurupgrade. Ideaal voor hotels met hoge loop.',
    icon: '🏨'
  },
  {
    title: 'Winkelcentra',
    description:
      'Bij entrees en passagezones verlengt u het verblijf en versterkt u de beleving – met omzet voor de locatie.',
    icon: '🛍️'
  },
  {
    title: 'Horeca',
    description:
      'Clubs, restaurants en bars: een discrete luxe touch die bezoekers onthouden, zonder barpersoneel te belasten.',
    icon: '🍽️'
  },
  {
    title: 'Events',
    description:
      'Beurzen, congressen en festivals: een onderscheidend premium punt zonder dat u zelf machines koopt.',
    icon: '🎟️'
  },
  {
    title: 'Premium retail',
    description:
      'Parfumerie, beauty en flagship stores: versterk het merkgevoel met een strakke dispenser die bij uw uitstraling past.',
    icon: '🛒'
  }
];

export function LocationSection() {
  return (
    <Section
      id="locaties"
      eyebrow="Voor welke locaties"
      title="Waar veel mensen komen, verdient de samenwerking."
      subtitle="Luxevia zoekt plekken met gezonde doorloop. Wij dragen het risico; u kiest huur of omzetdeel en bouwt mee aan service en inkomsten."
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

import { Section } from './Section';

const LOCATIONS = [
  {
    title: 'Sportscholen',
    description: 'Ideaal na een workout: bezoekers kunnen zich snel en fris voelen voordat ze verder gaan.',
    icon: '🏋️'
  },
  {
    title: 'Hotels',
    description: 'Extra service in lobby, verdieping of naast de lift voor gasten die net willen bijsprayen.',
    icon: '🏨'
  },
  {
    title: 'Winkelcentra',
    description: 'Plaatsing bij entrees, toiletten of passagezones verhoogt beleving én verblijfsduur.',
    icon: '🛍️'
  },
 {
  title: 'Horeca',
  description: 'Bied gasten een extra luxe beleving met snelle parfumverfrissing tijdens hun bezoek.',
  icon: '🍽️'
},
  {
    title: 'Events',
    description: 'Premium touchpoint op beurzen, congressen en festivals voor een onderscheidende ervaring.',
    icon: '🎟️'
  },
  {
    title: 'Premium retail',
    description: 'Versterk het merkgevoel in luxe winkels, parfumeriehoeken en flagship stores.',
    icon: '🛒'
  }
];

export function LocationSection() {
  return (
    <Section
      id="locaties"
      eyebrow="Voor welke locaties"
      title="Gemaakt voor high-footfall omgevingen."
      subtitle="Waar veel mensen langskomen, voegt Luxevia direct waarde toe. De machine functioneert als servicepunt én als subtiele merkdrager."
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


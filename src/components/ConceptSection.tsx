import { Section } from './Section';

export function ConceptSection() {
  return (
    <Section
      id="concept"
      eyebrow="Het concept"
      title="Wij investeren, u verdient mee."
      subtitle="Luxevia plaatst een premium parfumdispenser op uw locatie. Wij nemen de volledige investering, het onderhoud en de bevoorrading op ons. Bezoekers betalen per spray — u ontvangt een vaste huur of deelt mee in de omzet."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-white">Luxevia levert alles</h3>
          <p className="mt-2 text-sm text-slate-300">
            Machine, installatie, parfums, onderhoud en bevoorrading — volledig voor onze rekening. U hoeft niets aan te schaffen.
          </p>
        </div>
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-white">Bezoekers betalen per spray</h3>
          <p className="mt-2 text-sm text-slate-300">
            Uw gasten kiezen een geur op het touchscreen en betalen contactloos per spray. Geen abonnementen, geen gedoe.
          </p>
        </div>
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-white">U verdient, zonder risico</h3>
          <p className="mt-2 text-sm text-slate-300">
            Kies een vaste maandelijkse vergoeding of een vooraf afgesproken omzetpercentage. Geen investering, geen verborgen kosten.
          </p>
        </div>
      </div>
    </Section>
  );
}

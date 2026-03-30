import { Section } from './Section';

export function ConceptSection() {
  return (
    <Section
      id="concept"
      eyebrow="Over het concept"
      title="Wij leveren en onderhouden. U profiteert zonder eigen kapitaal."
      subtitle="Luxevia plaatst de parfumdispenser op uw locatie en neemt investering, voorraad en technisch beheer op zich. Bezoekers betalen per spray; u verdient mee via huur of omzetdeel – volgens wat u vooraf kiest."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-white">Luxevia regelt alles</h3>
          <p className="mt-2 text-sm text-slate-300">
            Plaatsing, inrichting, onderhoud en bevoorrading liggen bij ons. U levert ruimte en stroom. Geen aanschaf,
            geen verborgen kosten voor de machine.
          </p>
        </div>
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-white">Bezoekers betalen per spray</h3>
          <p className="mt-2 text-sm text-slate-300">
            De gast kiest een geur, betaalt snel via de terminal en ontvangt één gecontroleerde spray. Duidelijk,
            hygiënisch en zonder extra werk voor uw team.
          </p>
        </div>
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-white">U verdient mee, op uw voorwaarden</h3>
          <p className="mt-2 text-sm text-slate-300">
            Kies vaste huur per maand voor voorspelbare inkomsten, of een afgesproken percentage op de omzet als u
            liever meegroeit met het succes op de vloer. Beide opties leggen we vooraf schriftelijk vast.
          </p>
        </div>
      </div>
    </Section>
  );
}

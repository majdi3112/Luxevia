import { Section } from './Section';

export function ConceptSection() {
  return (
    <Section
      id="concept"
      eyebrow="Het concept"
      title="Wij investeren, u verdient mee"
      subtitle="Loma plaatst een premium parfumdispenser op uw locatie. Wij nemen de volledige investering, het onderhoud en de bevoorrading op ons. Loma plaatst een premium parfumdispenser op uw locatie. Wij nemen de volledige investering, het onderhoud en de bevoorrading op ons. Bezoekers betalen per spray en u ontvangt een vooraf afgesproken percentage van de opbrengst. Zo profiteert u rechtstreeks mee van het succes van de dispenser, zonder investering of operationele zorgen. Loma levert alles."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-slate-900"> Loma levert alles</h3>
          <p className="mt-2 text-sm text-slate-600">
            Machine, installatie, parfums, onderhoud en bevoorrading volledig voor onze rekening. U hoeft niets aan te schaffen.
          </p>
        </div>
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-slate-900">Bezoekers betalen per spray</h3>
          <p className="mt-2 text-sm text-slate-600">
            Uw gasten kiezen een geur op het touchscreen en betalen met qr of contactloos per spray.
          </p>
        </div>
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-slate-900">U verdient, zonder risico</h3>
          <p className="mt-2 text-sm text-slate-600">
            U ontvangt een vooraf afgesproken percentage van de omzet die de parfumdispenser op uw locatie genereert. Geen investering, geen vaste kosten en geen operationele zorgen.          </p>
        </div>
      </div>
    </Section>
  );
}

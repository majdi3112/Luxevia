import { Section } from './Section';

export function ConceptSection() {
  return (
    <Section
      id="concept"
      eyebrow="Over het concept"
      title="Luxe parfum, on demand – zonder personeelsdruk."
      subtitle="Luxevia plaatst compacte parfum vending machines op plekken waar bezoekers snel willen opfrissen. Bezoekers kiezen hun favoriete geur en betalen per spray, terwijl u een extra service én nieuwe omzetstroom toevoegt."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-white">Per spray betalen</h3>
          <p className="mt-2 text-sm text-slate-300">
            Bezoekers betalen per gebruik (vanaf €1 per spray). Geen abonnementen of ingewikkelde prijsstructuren – helder, transparant en direct.
          </p>
        </div>
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-white">Premium & compact</h3>
          <p className="mt-2 text-sm text-slate-300">
            Een strakke, luxe uitstraling in een zeer compact formaat. De machine past eenvoudig op een muur, balie of inloopzone zonder het interieur te domineren.
          </p>
        </div>
        <div className="card-surface p-5 sm:p-6">
          <h3 className="text-base font-semibold text-white">Gebruiksvriendelijk</h3>
          <p className="mt-2 text-sm text-slate-300">
            Duidelijke interface, korte instructies en contactloze betaling. Binnen enkele seconden gekozen, betaald en gesprayd.
          </p>
        </div>
      </div>
    </Section>
  );
}


import { Section } from './Section';

const SPECS = [
  { label: 'Touchscreen', value: '10,1″ HD' },
  { label: 'Parfums', value: '5 verschillende geuren' },
  { label: 'Betaling', value: 'Contactloos & QR' },
  { label: 'Formaat', value: 'Compact wandmodel' },
  { label: 'Monitoring', value: 'Realtime op afstand' }
];

export function ProductHighlightsSection() {
  return (
    <Section
      id="product"
      eyebrow="De dispenser"
      title="Loma Parfumdispenser"
      subtitle="Een compacte, premium parfumdispenser die eenvoudig op uw locatie wordt geplaatst. Loma blijft eigenaar en verzorgt de volledige exploitatie."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] items-start">

        <div className="card-surface p-5 sm:p-6 lg:p-7">
          <p className="text-sm font-medium text-slate-800">
            Compact, slim en eenvoudig
          </p>

          <p className="mt-3 text-sm text-slate-600">
            Bezoekers kiezen hun favoriete parfum via het touchscreen,
            betalen eenvoudig en ontvangen direct een afgemeten spray.
            De dispenser biedt vijf verschillende geuren en neemt weinig
            ruimte in beslag.
          </p>

          <div className="mt-5 space-y-2 text-sm">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between gap-4"
              >
                <span className="text-slate-500">{spec.label}</span>
                <span className="text-slate-800 text-right">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

       

      </div>
    </Section>
  );
}
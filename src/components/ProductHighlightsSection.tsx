import { Section } from './Section';

const SPECS_LEFT = [
  { label: 'Touchscreen', value: '10,1″ HD' },
  { label: 'Capaciteit', value: '5 × 100 ml reservoirs' },
  { label: 'Gewicht', value: '22 kg' },
  { label: 'Afmetingen', value: '750 × 210 × 445 mm' },
  { label: 'Piekvermogen', value: '30 W' }
];

const SPECS_RIGHT = [
  { label: 'Connectiviteit', value: 'Wi‑Fi & 4G LTE' },
  { label: 'Materiaal', value: 'Gegalvaniseerd staal + acryl' },
  { label: 'Betaalopties', value: 'Contactloos, kaart, QR' },
  { label: 'Monitoring', value: 'Remote dashboard realtime' },
  { label: 'Certificering', value: 'CE & ISO' },
  { label: 'Garantie', value: '2 jaar' }
];

export function ProductHighlightsSection() {
  return (
    <Section
      id="product"
      eyebrow="De machine"
      title="Marwey Parfumdispenser"
      subtitle="Een compacte, professionele dispenser ontworpen voor continu gebruik in publieke en semi‑publieke ruimtes. U hoeft de machine niet aan te schaffen — Luxevia blijft eigenaar."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] items-start">
        <div className="card-surface p-5 sm:p-6 lg:p-7">
          <p className="text-sm font-medium text-slate-200">
            Technische specificaties
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Een slimme dispenser met 10,1″ touchscreen, vijf onafhankelijke reservoirs van elk 100 ml en geïntegreerde betaalterminal. Gebouwd uit gegalvaniseerd staal met acrylpanelen voor een robuuste én strakke uitstraling.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm text-slate-300">
            <div className="space-y-2">
              {SPECS_LEFT.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4">
                  <span className="text-slate-400">{spec.label}</span>
                  <span className="text-slate-100 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {SPECS_RIGHT.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4">
                  <span className="text-slate-400">{spec.label}</span>
                  <span className="text-slate-100 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="card-surface p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-white">
              Digitale signage & branding
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Het HD-scherm toont merkuitingen, parfuminfo of locatie-specifieke content. Frontpanelen en visuals zijn volledig aanpasbaar aan uw huisstijl of campagnes.
            </p>
          </div>
          <div className="card-surface p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-white">Remote monitoring & ontzorging</h3>
            <p className="mt-2 text-sm text-slate-300">
              Via ons dashboard monitoren wij realtime voorraad, gebruik en machinestatus. Bijvullen en onderhoud regelen wij proactief — uw locatie merkt er niets van.
            </p>
          </div>
          <div className="card-surface p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-white">CE & ISO gecertificeerd</h3>
            <p className="mt-2 text-sm text-slate-300">
              De machine voldoet aan Europese veiligheids- en kwaliteitsnormen. Inclusief twee jaar fabrieksgarantie en professionele ondersteuning.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Section } from './Section';

const SPECS_LEFT = [
  { label: 'Capaciteit', value: '20–150 stuks' },
  { label: 'Touchscreen', value: '10 inch' },
  { label: 'Vermogen', value: '100W' },
  { label: 'Afmetingen', value: '23 × 41 × 70 cm' },
  { label: 'Gewicht', value: '30 kg' }
];

const SPECS_RIGHT = [
  { label: 'Netwerk', value: 'Wi‑Fi en 4G LTE' },
  { label: 'Voorraadbeheer', value: 'Automatische stock monitoring' },
  { label: 'Betaalopties', value: 'Meerdere betaalmethoden' },
  { label: 'Extra functies', value: 'Dispensing, spraying, remote monitoring, digitale bonnen' },
  { label: 'Branding', value: 'Custom graphics mogelijk' },
  { label: 'Certificering', value: 'CE, ISO' },
  { label: 'Garantie', value: '2 jaar' }
];

export function ProductHighlightsSection() {
  return (
    <Section
      id="product"
      eyebrow="Product highlights"
      title="Mini Small Cologne Vending Machine Sprayer"
      subtitle="Een compacte, professionele dispenser ontwikkeld voor continu gebruik in publieke en semi‑publieke ruimtes."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] items-start">
        <div className="card-surface p-5 sm:p-6 lg:p-7">
          <p className="text-sm font-medium text-slate-200">
            Productsamenvatting
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Een slimme parfumdispenser met 10&quot; touchscreen, meerdere reservoirs en geïntegreerde betaalterminal.
            De machine biedt een gecontroleerde spray per transactie, bewaakt automatisch de voorraad en kan op afstand
            worden gemonitord.
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
              Het geïntegreerde scherm kan worden ingezet voor merkcampagnes, productuitleg of locatie‑specifieke
              boodschappen. Frontpanelen en visuals zijn volledig te personaliseren binnen uw huisstijl.
            </p>
          </div>
          <div className="card-surface p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-white">Operationele zekerheid</h3>
            <p className="mt-2 text-sm text-slate-300">
              Dankzij afstandsmonitoring is inzicht in gebruik, voorraadniveaus en status altijd beschikbaar.
              Certificering volgens CE en ISO‑normen en een standaardgarantie van twee jaar ondersteunen professioneel
              gebruik.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}


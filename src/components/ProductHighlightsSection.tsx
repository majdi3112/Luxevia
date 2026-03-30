import { Section } from './Section';

const SPECS_LEFT = [
  { label: 'Scherm', value: '10,1″ touchscreen' },
  { label: 'Capaciteit', value: '5 × 100 ml' },
  { label: 'Afmetingen (B×D×H)', value: '750 × 210 × 445 mm' },
  { label: 'Gewicht', value: '22 kg' },
  { label: 'Vermogen (piek)', value: '30 W' }
];

const SPECS_RIGHT = [
  { label: 'Connectiviteit', value: 'Wi‑Fi en 4G' },
  { label: 'Behuizing', value: 'Verzinkt staal en acryl' },
  { label: 'Betaalopties', value: 'Contactloos, QR, kaart, munt (terminal-afhankelijk)' },
  { label: 'Digitale signage', value: 'Campagnes en content op het scherm' },
  { label: 'Monitoring', value: 'Op afstand: status en gebruik' },
  { label: 'Certificering', value: 'CE en ISO (conform leverancierspecificatie)' },
  { label: 'Garantie', value: '2 jaar (standaard)' }
];

export function ProductHighlightsSection() {
  return (
    <Section
      id="product"
      eyebrow="Product"
      title="Marwey parfumdispenser"
      subtitle="Professionele countertop-unit voor continu publiek gebruik: compact, netwerkbaar en klaar voor betaling per spray."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] items-start">
        <div className="card-surface p-5 sm:p-6 lg:p-7">
          <p className="text-sm font-medium text-slate-200">Specificaties</p>
          <p className="mt-3 text-sm text-slate-300">
            De Marwey-machine combineert een verlicht vitrinegedeelte met een verticaal 10,1″ touchscreen voor keuze,
            instructie en digitale signage. Vijf knopposities, elk gekoppeld aan een reservoir tot 100 ml, passen bij
            een wisselende premium line-up.
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
            <h3 className="text-sm font-semibold text-white">Digitale signage en merk</h3>
            <p className="mt-2 text-sm text-slate-300">
              Het touchscreen toont naast de keuze ook campagnes, partnercontent of huisstijl. Zo wordt de dispenser
              een zichtbaar premium punt én een communicatiekanaal op de vloer.
            </p>
          </div>
          <div className="card-surface p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-white">Bedrijfszekerheid</h3>
            <p className="mt-2 text-sm text-slate-300">
              Remote monitoring geeft inzicht in gebruik en technische status. CE- en ISO-conformiteit volgens
              leveranciersdocumentatie ondersteunt professionele uitrol; standaard twee jaar garantie op de hardware.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

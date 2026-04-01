import { Section } from './Section';
import { CTAButton } from './CTAButton';

export function PilotSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Section id="pilot" align="center">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="section-title">Pilot &amp; partnerships</p>
          <h2 className="section-heading">
            Test risicovrij op uw locatie.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Wij plaatsen een parfumdispenser voor een afgesproken proefperiode. Na afloop beslist u vrijblijvend of u doorgaat. Het enige wat u levert: een plekje en een stopcontact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <div className="card-surface p-5 sm:p-6 lg:p-7 space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-white text-center md:text-left">
              Hoe de pilot werkt
            </h3>
            <p className="text-sm text-slate-300">
              Luxevia levert, installeert en configureert de machine op de afgesproken plek. Tijdens de pilot monitoren wij gebruik en omzet, vullen wij parfums bij en lossen wij eventuele storingen op.
            </p>
            <p className="text-sm text-slate-300">
              Na de proefperiode evalueren we samen de resultaten. Bevalt het? Dan maken we er een vast partnerschap van. Bevalt het niet? Wij halen de machine kosteloos op. Geen kleine lettertjes.
            </p>
          </div>

          <div className="card-surface p-5 sm:p-6 flex flex-col justify-between space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-white text-center md:text-left">
                Twee verdienmodellen — u kiest
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-brand-gold font-semibold">A.</span>
                  <span><strong className="text-slate-100">Vaste huur</strong> — een vast maandelijks bedrag, ongeacht het gebruik. Voorspelbaar inkomen.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-gold font-semibold">B.</span>
                  <span><strong className="text-slate-100">Omzetpercentage</strong> — u ontvangt een vooraf afgesproken percentage van elke spray. Meer gebruik = meer inkomsten.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-xs text-slate-300 mt-3">
              <p className="font-medium text-slate-100">Wat u nodig heeft</p>
              <p className="mt-1">Alleen een kleine ruimte (wandmontage of balie) en een standaard stopcontact. Wij regelen de rest.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-1">
          <CTAButton onClick={scrollToContact} className="w-full sm:w-auto">
            Plan een risicovrije proefplaatsing
          </CTAButton>
          <p className="text-xs text-slate-400 text-center max-w-md">
            Geen verplichting na de pilot — vervolg alleen als u tevreden bent.
          </p>
        </div>
      </div>
    </Section>
  );
}

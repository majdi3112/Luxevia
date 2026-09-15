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
          <p className="section-title">proefperiode</p>
          <h2 className="section-heading">
            Test risicovrij op uw locatie.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Wij plaatsen een parfumdispenser voor een afgesproken proefperiode. Na afloop beslist u vrijblijvend of u doorgaat. Het enige wat u levert: een plekje en een stopcontact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <div className="card-surface p-5 sm:p-6 lg:p-7 space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 text-center md:text-left">
              Hoe de proef periode werkt
            </h3>
            <p className="text-sm text-slate-600">
              Loma levert, installeert en configureert de machine op de afgesproken plek. Tijdens de proef periode monitoren wij gebruik en omzet, vullen wij parfums bij en lossen wij eventuele storingen op.
            </p>
            <p className="text-sm text-slate-600">
              Na de proefperiode evalueren we samen de resultaten. Bevalt het? Dan maken we er een vast partnerschap van. Bevalt het niet? Wij halen de machine kosteloos op.
            </p>
          </div>

        <div className="card-surface p-5 sm:p-6 flex flex-col justify-between space-y-3">
  <div>
    <h4 className="text-sm font-semibold text-slate-900 text-center md:text-left">
      Wat hebben wij nodig?
    </h4>

    <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
      <li className="flex gap-2">
        <span className="text-brand-gold font-semibold">A.</span>
        <span>
          <strong className="text-slate-900">Een kleine ruimte</strong> — geschikt voor wandmontage van de parfumdispenser.
        </span>
      </li>

      <li className="flex gap-2">
        <span className="text-brand-gold font-semibold">B.</span>
        <span>
          <strong className="text-slate-900">Een standaard stopcontact</strong> — voor de stroomvoorziening van de dispenser.
        </span>
      </li>
    </ul>
  </div>
</div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-1">
          <CTAButton onClick={scrollToContact} className="w-full sm:w-auto">
            Plan een risicovrije proefplaatsing
          </CTAButton>
           
        </div>
      </div>
    </Section>
  );
}

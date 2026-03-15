import { Section } from './Section';
import { CTAButton } from './CTAButton';

export function PilotSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offset = window.scrollY + rect.top - 96;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <Section id="pilot" align="center">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="section-title">Pilot &amp; partnerships</p>
          <h2 className="section-heading">
            Start met een gerichte pilotplaatsing.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We werken samen met locaties die hun bezoekersbeleving actief willen versterken en openstaan voor nieuwe
            premium services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <div className="card-surface p-5 sm:p-6 lg:p-7 space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-white text-center md:text-left">
              Gericht testen met minimale belasting
            </h3>
            <p className="text-sm text-slate-300">
              In een pilot onderzoeken we gezamenlijk of parfum vending past bij uw locatie, doelgroep en commerciële
              doelstellingen. We stemmen de looptijd, positionering, prijsstelling en merkuitstraling af en meten gebruik en
              omzetontwikkeling.
            </p>
            <p className="text-sm text-slate-300">
              Tijdens de pilot verzorgen wij plaatsing, inrichting, remote monitoring en periodieke evaluatie. U levert
              voornamelijk ruimte, stroom en interne afstemming.
            </p>
          </div>

          <div className="card-surface p-5 sm:p-6 flex flex-col justify-between space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-white text-center md:text-left">
                Geschikt voor organisaties die:
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                <li>• Beleving en gastvrijheid willen versterken met een tastbare service.</li>
                <li>• Zoeken naar nieuwe omzetkanalen met beperkte operationele impact.</li>
                <li>• Openstaan voor data‑gedreven pilots en heldere evaluatiemomenten.</li>
                <li>• Een moderne, premium uitstraling belangrijk vinden.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-1">
          <CTAButton onClick={scrollToContact} className="w-full sm:w-auto">
            Bespreek een pilot
          </CTAButton>
          <p className="text-xs text-slate-400 text-center max-w-md">
            Geen verplichting na pilot – vervolg alleen bij aantoonbare toegevoegde waarde.
          </p>
        </div>
      </div>
    </Section>
  );
}


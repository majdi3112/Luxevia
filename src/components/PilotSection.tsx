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
          <h2 className="section-heading">Risicovrij proberen. Daarna bewust verlengen of stoppen.</h2>
          <p className="text-sm sm:text-base text-slate-300">
            In een pilot plaatst Luxevia de dispenser op uw locatie op onze kosten. U levert alleen geschikte ruimte en
            stroom. Na de afgesproken periode bepaalt u of u door wilt – zonder verborgen verplichting om door te gaan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <div className="card-surface p-5 sm:p-6 lg:p-7 space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-white text-center md:text-left">
              Wat u van de pilot mag verwachten
            </h3>
            <p className="text-sm text-slate-300">
              We installeren de Marwey-unit, stemmen geuren en communicatie op uw publiek af en volgen gebruik en omzet.
              Loopt het goed, maken we afspraken voor de volgende fase. Loopt het tegen, dan halen we de machine weg
              volgens planning.
            </p>
            <p className="text-sm text-slate-300">
              Voor de doorlopende fase kiest u: vaste huur per maand voor uw locatie, of een vooraf vast percentage op de
              omzet uit sprays. Zo stemmen we af op wat u het prettigst vindt om te plannen.
            </p>
          </div>

          <div className="card-surface p-5 sm:p-6 flex flex-col justify-between space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-white text-center md:text-left">Geschikt als u:</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                <li>• Gastvrijheid en beleving wilt versterken zonder grote investering.</li>
                <li>• Openstaat voor een beperkte proefperiode met duidelijke evaluatie.</li>
                <li>• Ruimte en een stopcontact kunt vrijmaken op een zichtbare plek.</li>
                <li>• Wilt samenwerken met een partij die hardware en risico draagt.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-1">
          <CTAButton onClick={scrollToContact} className="w-full sm:w-auto">
            Plan een risicovrije proefplaatsing
          </CTAButton>
          <p className="text-xs text-slate-400 text-center max-w-md">
            Na de pilot bepaalt u zelf of u door wilt. Geen aanschafplicht voor uw organisatie.
          </p>
        </div>
      </div>
    </Section>
  );
}

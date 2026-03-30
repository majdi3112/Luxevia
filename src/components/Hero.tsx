import { CTAButton } from './CTAButton';

const HERO_IMAGE = '/lifun-perfume-vending-machine-front-view-how-it-works-06.png';

export function Hero() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offset = window.scrollY + rect.top - 96;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-18 lg:pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.38]"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="section-container relative flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 space-y-7">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-brand-goldSoft">
            Premium fragrance vending
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
            Luxe parfum per spray,
            <span className="block text-brand-gold mt-1">zonder investering voor uw locatie.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            Luxevia plaatst de dispenser, draait voor kapitaal en risico. U kiest: een vaste huur per maand voor uw
            locatie of een vooraf afgesproken percentage op de spray-omzet. Zo test u het concept zonder eigen
            investering.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CTAButton onClick={() => scrollToId('contact')}>
              Plan een risicovrije proefplaatsing
            </CTAButton>
            <CTAButton variant="secondary" onClick={() => scrollToId('pilot')}>
              Hoe de pilot werkt
            </CTAButton>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-slate-900/90 px-4 py-1.5 text-xs text-brand-gold shadow-soft-gold -mt-1">
            <span className="font-semibold tracking-wide">Bezoekers betalen per spray</span>
            <span className="text-[11px] text-slate-300">u verdient mee volgens het gekozen model</span>
          </div>

          <div className="h-px w-10 bg-slate-700/80 mt-3" />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[min(440px,88vw)]">
            <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-tr from-brand-gold/40 via-amber-200/5 to-sky-500/20 opacity-80 blur-xl" />
            <div className="relative card-surface rounded-[1.75rem] overflow-hidden border border-slate-800/80 shadow-2xl">
              <img
                src={HERO_IMAGE}
                alt="Marwey parfumdispenser met touchscreen en betaalterminal"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[5/4] lg:aspect-square"
                width={880}
                height={704}
                loading="eager"
                decoding="async"
              />
              <div className="px-4 sm:px-5 py-3 sm:py-4 border-t border-slate-800/80 bg-slate-950/90 flex items-center justify-between gap-4 text-xs text-slate-300">
                <div>
                  <p className="font-medium text-slate-100">Marwey parfumdispenser</p>
                  <p className="text-slate-400 mt-0.5">10,1″ touchscreen · 5 geuren · contactloos betalen</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-semibold text-brand-gold">0 €</p>
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">eigen investering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

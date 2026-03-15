import { CTAButton } from './CTAButton';

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
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="section-container relative flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 space-y-7">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-brand-goldSoft">
            Premium fragrance vending
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
            Luxe parfum per spray,
            <span className="block text-brand-gold mt-1">zonder personeelslasten.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            Luxevia brengt compacte parfum vending machines naar high-traffic locaties. Bezoekers betalen per spray
            (vanaf €1) voor een snelle, luxe geurbeleving – u biedt extra service én creëert nieuwe omzet.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CTAButton onClick={() => scrollToId('contact')}>
              Vraag een pilot aan
            </CTAButton>
            <CTAButton
              variant="secondary"
              onClick={() => scrollToId('pilot')}
            >
              Plan een kennismaking
            </CTAButton>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-slate-900/90 px-4 py-1.5 text-xs text-brand-gold shadow-soft-gold -mt-1">
            <span className="font-semibold tracking-wide">Richtprijs ± €1 per spray</span>
            <span className="text-[11px] text-slate-300">indicatief, per locatie af te stemmen</span>
          </div>

          <div className="h-px w-10 bg-slate-700/80 mt-3" />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-tr from-brand-gold/40 via-amber-200/5 to-sky-500/20 opacity-80 blur-xl" />
            <div className="relative card-surface rounded-[1.75rem] p-4 sm:p-5 lg:p-6 w-[min(420px,80vw)]">
              <div className="aspect-[4/3] rounded-[1.4rem] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 flex">
                <div className="w-2/5 border-r border-slate-800/80 flex flex-col justify-between p-3 sm:p-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-brand-goldSoft">
                      Fragrance lineup
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-100">
                      Signature selectie
                    </p>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    <div className="h-10 rounded-lg bg-gradient-to-t from-amber-700 to-amber-300" />
                    <div className="h-10 rounded-lg bg-gradient-to-t from-sky-800 to-sky-300" />
                    <div className="h-10 rounded-lg bg-gradient-to-t from-rose-800 to-rose-300" />
                    <div className="h-10 rounded-lg bg-gradient-to-t from-emerald-800 to-emerald-300" />
                    <div className="h-10 rounded-lg bg-gradient-to-t from-violet-800 to-violet-300" />
                    <div className="h-10 rounded-lg bg-gradient-to-t from-slate-700 to-slate-200" />
                  </div>
                </div>
                <div className="w-3/5 flex flex-col p-3 sm:p-4 gap-3">
                  <div className="flex-1 rounded-xl bg-slate-900/80 border border-slate-700/70 flex flex-col justify-between p-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Parfum vending</span>
                      <span className="text-slate-500">Live preview</span>
                    </div>
                    <div className="mt-2 h-16 rounded-lg bg-gradient-to-tr from-slate-800 via-slate-700 to-brand-gold/40" />
                    <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                      <span>Contactloze betaling</span>
                      <span>€1 per spray</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-xs text-slate-300">
                    <div className="rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2">
                      <p className="text-slate-400">Netwerk</p>
                      <p className="text-slate-100">Wi‑Fi / 4G LTE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 text-xs text-slate-300">
                <div>
                  <p className="font-medium text-slate-100">Mini Small Cologne Vending</p>
                  <p className="text-slate-400">Compacte luxe dispenser voor high-traffic locaties.</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-brand-gold">± €1</p>
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">per spray</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


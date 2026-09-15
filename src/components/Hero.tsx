import { CTAButton } from './CTAButton';

export function Hero() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-18 lg:pb-20 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-sky-300/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />
      </div>

      <div className="section-container relative flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 space-y-7">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-brand-goldSoft">
          fragrance vending
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-900 leading-tight">
            Verdien aan luxe parfum,
            <span className="block text-brand-gold mt-1">zonder investering of risico.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            Loma plaatst, investeert en onderhoudt.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CTAButton onClick={() => scrollToId('contact')}>
              Plan een risicovrije proefplaatsing
            </CTAButton>
            <CTAButton
              variant="secondary"
              onClick={() => scrollToId('pilot')}
            >
              Bekijk het verdienmodel
            </CTAButton>
          </div>

         

        
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-tr from-sky-400/40 via-white to-sky-200/50 opacity-80 blur-xl" />
            <div className="relative card-surface rounded-[1.75rem] p-4 sm:p-5 lg:p-6 w-[min(420px,80vw)]">
              <img
                src="/machine.jpeg"
                alt="Loma parfumdispenser – Marwey vending machine met touchscreen en meerdere geuren"
                className="w-full rounded-[1.4rem] object-cover"
              />
              <div className="mt-3 flex items-center justify-between gap-4 text-xs text-slate-600">
                <div>
                  <p className="font-medium text-slate-900">Loma Parfumdispenser</p>
                  <p className="text-slate-500">Wij plaatsen en onderhouden. U verdient mee.</p>
                </div>
                <div className="text-right">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { CTAButton } from './CTAButton';

const NAV_ITEMS = [
  { id: 'concept', label: 'Concept' },
  { id: 'locaties', label: 'Locaties' },
  { id: 'voordelen', label: 'Voordelen' },
  { id: 'werkwijze', label: 'Hoe het werkt' },
  { id: 'product', label: 'Product' },
  { id: 'pilot', label: 'Pilot' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const offset = window.scrollY + rect.top - 96;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? 'backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/60' : 'bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between py-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick('hero')}
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-brand-gold via-amber-300 to-amber-500 shadow-soft-gold" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.24em] uppercase text-brand-goldSoft">
              Luxevia
            </span>
            <span className="text-xs text-slate-400">Fragrance Vending</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 text-xs font-medium text-slate-300">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-brand-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <CTAButton
            onClick={() => handleNavClick('contact')}
            className="ml-2"
          >
            Plan een kennismaking
          </CTAButton>
        </div>

        <button
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 text-slate-200 hover:border-brand-gold/80"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Open navigatie"
        >
          <span className="sr-only">Open navigatie</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                isOpen ? 'translate-y-1 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-current transition-opacity ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                isOpen ? '-translate-y-1 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
          <div className="section-container py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2 text-sm text-slate-200 hover:text-brand-gold"
              >
                {item.label}
              </button>
            ))}
            <CTAButton
              onClick={() => handleNavClick('contact')}
              className="w-full justify-center mt-2"
            >
              Plan een kennismaking
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}


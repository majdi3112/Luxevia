export function Footer() {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95">
      <div className="section-container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-100">Luxevia Fragrance Vending</p>
          <p className="mt-1 text-xs text-slate-400">
            Premium parfumdispensers op uw locatie — zonder investering of risico.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
          <button onClick={() => handleNavClick('concept')} className="hover:text-brand-gold">
            Concept
          </button>
          <button onClick={() => handleNavClick('locaties')} className="hover:text-brand-gold">
            Locaties
          </button>
          <button onClick={() => handleNavClick('voordelen')} className="hover:text-brand-gold">
            Voordelen
          </button>
          <button onClick={() => handleNavClick('product')} className="hover:text-brand-gold">
            Product
          </button>
          <button onClick={() => handleNavClick('pilot')} className="hover:text-brand-gold">
            Pilot
          </button>
          <button onClick={() => handleNavClick('faq')} className="hover:text-brand-gold">
            FAQ
          </button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-brand-gold">
            Contact
          </button>
        </nav>
        <p className="text-[11px] text-slate-500">
          &copy; {new Date().getFullYear()} Luxevia
        </p>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95">
      <div className="section-container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-100">Luxevia Fragrance Vending</p>
          <p className="mt-1 text-xs text-slate-400">
            Compacte parfum vending oplossingen voor high-traffic locaties.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
          <a href="#concept" className="hover:text-brand-gold">
            Concept
          </a>
          <a href="#locaties" className="hover:text-brand-gold">
            Locaties
          </a>
          <a href="#voordelen" className="hover:text-brand-gold">
            Voordelen
          </a>
          <a href="#product" className="hover:text-brand-gold">
            Product
          </a>
          <a href="#pilot" className="hover:text-brand-gold">
            Pilot
          </a>
          <a href="#faq" className="hover:text-brand-gold">
            FAQ
          </a>
          <a href="#contact" className="hover:text-brand-gold">
            Contact
          </a>
        </nav>
        <p className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} Luxevia – Conceptuele merknaam voor parfum vending.
        </p>
      </div>
    </footer>
  );
}


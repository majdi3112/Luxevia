import { Section } from './Section';
import { CTAButton } from './CTAButton';

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Vrijblijvend verkennen wat past bij uw locatie."
      subtitle="Laat uw gegevens achter of mail direct. Geen verplichting tot aanschaf of lang contract: we denken mee over pilot, plek en verdienmodel."
    >
      <div className="grid gap-7 lg:grid-cols-[1.05fr,0.95fr] items-start">
        <div className="card-surface p-5 sm:p-6 lg:p-7">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-300">Naam</label>
                <input
                  type="text"
                  placeholder="Voor- en achternaam"
                  className="mt-1 w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300">Bedrijf / locatie</label>
                <input
                  type="text"
                  placeholder="Naam organisatie of locatie"
                  className="mt-1 w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-300">E-mail</label>
                <input
                  type="email"
                  placeholder="naam@bedrijf.nl"
                  className="mt-1 w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300">Telefoon</label>
                <input
                  type="tel"
                  placeholder="+31 6 12345678"
                  className="mt-1 w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300">Type locatie</label>
              <select
                className="mt-1 w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Maak een keuze
                </option>
                <option>Sportschool</option>
                <option>Hotel</option>
                <option>Winkelcentrum</option>
                <option>Horeca</option>
                <option>Eventlocatie</option>
                <option>Retail / anders</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300">Korte toelichting</label>
              <textarea
                rows={4}
                placeholder="Bijv. gewenste plek, verwachte drukte, voorkeur voor huur of omzetdeel."
                className="mt-1 w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80 resize-none"
              />
            </div>
            <CTAButton type="submit" className="w-full sm:w-auto">
              Verstuur vrijblijvende aanvraag (mockup)
            </CTAButton>
            <p className="text-xs text-slate-400">
              Dit formulier is een vrijblijvende aanvraag in demo-vorm: er worden geen gegevens verstuurd. Gebruik de
              contactgegevens hiernaast voor een echte reactie. Na uw bericht reageren we doorgaans binnen één à twee
              werkdagen.
            </p>
          </form>
        </div>

        <div className="space-y-4">
          <div className="card-surface p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-white">Directe contactgegevens</h3>
            <dl className="mt-3 space-y-2 text-sm text-slate-300">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">E-mail</dt>
                <dd className="text-slate-100">partnerships@jouwdomein.com</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Telefoon</dt>
                <dd className="text-slate-100">+31 6 12345678</dd>
              </div>
            </dl>
          </div>
          <div className="card-surface p-5 sm:p-6 text-xs text-slate-400 space-y-2">
            <p>
              <span className="text-slate-300 font-medium">Reactietijd:</span> meestal binnen één à twee werkdagen met
              een voorstel voor een kort kennismakingsgesprek of opvolgmail.
            </p>
            <p>
              In dat gesprek bespreken we uw locatie, het gekozen verdienmodel (huur of omzetpercentage) en een mogelijke
              risicovrije proefplaatsing – steeds zonder verplichting tot aanschaf door u.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

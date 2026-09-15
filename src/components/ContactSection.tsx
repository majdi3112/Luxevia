import { Section } from './Section';
import { CTAButton } from './CTAButton';

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Vraag vrijblijvend een proefplaatsing aan"
      subtitle="Vul het formulier in en wij nemen binnen twee werkdagen contact met u op. Geen verplichtingen, geen kosten."
    >
      <div className="grid gap-7 lg:grid-cols-[1.05fr,0.95fr] items-start">
        <div className="card-surface p-5 sm:p-6 lg:p-7">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-600">
                  Naam
                </label>
                <input
                  type="text"
                  placeholder="Voor- en achternaam"
                  className="mt-1 w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600">
                  Bedrijf / locatie
                </label>
                <input
                  type="text"
                  placeholder="Naam organisatie of locatie"
                  className="mt-1 w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-600">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="Info@lomavending.be"
                  className="mt-1 w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600">
                  Telefoon
                </label>
                <input
                  type="tel"
                  placeholder="+32 468465481"
                  className="mt-1 w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600">
                Type locatie
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
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
              <label className="block text-xs font-medium text-slate-600">
                Voorkeur verdienmodel
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Maak een keuze
                </option>
                <option>Vaste maandelijkse huur</option>
                <option>Omzetpercentage</option>
                <option>Weet ik nog niet</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600">
                Korte toelichting
              </label>
              <textarea
                rows={3}
                placeholder="Beschrijf kort uw locatie en wat u aanspreekt aan het concept."
                className="mt-1 w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/80 resize-none"
              />
            </div>
            <CTAButton type="submit" className="w-full sm:w-auto">
              Verstuur vrijblijvende aanvraag
            </CTAButton>
            <p className="text-xs text-slate-500">
              100 % vrijblijvend. Wij nemen binnen twee werkdagen contact op voor een kort kennismakingsgesprek.
            </p>
          </form>
        </div>

        <div className="space-y-4">
          <div className="card-surface p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-slate-900">
              Directe contactgegevens
            </h3>
            <dl className="mt-3 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">E-mail</dt>
                <dd className="text-slate-800">info@lomavending.be</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Telefoon</dt>
                <dd className="text-slate-800">+32 468465481</dd>
              </div>
            </dl>
          </div>
          <div className="card-surface p-5 sm:p-6 text-xs text-slate-500 space-y-2">
            <p>
              Na uw aanvraag ontvangt u binnen twee werkdagen een reactie met een voorstel voor een kort (online) kennismakingsgesprek.
            </p>
            <p>
              Tijdens dit gesprek bespreken we uw locatie, bezoekersprofiel, gewenst verdienmodel en een mogelijke proefplaatsing.
            </p>
            
          </div>
        </div>
      </div>
    </Section>
  );
}

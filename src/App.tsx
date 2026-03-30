import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptSection } from './components/ConceptSection';
import { LocationSection } from './components/LocationSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ProductHighlightsSection } from './components/ProductHighlightsSection';
import { PilotSection } from './components/PilotSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <ConceptSection />
        <LocationSection />
        <BenefitsSection />
        <HowItWorksSection />
        <ProductHighlightsSection />
        <PilotSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;


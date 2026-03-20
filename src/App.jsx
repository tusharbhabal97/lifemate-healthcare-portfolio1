import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import FigmaActivitySection from './components/sections/FigmaActivitySection';
import FigmaFooterSection from './components/sections/FigmaFooterSection';
import FigmaHeroSection from './components/sections/FigmaHeroSection';
import FigmaNewsletterSection from './components/sections/FigmaNewsletterSection';
import FigmaQualitySection from './components/sections/FigmaQualitySection';
import FigmaTestimonialsSection from './components/sections/FigmaTestimonialsSection';
import DirectorsSection from './components/sections/DirectorsSection';
import HeroCardsSection from './components/sections/HeroCardsSection';
import { usePageMeta } from './hooks/usePageMeta';

function App() {
  usePageMeta({
    title: 'LifeMate Healthcare Pvt Ltd | Hospitals Network, Portfolio and CarrerMed',
    description:
      'LifeMate Healthcare Pvt Ltd is a healthcare portfolio group with LifeMate Clinic, Dr Mate Hospital Narayangaon, and Dr Mate Hospital Belhe, with upcoming CarrerMed healthcare careers platform.',
    keywords:
      'LifeMate Healthcare Pvt Ltd, directors team, healthcare leadership, LifeMate Clinic, Dr Mate Hospital Narayangaon, Dr Mate Hospital Belhe, healthcare company Pune, hospital portfolio India, CarrerMed healthcare jobs',
    canonicalUrl: 'https://lifemate-healthcare.com/',
    ogTitle: 'LifeMate Healthcare Pvt Ltd - Integrated Healthcare Portfolio',
    ogImage: 'https://lifemate-healthcare.com/og-cover.png',
    ogUrl: 'https://lifemate-healthcare.com/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'MedicalOrganization',
      name: 'LifeMate Healthcare Pvt Ltd',
      url: 'https://lifemate-healthcare.com/',
      description:
        'Healthcare portfolio organization operating hospitals and clinics with future expansion into CarrerMed healthcare careers platform.',
      subOrganization: [
        { '@type': 'MedicalClinic', name: 'LifeMate Clinic' },
        { '@type': 'Hospital', name: 'Dr Mate Hospital, Narayangaon' },
        { '@type': 'Hospital', name: 'Dr Mate Hospital, Belhe' },
      ],
      knowsAbout: ['Healthcare services', 'Hospital operations', 'Clinical quality', 'Healthcare recruitment technology'],
    },
  });

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F7FBFD]">
        <Navbar />
        <FigmaHeroSection />
        <HeroCardsSection />
        <FigmaActivitySection />
        <DirectorsSection />
        <FigmaQualitySection />
        <FigmaTestimonialsSection />
        <FigmaNewsletterSection />
        <FigmaFooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;

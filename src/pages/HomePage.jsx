import CtaBand from '../components/sections/CtaBand';
import HomeHero from '../components/sections/HomeHero';
import LeadershipPreview from '../components/sections/LeadershipPreview';
import NetworkOverview from '../components/sections/NetworkOverview';
import { usePageMeta } from '../hooks/usePageMeta';

const HomePage = () => {
  usePageMeta({
    title: 'Lifemate Healthcare Pvt Ltd | Corporate Healthcare Group',
    description:
      'Lifemate Healthcare Pvt Ltd is a healthcare parent company in Pune, India, focused on strategic growth, governance, and quality-driven healthcare institutions.',
  });

  return (
    <>
      <HomeHero />
      <NetworkOverview />
      <LeadershipPreview />
      <CtaBand />
    </>
  );
};

export default HomePage;

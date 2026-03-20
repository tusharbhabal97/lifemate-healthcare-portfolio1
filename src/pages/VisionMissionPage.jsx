import FadeIn from '../components/common/FadeIn';
import PageHero from '../components/common/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';

const VisionMissionPage = () => {
  usePageMeta({
    title: 'Vision & Mission | Lifemate Healthcare Pvt Ltd',
    description: 'Read Lifemate Healthcare vision and mission for long-term healthcare excellence.',
  });

  return (
    <>
      <PageHero
        badge="Vision & Mission"
        title="Building a future where quality healthcare is responsibly scaled"
        description="Our strategic roadmap aligns people, systems, and institutions around measurable healthcare value."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <FadeIn className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Vision</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              To become one of India&apos;s most trusted healthcare parent groups by building institutions that are known
              for integrity, quality, and patient confidence.
            </p>
          </FadeIn>
          <FadeIn delay={100} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              To advance healthcare with compassion and excellence through accountable leadership, strategic expansion,
              and systems that sustain long-term clinical and operational outcomes.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default VisionMissionPage;

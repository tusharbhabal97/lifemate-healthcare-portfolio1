import FadeIn from '../components/common/FadeIn';
import PageHero from '../components/common/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';
import { networkUnits } from '../utils/constants';

const NetworkPage = () => {
  usePageMeta({
    title: 'Healthcare Network | Lifemate Healthcare Pvt Ltd',
    description: 'Explore Lifemate Healthcare network structure spanning hospitals and clinics.',
  });

  return (
    <>
      <PageHero
        badge="Our Healthcare Network"
        title="Integrated institutions designed for continuity and trust"
        description="Our network strategy combines hospitals and clinics under one governance framework to improve consistency of care."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {networkUnits.map((unit, index) => (
              <FadeIn key={unit.title} delay={index * 100} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-medical-700">{unit.type}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{unit.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{unit.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  <li>• Standardized quality benchmarks</li>
                  <li>• Cross-unit operational governance</li>
                  <li>• Data-informed performance culture</li>
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NetworkPage;

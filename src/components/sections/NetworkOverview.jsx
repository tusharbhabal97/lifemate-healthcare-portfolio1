import FadeIn from '../common/FadeIn';
import PrimaryButton from '../common/PrimaryButton';
import SectionHeading from '../common/SectionHeading';
import { networkUnits } from '../../utils/constants';

const NetworkOverview = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Healthcare Network"
          title="Unified infrastructure across hospitals and clinics"
          description="Lifemate Healthcare supports institutions designed for quality, trust, and continuity of care."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {networkUnits.map((unit, index) => (
            <FadeIn key={unit.title} delay={index * 120} className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-medical-300 hover:bg-white hover:shadow-lg hover:shadow-medical-100">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-medical-700">{unit.type}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{unit.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{unit.description}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10">
          <PrimaryButton to="/network" variant="ghost">
            Explore Full Network
          </PrimaryButton>
        </FadeIn>
      </div>
    </section>
  );
};

export default NetworkOverview;

import { Link } from 'react-router-dom';
import FadeIn from '../common/FadeIn';
import PrimaryButton from '../common/PrimaryButton';

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-medical-900 to-medical-700 pb-20 pt-28 text-white md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(191,219,254,0.35),transparent_34%),radial-gradient(circle_at_90%_40%,rgba(56,189,248,0.25),transparent_42%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <FadeIn className="max-w-2xl">
          <span className="inline-flex rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-medical-100">
            Lifemate Healthcare Pvt Ltd | Pune, India
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Advancing Healthcare with Compassion & Excellence
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-medical-50/95">
            Lifemate Healthcare is a parent healthcare group building trusted institutions through strategic
            leadership, operational depth, and a long-term vision for community health impact.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton to="/about" variant="light">
              Explore Corporate Profile
            </PrimaryButton>
            <PrimaryButton to="/contact" variant="ghost" className="border-white text-white hover:bg-white/10">
              Connect with Us
            </PrimaryButton>
          </div>
        </FadeIn>

        <FadeIn className="grid gap-4 sm:grid-cols-2" delay={120}>
          <article className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.12em] text-medical-100">Healthcare Network</p>
            <p className="mt-4 text-2xl font-semibold">Hospital + Clinic Ecosystem</p>
            <p className="mt-3 text-sm text-medical-50/90">Integrated care touchpoints built for continuity.</p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.12em] text-medical-100">Corporate Focus</p>
            <p className="mt-4 text-2xl font-semibold">Governance & Growth</p>
            <p className="mt-3 text-sm text-medical-50/90">Scalable systems with quality-led execution.</p>
          </article>
        </FadeIn>
      </div>
      <div className="relative mx-auto mt-14 max-w-7xl px-6">
        <FadeIn className="flex flex-wrap gap-3">
          {['Strategic Healthcare Group', 'Future-Ready Infrastructure', 'Patient-Centric Culture'].map((pill) => (
            <Link
              key={pill}
              to="/vision-mission"
              className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-medical-50 transition hover:bg-white/10"
            >
              {pill}
            </Link>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};

export default HomeHero;

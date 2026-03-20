import FadeIn from './FadeIn';

const PageHero = ({ title, description, badge }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-medical-950 via-medical-800 to-medical-700 py-28 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.35),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-medical-100">
            {badge}
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-medical-50/95">{description}</p>
        </FadeIn>
      </div>
    </section>
  );
};

export default PageHero;

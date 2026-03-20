import PrimaryButton from '../common/PrimaryButton';
import FadeIn from '../common/FadeIn';

const CtaBand = () => {
  return (
    <section className="px-6 pb-20 md:pb-24">
      <FadeIn className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-medical-900 via-medical-800 to-medical-700 p-10 text-white md:p-14">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Partner with a future-focused healthcare parent group</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-medical-50/95">
          We welcome strategic collaborations, talent, and growth conversations that strengthen healthcare systems
          with measurable impact.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <PrimaryButton to="/contact" variant="light">
            Talk to Our Team
          </PrimaryButton>
          <PrimaryButton to="/careers" className="border-white text-white hover:bg-white/10" variant="ghost">
            Join Lifemate
          </PrimaryButton>
        </div>
      </FadeIn>
    </section>
  );
};

export default CtaBand;

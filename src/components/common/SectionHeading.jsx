import FadeIn from './FadeIn';

const SectionHeading = ({ eyebrow, title, description, centered = false }) => {
  return (
    <FadeIn className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-medical-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p> : null}
    </FadeIn>
  );
};

export default SectionHeading;

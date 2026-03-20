import FadeIn from '../components/common/FadeIn';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { usePageMeta } from '../hooks/usePageMeta';

const AboutPage = () => {
  usePageMeta({
    title: 'About Us | Lifemate Healthcare Pvt Ltd',
    description:
      'Learn about Lifemate Healthcare Pvt Ltd, a corporate healthcare parent group based in Pune, India.',
  });

  return (
    <>
      <PageHero
        badge="About Us"
        title="A trusted parent company for modern healthcare institutions"
        description="Lifemate Healthcare Pvt Ltd is built to strengthen healthcare delivery through strategic direction, accountable governance, and sustainable growth systems."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Who We Are"
            title="Corporate leadership for meaningful healthcare impact"
            description="We focus on creating a scalable healthcare ecosystem that balances operational excellence with compassionate values."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Group Governance',
                text: 'Enterprise-grade governance models to ensure quality, compliance, and long-term sustainability.',
              },
              {
                title: 'Clinical Quality Orientation',
                text: 'Institutional support systems aligned with patient safety and evidence-based practices.',
              },
              {
                title: 'Growth with Responsibility',
                text: 'Measured expansion strategy focused on trust, continuity, and operational resilience.',
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 120} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

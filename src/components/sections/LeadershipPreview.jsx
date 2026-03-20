import FadeIn from '../common/FadeIn';
import PrimaryButton from '../common/PrimaryButton';
import SectionHeading from '../common/SectionHeading';
import { leadershipTeam } from '../../utils/constants';

const LeadershipPreview = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Leadership"
          title="Experienced leaders shaping a resilient healthcare future"
          description="Our leadership team blends medical insight, corporate governance, and execution discipline."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {leadershipTeam.map((member, index) => (
            <FadeIn key={member.name} delay={index * 120} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-medical-100 text-center text-lg font-semibold leading-[3rem] text-medical-800">
                {member.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-medical-700">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10">
          <PrimaryButton to="/leadership" variant="ghost">
            View Full Leadership
          </PrimaryButton>
        </FadeIn>
      </div>
    </section>
  );
};

export default LeadershipPreview;

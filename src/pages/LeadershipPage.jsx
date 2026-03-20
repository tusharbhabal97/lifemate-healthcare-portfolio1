import FadeIn from '../components/common/FadeIn';
import PageHero from '../components/common/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';
import { leadershipTeam } from '../utils/constants';

const LeadershipPage = () => {
  usePageMeta({
    title: 'Leadership | Lifemate Healthcare Pvt Ltd',
    description: 'Meet the leadership team guiding Lifemate Healthcare Pvt Ltd toward long-term healthcare excellence.',
  });

  return (
    <>
      <PageHero
        badge="Leadership"
        title="Leadership rooted in responsibility, quality, and long-term vision"
        description="Our leadership aligns strategic priorities with ethical governance and organizational clarity."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-7 md:grid-cols-3">
            {leadershipTeam.map((member, index) => (
              <FadeIn key={member.name} delay={index * 100} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="h-14 w-14 rounded-full bg-medical-100 text-center text-xl font-semibold leading-[3.5rem] text-medical-800">
                  {member.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{member.name}</h2>
                <p className="mt-1 text-sm font-medium text-medical-700">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipPage;

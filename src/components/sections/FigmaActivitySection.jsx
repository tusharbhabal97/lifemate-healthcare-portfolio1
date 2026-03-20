import activityDoctor from '../../assets/activity-doctor.png';

const ChevronRightIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const roadmap = [
  {
    step: 'Phase 01',
    title: 'One Small Center',
    detail: 'A modest beginning built on honest care and patient-first service.',
  },
  {
    step: 'Phase 02',
    title: 'Community Trust',
    detail: 'Consistent outcomes and transparent treatment built strong confidence.',
  },
  {
    step: 'Phase 03',
    title: '3 Healthcare Units',
    detail: 'Growth into LifeMate Clinic and two Dr. Mate Hospitals.',
  },
];

const FigmaActivitySection = () => {
  return (
    <section
      id="about"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_100%)]"
      aria-label="About LifeMate Healthcare section"
    >
      <div className="mx-auto w-[min(1120px,95vw)] pb-[44px] pt-[40px] lg:pb-[58px] lg:pt-[56px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="w-full">
            <div className="relative mx-auto h-[390px] w-full max-w-[560px] sm:h-[450px] lg:h-[500px]">
              <div
                className="absolute left-1/2 top-[52%] h-[68%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[42%_58%_62%_38%/48%_37%_63%_52%] bg-[linear-gradient(135deg,#1D9BF0_0%,#0E5A8A_58%,#14C94A_100%)] opacity-95"
                aria-hidden
              />
              <div className="absolute left-[18%] top-[20%] h-16 w-16 rounded-full bg-[#A5D8F3]/55 blur-sm" aria-hidden />
              <div className="absolute bottom-[16%] right-[12%] h-20 w-20 rounded-full bg-[#14C94A]/25 blur-md" aria-hidden />

              <div className="absolute left-[10%] top-[70%] h-[2px] w-[68px] rotate-[-24deg] bg-[#0E5A8A]" aria-hidden />
              <div className="absolute left-[9%] top-[76%] h-[2px] w-[86px] rotate-[-24deg] bg-[#0E5A8A]" aria-hidden />

              <img
                src={activityDoctor}
                alt="Healthcare professional holding clipboard"
                className="absolute bottom-0 left-1/2 h-[96%] w-auto -translate-x-1/2 object-contain drop-shadow-[0_18px_36px_rgba(15,23,42,0.18)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="h-[6px] w-[86px] bg-[#DC2626]" />
            <h2 className="mt-6 text-[36px] font-bold leading-[46px] tracking-[0.2px] text-[#0F172A] lg:text-[48px] lg:leading-[58px]">
              Company Story and Growth Roadmap
            </h2>
            <p className="mt-5 max-w-[560px] text-[18px] font-normal leading-8 tracking-[0.1px] text-[#475569]">
              LifeMate Healthcare Pvt Ltd began with a small beginning and a strong struggle, but our commitment to honest
              work and patient care created a powerful response from the community.
            </p>

            <div className="mt-7 rounded-2xl border border-[#D9E6EE] bg-white p-5 shadow-[0_14px_28px_rgba(14,90,138,0.08)]">
              <p className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#0E5A8A]">Growth Roadmap</p>
              <div className="mt-4 space-y-4">
                {roadmap.map((item, index) => (
                  <article key={item.title} className="relative pl-11">
                    <span className="absolute left-0 top-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF4FB] text-[11px] font-bold text-[#0E5A8A]">
                      {index + 1}
                    </span>
                    {index < roadmap.length - 1 ? (
                      <span className="absolute left-[13px] top-8 h-[48px] w-[1.5px] bg-[#D9E6EE]" aria-hidden />
                    ) : null}
                    <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#1D9BF0]">{item.step}</p>
                    <h3 className="text-[18px] font-bold leading-7 text-[#0F172A]">{item.title}</h3>
                    <p className="mt-1 text-[14px] leading-6 tracking-[0.1px] text-[#475569]">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <a
              href="#hospitals"
              className="mt-6 inline-flex items-center gap-[10px] text-[15px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]"
            >
              View Network <ChevronRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaActivitySection;

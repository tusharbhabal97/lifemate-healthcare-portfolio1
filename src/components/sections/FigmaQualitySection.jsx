const qualityHighlights = [
  {
    title: 'Patient Safety Protocols',
    detail:
      'Standardized clinical checklists, medication safety steps, and infection prevention practices across all units.',
    icon: 'safety',
  },
  {
    title: '24/7 Emergency Readiness',
    detail:
      'Round-the-clock triage, on-call specialists, and rapid escalation workflows for critical cases.',
    icon: 'emergency',
  },
  {
    title: 'Continuous Quality Audits',
    detail:
      'Monthly clinical reviews, outcome tracking, and patient feedback loops to improve care delivery.',
    icon: 'audit',
  },
];

const ShieldCrossIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
    <path d="M12 8v6" />
    <path d="M9 11h6" />
  </svg>
);

const SirenPulseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M8 14h8" />
    <path d="M9 14V9a3 3 0 0 1 6 0v5" />
    <path d="M6 17h12" />
    <path d="M12 3v2" />
    <path d="M5 6l1.5 1" />
    <path d="M19 6l-1.5 1" />
  </svg>
);

const ClipboardSearchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="6" y="4" width="12" height="16" rx="2" />
    <path d="M9 4.5h6" />
    <circle cx="11" cy="13" r="2.4" />
    <path d="M15 17l2.2 2.2" />
  </svg>
);

const qualityIcons = {
  safety: ShieldCrossIcon,
  emergency: SirenPulseIcon,
  audit: ClipboardSearchIcon,
};

const FigmaQualitySection = () => {
  return (
    <section
      id="quality"
      className="bg-[linear-gradient(180deg,#f7fbfd_0%,#ffffff_100%)]"
      aria-label="Clinical quality and safety section"
    >
      <div className="mx-auto w-[min(1120px,95vw)] pb-[56px] pt-[40px] lg:pb-[70px] lg:pt-[56px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[620px]">
            <div className="h-[6px] w-[86px] bg-[#1D9BF0]" />
            <h2 className="mt-6 text-[34px] font-bold leading-[44px] tracking-[0.2px] text-[#0F172A] lg:text-[46px] lg:leading-[56px]">
              Clinical Quality & Patient Safety
            </h2>
            <p className="mt-4 text-[18px] font-normal leading-8 tracking-[0.1px] text-[#475569]">
              LifeMate Healthcare Pvt Ltd prioritizes measurable quality standards that keep every patient interaction
              consistent, safe, and accountable across our clinics and hospitals.
            </p>
          </div>
          <div className="rounded-2xl border border-[#D9E6EE] bg-white px-6 py-5 shadow-[0_16px_36px_rgba(14,90,138,0.08)]">
            <p className="text-[12px] font-bold uppercase tracking-[1.4px] text-[#0E5A8A]">Quality Focus</p>
            <p className="mt-2 text-[20px] font-bold leading-7 text-[#0F172A]">Safety-driven operations</p>
            <p className="mt-2 text-[14px] leading-6 text-[#475569]">
              Care protocols designed for reliability, transparency, and patient trust.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {qualityHighlights.map((item) => {
            const Icon = qualityIcons[item.icon];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[#D9E6EE] bg-white p-6 shadow-[0_14px_28px_rgba(14,90,138,0.06)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF4FB] text-[#0E5A8A]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[18px] font-bold leading-7 text-[#0F172A]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-6 tracking-[0.1px] text-[#475569]">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FigmaQualitySection;

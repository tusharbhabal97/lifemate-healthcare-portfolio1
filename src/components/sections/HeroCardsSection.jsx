const HospitalIcon = ({ className }) => (
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
    <path d="M4 20V7a2 2 0 0 1 2-2h5v15" />
    <path d="M20 20V7a2 2 0 0 0-2-2h-5v15" />
    <path d="M9 9h2" />
    <path d="M13 9h2" />
    <path d="M9 13h2" />
    <path d="M13 13h2" />
    <path d="M12 3v4" />
    <path d="M10.5 5h3" />
  </svg>
);

const ShieldIcon = ({ className }) => (
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
    <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
    <path d="M9.5 12.5l1.8 1.8L15 10.6" />
  </svg>
);

const HeartIcon = ({ className }) => (
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
    <path d="M12 20s-7-4.6-7-9a4.2 4.2 0 0 1 7-2.7A4.2 4.2 0 0 1 19 11c0 4.4-7 9-7 9z" />
  </svg>
);

const cards = [
  {
    title: 'Dr. Mate Hospital, Narayangaon',
    description:
      'Multi-specialty hospital care in Narayangaon with patient-focused treatment pathways and coordinated clinical support.',
    iconBg: '#1D9BF0',
    Icon: HospitalIcon,
    location: 'Narayangaon, Pune District',
    href: '#',
  },
  {
    title: 'Dr. Mate Hospital, Belhe',
    description:
      'Community-connected healthcare services in Belhe, designed to improve access, continuity, and quality of medical care.',
    iconBg: '#14C94A',
    Icon: ShieldIcon,
    location: 'Belhe, Pune District',
    href: '#',
  },
  {
    title: 'LifeMate Clinic',
    description:
      'Consultation-led outpatient and preventive care model supporting early diagnosis, follow-ups, and long-term health outcomes.',
    iconBg: '#334155',
    Icon: HeartIcon,
    location: 'Pune',
    href: '#',
  },
];

const HeroCardsSection = () => {
  return (
    <section id="hospitals" className="relative z-30 bg-[#F7FBFD]" aria-label="Healthcare service highlights">
      <div className="mx-auto -mt-6 w-[min(1120px,95vw)] pb-[74px] sm:-mt-16 lg:-mt-44">
        <div className="grid gap-[24px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              aria-label={`Open details for ${card.title}`}
              className="block w-full rounded-[6px] bg-white px-10 py-[35px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_20px_32px_0px_rgba(14,90,138,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9BF0]/40"
            >
              <div
                className="flex h-[76px] w-[72px] items-center justify-center rounded-[10px] text-[32px] text-white"
                style={{ backgroundColor: card.iconBg }}
                aria-hidden
              >
                <card.Icon className="h-8 w-8 text-white" />
              </div>
              <p className="mt-5 text-[12px] font-semibold uppercase tracking-[1.2px] text-[#0E5A8A]">{card.location}</p>
              <h3 className="mt-1 text-[18px] font-bold leading-7 tracking-[0.1px] text-[#0F172A]">{card.title}</h3>
              <div className="mt-5 h-[2px] w-[50px] bg-[#DC2626]" />
              <p className="mt-5 text-[14px] font-normal leading-6 tracking-[0.2px] text-[#475569]">{card.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCardsSection;

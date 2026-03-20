const cards = [
  {
    title: 'Dr. Mate Hospital, Narayangaon',
    description:
      'Multi-specialty hospital care in Narayangaon with patient-focused treatment pathways and coordinated clinical support.',
    iconBg: '#1D9BF0',
    icon: '⚕',
    location: 'Narayangaon, Pune District',
    href: '#',
  },
  {
    title: 'Dr. Mate Hospital, Belhe',
    description:
      'Community-connected healthcare services in Belhe, designed to improve access, continuity, and quality of medical care.',
    iconBg: '#14C94A',
    icon: '✚',
    location: 'Belhe, Pune District',
    href: '#',
  },
  {
    title: 'LifeMate Clinic',
    description:
      'Consultation-led outpatient and preventive care model supporting early diagnosis, follow-ups, and long-term health outcomes.',
    iconBg: '#334155',
    icon: '❤',
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
                {card.icon}
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

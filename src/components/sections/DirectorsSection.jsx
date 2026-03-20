const directors = [
  {
    name: 'Dr. Swapnil D. Mate',
    designation: 'Director',
    area: 'Clinical Leadership',
    summary:
      'Leads medical quality direction, patient-centered care standards, and long-term healthcare growth strategy.',
  },
  {
    name: 'Ajay D. Mate',
    designation: 'Director',
    area: 'Operations and Governance',
    summary:
      'Oversees operational discipline, service reliability, and governance frameworks across LifeMate Healthcare units.',
  },
  {
    name: 'Leadership Office',
    designation: 'Director - Clinical Operations',
    area: 'Strategy and Innovation',
    summary:
      'Drives roadmap initiatives including healthcare expansion, digital systems, and CarrerMed platform development.',
  },
];

const DirectorsSection = () => {
  return (
    <section
      id="directors"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_100%)]"
      aria-label="LifeMate Healthcare directors and leadership team"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#1D9BF0]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-8 h-52 w-52 rounded-full bg-[#14C94A]/10 blur-3xl" />

      <div className="relative mx-auto w-[min(1120px,95vw)] pb-[44px] pt-[40px] lg:pb-[58px] lg:pt-[56px]">
        <div className="max-w-[760px]">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Leadership Team</p>
          <h2 className="mt-2 text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#0F172A] lg:text-[46px] lg:leading-[58px]">
            Directors Driving Healthcare Excellence
          </h2>
          <p className="mt-4 text-[16px] leading-8 text-[#475569]">
            The LifeMate Healthcare Pvt Ltd directors team leads quality care delivery, hospital performance, and
            future-focused expansion with a strong commitment to ethical, patient-first healthcare.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {directors.map((director, index) => (
            <article
              key={`${director.name}-${director.designation}`}
              className="group overflow-hidden rounded-3xl border border-[#D9E6EE] bg-white shadow-[0_10px_28px_rgba(14,90,138,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(14,90,138,0.16)]"
            >
              <div className="h-1.5 w-full bg-[linear-gradient(90deg,#1D9BF0_0%,#0E5A8A_58%,#14C94A_100%)]" />
              <div className="p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-[#EAF4FB] px-3 py-1 text-[11px] font-semibold uppercase tracking-[1px] text-[#0E5A8A]">
                    {director.area}
                  </span>
                  <span className="text-[12px] font-bold text-[#1D9BF0]">0{index + 1}</span>
                </div>

                <h3 className="text-[28px] font-extrabold leading-[1.2] text-[#0F172A]">{director.name}</h3>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[1.4px] text-[#0E5A8A]">
                  {director.designation}
                </p>
                <div className="mt-4 h-[2px] w-[56px] bg-[#14C94A]" />
                <p className="mt-4 text-[15px] leading-7 text-[#475569]">{director.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;

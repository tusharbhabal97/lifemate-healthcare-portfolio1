const hospitals = [
  {
    name: 'Dr. Mate Hospital, Narayangaon',
    location: 'Narayangaon, Pune District',
    description:
      'Comprehensive hospital care with patient-first clinical workflows, safety standards, and outcome-focused treatment planning.',
  },
  {
    name: 'Dr. Mate Hospital, Belhe',
    location: 'Belhe, Pune District',
    description:
      'Community-centered medical services that combine specialist access, diagnostics, and dependable in-hospital care.',
  },
  {
    name: 'LifeMate Clinic',
    location: 'Pune',
    description:
      'Primary and preventive healthcare services focused on continuity of care, consultations, and follow-up support.',
  },
];

const HospitalsSection = () => {
  return (
    <section id="hospitals" className="bg-white" aria-label="LifeMate Healthcare hospitals network">
      <div className="mx-auto w-[min(1120px,95vw)] py-[140px]">
        <div className="max-w-[760px]">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Hospital Network</p>
          <h2 className="mt-2 text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#0F172A]">
            Trusted Care Centers Built Under One Healthcare Vision
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-[#475569]">
            LifeMate Healthcare Pvt Ltd is building an integrated healthcare ecosystem through its active hospital and
            clinic network, while preparing future-ready products like CarrerMed for healthcare professionals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hospitals.map((hospital) => (
            <article
              key={hospital.name}
              className="rounded-2xl border border-[#D9E6EE] bg-[#F7FBFD] p-7 shadow-[0_8px_24px_rgba(14,90,138,0.08)]"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[1.4px] text-[#0E5A8A]">{hospital.location}</p>
              <h3 className="mt-2 text-[22px] font-bold leading-8 text-[#0F172A]">{hospital.name}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#475569]">{hospital.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalsSection;

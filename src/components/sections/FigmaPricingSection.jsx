const plans = [
  {
    name: 'FREE',
    description: 'Organize across all apps by hand',
    price: '19',
    accent: false,
  },
  {
    name: 'FREE',
    description: 'Organize across all apps by hand',
    price: '19',
    accent: true,
  },
  {
    name: 'FREE',
    description: 'Organize across all apps by hand',
    price: '19',
    accent: false,
  },
];

const features = [
  'Unlimited product updates',
  'Unlimited product updates',
  'Unlimited product updates',
  '1GB Cloud storage',
  'Email and community support',
];

const FigmaPricingSection = () => {
  return (
    <section className="bg-white" aria-label="Pricing section">
      <div className="mx-auto w-[min(1120px,95vw)] py-[160px]">
        <div className="max-w-[691px]">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Practice Advice</p>
          <h2 className="mt-[10px] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#0F172A]">Pricing</h2>
          <p className="mt-[10px] text-[14px] font-normal leading-5 tracking-[0.2px] text-[#475569]">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
            mechanics
          </p>
        </div>

        <div className="mt-[80px] grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <article key={`${plan.name}-${idx}`} className="relative lg:w-[348px]">
              {plan.accent ? (
                <div className="absolute right-[-20px] top-0 z-10 flex h-[90px] w-[89px] items-center justify-center rounded-full bg-[#F59E0B] text-[24px] font-bold leading-8 tracking-[0.1px] text-white">
                  New
                </div>
              ) : null}

              <div className="mt-[29px] border border-[#D9E6EE] bg-white px-10 pb-[50px] pt-[50px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1D9BF0] text-[44px] text-white">
                  ♡
                </div>

                <h3 className="mt-[35px] text-[24px] font-bold leading-8 tracking-[0.1px] text-[#0F172A]">{plan.name}</h3>
                <p className="mt-[35px] max-w-[203px] text-[16px] font-bold leading-6 tracking-[0.1px] text-[#475569]">
                  {plan.description}
                </p>

                <div className="mt-[35px]">
                  <p className="text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#1D9BF0]">{plan.price}</p>
                  <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#67B8E8]">Per Month</p>
                </div>

                <p className="mt-[35px] max-w-[200px] text-[14px] font-normal leading-5 tracking-[0.2px] text-[#475569]">
                  Slate helps you see how many more days you need...
                </p>

                <button
                  type="button"
                  className="mt-[35px] h-[52px] w-full rounded-[5px] bg-[#1D9BF0] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-white"
                >
                  Try for free
                </button>

                <ul className="mt-[35px] space-y-[15px]">
                  {features.map((feature, featureIndex) => (
                    <li key={`${feature}-${featureIndex}`} className="flex items-start gap-[10px]">
                      <span
                        className={`mt-[2px] flex h-8 w-8 items-center justify-center rounded-full text-[12px] text-white ${
                          featureIndex < 3 ? 'bg-[#14C94A]' : 'bg-[#94A3B8]'
                        }`}
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#0F172A]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FigmaPricingSection;

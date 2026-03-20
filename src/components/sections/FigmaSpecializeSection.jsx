const cards = [
  { image: 'https://www.figma.com/api/mcp/asset/e87fd654-1828-4c46-b4d3-789c3f7561c2' },
  { image: 'https://www.figma.com/api/mcp/asset/1f40ee68-4e58-4251-a86d-9c11ebf1b4e7' },
  { image: 'https://www.figma.com/api/mcp/asset/ced451c7-2760-4d40-a78f-766e4869a99d' },
];

const heartIcon = 'https://www.figma.com/api/mcp/asset/e0b6f8c8-bcd1-4b39-8113-2f64f678de41';
const cartIcon = 'https://www.figma.com/api/mcp/asset/dd12d25f-d2c5-44df-a717-0a42ddde3d44';
const eyeIcon = 'https://www.figma.com/api/mcp/asset/fc7c26ac-20a7-4cfc-a501-cd7a71b16ca0';
const starIcon = 'https://www.figma.com/api/mcp/asset/87234071-bcd2-49dc-a497-3f33c797ca82';
const salesIcon = 'https://www.figma.com/api/mcp/asset/da5f62c1-7f7f-4186-9b08-5f09d80f3080';
const arrowIcon = 'https://www.figma.com/api/mcp/asset/6cea6b6f-2432-4069-8601-4c5241c101bc';

const FigmaSpecializeSection = () => {
  return (
    <section className="bg-[#0F172A]" aria-label="Our Doctors Specialize section">
      <div className="mx-auto w-[min(1120px,95vw)] py-[160px]">
        <div className="max-w-[691px]">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Practice Advice</p>
          <h2 className="mt-[10px] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-white">
            Our Doctors Specialize in you
          </h2>
          <p className="mt-[10px] text-[14px] font-normal leading-5 tracking-[0.2px] text-white">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
            mechanics
          </p>
        </div>

        <div className="mt-[80px] grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, cardIndex) => (
            <article key={card.image} className="w-full bg-white lg:w-[348px]">
              <div className="relative h-[300px] overflow-hidden">
                <img src={card.image} alt={`Specialty service ${cardIndex + 1}`} className="h-full w-full object-cover" loading="lazy" />
                <span className="absolute left-5 top-5 rounded-[3px] bg-[#DC2626] px-[10px] text-[14px] font-bold leading-6 tracking-[0.2px] text-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                  Sale
                </span>

                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-[10px]">
                  {[heartIcon, cartIcon, eyeIcon].map((icon, i) => (
                    <button
                      key={icon}
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
                      aria-label={`Card action ${i + 1}`}
                    >
                      <img src={icon} alt="" className="h-5 w-5" aria-hidden />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-[10px] px-[25px] pb-[35px] pt-[25px]">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">English Departement</p>
                  <div className="flex items-center gap-[5px] rounded-[20px] bg-[#0F172A] p-[5px]">
                    <img src={starIcon} alt="" className="h-4 w-4" aria-hidden />
                    <span className="text-[12px] font-normal leading-4 tracking-[0.2px] text-white">4.9</span>
                  </div>
                </div>

                <h3 className="text-[16px] font-bold leading-6 tracking-[0.1px] text-[#0F172A]">Graphic Design</h3>
                <p className="text-[14px] font-normal leading-5 tracking-[0.2px] text-[#475569]">
                  We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
                </p>

                <div className="flex items-center gap-[10px]">
                  <img src={salesIcon} alt="" className="h-4 w-4" aria-hidden />
                  <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#475569]">15 Sales</p>
                </div>

                <div className="flex items-start gap-[5px] px-[3px] py-[5px] text-[16px] font-bold leading-6 tracking-[0.1px]">
                  <span className="text-[#94A3B8]">$16.48</span>
                  <span className="text-[#14C94A]">$6.48</span>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-[10px] rounded-[37px] border border-[#1D9BF0] px-5 py-[10px] text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]"
                >
                  Learn More
                  <img src={arrowIcon} alt="" className="h-4 w-[9px]" aria-hidden />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FigmaSpecializeSection;

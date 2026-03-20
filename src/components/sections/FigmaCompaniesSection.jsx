const logos = [
  { src: 'https://www.figma.com/api/mcp/asset/4c1c8a66-819e-41ba-a312-01f73c428baa', w: 103, h: 34 },
  { src: 'https://www.figma.com/api/mcp/asset/6db7bc48-5b58-46bd-8271-7d68d19c2990', w: 83, h: 59 },
  { src: 'https://www.figma.com/api/mcp/asset/8f0e44bc-0cea-4f67-8164-1739d07d72f7', w: 102, h: 75 },
  { src: 'https://www.figma.com/api/mcp/asset/fc375df5-9ea9-44ec-90cc-a16bfafbdac8', w: 103, h: 42 },
  { src: 'https://www.figma.com/api/mcp/asset/e23a1619-c193-4241-ba0d-bdad16efc08e', w: 104, h: 62 },
  { src: 'https://www.figma.com/api/mcp/asset/00f77a10-1575-4f22-9544-3dd0f30d51ef', w: 76, h: 72 },
];

const FigmaCompaniesSection = () => {
  return (
    <section className="bg-white" aria-label="Partner companies">
      <div className="mx-auto w-[min(1120px,95vw)] py-[80px]">
        <div className="grid grid-cols-2 items-center gap-y-10 py-[50px] sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-[30px]">
          {logos.map((logo, index) => (
            <div key={logo.src} className="flex justify-center">
              <img
                src={logo.src}
                alt={`Partner logo ${index + 1}`}
                width={logo.w}
                height={logo.h}
                className="h-auto opacity-90"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FigmaCompaniesSection;

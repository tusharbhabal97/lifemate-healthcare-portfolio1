const imgPlaceholder = 'https://www.figma.com/api/mcp/asset/ea44cf49-12cd-4844-af18-48fe1e8da96f';
const imgVector = 'https://www.figma.com/api/mcp/asset/3c27f2fa-ebae-42fd-ac5f-9db514fe61ea';
const imgVector1 = 'https://www.figma.com/api/mcp/asset/eda27f31-1a5f-48cc-a36f-faba8ac66b59';
const imgVector2 = 'https://www.figma.com/api/mcp/asset/de1b65fd-9481-4033-af12-746123f0ee71';
const imgVector3 = 'https://www.figma.com/api/mcp/asset/2130b38b-6d4d-4244-acac-6364ec9dc329';
const imgVector4 = 'https://www.figma.com/api/mcp/asset/55ce7be2-b78d-4f3f-b940-0df83b0ec336';
const imgVector5 = 'https://www.figma.com/api/mcp/asset/533dee7a-9b56-4dcf-b9d1-02d94f302842';
const imgVector6 = 'https://www.figma.com/api/mcp/asset/089773dd-f6db-42a1-af32-785b3adbbecb';
const imgVector7 = 'https://www.figma.com/api/mcp/asset/8cababe8-9617-4aec-ab47-8d629d6cc461';
const imgVector8 = 'https://www.figma.com/api/mcp/asset/718cdaa5-7a1f-4931-a703-282575c403a9';

const FigmaHeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F7FBFD] lg:min-h-[820px] xl:h-[900px]" aria-label="Hero section">
      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-[176.96px] w-[111.61px] rounded-br-[48px] bg-[#0E5A8A] lg:block" />

        <div className="pointer-events-none absolute right-0 top-0 hidden h-[620px] w-[520px] bg-[#0E5A8A] lg:block xl:h-[700px] xl:w-[604.15px]" />

        <div className="pointer-events-none absolute right-[18px] top-[70px] hidden h-[620px] w-[520px] lg:block xl:right-[35px] xl:top-[86px] xl:h-[721.15px] xl:w-[625px]">
          <div className="absolute inset-[20.54%_10.39%_46.93%_56.86%]">
            <img src={imgVector} alt="" className="h-full w-full" aria-hidden />
          </div>
          <div className="absolute inset-[24.99%_15.26%_12.27%_6.66%]">
            <img src={imgVector1} alt="" className="h-full w-full" aria-hidden />
          </div>
          <div className="absolute inset-[58.05%_61.22%_7.03%_0]">
            <img src={imgVector2} alt="" className="h-full w-full" aria-hidden />
          </div>
          <div className="absolute inset-[23.9%_68.43%_59.86%_13.88%]">
            <img src={imgVector3} alt="" className="h-full w-full" aria-hidden />
          </div>
          <div className="absolute inset-[59.4%_68.33%_15.78%_11.54%]">
            <img src={imgVector4} alt="" className="h-full w-full" aria-hidden />
          </div>
          <div className="absolute inset-[26.34%_21.42%_35.58%_33.92%]">
            <img src={imgVector5} alt="" className="h-full w-full" aria-hidden />
          </div>
          <div className="absolute inset-[51.86%_11.17%_17.28%_80.75%]">
            <img src={imgVector6} alt="" className="h-full w-full" aria-hidden />
          </div>
          <div className="absolute inset-[23.14%_81.46%_38.76%_0.03%]">
            <img src={imgVector7} alt="" className="h-full w-full" aria-hidden />
          </div>
          <div className="absolute inset-[0_0_0_1.25%] overflow-hidden">
            <img
              src={imgPlaceholder}
              alt="Doctor"
              className="h-full w-full scale-[1.045] object-cover object-center"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
          <div className="absolute inset-[67.62%_17.83%_12.17%_56.11%]">
            <img src={imgVector8} alt="" className="h-full w-full" aria-hidden />
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full px-4 pb-16 pt-[110px] sm:px-8 lg:px-[160px] lg:pb-0 lg:pt-[190px] xl:px-[197px]">
        <div className="flex flex-col">
          <div className="flex items-center gap-[30px]">
            <div className="w-full max-w-[560px] xl:max-w-[599px]">
              <p className="text-[16px] font-bold leading-6 tracking-[0.1px] text-[#1D9BF0]">
                LifeMate Healthcare Pvt Ltd
              </p>
              <h1 className="mt-5 max-w-[700px] text-[30px] font-bold leading-[1.14] tracking-[0.2px] text-[#0F172A] sm:text-[44px] sm:leading-[1.1] lg:text-[64px] lg:leading-[72px]">
                <span className="sm:whitespace-nowrap">Trusted Healthcare.</span> Built for Every Community.
              </h1>
              <p className="mt-5 max-w-[590px] text-[16px] font-normal leading-[30px] tracking-[0.2px] text-[#475569] sm:text-[20px]">
                LifeMate Healthcare Pvt Ltd operates a growing network including LifeMate Clinic and Dr Mate Hospitals,
                focused on accessible, quality patient care.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#hospitals"
                  className="rounded-[5px] bg-[#1D9BF0] px-10 py-[15px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-white transition hover:bg-[#0E5A8A]"
                >
                  Explore Hospitals
                </a>
                <a
                  href="#contact"
                  className="rounded-[5px] border border-[#1D9BF0] px-10 py-[15px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-[#1D9BF0] transition hover:bg-[#EAF4FB]"
                >
                  Contact Leadership
                </a>
              </div>
            </div>

            <div className="hidden h-[220px] w-[320px] lg:block xl:w-[415px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaHeroSection;

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7FBFD] pt-0">
      <div className="h-auto w-full lg:h-[700px]">
        <div className="relative h-full w-full">
          <div className="absolute left-0 top-0 z-10 h-[177px] w-[112px] rounded-br-[48px] bg-[#0E5A8A]" />

          <div className="relative z-20 grid min-h-[700px] grid-cols-1 lg:grid-cols-[1fr_minmax(560px,42vw)]">
            <div className="flex items-center px-6 pb-16 pt-[150px] md:px-12 lg:px-[72px] lg:pt-[150px]">
              <div className="max-w-[520px]">
                <p className="text-[18px] font-semibold text-[#1D9BF0]">For Better Future</p>
                <h1 className="mt-6 text-[56px] font-bold leading-[1.1] text-[#0F172A]">Advancing Healthcare with Compassion</h1>
                <p className="mt-8 text-[24px] font-medium text-[#475569]">Trusted care network led by LifeMate Healthcare.</p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="h-[58px] rounded-[6px] bg-[#1D9BF0] px-10 text-[18px] font-semibold text-white transition hover:bg-[#0E5A8A]"
                  >
                    Contact Us
                  </button>
                  <button
                    type="button"
                    className="h-[58px] rounded-[6px] border border-[#1D9BF0] bg-transparent px-10 text-[18px] font-semibold text-[#1D9BF0] transition hover:bg-[#EAF4FB]"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="relative hidden h-[700px] w-full overflow-hidden bg-[#0E5A8A] lg:block">
              <div className="absolute left-[28px] top-[198px] h-[126px] w-[126px] rounded-full bg-white" />

              <div className="absolute right-[66px] top-[180px] h-[260px] w-[220px] rounded-[46%_54%_56%_44%/54%_38%_62%_46%] bg-[#1FA9D9]" />
              <div className="absolute -left-[44px] bottom-[52px] h-[210px] w-[172px] rounded-[50%_50%_45%_55%/47%_62%_38%_53%] bg-[#A5D8F3]" />
              <div className="absolute bottom-[-40px] right-[52px] h-[186px] w-[186px] rounded-full bg-[#F59E0B]" />

              <div className="absolute left-[82px] top-[190px] h-[430px] w-[340px] rounded-[180px] bg-[#0E5A8A]" />

              <div className="absolute left-[22px] top-[160px] h-[335px] w-[335px] rounded-full border-[4px] border-white/90 border-r-transparent border-t-transparent" />
              <div className="absolute right-[-110px] top-[285px] h-[370px] w-[370px] rounded-full border-[4px] border-white/90 border-l-transparent border-b-transparent" />

              <div className="absolute bottom-[0] left-[90px] h-[520px] w-[300px] rounded-t-[170px] bg-[linear-gradient(180deg,#ffffff_0%,#f1f6fd_55%,#d9e6f9_100%)] shadow-[0_20px_55px_rgba(10,29,64,0.35)]" />
              <div className="absolute bottom-[450px] left-[180px] h-[98px] w-[98px] rounded-full bg-[#f4d8c2]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

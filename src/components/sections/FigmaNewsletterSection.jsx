const FigmaNewsletterSection = () => {
  return (
    <section id="contact" className="bg-white" aria-label="Contact LifeMate Healthcare section">
      <div className="mx-auto w-[min(1120px,95vw)] pb-[56px] pt-[52px] lg:pb-[68px] lg:pt-[60px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Contact Us</p>
          <h2 className="mt-[10px] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#0F172A]">
            Enquiry Form
          </h2>
          <p className="mx-auto mt-[10px] max-w-[600px] text-[14px] font-normal leading-6 tracking-[0.2px] text-[#475569]">
            Share your enquiry and our team will connect with you shortly.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[760px]">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                className="h-[58px] w-full rounded-[5px] border border-[#D9E6EE] bg-[#FFFFFF] px-5 text-[14px] font-normal leading-7 tracking-[0.2px] text-[#475569] outline-none placeholder:text-[#475569] focus:border-[#1D9BF0]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="h-[58px] w-full rounded-[5px] border border-[#D9E6EE] bg-[#FFFFFF] px-5 text-[14px] font-normal leading-7 tracking-[0.2px] text-[#475569] outline-none placeholder:text-[#475569] focus:border-[#1D9BF0]"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="h-[58px] w-full rounded-[5px] border border-[#D9E6EE] bg-[#FFFFFF] px-5 text-[14px] font-normal leading-7 tracking-[0.2px] text-[#475569] outline-none placeholder:text-[#475569] focus:border-[#1D9BF0]"
              />
              <select
                name="enquiry_type"
                defaultValue=""
                className="h-[58px] w-full rounded-[5px] border border-[#D9E6EE] bg-[#FFFFFF] px-5 text-[14px] font-normal leading-7 tracking-[0.2px] text-[#475569] outline-none focus:border-[#1D9BF0]"
              >
                <option value="" disabled>
                  Enquiry Type
                </option>
                <option value="general">General Enquiry</option>
                <option value="hospital">Hospital Information</option>
                <option value="partnership">Partnership</option>
                <option value="careers">Career and CarrerMed</option>
              </select>
            </div>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-[5px] border border-[#D9E6EE] bg-[#FFFFFF] px-5 py-4 text-[14px] font-normal leading-7 tracking-[0.2px] text-[#475569] outline-none placeholder:text-[#475569] focus:border-[#1D9BF0]"
            />
            <button
              type="submit"
              className="h-[52px] min-w-[214px] rounded-[5px] bg-[#1D9BF0] px-[25px] py-[15px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-white transition-colors hover:bg-[#0E5A8A]"
            >
              SEND ENQUIRY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FigmaNewsletterSection;

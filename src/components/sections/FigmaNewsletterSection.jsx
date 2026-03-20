import { useState } from 'react';

const FigmaNewsletterSection = () => {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get('full_name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const enquiryType = String(formData.get('enquiry_type') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please fill in your name, email, and message.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, enquiryType, message }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Unable to send your enquiry. Please try again.');
      }

      setStatus({ type: 'success', message: 'Thank you. Your enquiry has been sent successfully.' });
      form.reset();
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send your enquiry. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                required
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
                required
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
              required
              className="w-full rounded-[5px] border border-[#D9E6EE] bg-[#FFFFFF] px-5 py-4 text-[14px] font-normal leading-7 tracking-[0.2px] text-[#475569] outline-none placeholder:text-[#475569] focus:border-[#1D9BF0]"
            />
            <button
              type="submit"
              className="h-[52px] min-w-[214px] rounded-[5px] bg-[#1D9BF0] px-[25px] py-[15px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-white transition-colors hover:bg-[#0E5A8A]"
            >
              SEND ENQUIRY
            </button>
            {status.message ? (
              <p
                className={`text-[14px] font-semibold ${
                  status.type === 'success' ? 'text-[#0D8A32]' : 'text-[#DC2626]'
                }`}
                aria-live="polite"
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FigmaNewsletterSection;

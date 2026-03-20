import { useState } from 'react';
import FadeIn from '../components/common/FadeIn';
import PageHero from '../components/common/PageHero';
import PrimaryButton from '../components/common/PrimaryButton';
import { usePageMeta } from '../hooks/usePageMeta';
import { submitContactForm } from '../utils/api';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactPage = () => {
  usePageMeta({
    title: 'Contact | Lifemate Healthcare Pvt Ltd',
    description: 'Contact Lifemate Healthcare Pvt Ltd in Pune for corporate healthcare inquiries and partnerships.',
  });

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState({ type: '', message: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      setResult({ type: '', message: '' });
      const response = await submitContactForm(formData);
      setResult({ type: 'success', message: response.message || 'Thank you. We will reach out shortly.' });
      setFormData(initialState);
    } catch (error) {
      setResult({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        badge="Contact"
        title="Let’s discuss growth, partnerships, and opportunities"
        description="Reach our corporate team for strategic conversations and institutional collaboration."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Contact Lifemate Healthcare</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We are based in Pune, India and open to discussions on healthcare growth, investment pathways, and
              institutional partnerships.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Email:</span> connect@lifematehealthcare.com
              </p>
              <p>
                <span className="font-semibold text-slate-900">Location:</span> Pune, Maharashtra, India
              </p>
              <p>
                <span className="font-semibold text-slate-900">Response Time:</span> Within 1-2 business days
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <form className="space-y-5" onSubmit={onSubmit}>
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-medical-600 focus:ring-2 focus:ring-medical-200"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-medical-600 focus:ring-2 focus:ring-medical-200"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-medical-600 focus:ring-2 focus:ring-medical-200"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  rows={5}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-medical-600 focus:ring-2 focus:ring-medical-200"
                />
              </div>

              {result.message ? (
                <p
                  className={`rounded-lg px-4 py-3 text-sm ${
                    result.type === 'success'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-rose-50 text-rose-700'
                  }`}
                >
                  {result.message}
                </p>
              ) : null}

              <PrimaryButton type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
              </PrimaryButton>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

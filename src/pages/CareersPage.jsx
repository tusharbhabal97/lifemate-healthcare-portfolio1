import { useState } from 'react';
import FadeIn from '../components/common/FadeIn';
import PageHero from '../components/common/PageHero';
import PrimaryButton from '../components/common/PrimaryButton';
import { usePageMeta } from '../hooks/usePageMeta';
import { submitCareerApplication } from '../utils/api';
import { careerRoles } from '../utils/constants';

const initialState = {
  name: '',
  email: '',
  positionApplied: careerRoles[0],
  resume: null,
};

const CareersPage = () => {
  usePageMeta({
    title: 'Careers | Lifemate Healthcare Pvt Ltd',
    description: 'Apply for career opportunities at Lifemate Healthcare Pvt Ltd.',
  });

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState({ type: '', message: '' });

  const onChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'resume' ? files[0] : value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formData.resume) {
      setResult({ type: 'error', message: 'Please upload your resume.' });
      return;
    }

    try {
      setIsSubmitting(true);
      setResult({ type: '', message: '' });

      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('positionApplied', formData.positionApplied);
      payload.append('resume', formData.resume);

      const response = await submitCareerApplication(payload);
      setResult({ type: 'success', message: response.message || 'Application submitted successfully.' });
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
        badge="Careers"
        title="Join a healthcare group built for long-term impact"
        description="We are building teams that combine professionalism, empathy, and operational excellence."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Work with Lifemate Healthcare</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We are inviting professionals who want to contribute to healthcare institutions with strong leadership,
              process discipline, and compassionate culture.
            </p>
            <div className="mt-8 space-y-3">
              {careerRoles.map((role) => (
                <div key={role} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  {role}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <form className="space-y-5" onSubmit={onSubmit}>
              <div>
                <label htmlFor="career-name" className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  id="career-name"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-medical-600 focus:ring-2 focus:ring-medical-200"
                />
              </div>
              <div>
                <label htmlFor="career-email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="career-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-medical-600 focus:ring-2 focus:ring-medical-200"
                />
              </div>
              <div>
                <label htmlFor="career-position" className="mb-2 block text-sm font-medium text-slate-700">
                  Position Applied
                </label>
                <select
                  id="career-position"
                  name="positionApplied"
                  value={formData.positionApplied}
                  onChange={onChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-medical-600 focus:ring-2 focus:ring-medical-200"
                >
                  {careerRoles.map((role) => (
                    <option value={role} key={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="career-resume" className="mb-2 block text-sm font-medium text-slate-700">
                  Resume (PDF / DOC / DOCX, up to 5MB)
                </label>
                <input
                  id="career-resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 file:mr-4 file:rounded-md file:border-0 file:bg-medical-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-medical-800 hover:file:bg-medical-200"
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
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </PrimaryButton>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default CareersPage;

import PrimaryButton from '../components/common/PrimaryButton';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFoundPage = () => {
  usePageMeta({
    title: 'Page Not Found | Lifemate Healthcare Pvt Ltd',
    description: 'The page you requested could not be found.',
  });

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-medical-700">404 Error</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-4 text-base text-slate-600">The page may have moved or no longer exists.</p>
        <PrimaryButton to="/" className="mt-8">
          Back to Homepage
        </PrimaryButton>
      </div>
    </section>
  );
};

export default NotFoundPage;

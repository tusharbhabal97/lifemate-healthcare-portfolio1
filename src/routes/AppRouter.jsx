import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const LeadershipPage = lazy(() => import('../pages/LeadershipPage'));
const NetworkPage = lazy(() => import('../pages/NetworkPage'));
const VisionMissionPage = lazy(() => import('../pages/VisionMissionPage'));
const CareersPage = lazy(() => import('../pages/CareersPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-medical-200 border-t-medical-600" />
  </div>
);

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/vision-mission" element={<VisionMissionPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

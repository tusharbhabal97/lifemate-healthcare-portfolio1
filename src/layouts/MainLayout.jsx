import { Outlet } from 'react-router-dom';
import Footer from '../components/navigation/Footer';
import Navbar from '../components/navigation/Navbar';
import { useScrollToTop } from '../hooks/useScrollToTop';

const MainLayout = () => {
  useScrollToTop();

  return (
    <div className="bg-[#F7FBFD] text-[#0F172A] antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#0F172A] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

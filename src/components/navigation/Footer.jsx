import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-14 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold tracking-tight text-white">Lifemate Healthcare Pvt Ltd</h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            Advancing healthcare with compassion and excellence through strategic leadership, trusted institutions,
            and long-term commitment to quality care.
          </p>
          <p className="mt-4 text-sm text-slate-400">Pune, Maharashtra, India</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">Company</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/about" className="transition hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/leadership" className="transition hover:text-white">
                Leadership
              </Link>
            </li>
            <li>
              <Link to="/vision-mission" className="transition hover:text-white">
                Vision & Mission
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">Connect</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/careers" className="transition hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <a href="mailto:connect@lifematehealthcare.com" className="transition hover:text-white">
                connect@lifematehealthcare.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-slate-800 px-6 pt-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Lifemate Healthcare Pvt Ltd. All rights reserved.</p>
        <p>Built for a scalable corporate healthcare group.</p>
      </div>
    </footer>
  );
};

export default Footer;

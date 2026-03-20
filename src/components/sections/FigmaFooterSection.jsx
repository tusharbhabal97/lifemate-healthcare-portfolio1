import logo from '../../assets/logo.webp';

const featureLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Hospitals', href: '#hospitals' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

const FigmaFooterSection = () => {
  return (
    <footer className="bg-[#0F2C42]" aria-label="Footer">
      <div className="bg-[#0F2C42]">
        <div className="mx-auto w-[min(1120px,95vw)] py-[50px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-4 lg:grid-cols-[1.4fr_0.86fr_0.9fr] lg:gap-2">
            <div>
              <a href="#home" className="inline-flex items-center gap-3" aria-label="LifeMate Healthcare home">
                <img src={logo} alt="LifeMate Healthcare logo" className="h-10 w-auto object-contain" />
                <span className="flex flex-col leading-none">
                  <span className="text-[24px] font-bold leading-[1] tracking-[0.1px] text-white">
                    LifeMate Healthcare
                    <sup className="ml-1 align-super text-[11px] font-bold text-white/70">TM</sup>
                  </span>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-white/70">
                    Pvt Ltd
                  </span>
                </span>
              </a>
              <p className="mt-5 max-w-[470px] text-[14px] font-medium leading-7 tracking-[0.2px] text-white/70">
                Trusted healthcare network focused on patient-first care, hospital excellence, and future-ready health
                innovation.
              </p>
            </div>

            <div>
              <h3 className="text-[16px] font-bold leading-6 tracking-[0.1px] text-white">Features</h3>
              <ul className="mt-5 space-y-[6px]">
                {featureLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[14px] font-bold leading-6 tracking-[0.2px] text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[16px] font-bold leading-6 tracking-[0.1px] text-white">Get In Touch</h3>
              <ul className="mt-5 space-y-[10px]">
                <li className="text-[14px] font-bold leading-6 tracking-[0.2px] text-white/70">
                  <span className="text-white">Phone:</span>{' '}
                  <a href="tel:+919890156455" className="transition-colors hover:text-white">
                    +91 98901 56455
                  </a>
                </li>
                <li className="text-[14px] font-bold leading-6 tracking-[0.2px] text-white/70">
                  <span className="text-white">Email:</span>{' '}
                  <a href="mailto:lifemateclinic@gmail.com" className="transition-colors hover:text-white">
                    lifemateclinic@gmail.com
                  </a>
                </li>
                <li className="text-[14px] font-bold leading-6 tracking-[0.2px] text-white/70">
                  <span className="text-white">Address:</span> Near ST Bus Stand, Narayangaon, Pune, Maharashtra 410504
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#0B2234]">
        <div className="mx-auto w-[min(1120px,95vw)] py-[20px] text-center">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-white/70">
            &copy; 2026 LifeMate Healthcare Pvt Ltd. All rights reserved.
          </p>
          <p className="mt-1 text-[14px] font-bold leading-6 tracking-[0.2px] text-white/70">
            Developed and maintained by{' '}
            <a
              href="https://20sdevelopers.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#6DD3FF] transition-colors hover:text-white"
            >
              20s Developers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FigmaFooterSection;

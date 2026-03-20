import testimonial1 from '../../assets/testimonial-1.png';
import testimonial2 from '../../assets/testimonial-2.png';
import testimonial3 from '../../assets/testimonial-3.png';

const StarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 17.3l-5.1 3 1.4-5.8L3.7 10l6-0.5L12 4l2.3 5.5 6 0.5-4.6 4.5 1.4 5.8-5.1-3z" />
  </svg>
);

const testimonials = [
  {
    image: testimonial1,
    name: 'Patient Family Feedback',
    role: 'Community Trust Voice',
    quote:
      'The team treated us with empathy, clarity, and discipline. We always felt informed, respected, and cared for.',
  },
  {
    image: testimonial2,
    name: 'Hospital Service Feedback',
    role: 'Care Experience Review',
    quote:
      'Clean systems, responsive staff, and a smooth care process from consultation to follow-up. Highly dependable care.',
  },
  {
    image: testimonial3,
    name: 'Clinical Support Feedback',
    role: 'Patient Journey Review',
    quote:
      'LifeMate healthcare units combine professionalism with compassion. The care quality and communication are excellent.',
  },
];

const FigmaTestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fbfd_0%,#ffffff_100%)]"
      aria-label="Testimonials section"
    >
      <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-[#1D9BF0]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#14C94A]/10 blur-3xl" />

      <div className="relative mx-auto w-[min(1120px,95vw)] pb-[78px] pt-[74px] lg:pb-[94px] lg:pt-[90px]">
        <div className="max-w-[760px]">
          <p className="text-[14px] font-bold leading-6 tracking-[0.2px] text-[#1D9BF0]">Testimonials</p>
          <h2 className="mt-2 text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#0F172A] lg:text-[46px] lg:leading-[58px]">
            Trusted by Patients, Families, and Communities
          </h2>
          <p className="mt-4 text-[16px] leading-8 text-[#475569]">
            LifeMate Healthcare Pvt Ltd continues to grow through patient trust, transparent communication, and
            dependable clinical standards across every care unit.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {testimonials.map((item, idx) => (
            <article
              key={`${item.name}-${idx}`}
              className="group grid gap-5 rounded-2xl border border-[#D9E6EE] bg-white px-6 py-5 transition-all duration-300 hover:border-[#1D9BF0]/30 hover:bg-[#F9FCFF] md:grid-cols-[210px_1fr] md:items-center md:px-7"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={`${item.name} avatar`}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-[#EAF4FB]"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="text-[16px] font-bold leading-6 tracking-[0.2px] text-[#0F172A]">{item.name}</p>
                  <p className="text-[12px] font-semibold uppercase tracking-[1px] text-[#1D9BF0]">{item.role}</p>
                </div>
              </div>

              <div className="border-l-4 border-[#1D9BF0] pl-4">
                <div className="mb-2 flex gap-[4px] text-[18px] leading-none">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} className="h-4 w-4 text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[16px] leading-8 text-[#475569]">"{item.quote}"</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FigmaTestimonialsSection;

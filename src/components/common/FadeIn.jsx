import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const FadeIn = ({ as: Tag = 'div', className = '', delay = 0, children }) => {
  const { elementRef, isVisible } = useRevealOnScroll();

  return (
    <Tag
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default FadeIn;

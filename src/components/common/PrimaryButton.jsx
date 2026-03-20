import { Link } from 'react-router-dom';

const baseClasses =
  'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-700 focus-visible:ring-offset-2';

const variants = {
  solid: 'bg-medical-700 text-white hover:bg-medical-800',
  light: 'bg-white text-medical-800 hover:bg-medical-100',
  ghost: 'border border-medical-700 text-medical-800 hover:bg-medical-100',
};

const PrimaryButton = ({ to, href, variant = 'solid', className = '', children, ...props }) => {
  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;

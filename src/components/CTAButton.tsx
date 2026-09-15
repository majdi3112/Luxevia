import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function CTAButton({ variant = 'primary', children, className = '', ...rest }: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

  const styles: Record<Variant, string> = {
    primary:
      'bg-brand-gold text-white hover:bg-sky-600 shadow-soft-gold hover:shadow-[0_22px_55px_rgba(14,165,233,0.35)]',
    secondary:
      'border border-sky-200 text-slate-700 bg-white hover:bg-sky-50 hover:border-brand-gold/80'
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

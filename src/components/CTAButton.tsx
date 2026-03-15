import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function CTAButton({ variant = 'primary', children, className = '', ...rest }: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  const styles: Record<Variant, string> = {
    primary:
      'bg-brand-gold text-slate-950 hover:bg-amber-300 shadow-soft-gold hover:shadow-[0_22px_55px_rgba(244,201,122,0.4)]',
    secondary:
      'border border-slate-600/70 text-slate-50 bg-slate-900/70 hover:bg-slate-800/80 hover:border-brand-gold/80'
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}


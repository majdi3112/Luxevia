import { ReactNode } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  align?: 'left' | 'center';
}

export function Section({ id, eyebrow, title, subtitle, children, align = 'left' }: SectionProps) {
  const { ref, isVisible } = useInViewAnimation();

  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement> | null}
      className="py-14 sm:py-16 lg:py-20"
    >
      <div
        className={`section-container flex flex-col gap-8 transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
      >
        {(eyebrow || title || subtitle) && (
          <div className={`flex flex-col ${alignment} gap-3 max-w-3xl`}>
            {eyebrow && <p className="section-title">{eyebrow}</p>}
            {title && <h2 className="section-heading">{title}</h2>}
            {subtitle && (
              <p className="text-sm sm:text-base text-slate-300">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}


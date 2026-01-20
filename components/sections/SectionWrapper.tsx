import React from 'react';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`snap-section w-full px-6 pt-32 pb-12 md:py-0 relative ${className}`}>
      <div className="max-w-6xl w-full mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};
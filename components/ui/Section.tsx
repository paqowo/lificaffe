import React from 'react';

const Section: React.FC<{ title?: string; subtitle?: string; children: React.ReactNode; bg?: string; id?: string; className?: string }> = ({ title, subtitle, children, bg, id, className }) => (
  <section id={id} className={`py-24 px-6 md:px-12 ${bg || ''} ${className || ''}`}>
    <div className="max-w-6xl mx-auto">
      {title && (
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="text-stone-500 font-light text-lg max-w-2xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default Section;

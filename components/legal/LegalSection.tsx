import React, { ReactNode } from 'react';

interface LegalSectionProps {
  id: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export default function LegalSection({ id, title, icon, children }: LegalSectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <div className="flex items-center mb-4 bg-primary/5 p-3 rounded-lg border-l-2 border-primary">
        {icon && <div className="text-primary mr-3">{icon}</div>}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </div>
      <div className="pl-0 md:pl-8 border-l-0 md:border-l border-primary/20 dark:border-primary/10 py-2">
        {children}
      </div>
    </section>
  );
}

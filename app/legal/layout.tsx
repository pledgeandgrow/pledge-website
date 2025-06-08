import React from 'react';
import { Metadata } from 'next';

// This is a server component that provides metadata for all legal pages
export const metadata: Metadata = {
  title: {
    template: '%s | Pledge & Grow',
    default: 'Legal | Pledge & Grow',
  },
  description: 'Legal information for Pledge & Grow services',
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

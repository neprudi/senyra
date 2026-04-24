import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PrototypeProvider } from '@/lib/prototype-store';
import './globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: 'Senyra',
    template: '%s - Senyra'
  },
  description: 'Senyra is a pleasure-through-food discovery app for moods, moments, and rituals.'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PrototypeProvider>{children}</PrototypeProvider>
      </body>
    </html>
  );
}

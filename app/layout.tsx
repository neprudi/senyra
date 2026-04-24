import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PrototypeProvider } from '@/lib/prototype-store';
import './globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: 'SENYRA',
    template: '%s - SENYRA'
  },
  description:
    'SENYRA helps people choose how they want to feel and matches that feeling with food, places, and rituals. Demo city: Belgrade.'
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

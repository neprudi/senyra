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
    'SENYRA is a mood-based demand engine for food and hospitality. Users choose how they want to feel, and Senyra turns it into a real Belgrade food experience.'
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

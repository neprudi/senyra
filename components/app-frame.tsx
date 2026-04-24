"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bookmark, ChevronLeft, Compass, Home, UserRound } from 'lucide-react';
import { cn } from '@/components/cn';
import { demoCityLabel, investorLine } from '@/lib/senyra';
import type { ReactNode } from 'react';

const navItems = [
  { href: '/home', label: 'Home', icon: Home },
  { href: '/discover', label: 'Discover', icon: Compass },
  { href: '/collections', label: 'Saved', icon: Bookmark },
  { href: '/profile', label: 'Profile', icon: UserRound }
];

type AppFrameProps = {
  title?: string;
  eyebrow?: string;
  backHref?: string;
  rightSlot?: ReactNode;
  children: ReactNode;
  showNav?: boolean;
  subtle?: boolean;
};

export function AppFrame({
  title,
  eyebrow,
  backHref,
  rightSlot,
  children,
  showNav = true,
  subtle = false
}: AppFrameProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,197,171,0.42),_transparent_38%),linear-gradient(180deg,_#fcfaf6_0%,_#f3ece1_48%,_#efe7db_100%)] text-graphite">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(120deg,rgba(115,94,70,0.08),transparent_28%,transparent_72%,rgba(140,153,113,0.09))] opacity-70" />
      <div className="pointer-events-none fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22 viewBox=%220 0 180 180%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22 width=%22180%22 height=%22180%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.78%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%220.12%22/%3E%3C/svg%3E')] opacity-35 mix-blend-multiply" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[460px] flex-col px-4 pb-30 pt-5 sm:px-5 md:py-6">
        <header className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.38em] text-cream-700/68">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cream-700/70" />
                calm luxury
              </div>
              <div className="flex items-baseline gap-2 text-cream-900">
                <span className="font-serif text-[1.08rem] font-semibold tracking-[0.44em] text-graphite">
                  SENYRA
                </span>
                <span className="hidden text-[9px] font-medium uppercase tracking-[0.34em] text-cream-700/65 sm:inline">
                  pleasure through food
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="rounded-full border border-white/80 bg-white/72 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700/78 shadow-soft backdrop-blur-xl">
                  {demoCityLabel}
                </span>
                <span className="rounded-full border border-white/80 bg-white/72 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream-700/72 shadow-soft backdrop-blur-xl">
                  {investorLine}
                </span>
              </div>
            </div>
            {title ? (
              <div className={cn('space-y-1.5', subtle && 'opacity-90')}>
                {eyebrow ? (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-700/75">{eyebrow}</p>
                ) : null}
                <h1 className="max-w-[16ch] text-[2rem] font-semibold leading-[0.94] tracking-[-0.045em] text-graphite sm:text-[2.15rem]">
                  {title}
                </h1>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            {backHref ? (
              <Link
                href={backHref}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/72 text-graphite shadow-soft backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-glow"
                aria-label="Go back"
              >
                <ChevronLeft className="h-5 w-5" />
              </Link>
            ) : null}
            {rightSlot}
          </div>
        </header>
        <main key={pathname} className="flex-1 page-enter">
          {children}
        </main>
        {showNav ? <BottomNav /> : null}
      </div>
    </div>
  );
}

function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[min(100%-1rem,460px)] -translate-x-1/2 px-3">
      <div className="flex items-center justify-between rounded-[1.55rem] border border-white/80 bg-[rgba(255,252,247,0.82)] px-2.5 py-2 shadow-soft backdrop-blur-xl">
        {navItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== '/home' && pathname.startsWith(item.href)) ||
            (item.href === '/discover' && pathname.startsWith('/experience'));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-1 flex-col items-center gap-1 rounded-[1.1rem] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] transition duration-300 ease-out',
                active
                  ? 'bg-graphite text-cream-50 shadow-glow'
                  : 'text-cream-700/70 hover:bg-white/70 hover:text-graphite hover:shadow-sm'
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

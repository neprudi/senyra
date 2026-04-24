"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AppFrame } from '@/components/app-frame';
import { demoCityLabel } from '@/lib/senyra';

export const dynamic = 'force-dynamic';

export default function OnboardingPage() {
  return (
    <AppFrame showNav={false} subtle>
      <div className="flex min-h-[calc(100vh-10rem)] flex-col justify-between gap-6">
        <section className="panel-strong relative overflow-hidden rounded-[2rem] p-6 animate-rise">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(167,181,142,0.3),transparent_26%),linear-gradient(145deg,rgba(122,98,75,0.15),rgba(255,255,255,0.04))]" />
          <div className="absolute -right-10 top-4 h-32 w-32 rounded-full bg-[#a6b592]/20 blur-3xl" />
          <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-[#cfb08a]/24 blur-3xl" />
          <div className="relative space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
                {demoCityLabel}
              </span>
              <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
                Emotional discovery
              </span>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-[0.95rem] font-semibold tracking-[0.46em] text-graphite">SENYRA</p>
              <h1 className="max-w-[12ch] text-[2.45rem] font-semibold leading-[0.92] tracking-[-0.055em] text-graphite">
                Not what to eat.
                <span className="block">How you want to feel.</span>
              </h1>
              <p className="max-w-[28ch] text-[16px] leading-7 text-cream-800/84">
                Food experiences matched to your mood.
              </p>
            </div>
            <div className="rounded-[1.45rem] border border-white/75 bg-white/72 p-4 shadow-soft backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
                Senyra converts emotional intent into restaurant demand.
              </p>
            </div>
          </div>
        </section>

        <div className="space-y-3">
          <Link
            href="/home"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-graphite px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 shadow-glow transition hover:-translate-y-0.5"
          >
            Create my mood plan
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/home"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/80 bg-white/80 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite shadow-soft transition hover:-translate-y-0.5"
          >
            Skip
          </Link>
        </div>
      </div>
    </AppFrame>
  );
}

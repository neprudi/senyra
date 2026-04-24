"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { AppFrame } from '@/components/app-frame';
import { SelectableCard } from '@/components/selectable-card';
import { demoCityLabel, moods } from '@/lib/senyra';
import { usePrototype } from '@/lib/prototype-store';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const router = useRouter();
  const { moodId, setMoodId } = usePrototype();

  return (
    <AppFrame title="Choose how you want to feel tonight." eyebrow="Emotion first">
      <div className="space-y-5">
        <div className="panel-strong relative overflow-hidden rounded-[2rem] p-6 animate-rise">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.64),transparent_30%),linear-gradient(145deg,rgba(122,98,75,0.16),rgba(255,255,255,0.04))]" />
          <div className="absolute -right-6 top-0 h-24 w-24 rounded-full bg-[#a6b592]/20 blur-2xl" />
          <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-[#cfb08a]/22 blur-3xl" />
          <div className="relative space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
                {demoCityLabel}
              </span>
              <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream-700">
                Mood-based demand engine
              </span>
            </div>
            <h2 className="max-w-[14ch] text-[2.4rem] font-semibold tracking-[-0.055em] leading-[0.92] text-graphite">
              Not what to eat.
              <span className="block">How you want to feel.</span>
            </h2>
            <p className="max-w-[32ch] text-[15px] leading-7 text-cream-800/82">
              Senyra turns your mood into a food experience - place, dish, atmosphere, and ritual.
            </p>
            <div className="grid gap-2 pt-1 sm:grid-cols-2">
              <div className="rounded-[1.2rem] border border-white/70 bg-white/72 p-3 shadow-soft backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">What it is</p>
                <p className="mt-1 text-sm leading-6 text-cream-800/82">
                  An emotional discovery engine for food experiences.
                </p>
              </div>
              <div className="rounded-[1.2rem] border border-white/70 bg-white/72 p-3 shadow-soft backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">Why it matters</p>
                <p className="mt-1 text-sm leading-6 text-cream-800/82">
                  Users choose a feeling, and Senyra turns it into a place, a dish, an atmosphere, and a ritual.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded-full border border-cream-200 bg-cream-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-700">
                Start with a feeling
              </span>
              <span className="rounded-full border border-cream-200 bg-cream-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-700">
                End with an experience
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {moods.map((mood) => (
            <SelectableCard
              key={mood.id}
              title={mood.label}
              summary={mood.summary}
              eyebrow={mood.eyebrow}
              accent={mood.accent}
              active={moodId === mood.id}
              onClick={() => {
                setMoodId(mood.id);
                router.push('/context');
              }}
            />
          ))}
        </div>

        <section className="panel-strong rounded-[1.8rem] p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">What is Senyra?</p>
              <h3 className="text-[1.6rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
                Built for demand moments, not search behavior.
              </h3>
            </div>
            <Sparkles className="mt-1 h-5 w-5 text-cream-700/70" />
          </div>
          <div className="mt-4 space-y-2">
            <Bullet>People choose a feeling, not a cuisine.</Bullet>
            <Bullet>Senyra matches mood with food, place, and ritual.</Bullet>
            <Bullet>Restaurants reach users at the moment of intent.</Bullet>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-700/70">
              Investor clarity in one screen
            </span>
            <Link
              href="/business"
              className="inline-flex items-center gap-2 rounded-full bg-graphite px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 shadow-glow transition hover:-translate-y-0.5"
            >
              For restaurants
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </AppFrame>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-[1.2rem] border border-cream-200/70 bg-cream-50/70 px-4 py-3 text-sm leading-6 text-cream-800/82">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-graphite" />
      <span>{children}</span>
    </div>
  );
}

"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { AppFrame } from '@/components/app-frame';
import { ArtPanel } from '@/components/art-panel';
import { demoCityLabel, onboardingSlides } from '@/lib/senyra';

export const dynamic = 'force-dynamic';

export default function OnboardingPage() {
  const [index, setIndex] = useState(0);
  const slide = onboardingSlides[index];
  const palette = useMemo<[string, string, string]>(() => {
    const palettes: [string, string, string][] = [
      ['#775a45', '#bf9b75', '#f4e6d8'],
      ['#677357', '#a7b58e', '#eef0e5'],
      ['#5f4b46', '#aa8475', '#f1dfd4'],
      ['#7c674f', '#c4ad8e', '#f8efe4']
    ];
    return palettes[index];
  }, [index]);

  return (
    <AppFrame showNav={false} title={slide.title} eyebrow={slide.kicker} subtle>
      <div className="flex min-h-[calc(100vh-10rem)] flex-col justify-between gap-7">
        <div className="space-y-7 animate-rise">
          <ArtPanel
            palette={palette}
            label="Choose how you want to feel."
            className="h-[52vh] min-h-[400px] shadow-[0_26px_80px_rgba(74,48,31,0.18)]"
          />
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
                {demoCityLabel}
              </span>
              <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream-700">
                Choose a feeling, not a venue
              </span>
            </div>
            <p className="max-w-[28ch] text-[15px] leading-7 text-cream-800/80">{slide.copy}</p>
            <div className="flex items-center gap-2">
              {onboardingSlides.map((_, slideIndex) => (
                <span
                  key={slideIndex}
                  className={`h-1.5 rounded-full transition-all ${
                    slideIndex === index ? 'w-8 bg-graphite' : 'w-1.5 bg-cream-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="panel-strong rounded-[1.7rem] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-700/70">
              Senyra understands your mood.
            </p>
            <p className="mt-2 text-sm leading-6 text-cream-800/85">
              {index === 0
                ? 'Not what to eat. How you want to feel.'
                : index === 1
                  ? 'Food, places, and rituals matched to your mood.'
                  : index === 2
                    ? 'Start with a feeling. End with an experience.'
                    : 'Senyra is building the emotional discovery layer for food experiences.'}
            </p>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setIndex((current) => Math.max(0, current - 1))}
              disabled={index === 0}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/75 text-graphite shadow-soft transition duration-300 ease-out disabled:opacity-40"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => setIndex((current) => Math.min(onboardingSlides.length - 1, current + 1))}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-graphite px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-glow"
            >
              {index === onboardingSlides.length - 1 ? 'Continue to Senyra' : 'Next'}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-700/70">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              Premium prototype
            </span>
            <Link href="/home" className="transition hover:text-graphite">
              Skip intro
            </Link>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}

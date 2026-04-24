"use client";

import Link from 'next/link';
import { ArrowRight, Bookmark } from 'lucide-react';
import { cn } from '@/components/cn';
import { ArtPanel } from '@/components/art-panel';
import { getMapsUrl, type Experience } from '@/lib/senyra';

type ExperienceCardProps = {
  experience: Experience;
  onOpen: () => void;
  saved: boolean;
  onToggleSave: () => void;
  compact?: boolean;
};

export function ExperienceCard({ experience, onOpen, saved, onToggleSave, compact = false }: ExperienceCardProps) {
  const mapsUrl = getMapsUrl(experience.placeName);

  return (
    <article className="soft-enter overflow-hidden rounded-[2rem] border border-white/80 bg-[rgba(255,253,249,0.82)] shadow-soft backdrop-blur-xl">
      <div className={cn(compact ? 'p-3' : 'p-4 sm:p-5')}>
        <ArtPanel
          palette={experience.palette}
          label={experience.fitLabel}
          className={cn('h-52', compact && 'h-44')}
        />
        <div className="mt-4 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
                  Belgrade demo
                </span>
                <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
                  Partner-ready lead
                </span>
                <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream-700">
                  {experience.venueType}
                </span>
              </div>
              <h3 className="text-[1.75rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
                {experience.title}
              </h3>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">
                Place
              </p>
              <p className="max-w-[34ch] text-[15px] leading-7 text-cream-800/82">
                {experience.placeName} · {experience.district}
              </p>
              <p className="max-w-[34ch] text-[15px] leading-7 text-cream-800/78">{experience.description}</p>
            </div>
            <button
              type="button"
              onClick={onToggleSave}
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ease-out',
                saved
                  ? 'border-graphite/15 bg-graphite text-cream-50 shadow-glow'
                  : 'border-white/80 bg-white/80 text-graphite hover:bg-white'
              )}
              aria-label={saved ? 'Remove from saved' : 'Save experience'}
            >
              <Bookmark className={cn('h-4.5 w-4.5', saved && 'fill-current')} />
            </button>
          </div>

          <div className="grid gap-3 rounded-[1.4rem] border border-cream-200/70 bg-cream-50/70 p-4 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">
                Feeling it serves
              </p>
              <p className="text-sm leading-6 text-cream-800/82">{experience.feelingServes}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">
                Best context
              </p>
              <p className="text-sm leading-6 text-cream-800/82">{experience.bestContext}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">
                The place
              </p>
              <p className="text-sm leading-6 text-cream-800/82">{experience.placeName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">
                Suggested dish
              </p>
              <p className="text-sm leading-6 text-cream-800/82">{experience.suggestedDish}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">
                Tonight's ritual
              </p>
              <p className="text-sm leading-6 text-cream-800/82">{experience.ritualSuggestion}</p>
            </div>
          </div>

          <div className="space-y-2 border-t border-cream-200/70 pt-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">
              Why this works for you
            </p>
            <p className="text-sm leading-6 text-cream-800/80">{experience.whyThisWorks}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.vibeTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cream-200 bg-cream-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-graphite px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-glow"
            >
              Open detail
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite shadow-soft transition duration-300 ease-out hover:-translate-y-0.5"
              >
                Open in Maps
              </Link>
              <button
                type="button"
                onClick={onToggleSave}
                className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite shadow-soft transition duration-300 ease-out hover:-translate-y-0.5"
              >
                <Bookmark className={cn('h-3.5 w-3.5', saved && 'fill-current')} />
                {saved ? 'Saved' : 'Save plan'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

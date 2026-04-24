"use client";

import Link from 'next/link';
import { ArrowUpRight, Bookmark, MapPinned, Share2, UtensilsCrossed } from 'lucide-react';
import { ArtPanel } from '@/components/art-panel';
import { cn } from '@/components/cn';
import type { Experience } from '@/lib/senyra';
import { usePrototype } from '@/lib/prototype-store';

export default function ExperienceDetailScreen({ experience }: { experience: Experience }) {
  const { isSaved, toggleSaved } = usePrototype();
  const saved = isSaved(experience.slug);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${experience.title} Belgrade`
  )}`;

  const onShare = async () => {
    const shareUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/experience/${experience.slug}`
        : `/experience/${experience.slug}`;
    const payload = {
      title: `Senyra: ${experience.title}`,
      text: experience.description,
      url: shareUrl
    };
    if (navigator.share) {
      await navigator.share(payload);
      return;
    }
    await navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className="space-y-6 animate-rise">
      <ArtPanel palette={experience.palette} label={experience.fitLabel} className="h-[34vh] min-h-[300px]" />

      <section className="panel-strong rounded-[1.8rem] p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
                Belgrade demo
              </span>
              <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream-700">
                {experience.venueType}
              </span>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
              {experience.city} - {experience.district}
            </p>
            <h2 className="max-w-[11ch] text-[2.15rem] font-semibold leading-[0.94] tracking-[-0.045em] text-graphite">
              {experience.title}
            </h2>
            <p className="max-w-[32ch] text-[15px] leading-7 text-cream-800/82">{experience.description}</p>
          </div>
          <button
            type="button"
            onClick={() => toggleSaved(experience.slug)}
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-full border transition',
              saved
                ? 'border-graphite/15 bg-graphite text-cream-50 shadow-glow'
                : 'border-white/80 bg-white/80 text-graphite hover:bg-white'
            )}
            aria-label={saved ? 'Remove from saved' : 'Save experience'}
          >
            <Bookmark className={cn('h-4.5 w-4.5', saved && 'fill-current')} />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.vibeTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cream-200 bg-cream-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <InfoBlock title="Feeling it serves" items={[experience.feelingServes]} />
        <InfoBlock title="Best context" items={[experience.bestContext]} />
        <InfoBlock title="Suggested dish" items={[experience.suggestedDish]} />
        <InfoBlock title="Suggested ritual" items={[experience.ritualSuggestion]} />
      </section>

      <section className="panel-strong rounded-[1.8rem] p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
          Why this works for you
        </p>
        <p className="mt-2 text-[15px] leading-7 text-cream-800/84">{experience.whyThisWorks}</p>
        <div className="mt-4 rounded-[1.35rem] border border-cream-200/70 bg-cream-50/70 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">Tonight's read</p>
          <p className="mt-2 text-sm leading-6 text-cream-800/82">{experience.whyTonight}</p>
        </div>
      </section>

      <section className="panel-strong rounded-[1.8rem] p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Atmosphere</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {experience.atmosphere.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cream-200 bg-cream-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-700"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={onShare}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite shadow-soft transition hover:-translate-y-0.5"
        >
          <Share2 className="h-4 w-4" />
          Share
        </button>
        <Link
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-graphite px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 shadow-glow transition hover:-translate-y-0.5"
        >
          <MapPinned className="h-4 w-4" />
          Open in Maps
        </Link>
      </div>

      <section className="panel rounded-[1.8rem] p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Tonight's note</p>
        <div className="mt-2 flex items-start gap-3">
          <UtensilsCrossed className="mt-1 h-4 w-4 text-cream-700/70" />
          <p className="text-sm leading-6 text-cream-800/82">
            Senyra understands your mood. Choose the room that lets the evening breathe.
          </p>
        </div>
      </section>
    </div>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="panel-strong rounded-[1.8rem] p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-cream-800/82">
            <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-cream-700/60" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

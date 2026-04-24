"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Bookmark, Globe, MapPinned, Share2 } from 'lucide-react';
import { ArtPanel } from '@/components/art-panel';
import { cn } from '@/components/cn';
import { getMapsUrl, type Experience } from '@/lib/senyra';
import { usePrototype } from '@/lib/prototype-store';

export default function ExperienceDetailScreen({ experience }: { experience: Experience }) {
  const { isSaved, toggleSaved } = usePrototype();
  const saved = isSaved(experience.slug);
  const mapsUrl = getMapsUrl(experience.placeName);
  const [shareMessage, setShareMessage] = useState('');

  useEffect(() => {
    if (!shareMessage) return;
    const timer = window.setTimeout(() => setShareMessage(''), 1800);
    return () => window.clearTimeout(timer);
  }, [shareMessage]);

  const onShare = async () => {
    const shareUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/experience/${experience.slug}`
        : `/experience/${experience.slug}`;
    const payload = {
      title: `Senyra: ${experience.title}`,
      text: `${experience.title} at ${experience.placeName}. ${experience.whyThisWorks}`,
      url: shareUrl
    };

    try {
      if (navigator.share) {
        await navigator.share(payload);
        return;
      }
      await navigator.clipboard.writeText(shareUrl);
      setShareMessage('Link copied.');
    } catch {
      await navigator.clipboard.writeText(shareUrl);
      setShareMessage('Link copied.');
    }
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
              Experience Detail
            </p>
            <h2 className="max-w-[12ch] text-[2.15rem] font-semibold leading-[0.94] tracking-[-0.045em] text-graphite">
              {experience.title}
            </h2>
            <p className="max-w-[34ch] text-[15px] leading-7 text-cream-800/82">
              {experience.placeName} · {experience.district}, {experience.city}
            </p>
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
        <InfoBlock title="The feeling" items={[experience.feelingServes]} />
        <InfoBlock title="The place" items={[`${experience.placeName} · ${experience.district}`]} />
        <InfoBlock title="The dish" items={[experience.suggestedDish]} />
        <InfoBlock title="The ritual" items={[experience.ritualSuggestion]} />
      </section>

      <section className="panel-strong rounded-[1.8rem] p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
          Why this works for you
        </p>
        <p className="mt-2 text-[15px] leading-7 text-cream-800/84">{experience.whyThisWorks}</p>
        <div className="mt-4 rounded-[1.35rem] border border-cream-200/70 bg-cream-50/70 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">Best moment</p>
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

      <section className="panel-strong rounded-[1.8rem] p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Partner value</p>
        <h3 className="mt-2 text-[1.55rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
          High-intent mood lead
        </h3>
        <p className="mt-3 text-sm leading-7 text-cream-800/82">
          Senyra surfaces this venue only after the user has chosen a feeling and a context. That means the lead is
          already emotionally qualified before the map tap happens.
        </p>
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

      <section className="grid gap-3 sm:grid-cols-2">
        {experience.websiteUrl ? (
          <Link
            href={experience.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite shadow-soft transition hover:-translate-y-0.5"
          >
            <Globe className="h-4 w-4" />
            Visit website
          </Link>
        ) : (
          <div className="rounded-full border border-dashed border-cream-300 bg-cream-50/70 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-700/68">
            Website not surfaced in this demo
          </div>
        )}
        <button
          type="button"
          onClick={() => toggleSaved(experience.slug)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-graphite px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 shadow-glow transition hover:-translate-y-0.5"
        >
          <Bookmark className={cn('h-4 w-4', saved && 'fill-current')} />
          Save plan
        </button>
      </section>

      <section className="panel rounded-[1.8rem] p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Tonight's note</p>
        <p className="mt-2 text-sm leading-6 text-cream-800/82">
          Senyra understands your mood. Choose the room that lets the evening breathe.
        </p>
      </section>

      {shareMessage ? (
        <div className="fixed bottom-24 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-white/80 bg-[rgba(255,252,247,0.94)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-graphite shadow-glow backdrop-blur-xl">
          {shareMessage}
        </div>
      ) : null}
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

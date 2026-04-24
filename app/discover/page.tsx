"use client";

import { useRouter } from 'next/navigation';
import { AppFrame } from '@/components/app-frame';
import { ExperienceCard } from '@/components/experience-card';
import { demoCityLabel, getContext, getDiscoveryFeed, getDiscoveryInsight, getMood } from '@/lib/senyra';
import { usePrototype } from '@/lib/prototype-store';

export const dynamic = 'force-dynamic';

export default function DiscoverPage() {
  const router = useRouter();
  const { moodId, contextId, toggleSaved, isSaved } = usePrototype();
  const mood = getMood(moodId);
  const context = getContext(contextId);
  const insight = getDiscoveryInsight(moodId, contextId);
  const feed = getDiscoveryFeed(moodId, contextId);

  return (
    <AppFrame title="Matched experiences" eyebrow={`${mood.label} + ${context.label}`} backHref="/plan">
      <div className="space-y-5">
        <div className="panel-strong rounded-[1.8rem] p-5 animate-rise">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
              {demoCityLabel}
            </span>
            <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream-700">
              {mood.label} + {context.label}
            </span>
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
            {insight.eyebrow}
          </p>
          <h2 className="mt-2 max-w-[15ch] text-[2rem] font-semibold leading-[0.98] tracking-[-0.045em] text-graphite">
            {insight.title}
          </h2>
          <p className="mt-3 max-w-[32ch] text-[15px] leading-7 text-cream-800/80">
            {insight.copy} Food, places, and rituals matched to your mood.
          </p>
        </div>

        <div className="space-y-4">
          {feed.map((experience) => (
            <ExperienceCard
              key={experience.slug}
              experience={experience}
              saved={isSaved(experience.slug)}
              onToggleSave={() => toggleSaved(experience.slug)}
              onOpen={() => router.push(`/experience/${experience.slug}`)}
            />
          ))}
        </div>
      </div>
    </AppFrame>
  );
}

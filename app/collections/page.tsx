"use client";

import Link from 'next/link';
import { AppFrame } from '@/components/app-frame';
import { ArtPanel } from '@/components/art-panel';
import { collectionLabels, experiences, getMood, type ContextId, type MoodId } from '@/lib/senyra';
import { usePrototype } from '@/lib/prototype-store';

export default function CollectionsPage() {
  const { moodId, savedSlugs } = usePrototype();
  const savedExperiences = experiences.filter((item) => savedSlugs.includes(item.slug));
  const mood = getMood(moodId);

  const groups = [
    {
      ...collectionLabels[0],
      items: savedExperiences.filter((item) =>
        (['comfort', 'soft-indulgence', 'escape'] as MoodId[]).some((id) => item.moodIds.includes(id))
      )
    },
    {
      ...collectionLabels[1],
      items: savedExperiences.filter((item) => item.moodIds.includes('comfort' as MoodId))
    },
    {
      ...collectionLabels[2],
      items: savedExperiences.filter((item) =>
        item.contextIds.some((id) => (['date', 'special-night'] as ContextId[]).includes(id))
      )
    },
    {
      ...collectionLabels[3],
      items: savedExperiences.filter((item) =>
        (['adventure', 'play'] as MoodId[]).some((id) => item.moodIds.includes(id))
      )
    }
  ];

  return (
    <AppFrame title="Saved" eyebrow={`${savedExperiences.length} experiences`} backHref="/discover">
      <div className="space-y-5">
        <div className="panel-strong rounded-[1.8rem] p-5 animate-rise">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Collections</p>
          <h2 className="mt-2 max-w-[15ch] text-[2rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
            Moments worth keeping close.
          </h2>
          <p className="mt-3 max-w-[31ch] text-[15px] leading-7 text-cream-800/80">
            Current pleasure lens: {mood.label.toLowerCase()}. Senyra turns saved places into a personal library of moods.
          </p>
        </div>

        <div className="grid gap-4">
          {groups.map((collection, index) => (
            <section key={collection.id} className="panel-strong rounded-[1.8rem] p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
                    {collection.title}
                  </p>
                  <p className="text-sm leading-6 text-cream-800/78">{collection.description}</p>
                </div>
                <span className="rounded-full border border-cream-200 bg-cream-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-700">
                  {collection.items.length}
                </span>
              </div>
              <div className="mt-4">
                {collection.items.length ? (
                  <div className="grid gap-3">
                    {collection.items.map((experience) => (
                      <Link
                        key={experience.slug}
                        href={`/experience/${experience.slug}`}
                        className="group flex items-center gap-3 rounded-[1.4rem] border border-white/70 bg-white/70 p-3 transition hover:-translate-y-0.5 hover:bg-white"
                      >
                        <ArtPanel palette={experience.palette} className="h-20 w-20 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-700/70">
                            {experience.district}
                          </p>
                          <h3 className="truncate text-lg font-semibold tracking-[-0.03em] text-graphite">
                            {experience.title}
                          </h3>
                          <p className="truncate text-sm leading-6 text-cream-800/76">{experience.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-[1.4rem] border border-dashed border-cream-300 bg-cream-50/60 p-4 text-sm leading-6 text-cream-800/75">
                    Save an experience from discovery and it will appear here as a quiet, personal collection.
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="panel rounded-[1.8rem] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
            Continue exploring
          </p>
          <p className="mt-2 text-sm leading-6 text-cream-800/82">
            Soft evenings, comfort nights, and future dates all live here together.
          </p>
        </div>
      </div>
    </AppFrame>
  );
}

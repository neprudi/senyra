"use client";

import { AppFrame } from '@/components/app-frame';
import { ArtPanel } from '@/components/art-panel';
import Link from 'next/link';
import { getMood, getProfileArchetype, plusBenefits } from '@/lib/senyra';
import { usePrototype } from '@/lib/prototype-store';

export const dynamic = 'force-dynamic';

export default function ProfilePage() {
  const { moodId, contextId, savedSlugs } = usePrototype();
  const mood = getMood(moodId);
  const profile = getProfileArchetype(moodId);
  const balance = {
    comfort: ['Warmth', mood.label, 'Ease'],
    novelty: ['Curiosity', 'Contrast', 'Surprise'],
    intimacy: ['Texture', 'Attention', 'Proximity']
  };

  return (
    <AppFrame title="Pleasure profile" eyebrow="Taste identity" backHref="/discover">
      <div className="space-y-5">
        <section className="panel-strong rounded-[1.8rem] p-5 animate-rise">
          <div className="flex items-start gap-4">
            <ArtPanel
              palette={['#6f7f4f', '#a7b58e', '#f3ecdf']}
              label="Your pleasure identity"
              className="h-28 w-28 shrink-0"
            />
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
                Current read
              </p>
              <h2 className="text-[2rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
                {profile.label}
              </h2>
              <p className="text-sm leading-6 text-cream-800/80">{profile.summary}</p>
              <p className="text-sm leading-6 text-cream-800/80">{profile.tagLine}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          <StatCard label="Current mood" value={mood.label} note={mood.description} />
          <StatCard label="Current context" value={contextId.replace('-', ' ')} note="The shape of the night." />
          <StatCard label="Saved experiences" value={String(savedSlugs.length)} note="Your personal collection." />
          <StatCard label="Core type" value={profile.label} note="No gamification, just signal." />
        </section>

        <section className="panel-strong rounded-[1.8rem] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Taste balance</p>
          <div className="mt-4 space-y-4">
            {Object.entries(balance).map(([key, values]) => (
              <div key={key} className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-700/70">
                  <span>{key}</span>
                  <span>directional</span>
                </div>
                <div className="h-2 rounded-full bg-cream-100">
                  <div
                    className="h-2 rounded-full bg-graphite"
                    style={{ width: key === 'comfort' ? '82%' : key === 'novelty' ? '58%' : '71%' }}
                  />
                </div>
                <p className="text-sm leading-6 text-cream-800/78">{values.join(' / ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel rounded-[1.8rem] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Signature line</p>
          <p className="mt-2 text-[1.1rem] leading-8 text-graphite">
            Senyra understands your mood. You do not need a meal. You need a feeling.
          </p>
        </section>

        <section className="panel-strong rounded-[1.8rem] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Senyra Plus</p>
          <h3 className="mt-2 text-[1.6rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
            Your private layer of pleasure.
          </h3>
          <p className="mt-3 text-sm leading-7 text-cream-800/80">
            Hidden Belgrade guides, weekly rituals, and deeper personal history live here.
          </p>
          <div className="mt-4 grid gap-2">
            {plusBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[1.2rem] border border-cream-200/70 bg-cream-50/70 px-4 py-3 text-sm leading-6 text-cream-800/82"
              >
                {benefit}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/business"
              className="inline-flex items-center justify-center rounded-full bg-graphite px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 shadow-glow transition hover:-translate-y-0.5"
            >
              For partners
            </Link>
          </div>
        </section>
      </div>
    </AppFrame>
  );
}

function StatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="panel-strong rounded-[1.6rem] p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-graphite">{value}</p>
      <p className="mt-2 text-sm leading-6 text-cream-800/76">{note}</p>
    </div>
  );
}

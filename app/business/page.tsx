"use client";

import { useState } from 'react';
import Link from 'next/link';
import { AppFrame } from '@/components/app-frame';
import { monetizationPaths } from '@/lib/senyra';

export const dynamic = 'force-dynamic';

const partnerMetrics = [
  { label: 'Mood impressions', value: '1,248' },
  { label: 'Map opens', value: '312' },
  { label: 'Saved plans', value: '87' },
  { label: 'Booking-intent clicks', value: '42' }
];

export default function BusinessPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <AppFrame title="For restaurants" eyebrow="Partner model" backHref="/profile" subtle>
      <div className="space-y-5">
        <section className="panel-strong rounded-[1.9rem] p-5 animate-rise">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
            Senyra is not selling ads. It is creating demand moments.
          </p>
          <h2 className="mt-2 max-w-[15ch] text-[2rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
            Senyra helps restaurants get discovered at the moment of emotional intent.
          </h2>
          <p className="mt-3 max-w-[32ch] text-[15px] leading-7 text-cream-800/80">
            People choose how they want to feel. Senyra turns that into a mood plan, and restaurants meet the user
            after the desire is already clear.
          </p>
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          {partnerMetrics.map((metric) => (
            <div key={metric.label} className="panel-strong rounded-[1.5rem] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-graphite">{metric.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-3">
          {monetizationPaths.map((path) => (
            <article key={path.title} className="panel-strong rounded-[1.8rem] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">{path.value}</p>
              <h3 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.04em] leading-[1] text-graphite">
                {path.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-cream-800/82">{path.copy}</p>
            </article>
          ))}
        </section>

        <section className="panel-strong rounded-[1.9rem] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Senyra Plus</p>
          <h3 className="mt-2 text-[1.7rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
            The elegant upsell.
          </h3>
          <p className="mt-3 max-w-[30ch] text-[15px] leading-7 text-cream-800/82">
            Unlock personal mood history, hidden Belgrade guides, weekly rituals, and richer solo and date-night
            collections.
          </p>
        </section>

        <section className="panel rounded-[1.8rem] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Why this matters</p>
          <p className="mt-2 text-sm leading-7 text-cream-800/82">
            The business model is simple: a qualified mood lead, not a generic impression. That makes partner value
            clearer and consumer intent much stronger.
          </p>
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="inline-flex items-center justify-center rounded-full bg-graphite px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 shadow-glow transition hover:-translate-y-0.5"
          >
            Join as a partner
          </button>
          <Link
            href="/discover"
            className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/80 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite shadow-soft transition hover:-translate-y-0.5"
          >
            See mood plans
          </Link>
        </section>
      </div>

      {showModal ? <PartnerModal onClose={() => setShowModal(false)} /> : null}
    </AppFrame>
  );
}

function PartnerModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-graphite/24 px-4 pb-6 pt-10 backdrop-blur-sm">
      <div className="w-full max-w-[460px] rounded-[1.8rem] border border-white/80 bg-[rgba(255,252,247,0.96)] p-5 shadow-glow">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Partner onboarding</p>
        <h3 className="mt-2 text-[1.55rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
          Coming soon.
        </h3>
        <p className="mt-3 text-sm leading-7 text-cream-800/82">
          Partner onboarding is coming soon. Senyra is currently testing in Belgrade.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-graphite px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 shadow-glow transition hover:-translate-y-0.5"
        >
          Close
        </button>
      </div>
    </div>
  );
}

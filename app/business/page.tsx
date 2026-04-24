import Link from 'next/link';
import { AppFrame } from '@/components/app-frame';
import { monetizationPaths, plusBenefits } from '@/lib/senyra';

export const dynamic = 'force-dynamic';

export default function BusinessPage() {
  return (
    <AppFrame title="Why restaurants join Senyra" eyebrow="For partners" backHref="/profile" subtle>
      <div className="space-y-5">
        <section className="panel-strong rounded-[1.9rem] p-5 animate-rise">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
            Senyra is building the emotional discovery layer for food experiences.
          </p>
          <h2 className="mt-2 max-w-[15ch] text-[2rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
            People choose a feeling, not a cuisine.
          </h2>
          <p className="mt-3 max-w-[32ch] text-[15px] leading-7 text-cream-800/80">
            Restaurants meet the user at the moment of intent, when a mood has already turned into a plan.
          </p>
        </section>

        <section className="grid gap-3">
          {monetizationPaths.map((path) => (
            <article key={path.title} className="panel-strong rounded-[1.8rem] p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-700/65">{path.value}</p>
                  <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] leading-[1] text-graphite">
                    {path.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-cream-800/82">{path.copy}</p>
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
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/profile"
            className="inline-flex items-center justify-center rounded-full bg-graphite px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 shadow-glow transition hover:-translate-y-0.5"
          >
            Back to profile
          </Link>
          <Link
            href="/discover"
            className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/80 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite shadow-soft transition hover:-translate-y-0.5"
          >
            See the product
          </Link>
        </section>
      </div>
    </AppFrame>
  );
}

"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AppFrame } from '@/components/app-frame';
import { ExperienceCard } from '@/components/experience-card';
import { demoCityLabel, getContext, getDiscoveryFeed, getDiscoveryInsight, getMood, planSteps } from '@/lib/senyra';
import { usePrototype } from '@/lib/prototype-store';

export const dynamic = 'force-dynamic';

export default function PlanPage() {
  const router = useRouter();
  const { moodId, contextId, isSaved, toggleSaved } = usePrototype();
  const mood = getMood(moodId);
  const context = getContext(contextId);
  const insight = getDiscoveryInsight(moodId, contextId);
  const feed = getDiscoveryFeed(moodId, contextId).slice(0, 3);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStepIndex(1), 650),
      window.setTimeout(() => setStepIndex(2), 1300)
    ];
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return (
    <AppFrame title="Your mood plan for tonight" eyebrow={`${mood.label} + ${context.label}`} backHref="/context" subtle>
      <div className="space-y-5">
        <section className="panel-strong overflow-hidden rounded-[1.9rem] p-5 animate-rise">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
              {demoCityLabel}
            </span>
            <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream-700">
              Reading your mood
            </span>
          </div>
          <h2 className="mt-3 max-w-[14ch] text-[2.15rem] font-semibold leading-[0.94] tracking-[-0.05em] text-graphite">
            {insight.title}
          </h2>
          <p className="mt-3 max-w-[32ch] text-[15px] leading-7 text-cream-800/82">{insight.copy}</p>

          <div className="mt-5 grid gap-3 rounded-[1.5rem] border border-cream-200/80 bg-cream-50/70 p-4">
            {planSteps.map((step, index) => {
              const active = stepIndex >= index;
              return (
                <div
                  key={step.title}
                  className={`flex items-start gap-3 rounded-[1.1rem] p-3 transition duration-500 ${
                    active ? 'bg-white/70 shadow-soft' : 'opacity-55'
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold uppercase tracking-[0.24em] ${
                      active ? 'bg-graphite text-cream-50' : 'bg-cream-200 text-cream-700'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-700/70">
                      {step.title}
                    </p>
                    <p className="text-sm leading-6 text-cream-800/82">{step.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="panel-strong rounded-[1.9rem] p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
                {stepIndex < 2 ? 'Senyra is building your experience' : 'Your mood plan for tonight'}
              </p>
              <h3 className="text-[1.7rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
                {mood.label} and {context.label.toLowerCase()} need a softer fit.
              </h3>
            </div>
            <Sparkles className="h-5 w-5 text-cream-700/70" />
          </div>
          <p className="mt-3 max-w-[34ch] text-[15px] leading-7 text-cream-800/82">
            {mood.description} {context.summary} Senyra turns that into a place, a dish, an atmosphere, a ritual, and a
            next action.
          </p>
        </section>

        <section className="space-y-4">
          {feed.map((experience) => (
            <ExperienceCard
              key={experience.slug}
              experience={experience}
              saved={isSaved(experience.slug)}
              onToggleSave={() => toggleSaved(experience.slug)}
              onOpen={() => router.push(`/experience/${experience.slug}`)}
              compact
            />
          ))}
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/discover"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-graphite px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 shadow-glow transition hover:-translate-y-0.5"
          >
            Open detailed mood plans
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/home"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-white/80 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite shadow-soft transition hover:-translate-y-0.5"
          >
            Refine mood
          </Link>
        </section>
      </div>
    </AppFrame>
  );
}

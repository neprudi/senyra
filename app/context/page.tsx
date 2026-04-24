"use client";

import { useRouter } from 'next/navigation';
import { AppFrame } from '@/components/app-frame';
import { SelectableCard } from '@/components/selectable-card';
import { contexts, demoCityLabel, getMood } from '@/lib/senyra';
import { usePrototype } from '@/lib/prototype-store';

export const dynamic = 'force-dynamic';

export default function ContextPage() {
  const router = useRouter();
  const { moodId, contextId, setContextId } = usePrototype();
  const mood = getMood(moodId);

  return (
    <AppFrame
      title="How do you want to experience it?"
      eyebrow={mood.label}
      backHref="/home"
    >
      <div className="space-y-5">
        <div className="panel-strong rounded-[1.8rem] p-5 animate-rise">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
              {demoCityLabel}
            </span>
            <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream-700">
              Emotional state first
            </span>
          </div>
          <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
            The context gives the feeling a shape.
          </h2>
          <p className="mt-3 max-w-[30ch] text-[15px] leading-7 text-cream-800/80">
            {mood.description}
          </p>
        </div>

        <div className="grid gap-3">
          {contexts.map((context) => (
            <SelectableCard
              key={context.id}
              title={context.label}
              summary={context.summary}
              accent="from-[#6f7f4f] via-[#ccb894] to-[#f2e9dd]"
              active={contextId === context.id}
              onClick={() => {
                setContextId(context.id);
                router.push('/discover');
              }}
            />
          ))}
        </div>
      </div>
    </AppFrame>
  );
}

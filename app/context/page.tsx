"use client";

import { useRouter } from 'next/navigation';
import { AppFrame } from '@/components/app-frame';
import { SelectableCard } from '@/components/selectable-card';
import { contexts, getMood } from '@/lib/senyra';
import { usePrototype } from '@/lib/prototype-store';

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
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">Selected mood</p>
          <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
            {mood.description}
          </h2>
          <p className="mt-3 max-w-[30ch] text-[15px] leading-7 text-cream-800/80">
            Choose the context that gives the mood its shape.
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

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
    <AppFrame title={`You selected ${mood.label}. Now, who are you with?`} eyebrow="Context" backHref="/home">
      <div className="space-y-5">
        <section className="panel-strong rounded-[1.8rem] p-5 animate-rise">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-cream-700">
              {demoCityLabel}
            </span>
            <span className="rounded-full border border-cream-200 bg-cream-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream-700">
              Choose the setting
            </span>
          </div>
          <h2 className="mt-2 max-w-[16ch] text-[2rem] font-semibold tracking-[-0.045em] leading-[0.98] text-graphite">
            The context gives the feeling its shape.
          </h2>
          <p className="mt-3 max-w-[30ch] text-[15px] leading-7 text-cream-800/80">{mood.description}</p>
        </section>

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

        <button
          type="button"
          onClick={() => {
            setContextId('slow-evening');
            router.push('/discover');
          }}
          className="inline-flex w-full items-center justify-center rounded-full border border-white/80 bg-white/80 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite shadow-soft transition hover:-translate-y-0.5"
        >
          Skip
        </button>
      </div>
    </AppFrame>
  );
}

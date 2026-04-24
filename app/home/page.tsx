"use client";

import { useRouter } from 'next/navigation';
import { AppFrame } from '@/components/app-frame';
import { SelectableCard } from '@/components/selectable-card';
import { moods } from '@/lib/senyra';
import { usePrototype } from '@/lib/prototype-store';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const router = useRouter();
  const { moodId, setMoodId } = usePrototype();

  return (
    <AppFrame title="Choose how you want to feel tonight." eyebrow="Emotion first">
      <div className="space-y-5">
        <div className="panel-strong rounded-[1.8rem] p-5 animate-rise">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">
            Senyra understands your mood.
          </p>
          <h2 className="mt-2 max-w-[14ch] text-[2.15rem] font-semibold tracking-[-0.048em] leading-[0.96] text-graphite">
            Not what to eat.
            <span className="block">How you want to feel.</span>
          </h2>
          <p className="mt-3 max-w-[31ch] text-[15px] leading-7 text-cream-800/80">
            Senyra matches food to your mood. The feeling comes first, then the room, the dish, and the ritual.
          </p>
        </div>

        <div className="grid gap-3">
          {moods.map((mood) => (
            <SelectableCard
              key={mood.id}
              title={mood.label}
              summary={mood.summary}
              eyebrow={mood.eyebrow}
              accent={mood.accent}
              active={moodId === mood.id}
              onClick={() => {
                setMoodId(mood.id);
                router.push('/context');
              }}
            />
          ))}
        </div>
      </div>
    </AppFrame>
  );
}

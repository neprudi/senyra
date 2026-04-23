"use client";

import { cn } from '@/components/cn';

type SelectableCardProps = {
  title: string;
  summary: string;
  active?: boolean;
  accent: string;
  onClick: () => void;
  className?: string;
  eyebrow?: string;
};

export function SelectableCard({
  title,
  summary,
  active,
  accent,
  onClick,
  className,
  eyebrow
}: SelectableCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group relative min-h-[132px] overflow-hidden rounded-[1.7rem] border p-5 text-left shadow-soft transition duration-500 ease-out hover:-translate-y-0.5 hover:shadow-glow',
        active
          ? 'border-graphite/15 bg-graphite text-cream-50 shadow-glow'
          : 'border-white/80 bg-white/84 text-graphite backdrop-blur-xl hover:bg-white',
        className
      )}
    >
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-0 transition duration-500 ease-out group-hover:opacity-100',
          accent,
          active ? 'opacity-100' : ''
        )}
      />
      <div className="relative flex h-full flex-col justify-between gap-4">
        <div className="space-y-2">
          {eyebrow ? (
            <p
              className={cn(
                'text-[10px] font-semibold uppercase tracking-[0.28em]',
                active ? 'text-cream-50/70' : 'text-cream-700/70'
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h3 className={cn('text-[1.35rem] font-semibold tracking-[-0.04em] leading-[1.02]', active && 'text-cream-50')}>
            {title}
          </h3>
          <p className={cn('max-w-[24ch] text-[14px] leading-6', active ? 'text-cream-50/78' : 'text-cream-800/76')}>
            {summary}
          </p>
        </div>
        <span
          className={cn(
            'inline-flex w-fit rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]',
            active ? 'border-white/20 bg-white/10 text-cream-50/86' : 'border-cream-200 bg-cream-50 text-cream-700'
          )}
        >
          {active ? 'Selected' : 'Choose this'}
        </span>
      </div>
    </button>
  );
}

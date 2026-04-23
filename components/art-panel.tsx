import { cn } from '@/components/cn';

type ArtPanelProps = {
  palette: [string, string, string];
  label?: string;
  className?: string;
};

export function ArtPanel({ palette, label, className }: ArtPanelProps) {
  const [a, b, c] = palette;
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.8rem] border border-white/60 shadow-[0_20px_60px_rgba(71,48,31,0.16)] transition duration-700 ease-out hover:-translate-y-0.5 hover:shadow-[0_30px_90px_rgba(71,48,31,0.2)]',
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${a} 0%, ${b} 46%, ${c} 100%)`
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.42),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.2),transparent_20%),radial-gradient(circle_at_50%_85%,rgba(34,28,23,0.16),transparent_30%)]" />
      <div className="absolute -right-10 top-4 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
      <div className="absolute -left-8 bottom-4 h-24 w-24 rounded-full bg-[#fffaf1]/25 blur-2xl" />
      <div className="absolute inset-x-[12%] top-[14%] h-[70%] rounded-[2rem] border border-white/25" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 bg-white/12 shadow-[inset_0_0_50px_rgba(255,255,255,0.15)]" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/82">SENYRA</p>
          {label ? <p className="mt-1 max-w-[16ch] text-sm leading-tight text-white/92">{label}</p> : null}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/12 backdrop-blur-md">
          <div className="h-5 w-5 rounded-full border border-white/85" />
        </div>
      </div>
    </div>
  );
}

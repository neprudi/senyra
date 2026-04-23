import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,197,171,0.42),_transparent_38%),linear-gradient(180deg,_#fcfaf6_0%,_#f3ece1_48%,_#efe7db_100%)] px-4 py-8 text-graphite">
      <div className="mx-auto flex min-h-[80vh] max-w-[460px] flex-col justify-center gap-4 rounded-[2rem] border border-white/70 bg-[rgba(255,253,249,0.84)] p-6 shadow-soft backdrop-blur-xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-700/70">SENYRA</p>
        <h1 className="text-3xl font-semibold tracking-[-0.04em]">This experience could not be found.</h1>
        <p className="text-sm leading-6 text-cream-800/80">
          The page you opened may have moved. Let us bring you back to something worth wanting.
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Link
            href="/discover"
            className="inline-flex items-center justify-center rounded-full bg-graphite px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-50 transition hover:-translate-y-0.5"
          >
            Go to discovery
          </Link>
          <Link
            href="/home"
            className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/80 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-graphite transition hover:-translate-y-0.5"
          >
            Choose a mood
          </Link>
        </div>
      </div>
    </div>
  );
}

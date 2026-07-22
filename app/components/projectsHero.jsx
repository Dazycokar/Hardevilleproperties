"use client";

export default function ProjectsHero({
  eyebrow,
  title,
  subtitle,
  variant = "land",
}) {

  const isLand = variant === "land";

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-16 top-28 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        <div
          className={
            "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t " +
            (isLand ? "from-emerald-500/20" : "from-sky-500/20")
          }
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">{eyebrow}</p>
          <div className="h-1 w-1 rounded-full bg-emerald-400" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/90">
            Handpicked listings
          </p>
        </div>

        <h1 className="mt-4 text-4xl font-black leading-[1.05] sm:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">{subtitle}</p> : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90">
            Verified media
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90">
            Clear pricing
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90">
            Fast due diligence
          </span>
        </div>
      </div>
    </section>
  );
}
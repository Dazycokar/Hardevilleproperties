"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/header.png"
          alt="Hardeville hero background"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-2xl">

          <span className="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Lagos property investments
          </span>
          <h1 className="mt-8 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Smooth property discovery for Lagos investors
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Find prime land and modern buildings with clear pricing, verified titles, and dedicated support from Hardeville.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              Explore Properties
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Talk to an Expert
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}


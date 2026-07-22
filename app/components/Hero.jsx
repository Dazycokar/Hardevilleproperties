"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/Header.png"
          alt="Hardeville hero background"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-2xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Global property investments
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            Making your{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              vision
            </span>{" "}
            become a reality
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Real estate financing, logistics and operational management.
          </p>

        </div>
      </div>
    </section>
  );
}


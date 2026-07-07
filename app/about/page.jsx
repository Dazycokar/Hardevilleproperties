"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  "Prime land and modern homes across high-growth areas",
  "Transparent pricing and end-to-end advisory support",
  "Trusted development partners with a strong local presence",
];

export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.25),_transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">About Hardeville</p>
            <h1 className="mt-4 text-4xl font-black sm:text-5xl">A modern real estate company built on trust, quality, and growth.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Hardeville Homes Limited has built a reputation for presenting premium developments, clear investment opportunities, and strong client support across the real estate sector.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">Book a Consultation</Link>
              <Link href="/properties" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">View Properties</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-start sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-[2rem] bg-white p-8 shadow-[0_25px_90px_rgba(15,23,42,0.07)] ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Who we are</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Developing opportunities that feel secure and future-ready.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We specialise in well-located land and modern homes with a clear emphasis on strategic growth, quality construction standards, and thoughtful client guidance.
            </p>
            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-slate-700">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }} className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_25px_90px_rgba(15,23,42,0.16)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Our values</p>
            <h3 className="mt-3 text-3xl font-bold">Integrity, innovation, and long-term value.</h3>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              The company’s approach combines careful planning, transparent communication, and a strong commitment to creating places that truly add value for investors and families.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-bold">100%</p>
                <p className="mt-2 text-sm text-slate-300">Investor-first guidance</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-bold">24/7</p>
                <p className="mt-2 text-sm text-slate-300">Responsive support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


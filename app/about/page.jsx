"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ManagingPartner from "../components/ManagingPartner";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              About Hardeville
            </p>
            <h1 className="mt-4 text-4xl font-black sm:text-5xl">
              A modern real estate company built on trust, quality, and growth.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Hardeville Homes Limited has built a reputation for presenting
              developments, clear investment opportunities, and strong client
              support across the real estate sector.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Book a Consultation
              </Link>
              <Link
                href="/properties"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                View properties
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <ManagingPartner />
    </main>
  );
}


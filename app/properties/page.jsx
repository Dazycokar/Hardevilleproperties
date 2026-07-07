"use client";

import { motion } from "framer-motion";
import Properties from "../components/Properties";

export default function PropertiesPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Featured Collection</p>
            <h1 className="mt-4 text-4xl font-black sm:text-5xl">Discover prime land and beautifully designed homes.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Browse a growing portfolio of carefully selected properties with clear pricing, strong locations, and modern presentation.
            </p>
          </motion.div>
        </div>
      </section>
      <Properties />
    </main>
  );
}


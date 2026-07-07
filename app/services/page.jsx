"use client";

import { motion } from "framer-motion";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Our Services</p>
            <h1 className="mt-4 text-4xl font-black sm:text-5xl">Tailored real estate support from first enquiry to final handover.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              From land acquisition to modern home delivery, we focus on clarity, strategy, and smooth execution.
            </p>
          </motion.div>
        </div>
      </section>
      <Services />
    </main>
  );
}


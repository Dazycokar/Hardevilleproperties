"use client";

import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Contact Us</p>
            <h1 className="mt-4 text-4xl font-black sm:text-5xl">Let’s talk about your next property move.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Reach out for property guidance, investment discussions, or a private consultation with our team.
            </p>
          </motion.div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}


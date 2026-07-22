"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setName("");
    setEmail("");
    setMessage("");
    alert("Thanks for reaching out! We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Get in touch
            </span>
            <h2 className="text-4xl font-extrabold text-slate-950">Let’s make your next property move smooth.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Send us a message and our team will help you identify the best land or building opportunity for your goals.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
                <div className="flex items-center gap-3 text-emerald-700 mb-4">
                  <Icon icon="mdi:phone" width="22" height="22" />
                  <span className="text-sm font-semibold">Phone</span>
                </div>
                <a href="tel:+2348060273597" className="text-base font-semibold text-slate-950 hover:text-emerald-700 transition">
                  +234 806 027 3597
                </a>
                <p className="mt-2 text-sm text-slate-500">Available Mon–Fri</p>
              </div>
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
                <div className="flex items-center gap-3 text-emerald-700 mb-4">
                  <Icon icon="mdi:email" width="22" height="22" />
                  <span className="text-sm font-semibold">Email</span>
                </div>
                <a href="mailto:demola.adeniyi@gmail.com" className="text-base font-semibold text-slate-950 hover:text-emerald-700 transition">
                  demola.adeniyi@gmail.com
                </a>
                <p className="mt-2 text-sm text-slate-500">Fast response within 24 hours</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
              <div className="flex items-center gap-3 text-emerald-700 mb-4">
                <Icon icon="mdi:map-marker" width="22" height="22" />
                <span className="text-sm font-semibold">Office</span>
              </div>
              <p className="text-base font-semibold text-slate-950">LEGACY HOUSE, 5, Alhaji Alli Lane. Ogba Lagos</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] bg-slate-950 p-8 shadow-2xl ring-1 ring-white/10"
          >
            <div className="grid gap-6">
              <label className="space-y-2 text-sm text-slate-200">
                <span className="font-semibold">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4 text-white placeholder:text-slate-400 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span className="font-semibold">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4 text-white placeholder:text-slate-400 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                  placeholder="Your email"
                  required
                />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span className="font-semibold">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 px-5 py-4 text-white placeholder:text-slate-400 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                  placeholder="Tell us what you're looking for"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}


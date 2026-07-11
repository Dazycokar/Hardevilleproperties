"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const services = [
  {
    title: "Land Sales",
    description: "Find the right land for your goals—across Nigeria.",
    icon: "mdi:terrain",
  },
  {
    title: "Construction",
    description: "From planning to delivery for modern, durable homes.",
    icon: "mdi:home-city",
  },
  {
    title: "Investment Plans",
    description: "Structured options to support property investment decisions.",
    icon: "mdi:finance",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-700 mb-6">
                <Icon icon={s.icon} width="28" height="28" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-700 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


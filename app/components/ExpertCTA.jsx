"use client";

import { motion } from "framer-motion";

export default function ExpertCTA() {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative bg-gradient-to-r from-green-900 via-green-900 to-emerald-800 p-8 sm:p-10 lg:p-12">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#34d399_30%,transparent_60%)]" />
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_30%,#16a34a_20%,transparent_55%)]" />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-emerald-200 text-sm font-semibold tracking-wide mb-4"
                  >
                    Why Choose Hardeville
                  </motion.p>

                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-extrabold text-white leading-tight"
                  >
                    “Ready to make a smart move?”
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-green-50/90 text-lg mt-4 leading-relaxed"
                  >
                    Invest in land or new building today and secure your future.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="lg:col-span-5 flex justify-start lg:justify-end"
                >
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white text-green-900 font-extrabold shadow-xl hover:shadow-2xl transition-all relative"
                  >
                    <span className="mr-2">Talk to an Expert</span>
                    <span
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="ml-2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-50 text-green-900 group-hover:bg-green-100 transition-colors">
                      →
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

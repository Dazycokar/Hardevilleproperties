"use client";

import { motion } from "framer-motion";

export default function HomeAboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          About Hardeville Homes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Hardeville is a real estate development partner focused on helping investors
              find the right land and building opportunities with clarity, speed, and trust.
              We operate across West Africa with a strong emphasis on quality delivery.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              From discovery to execution, we support clients with verified information,
              smart project planning, and dedicated follow-through—so every investment
              decision is backed by confidence.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Promise</h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed text-lg">
              <li className="flex gap-3">
                <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  Quality-first development with attention to design, materials, and workmanship.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  Trusted execution—clear processes and responsive communication.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  Investor-focused support that helps you move from interest to action.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


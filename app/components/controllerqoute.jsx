"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ControllerQuote() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
          <div className="absolute top-5 right-5 z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Controller • Mr Bukola Babawale
            </span>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/controller.png"
              alt="Project Controller"
              fill
              className="object-cover object-[50%_25%]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950/90 to-transparent">
            <p className="text-lg font-bold text-white">Project Controller</p>
            <p className="mt-1 text-sm text-slate-300">Operational oversight • Lagos delivery</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-800 text-2xl text-slate-200">
            “
          </span>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
            From our controller • Mr Bukola Babawale
          </p>
        </div>

        <p className="text-lg font-semibold leading-relaxed text-slate-100 sm:text-xl">
          “Mr Bukola Babawale is the Project controller. Hardeville Home Limited. A highly talented, motivated and accomplished construction professional with more than 29 years track record of success. In depth knowledge of modern construction methods and procedures, successful record of delivering large building and civil engineering projects. Excellent project management, construction management and cost management skills has demonstrated the ability to communicate and manage effectively stakeholders, developers, contractors and suppliers to ensure projects run efficiently, within budget and time.”
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="h-px w-14 bg-slate-600" />
          <p className="text-sm text-slate-400">— Mr Bukola Babawale</p>
        </div>
      </motion.div>
    </div>
  );
}


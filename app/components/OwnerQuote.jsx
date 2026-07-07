"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OwnerQuote() {
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
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
              Owner • Mr Adeniyi Ademola
            </span>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/ceo.png"
              alt="Hardeville CEO"
              fill
              className="object-cover object-[50%_20%]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950/90 to-transparent">
            <p className="text-lg font-bold text-white">Hardeville Homes</p>
            <p className="mt-1 text-sm text-slate-300">Real estate development • West Africa</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="rounded-[2rem] border border-green-100/80 bg-white p-8 shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/10 text-2xl text-emerald-400">
            “
          </span>
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-500">From our owner • Mr Adeniyi Ademola</p>
        </div>

        <p className="text-lg font-semibold leading-relaxed text-slate-900 sm:text-xl">
          “Mr. Demola Adeniyi is the President/Chief Executive Officer, Hardeville Home Limited. He is a Graduate of Chemistry from Obafemi Awolowo University, Ile-Ife, and Masters of Business Administration in International Business from North Central University, Arizona, with experience in Banking, Insurance and real estate. Mr. Demola Adeniyi drives the vision of Hardeville Homes to create a world-class real estate development company in Nigeria.”
        </p>


        <div className="mt-6 flex items-center gap-4">
          <div className="h-px w-16 bg-emerald-500/50" />
          <p className="text-sm text-slate-500">— Mr Adeniyi Ademola</p>
        </div>
      </motion.div>
    </div>
  );
}


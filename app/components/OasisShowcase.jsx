"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function OasisShowcase() {
  const slides = useMemo(
    () => [
      // { src: "/oasispalm2.png", alt: "Oasis lifestyle aerial view" },
      { src: "/oasis.png", alt: "Oasis community highlights" },
      { src: "/oasispalm1.png", alt: "Oasis development entrance" },
      { src: "/oasis2.png", alt: "Oasis property detail" },
      {src: "/oasispalm2.png", alt: "Oasis Palm Estate overview"},
    ],
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">
            Oasis estates
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-950">
            About Oasis Palm Estate
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Explore the Oasis collection through a smooth sliding showcase of our
            latest visuals.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-gradient-to-br from-emerald-50 via-white to-sky-50 shadow-[0_25px_80px_rgba(2,132,199,0.10)]"
          aria-label="Oasis sliding image showcase"
        >
          {/* Decorative overlays */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.10),transparent_55%)]" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-stretch p-6 sm:p-8">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[320px] sm:h-[420px] rounded-[2rem] overflow-hidden bg-slate-950/5">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={slides[active].src}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slides[active].src}
                      alt={slides[active].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      priority={active === 0}
                      className="object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Caption */}
                <div className="absolute left-5 bottom-5 z-20">
                  <motion.div
                    key={`caption-${active}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-white/80">
                      Slide {active + 1} of {slides.length}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Oasis Palm Estate
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={
                      idx === active
                        ? "h-2.5 w-8 rounded-full bg-emerald-600 shadow-[0_10px_30px_rgba(16,185,129,0.35)]"
                        : "h-2.5 w-2.5 rounded-full bg-slate-300/80 hover:bg-slate-400 transition"
                    }
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-current={idx === active}
                  />
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between gap-6">
              <div>
                <h3 className="mt-5 text-2xl sm:text-3xl font-black text-slate-950">
                  From landscape to living
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Each slide highlights a different moment of the Oasis experience 
                  clean design, inviting spaces, and investor-ready development.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-5 sm:p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-emerald-50 p-4 border border-emerald-100">
                    <p className="text-xs uppercase tracking-[0.25em] text-emerald-700">
                      Sliding
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-950">Smooth</p>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-4 border border-sky-100">
                    <p className="text-xs uppercase tracking-[0.25em] text-sky-700">
                      Styling
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-950">Exclusive</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-6">
                  Tap the dots to jump between images. The showcase auto-advances for
                  a continuous feel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


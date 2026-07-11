"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { properties } from "../lib/propertyData";

const categoryStyles = {
  Land: {
    badge: "bg-emerald-50 text-emerald-700",
    card: "border-emerald-100/80 hover:shadow-[0_30px_90px_rgba(16,185,129,0.14)]",
    accent: "text-emerald-950",
    highlight: "bg-emerald-100 text-emerald-700",
    button: "bg-emerald-600 hover:bg-emerald-500",
  },
  Building: {
    badge: "bg-sky-50 text-sky-700",
    card: "border-sky-100/80 hover:shadow-[0_30px_90px_rgba(14,165,233,0.14)]",
    accent: "text-sky-950",
    highlight: "bg-sky-100 text-sky-700",
    button: "bg-sky-600 hover:bg-sky-500",
  },
};

const landProperties = properties.filter((property) => property.category === "Land");
const buildingProperties = properties.filter((property) => property.category === "Building");

function PropertyCard({ property }) {
  const styles = categoryStyles[property.category] ?? categoryStyles.Land;
  const images = property.images?.length ? property.images : [property.image];
  const [activeImage, setActiveImage] = useState(0);
  const isLand = property.category === "Land";
  const secondaryLabel = property.isComingSoon
    ? "Pre-launch"
    : isLand
    ? "Land plot"
    : "Home";
  const hasCarousel = images.length > 1 && !property.isComingSoon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: property.isComingSoon ? 1 : 1.02 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
      className="group h-full"
    >
      <div className={`overflow-hidden rounded-[2rem] border bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 ${styles.card}`}>
        <div className="relative h-72 overflow-hidden bg-slate-100">
          <div className={`absolute inset-x-0 top-0 h-2 ${isLand ? "bg-emerald-500" : "bg-sky-500"}`} />
            <AnimatePresence mode="wait">
              <motion.div
                key={`${property.id}-${activeImage}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[activeImage]}
                  alt={`${property.title} image ${activeImage + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition duration-700"
                />
              </motion.div>
            </AnimatePresence>


          {hasCarousel && (
            <div className="absolute inset-x-0 top-4 flex items-center justify-between px-4">
              <button
                type="button"
                onClick={() => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50"
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          )}

          {images.length > 1 && (
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${index === activeImage ? "bg-white" : "bg-white/50 hover:bg-white"}`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="space-y-5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${styles.badge}`}>
                {property.category}
              </span>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles.highlight}`}>
                {secondaryLabel}
              </span>
            </div>
            {property.isComingSoon ? null : (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                Featured
              </span>
            )}
          </div>

          <div>
            <h3 className={`text-2xl font-bold ${styles.accent}`}>{property.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">{property.location}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[2rem] bg-slate-50 p-4 text-sm font-semibold text-slate-700">
              <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">Size</div>
              <div className="mt-2 text-base">{property.area || "—"}</div>
            </div>
            <div className="rounded-[2rem] bg-slate-50 p-4 text-sm font-semibold text-slate-700">
              <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
                {isLand ? "Type" : "Bedrooms"}
              </div>
              <div className="mt-2 text-base">
                {isLand ? "Acreage" : property.beds !== undefined ? `${property.beds} bed` : "—"}
              </div>
            </div>
            <div className="rounded-[2rem] bg-slate-50 p-4 text-sm font-semibold text-slate-700">
              <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
                {isLand ? "Status" : "Bathrooms"}
              </div>
              <div className="mt-2 text-base">
                {isLand ? "Investment-ready" : property.baths !== undefined ? `${property.baths} bath` : "—"}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {property.highlights?.map((highlight, index) => (
              <span key={index} className={`rounded-full border px-3 py-1 text-xs font-medium ${styles.highlight} border-current/15`}>
                {highlight}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200/80">
            <span className="text-lg font-semibold text-slate-900">{property.price}</span>
            {/* "View property" button removed per request. */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Properties() {
  return (
    <section id="properties" className="py-20 bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Properties</p>
          <h2 className="mt-4 text-4xl font-black text-slate-950">Featured land and new homes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore our current listings with clear pricing, verified locations, and simple features.
          </p>
        </div>

        <div className="space-y-16">
          <section className="rounded-[2.5rem] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="mb-8 grid gap-4 md:grid-cols-[1.3fr_1fr] md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Land</p>
                <h3 className="mt-3 text-3xl font-bold text-slate-950">Exclusive plots for investment</h3>
              </div>
              <p className="text-sm leading-7 text-slate-600">
                Discover large-acreage land parcels with strong investment appeal, clear titles, and developer   ready plots.
              </p>
            </div>
            <div className="grid gap-8 xl:grid-cols-3">
              {landProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </section>

          <section className="rounded-[2.5rem] border border-sky-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="mb-8 grid gap-4 md:grid-cols-[1.3fr_1fr] md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-700">Homes</p>
                <h3 className="mt-3 text-3xl font-bold text-slate-950">New homes and modern buildings</h3>
              </div>
              <p className="text-sm leading-7 text-slate-600">
                Browse our newest building listings, from duplexes to semi-detached homes with strong finishes and secure communities.
              </p>
            </div>
            <div className="grid gap-8 xl:grid-cols-3">
              {buildingProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { properties } from "../../lib/propertyData";

function getProjectImages(property) {
  const images = property?.images?.length
    ? property.images
    : property?.image
      ? [property.image]
      : [];

  return images.filter((src) => typeof src === "string" && src.trim().length > 0);
}

/* ---------- Auto-scrolling image carousel ---------- */
function ImageCarousel({ images, alt }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance every 3.5s, pauses on hover
  useEffect(() => {
    if (images.length < 2 || isHovering) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [images.length, isHovering]);

  // Scroll the track whenever the active index changes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[activeIndex];
    if (child) {
      track.scrollTo({ left: child.offsetLeft - 4, behavior: "smooth" });
    }
  }, [activeIndex]);

  const goTo = (idx) => setActiveIndex(idx);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length);

  return (
    <div
      className="group/carousel relative min-w-0"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={trackRef}
        className="scrollbar-hide flex min-w-0 gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
      >
        {images.slice(0, 6).map((src, idx) => (
          <div
            key={src + idx}
            className="relative aspect-[4/3] w-[280px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-sm transition-transform duration-500 ease-out"
          >
            <Image
              src={src}
              alt={`${alt} image ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover/carousel:scale-105"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />

          {/* Arrow controls, appear on hover */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-700 opacity-0 shadow-md backdrop-blur transition-opacity duration-300 group-hover/carousel:opacity-100 hover:bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-700 opacity-0 shadow-md backdrop-blur transition-opacity duration-300 group-hover/carousel:opacity-100 hover:bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="mt-3 flex items-center gap-2">
            {images.slice(0, 6).map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to image ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-6 bg-emerald-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
            <span className="ml-2 text-xs font-semibold text-slate-400">Swipe or wait to browse</span>
          </div>
        </>
      )}
    </div>
  );
}

/* ---------- Static grid for single-image properties ---------- */
function ImageGrid({ images, alt }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.slice(0, 4).map((src, idx) => (
        <div
          key={src + idx}
          className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-sm"
        >
          <Image
            src={src}
            alt={`${alt} image ${idx + 1}`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

/* ---------- Placeholder for "coming soon" listings with no real image yet ---------- */
function ComingSoonCard({ property }) {
  return (
    <div className="flex min-w-0 flex-col items-center justify-center rounded-[2.5rem] border border-dashed border-slate-300 bg-white/60 p-10 text-center">
      <span className="rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Coming soon
      </span>
      <h3 className="mt-4 text-lg font-black text-slate-900">{property.title}</h3>
      <p className="mt-2 text-sm text-slate-500">{property.location}</p>
    </div>
  );
}

function ProjectCard({ property }) {
  if (!property) return null;

  if (property.isComingSoon) {
    return <ComingSoonCard property={property} />;
  }

  const isLand = property.category === "Land";
  const featuredImages = getProjectImages(property);

  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="min-w-0 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)]">
        <h2 className="text-xl font-black text-slate-950">{property.title}</h2>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          {property.location}
        </p>

        <div className="mt-5">
          {featuredImages.length > 1 ? (
            <ImageCarousel images={featuredImages} alt={property.title} />
          ) : (
            <ImageGrid images={featuredImages} alt={property.title} />
          )}
        </div>

        {property.highlights?.length ? (
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Highlights</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {property.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="min-w-0 rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Price</p>
            <p className="mt-2 text-3xl font-black text-slate-950">{property.price}</p>
          </div>

          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            Featured
          </span>
        </div>

        <div className="mt-6 grid gap-3">
          <div className="rounded-[2rem] bg-slate-50 p-4 transition-colors duration-200 hover:bg-slate-100">
            <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">Size</div>
            <div className="mt-2 text-base font-semibold text-slate-900">{property.area || "—"}</div>
          </div>

          <div className="rounded-[2rem] bg-slate-50 p-4 transition-colors duration-200 hover:bg-slate-100">
            <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
              {isLand ? "Acreage" : "Type"}
            </div>
            <div className="mt-2 text-base font-semibold text-slate-900">
              {isLand ? "Investment Plot" : property.beds !== undefined ? `${property.beds} bed` : "—"}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-50 p-4 transition-colors duration-200 hover:bg-slate-100">
            <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">Status</div>
            <div className="mt-2 text-base font-semibold text-slate-900">Investment-ready</div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] bg-slate-950 px-5 py-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Next step</p>
          <p className="mt-3 text-base font-semibold text-white">
            Talk to our team for title &amp; due diligence.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">Secure</span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">Transparent</span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">Fast response</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuildingProjectPage() {
  const buildingProjects = properties.filter((p) => p.category === "Building");

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -right-16 top-28 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Building Projects
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Featured building listings</h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
            Exclusive residential projects for investment &amp; living.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {buildingProjects.length ? (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:[&>*]:min-w-0">
            {buildingProjects.map((property) => (
              <ProjectCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">No building listings available right now.</p>
        )}
      </section>
    </main>
  );
}
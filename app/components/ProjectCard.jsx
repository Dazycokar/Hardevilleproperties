"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function getProjectImages(property) {
  const images = property?.images?.length
    ? property.images
    : property?.image
      ? [property.image]
      : [];

  return images.filter((src) => typeof src === "string" && src.trim().length > 0);
}

/* ---------- Modern image gallery ---------- */
function ImageGallery({ images, alt, accent }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (images.length < 2 || isHovering) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length, isHovering]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[activeIndex];
    if (child) {
      track.scrollTo({ left: child.offsetLeft - 4, behavior: "smooth" });
    }
  }, [activeIndex]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length);

  const accentColor = accent === "sky" ? "bg-sky-600" : "bg-emerald-600";
  const accentRing = accent === "sky" ? "ring-sky-400/40" : "ring-emerald-400/40";

  if (images.length === 0) {
    return (
      <div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-slate-100">
        <span className="text-sm text-slate-400">No images available</span>
      </div>
    );
  }

  return (
    <div
      className="group/gallery relative overflow-hidden rounded-2xl bg-slate-100"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Images track */}
      <div
        ref={trackRef}
        className="hide-scrollbar flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {images.slice(0, 6).map((src, idx) => (
          <div
            key={src + idx}
            className="relative aspect-[16/9] w-full shrink-0 snap-start overflow-hidden"
          >
            <Image
              src={src}
              alt={`${alt} image ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover/gallery:scale-105"
              priority={idx === 0}
            />
            {/* Overlay gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Image counter badge */}
      {images.length > 1 && (
        <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {activeIndex + 1} / {Math.min(images.length, 6)}
        </div>
      )}

      {/* Arrow controls */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-700 opacity-0 shadow-lg backdrop-blur transition-opacity duration-300 group-hover/gallery:opacity-100 hover:bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-700 opacity-0 shadow-lg backdrop-blur transition-opacity duration-300 group-hover/gallery:opacity-100 hover:bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.slice(0, 6).map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to image ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? `w-6 ${accentColor} ring-2 ${accentRing}`
                  : "w-2 bg-white/60 hover:bg-white/90"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Static image grid (fallback for single-image properties) ---------- */
function ImageGrid({ images, alt }) {
  if (images.length === 0) {
    return (
      <div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-slate-100">
        <span className="text-sm text-slate-400">No images available</span>
      </div>
    );
  }

  // Single image: render full-width like the gallery
  if (images.length === 1) {
    return (
      <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
        <Image
          src={images[0]}
          alt={`${alt} image`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {images.slice(0, 4).map((src, idx) => (
        <div
          key={src + idx}
          className="group relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-100 shadow-sm"
        >
          <Image
            src={src}
            alt={`${alt} image ${idx + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

/* ---------- Coming soon placeholder ---------- */
function ComingSoonCard({ property, accent }) {
  const borderAccent = accent === "sky" ? "border-sky-200" : "border-emerald-200";

  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed ${borderAccent} bg-white/50 p-12 text-center backdrop-blur-sm`}>
      <span className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
        accent === "sky" ? "bg-sky-50 text-sky-700" : "bg-emerald-50 text-emerald-700"
      }`}>
        Coming soon
      </span>
      <h3 className="mt-5 text-xl font-bold text-slate-900">{property.title}</h3>
      <p className="mt-2 text-sm text-slate-500">{property.location}</p>
    </div>
  );
}

/* ---------- Main ProjectCard component ---------- */
export default function ProjectCard({ property, accent = "emerald" }) {
  if (!property) return null;

  if (property.isComingSoon) {
    return <ComingSoonCard property={property} accent={accent} />;
  }

  const isLand = property.category === "Land";
  const featuredImages = getProjectImages(property);
  const hasGallery = featuredImages.length > 1;

  const accentColors = {
    emerald: {
      badge: "bg-emerald-50 text-emerald-700",
      dot: "bg-emerald-600",
      ring: "ring-emerald-400/40",
      border: "border-emerald-100",
      label: "text-emerald-700",
      stats: "bg-emerald-50/50",
      cta: "bg-emerald-600 hover:bg-emerald-500",
      light: "bg-emerald-50",
    },
    sky: {
      badge: "bg-sky-50 text-sky-700",
      dot: "bg-sky-600",
      ring: "ring-sky-400/40",
      border: "border-sky-100",
      label: "text-sky-700",
      stats: "bg-sky-50/50",
      cta: "bg-sky-600 hover:bg-sky-500",
      light: "bg-sky-50",
    },
  };

  const c = accentColors[accent] ?? accentColors.emerald;

  return (
    <article className="group/card overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(15,23,42,0.1)]">
      {/* Image section */}
      <div className="relative">
        {hasGallery ? (
          <ImageGallery images={featuredImages} alt={property.title} accent={accent} />
        ) : (
          <ImageGrid images={featuredImages} alt={property.title} />
        )}

        {/* Category badge overlay */}
        <div className="absolute right-4 top-4">
          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] shadow-sm ${c.badge}`}>
            {property.category}
          </span>
        </div>
      </div>

      {/* Details section */}
      <div className="space-y-5 p-6 sm:p-7">
        {/* Title & location */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{property.title}</h2>
          <p className="mt-1.5 text-sm text-slate-500">{property.location}</p>
        </div>

        {/* Stats row */}
        <div className={`grid grid-cols-3 gap-3 rounded-2xl ${c.stats} p-4`}>
          <div className="text-center">
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">Size</div>
            <div className="mt-1 text-sm font-bold text-slate-900">{property.area || "—"}</div>
          </div>
          <div className="text-center">
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              {isLand ? "Type" : "Bedrooms"}
            </div>
            <div className="mt-1 text-sm font-bold text-slate-900">
              {isLand ? "Investment Plot" : property.beds !== undefined ? `${property.beds} bed` : "—"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">Status</div>
            <div className="mt-1 text-sm font-bold text-slate-900">Investment-ready</div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-500">Price</p>
            <p className="mt-0.5 text-2xl font-black text-slate-950">{property.price}</p>
          </div>
          <span className={`rounded-full ${c.light} px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] ${c.label}`}>
            Featured
          </span>
        </div>

        {/* Highlights */}
        {property.highlights?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {property.highlights.map((h, idx) => (
              <span
                key={idx}
                className={`rounded-full border ${c.border} ${c.light} px-3 py-1 text-xs font-medium ${c.label}`}
              >
                {h}
              </span>
            ))}
          </div>
        )}

        {/* CTA strip */}
        <div className={`-mx-6 -mb-6 mt-6 rounded-b-3xl ${c.cta} px-6 py-5 text-white transition-colors sm:-mx-7 sm:-mb-7`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/70">Next step</p>
              <p className="mt-1 text-sm font-semibold">Talk to our team for title & due diligence.</p>
            </div>
            <div className="hidden gap-2 sm:flex">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90">Secure</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90">Transparent</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90">Fast</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}


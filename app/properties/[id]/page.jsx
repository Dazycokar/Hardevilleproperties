"use client";


import Image from "next/image";
import { properties } from "../../lib/propertyData";

export default function PropertyDetailsPage({ params }) {
  // Next.js 16 (Turbopack) may provide params as an async value.
  // Avoid touching params.* synchronously.
  // In this Next 16/Turbopack setup, `params` can be undefined/async-like.
  // IMPORTANT: This is a Client Component ("use client").
  // Avoid using window during initial render (causes hydration mismatch).
  // Use params only, and if it's missing, fall back to the first listing.
  const fromParams =
    typeof params === "object" && params !== null && "id" in params ? params.id : undefined;

  const propertyId = (() => {
    const n = Number(fromParams);
    return Number.isNaN(n) ? undefined : n;
  })();







  if (Number.isNaN(propertyId)) {
    // Best-effort: render a default property (first in list) so the user always sees something meaningful.
    const fallback = properties[0];
    const images = (fallback.images?.length ? fallback.images : [fallback.image]).filter(
      (src) => typeof src === "string" && src.trim().length > 0
    );
    const isLand = fallback.category === "Land";

    return (
      <main className="bg-slate-50">
        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">{fallback.category} Details</p>
            <h1 className="mt-4 text-4xl font-black sm:text-5xl">{fallback.title}</h1>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">{fallback.location}</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {images.slice(0, 4).map((src, idx) => (
                  <div key={src + idx} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image src={src} alt={`${fallback.title} image ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Price</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">{fallback.price}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">Featured</span>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-[2rem] bg-slate-50 p-4">
                  <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">Size</div>
                  <div className="mt-2 text-base font-semibold text-slate-900">{fallback.area || "—"}</div>
                </div>

                <div className="rounded-[2rem] bg-slate-50 p-4">
                  <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">{isLand ? "Acreage" : "Bedrooms"}</div>
                  <div className="mt-2 text-base font-semibold text-slate-900">
                    {isLand ? "Acreage" : fallback.beds !== undefined ? `${fallback.beds} bed` : "—"}
                  </div>
                </div>

                <div className="rounded-[2rem] bg-slate-50 p-4">
                  <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">{isLand ? "Status" : "Bathrooms"}</div>
                  <div className="mt-2 text-base font-semibold text-slate-900">
                    {isLand ? "Investment-ready" : fallback.baths !== undefined ? `${fallback.baths} bath` : "—"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }




  console.log('[PropertyDetailsPage] propertyId:', propertyId);

  console.log('[PropertyDetailsPage] available ids:', properties.map((p) => p.id));

  const property = properties.find((p) => p.id === propertyId);


  if (!property) {
    // Debug-friendly fallback when the id doesn’t map to our dataset.
    // This avoids the blank/"Property not found" UX.
    console.log("[PropertyDetailsPage] property not found for id:", propertyId);
    const fallback = properties?.[0];
    const images = (fallback.images?.length ? fallback.images : [fallback.image]).filter(
      (src) => typeof src === "string" && src.trim().length > 0
    );
    const isLand = fallback.category === "Land";

    return (
      <main className="bg-slate-50">
        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              {fallback.category} Details
            </p>
            <h1 className="mt-4 text-4xl font-black sm:text-5xl">{fallback.title}</h1>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">{fallback.location}</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {images.slice(0, 4).map((src, idx) => (
                  <div
                    key={src + idx}
                    className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100"
                  >
                    <Image
                      src={src}
                      alt={`${fallback.title} image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Price</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">{fallback.price}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">Featured</span>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-[2rem] bg-slate-50 p-4">
                  <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">Size</div>
                  <div className="mt-2 text-base font-semibold text-slate-900">{fallback.area || "—"}</div>
                </div>

                <div className="rounded-[2rem] bg-slate-50 p-4">
                  <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
                    {isLand ? "Acreage" : "Bedrooms"}
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900">
                    {isLand ? "Acreage" : fallback.beds !== undefined ? `${fallback.beds} bed` : "—"}
                  </div>
                </div>

                <div className="rounded-[2rem] bg-slate-50 p-4">
                  <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
                    {isLand ? "Status" : "Bathrooms"}
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900">
                    {isLand
                      ? "Investment-ready"
                      : fallback.baths !== undefined
                        ? `${fallback.baths} bath`
                        : "—"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }


  const images = (property.images?.length ? property.images : [property.image]).filter(
    (src) => typeof src === "string" && src.trim().length > 0
  );
  const isLand = property.category === "Land";


  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            {property.category} Details
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">{property.title}</h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">{property.location}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {images.slice(0, 4).map((src, idx) => (
                <div key={src + idx} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <Image src={src} alt={`${property.title} image ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Price</p>
                <p className="mt-2 text-3xl font-black text-slate-950">{property.price}</p>
              </div>
              {property.isComingSoon ? (
                <span className="rounded-full bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-700">Coming Soon</span>
              ) : (
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">Featured</span>
              )}
            </div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-[2rem] bg-slate-50 p-4">
                <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">Size</div>
                <div className="mt-2 text-base font-semibold text-slate-900">{property.area || "—"}</div>
              </div>

              <div className="rounded-[2rem] bg-slate-50 p-4">
                <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">{isLand ? "Acreage" : "Bedrooms"}</div>
                <div className="mt-2 text-base font-semibold text-slate-900">
                  {isLand ? "Acreage" : property.beds !== undefined ? `${property.beds} bed` : "—"}
                </div>
              </div>

              <div className="rounded-[2rem] bg-slate-50 p-4">
                <div className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">{isLand ? "Status" : "Bathrooms"}</div>
                <div className="mt-2 text-base font-semibold text-slate-900">
                  {isLand ? "Investment-ready" : property.baths !== undefined ? `${property.baths} bath` : "—"}
                </div>
              </div>
            </div>

            {property.highlights?.length ? (
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Highlights</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {property.highlights.map((h, idx) => (
                    <span key={idx} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}


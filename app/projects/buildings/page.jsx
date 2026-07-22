import { properties } from "../../lib/propertyData";
import SharedProjectCard from "../../components/ProjectCard";

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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {buildingProjects.map((property) => (
              <SharedProjectCard key={property.id} property={property} accent="sky" />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">No building listings available right now.</p>
        )}
      </section>
    </main>
  );
}

import { properties } from "../../lib/propertyData";
import ProjectsHero from "../../components/projectsHero.jsx";
import SharedProjectCard from "../../components/ProjectCard";

function getLandPropertyByIdOrImage(categoryList, id, image) {
  return (
    categoryList.find((p) => p.id === id) ??
    (image ? categoryList.find((p) => p.image === image) : undefined) ??
    categoryList[0]
  );
}

export default function LandsProjectPage() {
  const landProperties = properties.filter((p) => p.category === "Land");

  const landPrime = getLandPropertyByIdOrImage(landProperties, 1, undefined);
  const oasisPalm = getLandPropertyByIdOrImage(landProperties, 9, "/oasispalm.png");

  return (
    <main className="bg-slate-50">
      <ProjectsHero
        eyebrow="Land Projects"
        title="Featured land & Oasis Palm"
        subtitle="Exclusive plots for investment"
        variant="land"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SharedProjectCard property={landPrime} accent="emerald" />
          <SharedProjectCard property={oasisPalm} accent="emerald" />
        </div>
      </section>
    </main>
  );
}

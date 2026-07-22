import OwnerQuote from "../components/OwnerQuote";
import ControllerQuote from "../components/controllerqoute";

export default function TeamsPage() {
  return (
    <section id="quotes" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <OwnerQuote />
          </div>
          <div>
            <ControllerQuote />
          </div>
        </div>
      </div>
    </section>
  );
}


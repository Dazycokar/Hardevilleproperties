import Hero from "./components/Hero";
import Properties from "./components/Properties";
import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import HomeAboutUs from "./components/HomeAboutUs";
import OasisShowcase from "./components/OasisShowcase";

import OwnerQuote from "./components/OwnerQuote";
import ControllerQuote from "./components/controllerqoute";
import ManagingPartner from "./components/ManagingPartner";

export default function Home() {
  return (
    <div>
      <Hero />
      <OasisShowcase />
      <Properties />
      <Services />

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

      <HomeAboutUs />
      <ManagingPartner />
      <ContactSection />
    </div>
  );
}


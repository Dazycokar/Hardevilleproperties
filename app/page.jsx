import Hero from "./components/Hero";

import Services from "./components/Services";

import OasisShowcase from "./components/OasisShowcase";

import SmartMoveCTA from "./components/SmartMoveCTA";
import WhyChooseHardeville from "./components/WhyChooseHardeville";

export default function Home() {
  return (
    <div>
      <Hero />
      <OasisShowcase />
      {/* <Properties /> */}
      <Services />

      {/* <section id="quotes" className="py-20 bg-slate-50">
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
      </section> */}

      <SmartMoveCTA />
      <WhyChooseHardeville />

      {/* <HomeAboutUs /> */}
      {/* <ManagingPartner /> */}
    </div>
  );
}

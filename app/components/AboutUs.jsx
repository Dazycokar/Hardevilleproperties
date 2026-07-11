"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Who we are. Hardeville Homes Limited is a real estate development company
              registered in both the USA and under Nigerian law (RC 134057). Hardeville Homes
              Limited specializes in developing luxury housing solutions, focused on West Africa,
              Nigeria, and Ghana.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We deliver premium property development with a strong commitment to quality,
              smart design, and trusted execution across the region.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">From the Managing Partner</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              We are a committed corporate citizen. As a limited liability company with strategic
              business units that engage in a number of diverse business activities in the
              construction industry, we are committed to the future and credibility of the real
              estate sector in Nigeria.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              The above words express the company’s mission and convey the values we share; they
              emphasize our respect for people and processes, value creation and contributions to
              the real estate community. Since the establishment of the company, these values have
              inspired us to fulfil our corporate responsibilities in all we do, to help create
              higher quality and value for all our clients, and to ensure that progress is made
              within the industry and the nation as a whole. We endeavour to serve the need of our
              clients, employees and all stakeholders by implementing forward-looking corporate
              strategies while carrying out our responsible and responsive business activities.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              By continually developing innovative ideas centring on the fields of Construction
              Services, Sustainable Development, Project Monitoring and Evaluation, we strive to
              create products and services that enhance the addition of value to construction and
              other projects which lead to a thriving, healthy economy. We constantly seek new
              approaches that help realize the goals of the key drivers of the Nigerian economy,
              including ways to improve the environment.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              We face many challenges today, but our commitment remains unchanged, and we continue
              to take determined steps into the future.
            </p>

            <p className="mt-6 font-semibold text-gray-900">Thank you...</p>
            <p className="mt-1 text-gray-600">Demola Adeniyi</p>
          </div>
        </div>

      </div>
    </section>
  );
}


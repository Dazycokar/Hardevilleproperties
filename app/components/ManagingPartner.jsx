"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ManagingPartner() {
  return (
    <section id="managing-partner" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-emerald-200 bg-white shadow">
                <Image
                  src="/ceo.png"
                  alt="Demola Adeniyi"
                  fill
                  className="object-cover"
                  sizes="80px"
                  priority
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                  Founder
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">Demola Adeniyi</h2>
                <p className="mt-1 text-sm text-slate-600">Founder</p>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-base leading-7 text-slate-700">
                We are a committed corporate citizen. As a limited liability company with strategic
                business units that engage in a number of diverse business activities in the
                construction industry, we are committed to the future and credibility of the real estate
                sector in Nigeria.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                The above words express the company’s mission and convey the values we share; they
                emphasize our respect for people and processes, value creation and contributions to
                the real estate community. Since the establishment of the company, these values have
                inspired us to fulfil our corporate responsibilities in all we do, to help create higher
                quality and value for all our clients, and to ensure that progress is made within the
                industry and the nation as a whole. We endeavour to serve the need of our clients,
                employees and all stakeholders by implementing forward-looking corporate strategies
                while carrying out our responsible and responsive business activities.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                By continually developing innovative ideas centring on the fields of Construction
                Services, Sustainable Development, Project Monitoring and Evaluation, we strive to
                create products and services that enhance the addition of value to construction and
                other projects which lead to a thriving, healthy economy. We constantly seek new
                approaches that help realize the goals of the key drivers of the Nigerian economy,
                including ways to improve the environment.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                We face many challenges today, but our commitment remains unchanged, and we continue
                to take determined steps into the future.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-600">
                Corporate mission
              </p>
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Credibility through people, process, and progress.
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Respect for people and processes.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Value creation for clients and stakeholders.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Forward-looking real estate development.
              </li>
            </ul>

            <div className="mt-8 rounded-[1.5rem] bg-slate-950 p-6 text-white">
              {/* <p className="text-sm font-semibold text-emerald-300">Signature</p> */}
              <p className="mt-3 text-lg font-bold">Demola Adeniyi</p>
              <p className="mt-1 text-sm text-slate-300">Founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
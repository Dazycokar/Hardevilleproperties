"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: "https://api.iconify.design/mdi:shield-check.svg?color=%2316a34a",
      title: "100% Verified & Genuine",
      description: "Verified listings, transparent documentation, no guesswork.",
    },
    {
      icon: "https://api.iconify.design/mdi:map-marker-radius.svg?color=%2316a34a",
      title: "Best Location for You",
      description: "Prime areas across Lagos to match your plan.",
    },
    {
      icon: "https://api.iconify.design/mdi:cash-multiple.svg?color=%2316a34a",
      title: "Affordable Payment Plans",
      description: "Flexible options that fit your budget.",
    },
    {
      icon: "https://api.iconify.design/mdi:lock-check.svg?color=%2316a34a",
      title: "Safe & Transparent Deals",
      description: "Secure transactions with clear communication.",
    },
  ];

  return (
    <div id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Hardeville?
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Premier land acquisition, real estate financing, logistics & operational management for new building projects in Lagos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


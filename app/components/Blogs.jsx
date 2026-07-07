"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "How to Choose Verified Land",
    date: "Updated weekly",
    excerpt:
      "A practical checklist for evaluating land, documentation, and location fit.",
    fullText:
      "This article walks through the full verification process: site inspections, title reviews, neighbor checks, and development potential so you can buy with confidence.",
  },
  {
    title: "Financing a Property Purchase",
    date: "Guides",
    excerpt:
      "Understand the steps and how to plan confidently for your next move.",
    fullText:
      "Learn about loan options, payment structures, budget planning, and the documents you need to make every financing decision clearly and safely.",
  },
  {
    title: "Modern Building: What to Expect",
    date: "Insights",
    excerpt:
      "Key stages in construction and how to track progress from start to finish.",
    fullText:
      "Explore the full construction lifecycle, from planning and permitting to quality control, finishing touches, and handover best practices.",
  },
];

export default function Blogs() {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          Blogs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl overflow-hidden bg-gray-50 border border-green-100 shadow-sm"
            >
              <div className="p-8">
                <p className="text-sm font-semibold text-green-700 mb-3">{p.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-700 leading-relaxed">{p.excerpt}</p>
                {expanded[p.title] && (
                  <p className="mt-4 text-gray-700 leading-relaxed">{p.fullText}</p>
                )}
              </div>
              <div className="px-8 pb-8">
                <button
                  type="button"
                  onClick={() => toggleExpanded(p.title)}
                  className="inline-flex items-center gap-2 text-green-800 font-semibold hover:text-green-900 transition"
                  aria-expanded={expanded[p.title] ? "true" : "false"}
                >
                  {expanded[p.title] ? "Show less" : "Read more"}
                  <span aria-hidden>→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


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
      "This guide walks you through verifying a land purchase: site checks, title review, neighbor/usage review, and assessing development potential so you can buy with confidence.",
    related: ["properties", "land"],
  },
  {
    title: "Financing a Property Purchase",
    date: "Guides",
    excerpt:
      "Understand the steps and how to plan confidently for your next move.",
    fullText:
      "Learn how financing works for property purchases: common options, payment structures, budgeting for documentation/processing, and the checklist of documents that keep decisions clear and safe.",
    related: ["properties", "building"],
  },
  {
    title: "Oasis Latest Update: Oasis Palm Estate Investor Notes",
    date: "Latest",
    excerpt:
      "A property-focused summary of what to check in Oasis Palm Estate before buying.",
    fullText:
      "Oasis Palm Estate is a strong option for investors because of future-development potential. In this latest update, review title/land documentation, understand expected development momentum, and compare plots inside the estate for better liquidity.",
    // Latest oasis “gist” placeholder. If you later provide real gist text, we can swap it in.
    gist: {
      label: "Latest Oasis gist",
      text:
        "Quick investor checklist: (1) confirm land/title documentation, (2) ask for confirmed development timelines, (3) check utility/access status, (4) compare plot location within the estate for future demand.",
    },
    related: ["properties", "oasis"],
  },
  {
    title: "Modern Building: What to Expect",
    date: "Insights",
    excerpt:
      "Key stages in construction and how to track progress from start to finish.",
    fullText:
      "A step-by-step walkthrough of the construction lifecycle: planning and permitting, milestone tracking, quality checks, finishing and handover best practices—so you know what to expect at each stage.",
    related: ["properties", "building"],
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
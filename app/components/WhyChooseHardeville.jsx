"use client";

import { motion } from "framer-motion";

export default function WhyChooseHardeville() {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-l-8 border-green-600 bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Hardeville?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Hardeville, we believe in making property investment simple, transparent, and rewarding. 
            With years of expertise in the Lagos real estate market, we connect you with prime opportunities 
            while ensuring every transaction is secure and straightforward. Your investment deserves the best guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-lg">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Verified Listings</h3>
                <p className="text-gray-600 text-sm">Every property is vetted and authentic</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-lg">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600 text-sm">Professional support every step of the way</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-lg">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Transactions</h3>
                <p className="text-gray-600 text-sm">Safe and transparent processes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

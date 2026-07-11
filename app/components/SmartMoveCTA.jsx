"use client";

import { motion } from "framer-motion";

export default function SmartMoveCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-700 via-green-600 to-emerald-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Make a Smart Move?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-green-50 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Invest in land or a new building today and secure your future. 
            Join thousands of satisfied investors who trusted Hardeville with their property dreams.
          </motion.p>

          <motion.a
            href="/contact"

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Talk to an Expert
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center gap-8 text-white flex-wrap"
          >
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-green-100">Happy Investors</div>
            </div>
            <div>
              <div className="text-3xl font-bold">₦2B+</div>
              <div className="text-green-100">Investment Facilitated</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-green-100">Verified Properties</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

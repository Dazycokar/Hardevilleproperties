"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-4xl mx-auto my-20"
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Search Properties</h3>
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Enter location or property type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl">
            Search
          </button>
        </div>
      </div>
    </motion.div>
  );
}

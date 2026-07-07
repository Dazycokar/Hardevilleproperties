"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { properties } from '../lib/propertyData';

const propertyTypeOptions = [
  'All Types',
  ...Array.from(new Set(properties.map((property) => property.category))),
];
const locationOptions = [
  'All Locations',
  ...Array.from(new Set(properties.map((property) => property.location))),
];
const priceOptions = [
  'All Prices',
  ...Array.from(
    new Set(properties.filter((property) => !property.isComingSoon).map((property) => property.price))
  ),
];

export default function HeroSearch() {
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="rounded-4xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl w-full max-w-5xl mx-auto"
    >
      <div className="grid gap-4 md:grid-cols-4">
        <div>
          <label className="block text-sm font-semibold text-slate-200 mb-2">Property Type</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full rounded-3xl border border-slate-700/50 bg-slate-900/80 px-4 py-3 text-sm text-white shadow-sm transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
          >
            {propertyTypeOptions.map((option) => (
              <option key={option} value={option === 'All Types' ? '' : option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-200 mb-2">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-3xl border border-slate-700/50 bg-slate-900/80 px-4 py-3 text-sm text-white shadow-sm transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
          >
            {locationOptions.map((loc) => (
              <option key={loc} value={loc === 'All Locations' ? '' : loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-200 mb-2">Price</label>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-3xl border border-slate-700/50 bg-slate-900/80 px-4 py-3 text-sm text-white shadow-sm transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
          >
            {priceOptions.map((amt) => (
              <option key={amt} value={amt === 'All Prices' ? '' : amt}>
                {amt}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex h-14 items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:from-emerald-600 hover:to-green-700"
        >
          Search
        </button>
      </div>

      <p className="mt-4 text-sm text-slate-200">
        Browse featured properties by type, location, or budget and discover the best offers.
      </p>
    </motion.form>
  );
}

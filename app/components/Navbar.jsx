"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    // { href: '/contact', label: 'Contact' },
    { href: '/blogs', label: 'Blogs' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/titlelogo.png"
            alt="Hardeville logo"
            width={56}
            height={56}
            className="rounded-2xl bg-white/90 p-2 shadow-sm transition-transform duration-200 hover:scale-105"
            priority
          />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-700">Hardeville</p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Invest. Build. Grow.</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${isActive ? 'text-emerald-700' : 'hover:text-emerald-700'}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-emerald-600 px-5 py-2 text-white shadow-lg transition hover:bg-emerald-700"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center rounded-2xl border border-slate-200 px-3 py-2 text-slate-700 transition hover:bg-slate-100 z-[60]"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open menu</span>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 px-4 pb-4 pt-2 shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-2 block rounded-2xl bg-emerald-600 px-4 py-3 text-white transition hover:bg-emerald-700">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}

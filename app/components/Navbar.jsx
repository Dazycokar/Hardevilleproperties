   "use client";
import { useRef, useState } from 'react';


import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsRef = useRef(null);

  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'Home' },

    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/teams', label: 'Teams' },
  ];


  const projects = [
    { href: '/projects/lands', label: 'Lands project' },
    { href: '/projects/buildings', label: 'Building project' },
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

          <div className="relative">
            <button
              type="button"
              onClick={() => setProjectsOpen((v) => !v)}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition ${pathname.startsWith('/projects') || projectsOpen ? 'text-emerald-700' : 'text-slate-700 hover:text-emerald-700'}`}
            >
              Projects
              <span className="text-xs">▾</span>
            </button>

              <div
              		className={`absolute left-0 top-full z-50 mt-3 w-56 origin-top rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-all duration-150 ${

                projectsOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              {projects.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => {
                    setProjectsOpen(false);
                  }}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>








          <Link
            href="/contact"
            className="rounded-full bg-emerald-600 px-5 py-2 text-white shadow-lg transition hover:bg-emerald-700"
          >
            Contact Us
          </Link>
        </div>


        <button
          type="button"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setProjectsOpen(false);
          }}
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

          <div className="mt-2">
            <button
              type="button"
              onClick={() => setProjectsOpen((v) => !v)}
              className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-500"
            >
              <span>Projects</span>
              <span aria-hidden="true">{projectsOpen ? '−' : '+'}</span>
            </button>

            {projectsOpen && (
              <div className="mt-1">
                {projects.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100"
                    onClick={() => {
                      setProjectsOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="mt-2 block rounded-2xl bg-emerald-600 px-4 py-3 text-white transition hover:bg-emerald-700"
          >
            Contact Us
          </Link>
        </div>

      )}
    </nav>
  );
}
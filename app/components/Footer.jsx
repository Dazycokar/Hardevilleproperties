"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Hardeville</h3>
            <p className="text-sm leading-7 text-slate-400">
              A modern real estate partner for land and new building investments across Lagos.
            </p>
          </div>

          <div className="text-sm text-slate-300">
            <p className="font-semibold uppercase tracking-[0.24em] text-slate-500">Links</p>
            <div className="mt-4 space-y-2">
              <Link href="/properties" className="block transition hover:text-white">
                Properties
              </Link>
              <Link href="/services" className="block transition hover:text-white">
                Services
              </Link>
              <Link href="/contact" className="block transition hover:text-white">
                Contact
              </Link>
              <Link href="/about" className="block transition hover:text-white">
                About Us
              </Link>
              <Link href="/blogs" className="block transition hover:text-white">
                Blogs
              </Link>
            </div>
          </div>

          <div className="text-sm text-slate-300">
            <p className="font-semibold uppercase tracking-[0.24em] text-slate-500">Contact</p>
            <div className="mt-4 space-y-3">
              <a href="tel:+2348060273597" className="flex items-center gap-2 transition hover:text-white">
                <Icon icon="mdi:phone" width="18" height="18" className="text-emerald-400" />
                +234 806 027 3597
              </a>
              <a href="mailto:demola.adeniyi@gmail.com" className="flex items-center gap-2 transition hover:text-white">
                <Icon icon="mdi:email" width="18" height="18" className="text-emerald-400" />
                demola.adeniyi@gmail.com
              </a>
              <a
                href="https://www.google.com/maps/search/Lagos,+Nigeria"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Icon icon="mdi:map-marker" width="18" height="18" className="text-emerald-400" />
                Legacy House, 5, Alhhaji Alli Lane. Ogba Lagos, Nigeria
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Hardeville. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link
              href="https://www.facebook.com/share/1EMW6sRdcS"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition hover:text-white"
            >
              <Icon icon="mdi:facebook" width="22" height="22" />
            </Link>
            <Link
              href="https://wa.me/2347086058060"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-white"
            >
              <Icon icon="mdi:whatsapp" width="22" height="22" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


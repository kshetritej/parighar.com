"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Nav({ onBook }: { onBook: () => void }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#rooms", label: "Rooms" },
    { href: "#reviews", label: "Reviews" },
    { href: "#location", label: "Location" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 motion-reduce:transition-none transition-[background,padding,backdrop-filter] duration-400 ${
        solid ? "bg-green-dark/97 backdrop-blur-md shadow-lg py-3" : ""
      }`}
    >
      <a href="#hero" className="no-underline">
        <div className="bg-white rounded-md px-3 py-1.5">
          <img src="/logo.jpg" alt="Pari Ghar" width={120} height={48} className="h-12 w-auto" fetchPriority="high" />
        </div>
      </a>

      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-white/90 no-underline text-sm tracking-[0.14em] uppercase font-normal transition-colors duration-200 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={onBook}
            className="bg-green text-white no-underline text-sm tracking-[0.14em] uppercase px-5 py-2.5 rounded-sm border border-white/20 cursor-pointer font-sans hover:bg-green-mid transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            Book Now
          </button>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden text-white/90 cursor-pointer" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </SheetTrigger>
        <SheetContent className="bg-green-dark text-white border-green-dark">
          <div className="flex flex-col gap-6 mt-8 px-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/90 no-underline text-sm tracking-[0.14em] uppercase focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={onBook}
              className="bg-green text-white text-sm tracking-[0.14em] uppercase px-5 py-3 rounded-sm border border-white/20 cursor-pointer font-sans mt-4 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              Book Now
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

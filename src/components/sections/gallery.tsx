"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import Reveal from "./reveal";

const TOTAL = 78;
const PREVIEW = 9;
const REMAINING = TOTAL - (PREVIEW - 1);

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const thumbRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setIdx((i) => (i - 1 + TOTAL) % TOTAL), []);
  const next = useCallback(() => setIdx((i) => (i + 1) % TOTAL), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, prev, next]);

  useEffect(() => {
    if (!open || !thumbRef.current) return;
    const el = thumbRef.current.children[idx] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [idx, open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <section id="gallery" className="bg-charcoal py-24 px-8" aria-label="Photo gallery">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.22em] uppercase text-gold mb-4 font-medium text-center">Gallery</p>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-white text-pretty mb-12 text-center scroll-mt-24">
            Our Property in Photos
          </h2>
        </Reveal>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-3">
          {Array.from({ length: PREVIEW }, (_, i) => i + 1).map((i) =>
            i === PREVIEW ? (
              <button
                key="view-all"
                onClick={() => { setIdx(0); setOpen(true); }}
                className="relative w-full min-h-[200px] rounded-sm overflow-hidden border-2 border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-gold hover:bg-white/10 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                aria-label={`View ${REMAINING} more photos`}
              >
                <ImageIcon className="w-8 h-8 text-white/50" aria-hidden="true" />
                <span className="text-white/70 text-sm tracking-[0.08em] uppercase font-medium">{REMAINING}+ More Photos</span>
              </button>
            ) : (
              <button
                key={i}
                onClick={() => { setIdx(i - 1); setOpen(true); }}
                className="block w-full text-left p-0 border-0 bg-transparent cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm overflow-hidden"
                aria-label={`Open photo ${i}`}
              >
                <img
                  src={`/images/booking-${i}.jpg`}
                  alt={`Pari Ghar Guest House photo ${i}`}
                  width={1024} height={768}
                  className="w-full object-cover rounded-sm block transition-transform duration-300 motion-reduce:transition-none hover:scale-[1.02]"
                  loading="lazy"
                />
              </button>
            )
          )}
        </div>

        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery"
          >
            {/* backdrop */}
            <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />

            {/* lightbox panel */}
            <div className="relative w-full max-h-[95vh] md:w-[75vw] md:h-[75vh] mx-2 flex flex-col overflow-hidden rounded-xl">
              {/* blurred bg */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
                style={{ backgroundImage: `url(/images/booking-${idx + 1}.jpg)` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

              {/* main image area */}
              <div className="relative flex-1 flex items-center justify-center min-h-0 z-10">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 z-20 text-white/80 hover:text-white p-1.5 rounded-full bg-black/50 hover:bg-black/70 transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                  aria-label="Close gallery"
                >
                  <X className="w-5 h-5" />
                </button>

                <button
                  onClick={prev}
                  className="absolute left-2 z-20 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>

                <img
                  src={`/images/booking-${idx + 1}.jpg`}
                  alt={`Photo ${idx + 1}`}
                  className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-sm"
                />

                <button
                  onClick={next}
                  className="absolute right-2 z-20 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/80 text-xs tracking-[0.08em] bg-black/60 px-3 py-1 rounded-full whitespace-nowrap z-20">
                  {idx + 1} / {TOTAL}
                </div>
              </div>

              {/* thumbnail strip */}
              <div
                ref={thumbRef}
                className="relative flex gap-2 overflow-x-auto px-3 py-3 shrink-0 bg-black/80 z-10"
                style={{ overscrollBehavior: "contain" }}
              >
                {Array.from({ length: TOTAL }, (_, i) => i).map((i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`shrink-0 p-0 border-2 rounded-sm overflow-hidden cursor-pointer transition-all duration-150 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none ${
                      i === idx ? "border-gold opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                    aria-label={`Go to photo ${i + 1}`}
                  >
                    <img
                      src={`/images/booking-${i + 1}.jpg`}
                      alt=""
                      width={80} height={60}
                      className="block w-[70px] h-[52px] object-cover md:w-[80px] md:h-[60px]"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

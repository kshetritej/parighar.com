"use client";

import { Star } from "lucide-react";
import Reveal from "./reveal";

const reviews = [
  {
    text: "This guest house has clean room, budget price, beautiful view and the most of all, it has friendly family. Also, I have nice hiking tour around the neighboring village.",
    by: "Sahayog \u00b7 Nepal",
  },
  {
    text: "I had an amazing experience at Pari Ghar Guest House! The staff was exceptionally warm, attentive, and made sure every detail was perfect. The food in nearby Home Stay was delicious and mostly home grown. Peaceful ambiance",
    by: "Santita \u00b7 Nepal",
  },
  {
    text: "An exceptional Mountain Guest House \u2014 we had a very relaxed, comfortable stay. The view is absolutely beautiful and all the facilities and amenities were stellar. The staff were all super friendly and kind as well.",
    by: "Ramro \u00b7 Nepal",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-8 bg-charcoal" aria-label="Guest reviews">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
          <Reveal>
            <p className="text-xs tracking-[0.22em] uppercase text-gold mb-4 font-medium">
              Guest reviews
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-white text-pretty scroll-mt-24">
              What Guests
              <br />
              Are Saying
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="text-right">
              <p className="font-serif text-[4.5rem] font-light text-gold leading-none">
                10
              </p>
              <p className="text-xs text-white/60 tracking-[0.1em] uppercase">
                out of&nbsp;10 &middot; Booking.com
              </p>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i + 1}>
              <blockquote className="bg-white/4 border border-white/8 p-8 rounded-sm">
                <p className="font-serif text-[3.5rem] text-terra leading-[0.6] mb-4" aria-hidden="true">
                  &ldquo;
                </p>
                <div className="flex gap-1 text-gold mb-3" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-base text-white/80 leading-[1.85] italic font-light mb-5">
                  {r.text}
                </p>
                <footer>
                  <cite className="text-xs text-gold tracking-[0.1em] uppercase not-italic">
                    &mdash; Verified Guest &middot; {r.by}
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function Hero({ onBook }: { onBook: () => void }) {
  const price = new Intl.NumberFormat("en-US", { style: "currency", currency: "NPR", maximumFractionDigits: 0 }).format(2659);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 pt-32 pb-20 overflow-hidden"
      aria-label="Hero"
    >
      <Image
        src="/images/booking-1.jpg"
        alt=""
        fill
        quality={100}
        priority
        sizes="100vw"
        className="object-cover -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,30,15,0.6) 0%, rgba(8,30,15,0.25) 45%, rgba(8,30,15,0.75) 100%)",
        }}
      />
      <p className="text-gold text-xs tracking-[0.25em] uppercase mb-6 font-medium">
        Gilung · Lamjung · Nepal
      </p>
      <h1 className="font-serif text-[clamp(3.2rem,8vw,6.5rem)] text-white leading-[1.05] text-pretty mb-6">
        Escape to Gilung.<br />
        Slow Down. <em className="italic text-white font-serif">Breathe.</em>
        <br />
        Belong.
      </h1>
      <p className="text-lg text-white/90 max-w-[560px] leading-[1.8] font-light mb-10">
        A cozy mountain guest house where Himalayan views, home-grown food, and
        real Nepali village life are waiting for you.
      </p>
      <div className="flex gap-4 flex-wrap justify-center mb-10">
        <button
          onClick={onBook}
          className="bg-green text-white px-9 py-[0.95rem] no-underline text-sm tracking-[0.14em] uppercase rounded-sm font-sans border border-white/15 cursor-pointer hover:bg-green-mid hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none transition-[transform,colors] duration-200"
        >
          Book Your Stay
        </button>
        <a
          href="#experience"
          className="border border-white/45 text-white px-9 py-[0.95rem] no-underline text-sm tracking-[0.14em] uppercase rounded-sm font-sans hover:border-gold hover:text-gold hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none transition-[transform,colors] duration-200"
        >
          Explore the Experience
        </a>
      </div>
      <div className="flex gap-3 flex-wrap justify-center items-center">
        <span className="text-white/80 text-xs tracking-[0.06em]">
          From {price.replace("NPR", "NPR").trim()} / night
        </span>
        <Star className="text-gold w-3 h-3" aria-hidden="true" />
        <span className={`text-white/80 text-xs tracking-[0.06em]`}>
          Rated 10&nbsp;/&nbsp;10 on Booking.com
        </span>
      </div>
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-[22px] h-[38px] border border-white/25 rounded-[11px] flex justify-center pt-1 motion-reduce:hidden`} aria-hidden="true">
        <div className={`w-[3px] h-[7px] bg-white/50 rounded-full motion-safe:animate-[bob_1.6s_infinite]`} />
      </div>
    </section>
  );
}

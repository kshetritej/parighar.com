"use client";

import Reveal from "./reveal";

const features = [
  "Private bathroom",
  "Personal terrace / balcony",
  "Mountain or garden view",
  "Free WiFi",
  "Sofa &amp; wardrobe",
  "Shared kitchen access",
  "Room service",
  "Free toiletries &amp; slippers",
  "Vegetarian breakfast",
];

const checkin = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).format(new Date(2025, 0, 1, 14, 0));
const checkout = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).format(new Date(2025, 0, 1, 12, 0));

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 px-8 bg-cream" aria-label="Rooms and accommodation">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <Reveal>
            <p className="text-xs tracking-[0.22em] uppercase text-terra mb-4 font-medium">
              Your stay
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-green-dark text-pretty scroll-mt-24">
              Comfortable.
              <br />
              Clean. Honest.
            </h2>
            <div className="w-[38px] h-[1px] bg-gold my-5" />
            <p className="text-base text-green-dark/80 leading-[1.9] font-light">
              Our rooms aren&rsquo;t flashy — they&rsquo;re exactly what they
              need to be. Clean beds, private bathrooms, mountain or garden
              views from your terrace, and everything to make you feel at home,
              not in a hotel.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2.5 text-sm text-green-dark/80 font-light"
                >
                  <div className="w-4 h-4 rounded-full bg-green flex items-center justify-center shrink-0">
                    <svg width="6" height="4" viewBox="0 0 6 4" fill="none" aria-hidden="true">
                      <path
                        d="M1 2l1.5 1.5L5 1"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span dangerouslySetInnerHTML={{ __html: f }} />
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <div className="border border-cream-dark px-5 py-3 rounded-sm">
                <p className="text-xs tracking-[0.12em] uppercase text-terra mb-1">
                  Check-in
                </p>
                <p className="font-serif text-[1.2rem] text-green-dark font-bold tabular-nums">
                  {checkin}
                </p>
              </div>
              <div className="border border-cream-dark px-5 py-3 rounded-sm">
                <p className="text-xs tracking-[0.12em] uppercase text-terra mb-1">
                  Check-out
                </p>
                <p className="font-serif text-[1.2rem] text-green-dark font-bold tabular-nums">
                  {checkout}
                </p>
              </div>
            </div>
          </Reveal>
          <div className="flex flex-col gap-4">
            <Reveal delay={1}>
              <img
                src="/images/booking-1.jpg"
                alt="Mountain view room at Pari Ghar Guest House, Gilung Lamjung"
                width={1024}
                height={768}
                className="w-full h-[280px] object-cover rounded-sm block"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={2}>
              <img
                src="/images/booking-2.jpg"
                alt="Guest room interior at Pari Ghar Guest House"
                width={500}
                height={375}
                className="w-full h-[240px] object-cover rounded-sm block"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

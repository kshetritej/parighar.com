"use client";

import { Phone, Plane, Mountain, Landmark, MapPin } from "lucide-react";
import Reveal from "./reveal";

const facts = [
  {
    icon: Plane,
    label: "From Pokhara Airport",
    val: "~2 hours drive",
  },
  {
    icon: Mountain,
    label: "Begnas Lake",
    val: "26 miles away",
  },
  {
    icon: Landmark,
    label: "Ishaneshwor Mahadev Temple",
    val: "Minutes from the guest house",
  },
  {
    icon: MapPin,
    label: "Address",
    val: "Gilung-9, Lamjung 33606, Nepal",
  },
];

export default function Location() {
  return (
    <section id="location" className="py-24 px-8 bg-cream-dark" aria-label="Location and directions">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <img
              src="/contact-image.jpeg"
              alt="Pari Ghar Guest House location in Gilung, Lamjung, Nepal"
              width={1200}
              height={1600}
              className="w-full h-[400px] object-cover rounded-sm block"
              loading="lazy"
            />
            <div className="mt-8 bg-green-dark text-white p-6 rounded-sm flex items-center gap-5">
              <Phone className="w-6 h-6 shrink-0" aria-hidden="true" />
              <address className="not-italic">
                <p className="text-xs tracking-[0.1em] uppercase text-white/70 mb-1">
                  Call or WhatsApp
                </p>
                <p className="font-serif text-[1.4rem] text-white">
                  +977 981-3413494
                </p>
              </address>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-xs tracking-[0.22em] uppercase text-terra mb-4 font-medium">
              Getting here
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-green-dark text-pretty scroll-mt-24">
              Closer Than
              <br />
              You Think
            </h2>
            <div className="w-[38px] h-[1px] bg-gold my-5" />
            <p className="text-base text-green-dark/80 leading-[1.9] font-light mb-6">
              Nestled in Gilung Village, Kwholasothar Rural Municipality,
              Lamjung. Far enough to feel far away. Close enough to actually go.
            </p>
            <div className="flex flex-col gap-3.5">
              {facts.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    className="flex items-start gap-4 pb-3.5 border-b border-black/6 last:border-b-0"
                  >
                    <div className="w-[34px] h-[34px] bg-green rounded-sm flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.08em] uppercase text-terra mb-0.5">
                        {f.label}
                      </p>
                      <p className="text-sm text-charcoal/80 font-light">
                        {f.val}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

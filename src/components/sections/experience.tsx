"use client";

import Reveal from "./reveal";

const dots = [
  "Himalayan views from your terrace",
  "Outdoor fireplace evenings",
  "Home-grown local food",
  "Bicycle hire available",
  "Day hikes through Lamjung",
  "Ishaneshwor Temple nearby",
  "Free WiFi throughout",
  "Free parking on site",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 bg-green-dark" aria-label="The Pari Ghar experience">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <Reveal>
              <img
                src="/images/booking-1.jpg"
                alt="Pari Ghar Guest House exterior with mountain view in Gilung, Lamjung"
                width={1024}
                height={768}
                className="w-full h-[460px] object-cover rounded-sm block"
                loading="lazy"
              />
            </Reveal>
            <div className="absolute -bottom-8 -right-8 w-[45%] h-[200px] hidden md:block">
              <Reveal>
                <img
                  src="/images/booking-2.jpg"
                  alt="Scenic view from Pari Ghar Guest House terrace"
                  width={500}
                  height={375}
                  className="w-full h-full object-cover rounded-sm border-4 border-green-dark"
                  loading="lazy"
                />
              </Reveal>
            </div>
            <div className="absolute top-6 left-6 bg-terra text-white px-4 py-3 text-center rounded-sm">
              <strong className="block font-serif text-[2.2rem] font-bold leading-none">
                10
              </strong>
              <span className="text-xs tracking-[0.1em] uppercase opacity-85">
                out of 10
              </span>
            </div>
          </div>
          <Reveal delay={1}>
            <p className="text-xs tracking-[0.22em] uppercase text-gold mb-4 font-medium">
              The experience
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-white text-pretty scroll-mt-24">
              Not Your
              <br />
              Average Hotel Stay
            </h2>
            <div className="w-[38px] h-[1px] bg-gold my-5" />
            <p className="text-white/85 text-base leading-[1.95] font-light mb-8">
              Pari Ghar is a guest house in the true sense — a home that happens
              to welcome guests. Set in the village of Gilung, Lamjung,
              surrounded by terraced hills and Himalayan peaks, this is a place
              where the pace of life still makes sense.
            </p>
            <p className="text-white/85 text-base leading-[1.95] font-light mb-8">
              Wake up to mountain views from your terrace. Eat breakfast made
              from ingredients grown nearby. Spend the day hiking local trails,
              visiting ancient temples, or just sitting in the open air watching
              the hills change colour as evening falls.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {dots.map((d) => (
                <div
                  key={d}
                  className="flex items-center gap-2.5 text-white/90 text-sm font-light"
                  role="listitem"
                >
                  <div className="w-[5px] h-[5px] rounded-full bg-gold shrink-0" aria-hidden="true" />
                  {d}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

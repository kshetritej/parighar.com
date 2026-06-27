"use client";

import Reveal from "./reveal";

const cards = [
  {
    num: "01",
    title: "Unplug &amp; Recharge",
    body: "Tired of city noise? Gilung is where you come to remember what quiet feels like. Wake up to mountain mist, eat home-grown food, and do absolutely nothing \u2014 guilt-free.",
  },
  {
    num: "02",
    title: "Friends\u2019 Night Out",
    body: "Not all getaways need a resort pool. Gather your crew for a bonfire night, local food, mountain air, and stories you\u2019ll talk about for years.",
  },
  {
    num: "03",
    title: "Real Village Life",
    body: "Let the family see where food actually comes from. Explore terraced hills together, eat dal bhat made the old way, and feel warmth no hotel chain can fake.",
  },
];

export default function ForWho() {
  return (
    <section id="for-who" className="py-24 px-8 bg-cream-dark" aria-label="Why choose Pari Ghar">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.22em] uppercase text-terra mb-4 font-medium">
            Why people come here
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] text-green-dark text-pretty scroll-mt-24">
            Your reason to come.<br />
            You&rsquo;ll find it here.
          </h2>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6 mt-12">
          {cards.map((c, i) => (
            <Reveal key={c.num} delay={i + 1}>
              <article className="bg-cream border border-black/7 rounded-sm p-10 relative overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] group">
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-green scale-x-0 origin-left transition-transform duration-350 motion-reduce:transition-none group-hover:scale-x-100" />
                <p className="font-serif text-[3.5rem] font-light text-green/12 leading-none mb-2" aria-hidden="true">
                  {c.num}
                </p>
                <h3 className="font-serif text-[1.55rem] font-bold text-green-dark mb-3 text-pretty">
                  {c.title}
                </h3>
                <p className="text-base text-green-dark/80 leading-[1.85] font-light break-words">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Reveal from "./reveal";

export default function Cta() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });
  const [dirty, setDirty] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDirty(true);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello! I'd like to book a stay at Pari Ghar Guest House.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "\u2014"}`,
      `Check-in: ${form.checkIn || "\u2014"}`,
      `Check-out: ${form.checkOut || "\u2014"}`,
      `Guests: ${form.guests || "\u2014"}`,
      `Message: ${form.message || "\u2014"}`,
    ];
    window.open(
      `https://wa.me/9779816614735?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
  };

  const inputCls =
    "w-full px-4 py-3.5 rounded-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none transition-colors duration-200";
  const labelCls = "text-xs tracking-[0.12em] uppercase text-white/60 mb-1.5 block";

  return (
    <section
      id="cta"
      className="py-36 px-8 text-center"
      aria-label="Book your stay"
      style={{
        background:
          "linear-gradient(to bottom, rgba(8,30,15,0.78) 0%, rgba(8,30,15,0.88) 100%), url('/hero-imag.jpeg') center/cover no-repeat",
      }}
    >
      <div className="max-w-[600px] mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.22em] uppercase text-gold mb-4 font-medium">
            Ready when you are
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-white text-pretty mb-4">
            Ready to Slow Down?
          </h2>
        </Reveal>
        <Reveal>
          <div className="w-[38px] h-[1px] bg-gold mx-auto my-6" />
        </Reveal>
        <Reveal>
          <p className="text-white/85 text-base font-light max-w-[480px] mx-auto mb-10 leading-[1.85]">
            Whether you&rsquo;re coming alone, with friends, or with family
            — Pari Ghar has a room and a mountain view waiting for you.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="text-left space-y-5 max-w-[520px] mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cta-name" className={labelCls}>Full Name</label>
                <input
                  id="cta-name"
                  name="name"
                  placeholder="e.g. Ram Sharma…"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  spellCheck={false}
                  required
                  className={inputCls}
                  style={{ touchAction: "manipulation" }}
                />
              </div>
              <div>
                <label htmlFor="cta-email" className={labelCls}>Email</label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  placeholder="e.g. ram@example.com…"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  spellCheck={false}
                  required
                  className={inputCls}
                  style={{ touchAction: "manipulation" }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="cta-phone" className={labelCls}>Phone</label>
                <input
                  id="cta-phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +977-98…"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className={inputCls}
                  style={{ touchAction: "manipulation" }}
                />
              </div>
              <div>
                <label htmlFor="cta-checkin" className={labelCls}>Check-in</label>
                <input
                  id="cta-checkin"
                  name="checkIn"
                  type="date"
                  value={form.checkIn}
                  onChange={handleChange}
                  autoComplete="off"
                  className={`${inputCls} [color-scheme:dark]`}
                  style={{ touchAction: "manipulation" }}
                />
              </div>
              <div>
                <label htmlFor="cta-checkout" className={labelCls}>Check-out</label>
                <input
                  id="cta-checkout"
                  name="checkOut"
                  type="date"
                  value={form.checkOut}
                  onChange={handleChange}
                  autoComplete="off"
                  className={`${inputCls} [color-scheme:dark]`}
                  style={{ touchAction: "manipulation" }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="cta-guests" className={labelCls}>Number of Guests</label>
              <input
                id="cta-guests"
                name="guests"
                type="number"
                inputMode="numeric"
                placeholder="e.g. 2…"
                value={form.guests}
                onChange={handleChange}
                autoComplete="off"
                className={inputCls}
                style={{ touchAction: "manipulation" }}
              />
            </div>
            <div>
              <label htmlFor="cta-message" className={labelCls}>Special Requests</label>
              <textarea
                id="cta-message"
                name="message"
                placeholder="Any special requests or questions?…"
                value={form.message}
                onChange={handleChange}
                rows={3}
                autoComplete="off"
                className={`${inputCls} resize-none`}
                style={{ touchAction: "manipulation" }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green text-white px-9 py-[0.95rem] text-sm tracking-[0.14em] uppercase rounded-sm font-sans border border-white/15 cursor-pointer hover:bg-green-mid focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none transition-colors duration-200"
            >
              Send via WhatsApp
            </button>
          </form>
        </Reveal>

        <div className="flex gap-4 justify-center flex-wrap mt-10">
          <a
            href="https://web.facebook.com/parighar.gilung"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white/80 px-6 py-3 no-underline text-sm tracking-[0.12em] uppercase rounded-sm transition-colors duration-200 font-sans hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            Message on Facebook
          </a>
          <a
            href="https://www.instagram.com/parighar_gilung/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white/80 px-6 py-3 no-underline text-sm tracking-[0.12em] uppercase rounded-sm transition-colors duration-200 font-sans hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

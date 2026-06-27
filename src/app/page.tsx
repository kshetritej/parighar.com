"use client";

import Nav from "@/components/nav";
import Hero from "@/components/sections/hero";
import ForWho from "@/components/sections/for-who";
import Experience from "@/components/sections/experience";
import Gallery from "@/components/sections/gallery";
import Rooms from "@/components/sections/rooms";
import Reviews from "@/components/sections/reviews";
import Location from "@/components/sections/location";
import Cta from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  const scrollToBooking = () => {
    const el = document.getElementById("cta");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav onBook={scrollToBooking} />
      <Hero onBook={scrollToBooking} />
      <ForWho />
      <Experience />
      <Gallery />
      <Rooms />
      <Reviews />
      <Location />
      <Cta />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

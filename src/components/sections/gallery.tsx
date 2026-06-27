export default function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal overflow-hidden" aria-label="Photo gallery">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] md:h-[360px]">
        <img
          src="/images/booking-3.jpg"
          alt="Panoramic view of mountains near Pari Ghar Guest House in Gilung, Lamjung"
          width={800}
          height={600}
          className="w-full h-[220px] md:h-full object-cover block transition-transform duration-500 motion-reduce:transition-none hover:scale-105"
          loading="lazy"
        />
        <img
          src="/images/booking-4.jpg"
          alt="Landscape scenery around Pari Ghar Guest House, Lamjung Nepal"
          width={400}
          height={300}
          className="w-full h-[220px] md:h-full object-cover block transition-transform duration-500 motion-reduce:transition-none hover:scale-105"
          loading="lazy"
        />
        <img
          src="/images/booking-5.jpg"
          alt="Himalayan mountain view from Pari Ghar Guest House terrace"
          width={400}
          height={300}
          className="w-full h-[220px] md:h-full object-cover block transition-transform duration-500 motion-reduce:transition-none hover:scale-105"
          loading="lazy"
        />
      </div>
    </section>
  );
}

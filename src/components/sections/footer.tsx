export default function Footer() {
  return (
    <footer className="bg-[#0F1F14] px-8 py-10 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center flex-wrap gap-6">
        <a href="#hero" className="no-underline">
          <div className="bg-white rounded-md px-3 py-1.5">
            <img src="/logo.jpg" alt="Pari Ghar" width={120} height={48} className="h-12 w-auto" loading="lazy" />
          </div>
        </a>
        <p className="text-xs text-white/40 tracking-[0.04em] text-center">
          &copy; 2025 Pari Ghar Guest House &middot; Gilung, Lamjung, Nepal
        </p>
        <div className="flex gap-6">
          <a
            href="https://web.facebook.com/parighar.gilung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 no-underline text-xs tracking-[0.1em] uppercase transition-colors duration-200 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/parighar_gilung/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 no-underline text-xs tracking-[0.1em] uppercase transition-colors duration-200 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

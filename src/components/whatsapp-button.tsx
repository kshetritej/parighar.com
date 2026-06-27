export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9779813413494"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#20BD5A] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none transition-colors duration-200"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="/whatsapp-logo.png"
        alt=""
        width={28}
        height={28}
        className="w-7 h-7 object-contain"
        aria-hidden="true"
      />
    </a>
  );
}

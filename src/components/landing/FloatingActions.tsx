import { MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, waUrl } from "./contact";

export function FloatingActions() {
  return (
    <>
      <a
        href={waUrl("Hi SMT Holidays! I'd like to plan a trip.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full animate-ping bg-whatsapp/40 -z-10" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call now"
        className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 h-12 px-4 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
      >
        <Phone className="h-4 w-4" />
        <span className="text-sm font-semibold hidden sm:inline">Call Now</span>
      </a>
    </>
  );
}

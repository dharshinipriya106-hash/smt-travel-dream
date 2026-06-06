import { Mail, Phone, MapPin, Instagram, MessageCircle, Map } from "lucide-react";
import { useLanding } from "./state";
import { PHONE, PHONE_TEL, EMAIL, INSTAGRAM_URL, MAPS_URL, waUrl } from "./contact";

export function Footer() {
  const { scrollToId } = useLanding();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container-pg py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground font-bold">
              S
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              SMT Holidays
            </span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
            Your trusted travel partner in Sankarankovil for family tours,
            temple tours and customized South India holidays.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["About Us", "about"],
              ["Tour Packages", "packages"],
              ["How It Works", "how"],
              ["Gallery", "gallery"],
              ["FAQ", "faq"],
              ["Privacy Policy", "contact"],
            ].map(([label, id]) => (
              <li key={label}>
                <button
                  onClick={() => scrollToId(id as string)}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-accent">{PHONE}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-accent" />
              <a href={`mailto:${EMAIL}`} className="hover:text-accent">{EMAIL}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent" />
              <span>Sankarankovil, Tirunelveli<br />Tamil Nadu 627756, India</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Follow Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={waUrl("Hi SMT Holidays!")} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 hover:text-accent">
                <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 hover:text-accent">
                <Instagram className="h-4 w-4 text-accent" /> Instagram
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 hover:text-accent">
                <Map className="h-4 w-4 text-accent" /> Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pg py-5 text-xs text-primary-foreground/70 flex flex-col sm:flex-row gap-2 justify-between items-center">
          <span>© {year} SMT Holidays. All rights reserved.</span>
          <span>Made with care in Sankarankovil, Tamil Nadu.</span>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanding } from "./state";
import { PHONE, PHONE_TEL } from "./contact";

const NAV = [
  { label: "About", id: "about" },
  { label: "Packages", id: "packages" },
  { label: "How It Works", id: "how" },
  { label: "Gallery", id: "gallery" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export function Header() {
  const { scrollToId } = useLanding();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled
          ? "bg-background/90 backdrop-blur border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="container-pg flex h-16 items-center justify-between">
        <button
          onClick={() => scrollToId("top")}
          className="flex items-center gap-2"
          aria-label="SMT Holidays home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            S
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            SMT <span className="text-accent">Holidays</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <Button
            onClick={() => scrollToId("lead")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Get Quote
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-pg py-3 flex flex-col gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setOpen(false);
                  scrollToId(item.id);
                }}
                className="text-left py-2 text-sm font-medium hover:text-primary"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                setOpen(false);
                scrollToId("lead");
              }}
              className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

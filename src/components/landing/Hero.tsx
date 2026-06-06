import { ArrowRight, MessageCircle, Users, ShieldCheck, Wallet, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/smt/hero.jpg";
import { useLanding } from "./state";
import { waUrl } from "./contact";

const TRUST = [
  { icon: Users, label: "1000+ Happy Travelers" },
  { icon: Wallet, label: "Affordable Packages" },
  { icon: ShieldCheck, label: "Safe & Comfortable" },
  { icon: Headphones, label: "24/7 Support" },
];

export function Hero() {
  const { scrollToId } = useLanding();
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Ooty hills, Kerala backwaters and Kanyakumari coast"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(120deg, oklch(0.18 0.06 248 / 0.85) 0%, oklch(0.30 0.10 248 / 0.55) 55%, oklch(0.20 0.08 50 / 0.65) 100%)",
        }}
      />
      <div className="container-pg pt-20 pb-32 md:pt-28 md:pb-44 text-primary-foreground">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium ring-1 ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Sankarankovil • Tamil Nadu, India
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Best Tour & Travels in{" "}
            <span className="text-accent">Sankarankovil</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">
            Explore Tamil Nadu, Kerala, Ooty, Kodaikanal, Kanyakumari and
            customized holiday packages with SMT Holidays.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => scrollToId("lead")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base"
            >
              Get Free Quote <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-base"
            >
              <a
                href={waUrl("Hi SMT Holidays! I'd like to plan a trip.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp Now
              </a>
            </Button>
          </div>

          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {TRUST.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur px-3 py-2 ring-1 ring-white/15 text-sm"
              >
                <Icon className="h-4 w-4 text-accent shrink-0" />
                <span className="text-white/90">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

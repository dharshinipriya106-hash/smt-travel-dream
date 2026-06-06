import { ClipboardList, FileText, CalendarCheck, PlaneTakeoff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanding } from "./state";

const STEPS = [
  { icon: ClipboardList, title: "Share Your Plan", desc: "Tell us your destination, dates and travelers." },
  { icon: FileText, title: "Get Custom Quote", desc: "Receive a tailored itinerary with transparent pricing." },
  { icon: CalendarCheck, title: "Confirm Booking", desc: "Pay a small advance to lock your dates and hotels." },
  { icon: PlaneTakeoff, title: "Enjoy Your Trip", desc: "Travel comfortably with 24/7 on-trip support." },
];

export function HowItWorks() {
  const { scrollToId } = useLanding();
  return (
    <section id="how" className="section-pad bg-surface">
      <div className="container-pg">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Plan your trip in 4 simple steps
          </h2>
          <p className="mt-3 text-muted-foreground">
            From first call to final memory, we make every step smooth and stress-free.
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <li
                key={title}
                className="relative rounded-2xl bg-card border border-border p-6 text-center hover-lift"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="absolute top-3 right-4 text-5xl font-extrabold text-primary/10 font-display">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 text-center">
          <Button
            size="lg"
            onClick={() => scrollToId("lead")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Start Planning My Trip
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Heart, MapPinned, Headphones } from "lucide-react";

const STATS = [
  { value: "1000+", label: "Happy Travelers" },
  { value: "6+", label: "Destinations" },
  { value: "24/7", label: "Customer Support" },
  { value: "10+", label: "Years of Trust" },
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-pg grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider">
            About SMT Holidays
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Your Trusted Travel Partner in South India
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            SMT Holidays provides family tour packages, temple tours, honeymoon
            packages, group tours, corporate tours and customized holiday
            experiences across South India. We focus on comfort, safety and
            memorable travel experiences — every journey planned with care from
            Sankarankovil.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { icon: Heart, text: "Family-first travel planning with personal attention" },
              { icon: MapPinned, text: "Curated itineraries across Tamil Nadu & Kerala" },
              { icon: Headphones, text: "Dedicated support before, during and after your trip" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground/80">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center hover-lift"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-primary font-display">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

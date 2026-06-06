import { Star } from "lucide-react";
import a1 from "@/assets/smt/a1.jpg";
import a2 from "@/assets/smt/a2.jpg";
import a3 from "@/assets/smt/a3.jpg";

const ITEMS = [
  {
    name: "Senthil Kumar",
    city: "Tirunelveli",
    avatar: a1,
    quote:
      "Booked the Kerala family package with SMT Holidays — comfortable vehicle, great driver and a perfectly planned houseboat stay. Highly recommended.",
  },
  {
    name: "Priya Lakshmi",
    city: "Sankarankovil",
    avatar: a2,
    quote:
      "Our Ooty trip was wonderful. Affordable price, neat hotel and the team was responsive even at midnight. Will book again.",
  },
  {
    name: "Murugan R.",
    city: "Tenkasi",
    avatar: a3,
    quote:
      "Did the South India temple tour with my parents. Smooth darshan assistance and very respectful staff. Truly stress-free pilgrimage.",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-pg">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Loved by travelers across Tamil Nadu
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-card border border-border p-6 hover-lift flex flex-col"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/80 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

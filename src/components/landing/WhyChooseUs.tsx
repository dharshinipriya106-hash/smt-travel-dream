import { Car, UserCheck, Sparkles, Headphones } from "lucide-react";

const ITEMS = [
  { icon: Car, title: "Comfortable Vehicles", desc: "Clean, well-maintained AC cars, tempo travellers and coaches for every group size." },
  { icon: UserCheck, title: "Experienced Drivers", desc: "Local drivers who know the routes, viewpoints and best places to stop." },
  { icon: Sparkles, title: "Customized Itineraries", desc: "Family-friendly, honeymoon or temple — built around your dates and budget." },
  { icon: Headphones, title: "24/7 Customer Support", desc: "Real humans, real-time help — before, during and after your trip." },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-pg">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Travel with people who care
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-border p-6 hover-lift"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

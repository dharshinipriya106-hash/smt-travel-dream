import { useMemo, useState } from "react";
import { Calendar, MapPin, ArrowRight, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { useLanding } from "./state";
import { waUrl } from "./contact";
import ooty from "@/assets/smt/pkg-ooty.jpg";
import kodai from "@/assets/smt/pkg-kodai.jpg";
import kerala from "@/assets/smt/pkg-kerala.jpg";
import kanya from "@/assets/smt/pkg-kanya.jpg";
import tirupati from "@/assets/smt/pkg-tirupati.jpg";
import temple from "@/assets/smt/pkg-temple.jpg";

// NOTE: prices are placeholders — update with real pricing.
type Pkg = {
  id: string;
  name: string;
  image: string;
  duration: string;
  price: number;
  short: string;
  highlights: string[];
  inclusions: string[];
};

const PACKAGES: Pkg[] = [
  { id: "Ooty", name: "Ooty Tour Package", image: ooty, duration: "3D / 2N", price: 6999,
    short: "Tea gardens, Doddabetta peak, boat ride at Ooty Lake.",
    highlights: ["Ooty Lake boating", "Doddabetta peak view", "Botanical Gardens", "Tea estate visit"],
    inclusions: ["AC vehicle", "Hotel stay (2 nights)", "Daily breakfast", "Sightseeing"] },
  { id: "Kodaikanal", name: "Kodaikanal Tour Package", image: kodai, duration: "3D / 2N", price: 6499,
    short: "Princess of hill stations — lakes, viewpoints and pine forests.",
    highlights: ["Kodai Lake", "Coaker's Walk", "Pillar Rocks", "Bryant Park"],
    inclusions: ["AC vehicle", "Hotel stay (2 nights)", "Daily breakfast", "Sightseeing"] },
  { id: "Kerala", name: "Kerala Tour Package", image: kerala, duration: "5D / 4N", price: 14999,
    short: "Munnar hills, Alleppey houseboat and Kochi heritage.",
    highlights: ["Munnar tea valleys", "Alleppey houseboat", "Kochi Fort", "Spice plantations"],
    inclusions: ["AC vehicle", "Houseboat stay", "Resort stay", "Breakfast & dinner"] },
  { id: "Kanyakumari", name: "Kanyakumari Tour Package", image: kanya, duration: "2D / 1N", price: 4999,
    short: "Sunrise at land's end with Vivekananda Rock & Thiruvalluvar statue.",
    highlights: ["Sunrise point", "Vivekananda Rock", "Thiruvalluvar statue", "Padmanabhapuram Palace"],
    inclusions: ["AC vehicle", "Hotel stay", "Daily breakfast", "Sightseeing"] },
  { id: "Tirupati", name: "Tirupati Temple Tour", image: tirupati, duration: "2D / 1N", price: 5499,
    short: "Darshan at Sri Venkateswara Temple with comfortable transport.",
    highlights: ["Tirumala darshan", "Padmavathi temple", "Pilgrim assistance", "Local meals"],
    inclusions: ["AC vehicle", "Hotel stay", "Darshan assistance", "Daily breakfast"] },
  { id: "South India Temple", name: "South India Temple Tour", image: temple, duration: "6D / 5N", price: 17999,
    short: "Madurai, Rameswaram, Kanyakumari, Trivandrum temple circuit.",
    highlights: ["Meenakshi temple", "Rameswaram Jyotirlinga", "Kanyakumari", "Padmanabhaswamy"],
    inclusions: ["AC vehicle", "Hotel stays", "All breakfasts", "Pilgrim guide"] },
];

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function Packages() {
  const { search } = useLanding();
  const [active, setActive] = useState<Pkg | null>(null);

  const list = useMemo(() => {
    if (!search.destination || search.destination === "Custom") return PACKAGES;
    return PACKAGES.filter((p) => p.id === search.destination);
  }, [search.destination]);

  const showingFilter = list.length !== PACKAGES.length;

  return (
    <section id="packages" className="section-pad">
      <div className="container-pg">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Popular Tour Packages
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Handpicked holidays across South India
          </h2>
          <p className="mt-3 text-muted-foreground">
            Customizable, affordable and built for comfortable family travel.
          </p>
        </div>

        {showingFilter && (
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary text-sm px-4 py-1.5">
              Showing results for "{search.destination}"
            </span>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover-lift flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-xs font-semibold">
                  <Calendar className="h-3 w-3" /> {p.duration}
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-xs font-bold">
                  From {inr(p.price)}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{p.short}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">per person onwards</span>
                  <Button
                    size="sm"
                    onClick={() => setActive(p)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    View Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {active && (
            <>
              <div className="relative aspect-[16/8]">
                <img src={active.image} alt={active.name} className="h-full w-full object-cover" />
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/90 flex items-center justify-center"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-3">
                    {active.name}
                    <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      {active.duration}
                    </span>
                  </DialogTitle>
                  <DialogDescription className="flex items-center gap-1.5 text-sm">
                    <MapPin className="h-3.5 w-3.5" /> Starts from Sankarankovil • Customizable
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Highlights</h4>
                    <ul className="space-y-1.5 text-sm">
                      {active.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Inclusions</h4>
                    <ul className="space-y-1.5 text-sm">
                      {active.inclusions.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-5 rounded-lg bg-surface p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Starting from</div>
                    <div className="text-2xl font-extrabold text-primary font-display">
                      {inr(active.price)}{" "}
                      <span className="text-sm font-medium text-muted-foreground">/ person</span>
                    </div>
                  </div>
                </div>
                <DialogFooter className="mt-5 flex-col sm:flex-row gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="border-whatsapp text-foreground"
                  >
                    <a
                      href={waUrl(`Hi! I'm interested in the ${active.name}. Please share details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button
                    onClick={() => {
                      setActive(null);
                      document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Get Free Quote
                  </Button>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export { PACKAGES };

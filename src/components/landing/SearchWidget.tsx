import { MapPin, CalendarDays, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanding } from "./state";

const DESTINATIONS = [
  "Ooty",
  "Kodaikanal",
  "Kerala",
  "Kanyakumari",
  "Tirupati",
  "South India Temple",
  "Custom",
];

export function SearchWidget() {
  const { search, setSearch, scrollToId } = useLanding();

  const onSearch = () => {
    scrollToId("packages");
  };

  return (
    <section className="relative -mt-20 md:-mt-24 z-10">
      <div className="container-pg">
        <div className="rounded-2xl bg-card border border-border shadow-2xl shadow-primary/10 p-4 md:p-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-end">
            <div className="md:col-span-4">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Destination
              </label>
              <select
                value={search.destination}
                onChange={(e) => setSearch({ destination: e.target.value })}
                className="mt-1.5 w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Where to?</option>
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-3">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-primary" /> Travel Date
              </label>
              <input
                type="date"
                value={search.date}
                onChange={(e) => setSearch({ date: e.target.value })}
                className="mt-1.5 w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="md:col-span-3">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-primary" /> Travelers
              </label>
              <div className="mt-1.5 flex items-center h-11 rounded-lg border border-input bg-background overflow-hidden">
                <button
                  type="button"
                  onClick={() => setSearch({ travelers: Math.max(1, search.travelers - 1) })}
                  className="px-3 h-full text-lg text-muted-foreground hover:text-primary"
                  aria-label="Decrease travelers"
                >
                  −
                </button>
                <span className="flex-1 text-center text-sm font-medium">{search.travelers}</span>
                <button
                  type="button"
                  onClick={() => setSearch({ travelers: Math.min(50, search.travelers + 1) })}
                  className="px-3 h-full text-lg text-muted-foreground hover:text-primary"
                  aria-label="Increase travelers"
                >
                  +
                </button>
              </div>
            </div>
            <div className="md:col-span-2">
              <Button
                onClick={onSearch}
                className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Search className="h-4 w-4 mr-1" /> Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

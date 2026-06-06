import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLanding } from "./state";
import { waUrl } from "./contact";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
  destination: z.string().min(1, "Choose a destination"),
  date: z.string().min(1, "Pick a travel date"),
  travelers: z.coerce.number().int().min(1).max(50),
});

const DESTINATIONS = [
  "Ooty", "Kodaikanal", "Kerala", "Kanyakumari", "Tirupati", "South India Temple", "Custom",
];

export function LeadForm() {
  const { search } = useLanding();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (map[i.path[0] as string] = i.message));
      setErrors(map);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const msg = `Hi SMT Holidays!%0A%0AName: ${d.name}%0APhone: +91 ${d.phone}%0ADestination: ${d.destination}%0ATravel Date: ${d.date}%0ATravelers: ${d.travelers}%0A%0APlease share a quote.`;
    window.open(waUrl(decodeURIComponent(msg)), "_blank", "noopener");
    setSubmitted(true);
    toast.success("Thanks! We'll reach out shortly on WhatsApp.");
  };

  return (
    <section id="lead" className="section-pad">
      <div className="container-pg">
        <div className="rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Free Consultation
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                Plan Your Dream Vacation
              </h2>
              <p className="mt-4 text-primary-foreground/85">
                Tell us where you want to go. We'll send a custom itinerary with
                transparent pricing — usually within an hour.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-primary-foreground/85">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> No advance to get a quote</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Flexible dates & group sizes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> 24/7 WhatsApp support</li>
              </ul>
            </div>

            <div className="p-6 md:p-10 bg-background text-foreground">
              <form onSubmit={onSubmit} className="space-y-4">
                <Field label="Full Name" error={errors.name}>
                  <input
                    name="name" required maxLength={80}
                    className="input"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Phone Number" error={errors.phone}>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                      +91
                    </span>
                    <input
                      name="phone" required maxLength={10}
                      inputMode="numeric" pattern="\d{10}"
                      className="input rounded-l-none"
                      placeholder="10-digit mobile"
                    />
                  </div>
                </Field>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Destination" error={errors.destination}>
                    <select
                      name="destination" required
                      defaultValue={search.destination}
                      className="input"
                    >
                      <option value="">Select</option>
                      {DESTINATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </Field>
                  <Field label="Travel Date" error={errors.date}>
                    <input
                      type="date" name="date" required
                      defaultValue={search.date}
                      className="input"
                    />
                  </Field>
                </div>
                <Field label="Number of Travelers" error={errors.travelers}>
                  <input
                    type="number" name="travelers" required
                    min={1} max={50}
                    defaultValue={search.travelers}
                    className="input"
                  />
                </Field>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1">
                    <Send className="h-4 w-4 mr-1" /> Get Free Travel Consultation
                  </Button>
                  <Button asChild type="button" variant="outline" className="flex-1">
                    <a href={waUrl("Hi SMT Holidays! I'd like to plan a trip.")} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-1" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
                {submitted && (
                  <p className="text-sm text-primary flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" /> Inquiry opened in WhatsApp. We'll respond shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%; height: 2.75rem;
          border-radius: var(--radius);
          border: 1px solid var(--input);
          background: var(--background);
          padding: 0 0.75rem;
          font-size: 0.875rem;
          outline: none;
        }
        .input:focus { box-shadow: 0 0 0 2px var(--ring); }
      `}</style>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

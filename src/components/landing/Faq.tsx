import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Which destinations do you cover?",
    a: "We cover Ooty, Kodaikanal, Kerala (Munnar, Alleppey, Kochi), Kanyakumari, Tirupati, Madurai, Rameswaram and most South India temple circuits. We also arrange North India and pan-India trips on request.",
  },
  {
    q: "Do you provide customized packages?",
    a: "Yes. Every itinerary is built around your dates, group size and budget. Share your preferences and we'll design the trip for you.",
  },
  {
    q: "Do you arrange hotel bookings?",
    a: "Absolutely. We partner with verified hotels and resorts across South India to ensure clean, safe and comfortable stays.",
  },
  {
    q: "Do you provide transportation?",
    a: "Yes — AC sedans, SUVs, Tempo Travellers and coaches with experienced local drivers. Pick-up from Sankarankovil and nearby towns is included.",
  },
  {
    q: "How can I get a quotation?",
    a: "Fill the inquiry form on this page or message us on WhatsApp. You'll receive a detailed quote — usually within an hour during business hours.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-pad">
      <div className="container-pg max-w-3xl">
        <div className="text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Frequently asked questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-8">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export { FAQS };

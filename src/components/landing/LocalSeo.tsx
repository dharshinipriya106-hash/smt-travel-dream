const KEYWORDS = [
  "Travel Agency in Sankarankovil",
  "Tour Packages in Tirunelveli",
  "Family Tour Packages Tamil Nadu",
  "Temple Tour Packages",
  "Holiday Packages South India",
  "Tour Operator in Tamil Nadu",
  "Best Travel Agency Near Me",
  "Customized Travel Packages",
];

export function LocalSeo() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-pg max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Best Travel Agency in Sankarankovil
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed text-center">
          SMT Holidays offers affordable family tours, temple tours, honeymoon
          packages and customized holiday trips from Sankarankovil, Tirunelveli,
          Tenkasi and surrounding regions. From short weekend getaways to
          full-circuit South India temple tours, we make planning simple and
          travel memorable for every kind of traveler.
        </p>
        <ul className="mt-7 flex flex-wrap justify-center gap-2">
          {KEYWORDS.map((k) => (
            <li
              key={k}
              className="rounded-full bg-background border border-border px-3 py-1.5 text-xs font-medium text-foreground/80"
            >
              {k}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

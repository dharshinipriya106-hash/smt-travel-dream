import g1 from "@/assets/smt/g1.jpg";
import g2 from "@/assets/smt/g2.jpg";
import g3 from "@/assets/smt/g3.jpg";
import g4 from "@/assets/smt/g4.jpg";
import ooty from "@/assets/smt/pkg-ooty.jpg";
import kerala from "@/assets/smt/pkg-kerala.jpg";
import kanya from "@/assets/smt/pkg-kanya.jpg";
import temple from "@/assets/smt/pkg-temple.jpg";

const IMAGES = [
  { src: g1, alt: "Happy family on tour" },
  { src: ooty, alt: "Ooty tea hills" },
  { src: g4, alt: "South India temple gopuram" },
  { src: kerala, alt: "Kerala houseboat" },
  { src: g2, alt: "Group tour memories" },
  { src: kanya, alt: "Kanyakumari sunrise" },
  { src: g3, alt: "Munnar tea trail" },
  { src: temple, alt: "Meenakshi temple" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="container-pg">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Travel Gallery
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Moments from our travelers
          </h2>
          <p className="mt-3 text-muted-foreground">
            Family tours, temple journeys, hill stations and happy faces.
          </p>
        </div>
        <div className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border bg-surface hover-lift"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

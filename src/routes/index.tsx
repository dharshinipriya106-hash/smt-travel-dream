import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { LandingProvider } from "@/components/landing/state";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { SearchWidget } from "@/components/landing/SearchWidget";
import { SocialProof } from "@/components/landing/SocialProof";
import { About } from "@/components/landing/About";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Packages, PACKAGES } from "@/components/landing/Packages";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { LeadForm } from "@/components/landing/LeadForm";
import { Faq, FAQS } from "@/components/landing/Faq";
import { LocalSeo } from "@/components/landing/LocalSeo";
import { Footer } from "@/components/landing/Footer";
import { FloatingActions } from "@/components/landing/FloatingActions";

const TITLE = "SMT Holidays — Best Tour & Travels in Sankarankovil";
const DESC =
  "SMT Holidays offers affordable family tours, temple tours, honeymoon and customized holiday packages across Tamil Nadu, Kerala, Ooty, Kodaikanal & Kanyakumari from Sankarankovil.";

const jsonLd = () => {
  const travelAgency = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "SMT Holidays",
    description: DESC,
    image: "/og.jpg",
    telephone: "+91-90000-00000",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sankarankovil",
      addressRegion: "Tamil Nadu",
      postalCode: "627756",
      addressCountry: "IN",
    },
    areaServed: ["Sankarankovil", "Tirunelveli", "Tenkasi", "Tamil Nadu", "Kerala"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
    sameAs: ["https://instagram.com/smtholidays"],
    makesOffer: PACKAGES.map((p) => ({
      "@type": "Offer",
      name: p.name,
      priceCurrency: "INR",
      price: p.price,
      itemOffered: { "@type": "TouristTrip", name: p.name, description: p.short },
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [travelAgency, faqPage];
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: "travel agency Sankarankovil, tour packages Tirunelveli, family tour Tamil Nadu, temple tour packages, Kerala tour, Ooty tour, Kodaikanal tour, Kanyakumari tour, South India tour operator" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: jsonLd().map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  }),
  component: Index,
});

function Index() {
  return (
    <LandingProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <SearchWidget />
          <SocialProof />
          <About />
          <HowItWorks />
          <Packages />
          <WhyChooseUs />
          <Gallery />
          <Testimonials />
          <LeadForm />
          <Faq />
          <LocalSeo />
        </main>
        <Footer />
        <FloatingActions />
        <Toaster richColors position="top-center" />
      </div>
    </LandingProvider>
  );
}

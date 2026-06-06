# SMT Holidays — Landing Page Plan

A single-page, conversion-focused landing page for SMT Holidays (Sankarankovil, Tamil Nadu) built on the existing TanStack Start + Tailwind v4 stack.

## Design system

- White background, **Deep Travel Blue** (`#0F4C81`) as primary, **Travel Orange** (`#FF7A00`) as accent.
- Background: `#FFFFFF`; Light section backgrounds: `#F5F9FC`; Text: `#1F2937`.
- Colors defined as oklch tokens in `src/styles.css` (light + dark).
- Typography: Plus Jakarta Sans (headings) + Inter (body), loaded via `<link>` in `__root.tsx`, registered in `@theme`.
- Reusable utilities: gradient hero overlay, soft card shadow, hover-lift, fade-in/scale-in animations.
- Fully mobile responsive, full-width sections, generous spacing.

## Page sections (all on `/`, in order)

1. **Sticky Header** — logo "SMT Holidays", nav anchors (About, Packages, How It Works, Gallery, FAQ, Contact), "Get Quote" button.
2. **Hero** — H1 "Best Tour & Travels in Sankarankovil", subheadline, two CTAs (Get Free Quote, WhatsApp Now), 4 trust-indicator chips, travel-collage background with gradient overlay.
3. **Destination Search Widget** — overlapping card straddling hero/about boundary. Fields: Destination (select: Ooty, Kodaikanal, Kerala, Kanyakumari, Tirupati, South India Temple, Custom), Travel Date (date input), Travelers (number stepper), "Search Packages" button → scrolls to Packages section pre-filtered, also prefills the lead form.
4. **Google Rating / Social Proof Block** — compact band right after the search widget: Google "G" logo + 4.9★ rating + "Rated by 500+ travelers", small avatar stack, badges (Trusted Local Agency, Govt Registered, Since 2015). Reinforces trust before users scroll further.
5. **About** — "Your Trusted Travel Partner" with copy + supporting stats (1000+ travelers, 6+ destinations, 24/7 support).
6. **How It Works** — 4 numbered steps with icons and connector line: 1) Share Your Plan, 2) Get Custom Quote, 3) Confirm Booking, 4) Enjoy Your Trip. Includes a mid-section CTA to start the inquiry.
7. **Popular Tour Packages** — responsive grid of 6 cards with image, short description, **package pricing** (e.g. "Starting from ₹X,XXX / person"), duration badge (e.g. "3D / 2N"), "View Package Details" CTA opening a dialog with day-wise highlights, inclusions/exclusions, price breakdown, and an inquiry CTA. Packages: Ooty, Kodaikanal, Kerala, Kanyakumari, Tirupati, South India Temple. Prices clearly marked as placeholders in code comments for easy updates.
8. **Why Choose Us** — 4 icon feature cards (Comfortable Vehicles, Experienced Drivers, Customized Itineraries, 24/7 Customer Support).
9. **Travel Gallery** — masonry-style CSS columns gallery with 8–10 generated photos (Family Tours, Temple Tours, Destinations, Group Trips, Happy Customers).
10. **Testimonials** — 3 cards with avatar, 5-star rating, quote, name + city.
11. **Lead Form** — "Plan Your Dream Vacation": Name, Phone, Destination, Travel Date, Travelers. Zod-validated; submit opens prefilled WhatsApp message. Secondary CTA: Chat on WhatsApp.
12. **FAQ** — shadcn Accordion with the 5 listed questions.
13. **Local SEO block** — "Best Travel Agency in Sankarankovil" copy + keyword-rich paragraph and a small keyword tag cloud.
14. **Footer** — About, Packages, Contact (phone, email, address), WhatsApp/Instagram/Google Maps links, Privacy Policy, copyright.
15. **Floating actions** — sticky WhatsApp button (bottom-right) and sticky Call Now button (bottom-left), visible on mobile + desktop.

## Technical details

- Route: replace placeholder `src/routes/index.tsx`; section components in `src/components/landing/`.
- SEO via `head()`: title, meta description, og tags, canonical `/`, `TravelAgency` JSON-LD (name, areaServed, address Sankarankovil/Tirunelveli, telephone placeholder, sameAs links). Add `AggregateRating` to the JSON-LD to match the Google rating block. Add `Offer`/`Product` entries per package with price + currency INR.
- Images: generated via imagegen (fast tier, .jpg) — hero collage tiles, 6 package cards, ~8 gallery shots, 3 avatars. Stored in `src/assets/smt/`, imported as ES6 modules.
- Search widget + Lead form: react-hook-form + zod; widget state lifted to page level so "Search Packages" filters the package grid and prefills the lead form via a small zustand-free `useState` context at page level.
- Submissions: build `https://wa.me/91XXXXXXXXXX?text=...` and open in new tab; sonner toast on success.
- Contact placeholders (phone, WhatsApp, Instagram, Maps) clearly TODO-commented so the user can swap real details.
- Accessibility: semantic landmarks, single H1, alt text, focus states preserved on shadcn components.
- Animations: subtle `animate-fade-in` on section reveal, `hover-scale` on cards, smooth scroll for anchor nav.

## Files to add / modify

- modify `src/styles.css` — brand color tokens + font tokens.
- modify `src/routes/__root.tsx` — Google Fonts `<link>` entries.
- modify `src/routes/index.tsx` — new landing page + head() meta + JSON-LD.
- new `src/components/landing/{Header,Hero,SearchWidget,SocialProof,About,HowItWorks,Packages,PackageDialog,WhyChooseUs,Gallery,Testimonials,LeadForm,Faq,LocalSeo,Footer,FloatingActions}.tsx`.
- new generated images under `src/assets/smt/`.

## Out of scope (follow-up)

- Real phone / WhatsApp number, Instagram handle, Google Maps embed, real Google rating count.
- Backend storage of leads (currently WhatsApp deep link). Lovable Cloud + a `leads` table can be added later.
- Standalone Privacy Policy page — footer link points to a placeholder anchor until content is provided.

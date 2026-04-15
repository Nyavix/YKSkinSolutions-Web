import Link from "next/link";

const BOOKING_URL =
  "https://www.fresha.com/a/yellowknife-skin-solutions-yellowknife-480a-range-lake-road-s59qr4ug/all-offer?menu=true&pId=547714";

const featured = [
  {
    id: "laser-hair",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
      </svg>
    ),
    name: "Laser Hair Removal",
    desc: "Permanent hair reduction using advanced laser technology. Multiple areas available.",
    price: "From $75",
    tag: "Most Popular",
  },
  {
    id: "hydrafacial",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C8.5 7 6 10.5 6 14a6 6 0 0012 0c0-3.5-2.5-7-6-12z" />
      </svg>
    ),
    name: "Hydrafacial™ Deluxe",
    desc: "The signature 3-step treatment: cleanse, extract, and hydrate for radiant, glowing skin.",
    price: "$299",
    tag: "Signature",
  },
  {
    id: "injections",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2l4 4-7 7-4-4 7-7z" />
        <path d="M10.5 12.5L2 21" />
        <path d="M14 8l-4.5 4.5" />
      </svg>
    ),
    name: "Injections (Botox / Fillers)",
    desc: "Expert RN injector for natural-looking anti-aging treatments and volumizing fillers.",
    price: "Contact us",
    tag: "RN Injector",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-24 px-4 sm:px-6" style={{ background: "#FFF7FB" }}>
      <div className="section-inner">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow">What We Offer</span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
            >
              Our Most-Loved Treatments
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 self-start sm:self-auto"
            style={{ color: "#EC4899" }}
          >
            View all services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {featured.map((s) => (
            <article
              key={s.id}
              id={`home-service-${s.id}`}
              className="card p-5 sm:p-6 flex flex-col gap-4"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: "rgba(236,72,153,0.08)" }}
              >
                {s.icon}
              </div>

              {/* Tag */}
              {s.tag && (
                <span
                  className="self-start text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(139,92,246,0.1)", color: "#8B5CF6" }}
                >
                  {s.tag}
                </span>
              )}

              <h3
                className="text-lg font-semibold leading-snug"
                style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
              >
                {s.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#9D174D" }}>
                {s.desc}
              </p>

              <div
                className="flex items-center justify-between pt-3"
                style={{ borderTop: "1px solid #FBCFE8" }}
              >
                <span className="text-sm font-bold" style={{ color: "#EC4899" }}>{s.price}</span>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200 whitespace-nowrap"
                  style={{ background: "rgba(236,72,153,0.1)", color: "#EC4899" }}
                >
                  Book →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline px-8 text-sm">
            See All 9 Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}

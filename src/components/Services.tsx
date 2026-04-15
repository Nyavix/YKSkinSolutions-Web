const services = [
  {
    id: "laser-hair",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    desc: "Permanent hair reduction using advanced laser technology. Multiple areas from $75.",
    price: "From $75",
    duration: "15 min – 1.5 hrs",
    tag: "Most Popular",
  },
  {
    id: "hydrafacial",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C8.5 7 6 10.5 6 14a6 6 0 0012 0c0-3.5-2.5-7-6-12z" />
      </svg>
    ),
    name: "Hydrafacial™ Deluxe",
    desc: "The signature 3-step treatment: cleanse, extract, and hydrate for radiant, glowing skin.",
    price: "$299",
    duration: "1.5 hrs",
    tag: "Signature",
  },
  {
    id: "microneedling",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    name: "Microneedling",
    desc: "Stimulate collagen production to reduce scars, fine lines, and improve skin texture.",
    price: "Contact us",
    duration: "60 – 75 min",
    tag: "",
  },
  {
    id: "tattoo",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    ),
    name: "Tattoo Removal",
    desc: "Safe, effective laser-based tattoo removal with personalized treatment plans.",
    price: "From $200",
    duration: "60 min",
    tag: "",
  },
  {
    id: "injections",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2l4 4-7 7-4-4 7-7z" />
        <path d="M10.5 12.5L2 21" />
        <path d="M14 8l-4.5 4.5" />
      </svg>
    ),
    name: "Injections (Botox/Fillers)",
    desc: "Expert RN injector for natural-looking anti-aging treatments and volumizing fillers.",
    price: "Contact us",
    duration: "30 – 60 min",
    tag: "RN Injector",
  },
  {
    id: "chemical-peel",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    name: "Chemical Peels",
    desc: "Resurface and renew your skin with medical-grade peels tailored to your skin type.",
    price: "Contact us",
    duration: "45 – 60 min",
    tag: "",
  },
  {
    id: "acne-scar",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    name: "Acne Scar Treatments",
    desc: "Comprehensive solutions targeting active acne and long-term scarring for clearer skin.",
    price: "Contact us",
    duration: "60 min",
    tag: "",
  },
  {
    id: "vascular",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    name: "Vascular Laser Treatments",
    desc: "Target redness, spider veins, and rosacea with precise vascular laser therapy.",
    price: "Contact us",
    duration: "30 – 60 min",
    tag: "",
  },
  {
    id: "skin-analysis",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    name: "Skin Analysis & Treatment Plan",
    desc: "Required for all new clients. A thorough skin assessment and personalized care plan.",
    price: "$150",
    duration: "60 min",
    tag: "New Clients",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6" style={{ background: "#FFF7FB" }}>
      <div className="section-inner">
        <div className="text-center mb-16">
          <span className="eyebrow">What We Offer</span>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
          >
            Our Treatments
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#9D174D" }}>
            Medical-grade aesthetic services delivered by certified professionals in the heart of Yellowknife.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.id} id={`service-${s.id}`} className="card p-7 flex flex-col gap-4 cursor-pointer">
              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl"
                style={{ background: "rgba(236,72,153,0.08)" }}
              >
                {s.icon}
              </div>

              {/* Tag */}
              {s.tag && (
                <span
                  className="self-start text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: "rgba(139,92,246,0.1)", color: "#8B5CF6" }}
                >
                  {s.tag}
                </span>
              )}

              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
              >
                {s.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#9D174D" }}>
                {s.desc}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #FBCFE8" }}>
                <div className="flex items-center gap-1.5 text-sm" style={{ color: "#9D174D" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {s.duration}
                </div>
                <span className="text-sm font-bold" style={{ color: "#EC4899" }}>{s.price}</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.fresha.com/a/yellowknife-skin-solutions-yellowknife-480a-range-lake-road-s59qr4ug/all-offer?menu=true&pId=547714"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 text-base"
          >
            See All Services & Book Online
          </a>
        </div>
      </div>
    </section>
  );
}

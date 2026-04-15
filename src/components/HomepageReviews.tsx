import Link from "next/link";

const FRESHA_URL =
  "https://www.fresha.com/a/yellowknife-skin-solutions-yellowknife-480a-range-lake-road-s59qr4ug/all-offer?menu=true&pId=547714";

const featured = [
  {
    id: "hr1",
    name: "Sophia H.",
    date: "April 8, 2026",
    text: "I had a phenomenal experience. Edith was so lovely and knowledgeable about the skin. She was able to assess and address all my concerns in one session — truly above and beyond.",
  },
  {
    id: "hr2",
    name: "Tracey M.",
    date: "April 1, 2026",
    text: "Joannie is amazing! She made me feel so comfortable and the results speak for themselves. I can't believe how smooth my skin looks. Will 100% be returning.",
  },
  {
    id: "hr3",
    name: "Jessica M.",
    date: "March 30, 2026",
    text: "Amazing! Very knowledgeable and addressed all concerns. I'll definitely be back. The clinic is beautiful and the staff are incredibly professional.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 14 14" fill="#EC4899" aria-hidden="true">
          <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomepageReviews() {
  return (
    <section className="py-24 px-4 sm:px-6" style={{ background: "linear-gradient(160deg, #FDF2F8 0%, #FFF7FB 100%)" }}>
      <div className="section-inner">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow">Client Love</span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
            >
              What Our Clients Say
            </h2>
          </div>

          {/* Aggregate rating pill */}
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl self-start sm:self-auto flex-shrink-0"
            style={{ background: "rgba(249,168,212,0.2)", border: "1px solid #FBCFE8" }}
          >
            <Stars />
            <div>
              <p className="text-base font-bold leading-none" style={{ color: "#831843" }}>5.0</p>
              <p className="text-xs" style={{ color: "#9D174D" }}>452 reviews</p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {featured.map((r) => (
            <article
              key={r.id}
              id={r.id}
              className="card p-5 sm:p-6 flex flex-col gap-4"
            >
              <Stars />
              <p className="text-sm leading-relaxed flex-1 italic" style={{ color: "#9D174D" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid #FBCFE8" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #F9A8D4, #EC4899)", color: "#fff" }}
                  aria-hidden="true"
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight" style={{ color: "#831843" }}>{r.name}</p>
                  <p className="text-xs" style={{ color: "#9D174D", opacity: 0.7 }}>{r.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link href="/reviews" className="btn-outline px-8 text-sm">
            Read All 452 Reviews
          </Link>
          <a
            href={FRESHA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 text-sm"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    id: "r1",
    name: "Sophia H.",
    date: "April 8, 2026",
    rating: 5,
    text: "I had a phenomenal experience. Edith was so lovely and knowledgeable about the skin. She was able to assess and address all my concerns in one session — truly above and beyond.",
  },
  {
    id: "r2",
    name: "Tracey M.",
    date: "April 1, 2026",
    rating: 5,
    text: "Joannie is amazing! She made me feel so comfortable and the results speak for themselves. I can't believe how smooth my skin looks. Will 100% be returning.",
  },
  {
    id: "r3",
    name: "Jessica M.",
    date: "March 30, 2026",
    rating: 5,
    text: "Amazing! Very knowledgeable and addressed all concerns. I'll definitely be back. The clinic is beautiful and the staff are incredibly professional.",
  },
  {
    id: "r4",
    name: "Tai M.",
    date: "March 26, 2026",
    rating: 5,
    text: "I had the best experience with Joannie today! All the ladies are so nice and very professional. I can't say enough great things about this place — highly recommend!",
  },
  {
    id: "r5",
    name: "Susan M.",
    date: "March 21, 2026",
    rating: 5,
    text: "Joannie is very professional and knowledgeable regarding the skin care I was receiving. She immediately put me at ease and explained everything thoroughly. Exceptional service.",
  },
  {
    id: "r6",
    name: "Jasmine B.",
    date: "March 20, 2026",
    rating: 5,
    text: "She was such a joy — so clear and gentle. Made the experience of having microneedling completely comfortable. The results after just one session are incredible. Thank you!",
  },
];

export default function SocialProof() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 overflow-hidden" style={{ background: "#FFF7FB" }}>
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow">Client Love</span>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
          >
            What Our Clients Say
          </h2>
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 mt-4 px-6 py-3 rounded-2xl"
            style={{ background: "rgba(249,168,212,0.2)", border: "1px solid #FBCFE8" }}
          >
            <div className="flex gap-0.5" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 14 14" fill="#EC4899" aria-hidden="true">
                  <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                </svg>
              ))}
            </div>
            <div className="text-left">
              <p className="text-xl font-bold leading-none" style={{ color: "#831843" }}>5.0</p>
              <p className="text-xs" style={{ color: "#9D174D" }}>Based on 452 reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              id={review.id}
              className="card p-7 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`${review.rating} stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="#EC4899" aria-hidden="true">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm leading-relaxed flex-1 italic" style={{ color: "#9D174D" }}>
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #FBCFE8" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #F9A8D4, #EC4899)", color: "#fff" }}
                  aria-hidden="true"
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight" style={{ color: "#831843" }}>{review.name}</p>
                  <p className="text-xs" style={{ color: "#9D174D", opacity: 0.7 }}>{review.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Fresha CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.fresha.com/a/yellowknife-skin-solutions-yellowknife-480a-range-lake-road-s59qr4ug/all-offer?menu=true&pId=547714"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 text-base"
          >
            Read All 452 Reviews on Fresha
          </a>
        </div>
      </div>
    </section>
  );
}

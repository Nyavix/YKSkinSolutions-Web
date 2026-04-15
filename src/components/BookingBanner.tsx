'use client';

export default function BookingBanner() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)" }}
    >
      <div className="section-inner text-center">
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
        >
          Ready to Glow?
        </span>
        <h2
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          Book Your Treatment Today
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.85)" }}>
          Join hundreds of satisfied clients in Yellowknife. Book online through Fresha — it&apos;s quick, easy, and available 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.fresha.com/a/yellowknife-skin-solutions-yellowknife-480a-range-lake-road-s59qr4ug/all-offer?menu=true&pId=547714"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base cursor-pointer transition-all duration-200"
            style={{ background: "#fff", color: "#EC4899" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book on Fresha
          </a>
          <a
            href="tel:+18674462013"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base cursor-pointer transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.4)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.11 2.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call (867) 446-2013
          </a>
        </div>
      </div>
    </section>
  );
}

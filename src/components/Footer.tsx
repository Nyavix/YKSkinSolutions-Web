'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 px-6" style={{ background: "#FDF2F8", borderTop: "1px solid #FBCFE8" }}>
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="14" cy="14" r="4" fill="#EC4899" />
                <ellipse cx="14" cy="7" rx="3" ry="5" fill="#F9A8D4" opacity="0.8" />
                <ellipse cx="14" cy="21" rx="3" ry="5" fill="#F9A8D4" opacity="0.8" />
                <ellipse cx="7" cy="14" rx="5" ry="3" fill="#F9A8D4" opacity="0.8" />
                <ellipse cx="21" cy="14" rx="5" ry="3" fill="#F9A8D4" opacity="0.8" />
              </svg>
              <span
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
              >
                YK Skin Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#9D174D" }}>
              Yellowknife&apos;s top-rated medical aesthetics clinic — certified aestheticians &amp; RN injectors delivering premium skin care.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/yellowknifeskinsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"
                style={{ background: "rgba(236,72,153,0.1)", color: "#EC4899" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(236,72,153,0.2)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(236,72,153,0.1)")}
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/yellowknifeskinsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"
                style={{ background: "rgba(236,72,153,0.1)", color: "#EC4899" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(236,72,153,0.2)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(236,72,153,0.1)")}
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "#8B5CF6" }}>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {[
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Reviews", href: "/reviews" },
                { label: "Contact", href: "/contact" },
                { label: "Book Online", href: "https://www.fresha.com/a/yellowknife-skin-solutions-yellowknife-480a-range-lake-road-s59qr4ug/all-offer?menu=true&pId=547714" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm transition-colors duration-200 cursor-pointer"
                    style={{ color: "#9D174D" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#EC4899")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9D174D")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "#8B5CF6" }}>
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              <li className="flex gap-3 items-start">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm" style={{ color: "#9D174D" }}>
                  Centre Ice Plaza<br />480A Range Lake Road, Unit 7<br />Yellowknife, NT X1A 3R9
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.11 2.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+18674462013" className="text-sm cursor-pointer transition-colors duration-200" style={{ color: "#9D174D" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#EC4899")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9D174D")}
                >
                  (867) 446-2013
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:yellowknifeskinsolutions@gmail.com" className="text-sm cursor-pointer transition-colors duration-200" style={{ color: "#9D174D" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#EC4899")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9D174D")}
                >
                  yellowknifeskinsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 text-sm"
          style={{ borderTop: "1px solid #FBCFE8", color: "#9D174D", opacity: 0.7 }}
        >
          <p>&copy; {year} Yellowknife Skin Solutions. All rights reserved.</p>
          <p>Designed with care in Yellowknife, NT 🌟</p>
        </div>
      </div>
    </footer>
  );
}

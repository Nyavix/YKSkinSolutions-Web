import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book | Yellowknife Skin Solutions",
  description:
    "Get in touch with Yellowknife Skin Solutions. Call, email, or book online through Fresha. Located at Centre Ice Plaza, 480A Range Lake Road, Yellowknife, NT.",
};

export default function ContactPage() {
  return (
    <div
      className="pt-28 pb-24 px-4 sm:px-6 min-h-screen"
      style={{ background: "linear-gradient(160deg, #FDF2F8 0%, #FFF7FB 100%)" }}
    >
      <div className="section-inner max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow">Get In Touch</span>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
          >
            Contact Us
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#9D174D" }}>
            Ready to start your skin journey? Book online, give us a call, or send us an email — we&apos;re happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact details card */}
          <div
            className="card p-5 sm:p-8 flex flex-col gap-6"
            style={{ background: "#FFF7FB", border: "1px solid #FBCFE8", borderRadius: "1.25rem" }}
          >
            <h2
              className="text-2xl font-semibold"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
            >
              Contact Information
            </h2>

            {[
              {
                label: "Address",
                value: "Centre Ice Plaza\n480A Range Lake Road, Unit 7\nYellowknife, NT X1A 3R9",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                href: "https://maps.google.com/?q=480A+Range+Lake+Road+Yellowknife+NT",
              },
              {
                label: "Phone",
                value: "(867) 446-2013",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.11 2.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
                href: "tel:+18674462013",
              },
              {
                label: "Email",
                value: "yellowknifeskinsolutions@gmail.com",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                href: "mailto:yellowknifeskinsolutions@gmail.com",
              },
              {
                label: "Hours",
                value: "Open until 7:00 PM\nOnline booking available 24/7",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#8B5CF6" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm whitespace-pre-line transition-colors duration-200"
                      style={{ color: "#831843", overflowWrap: "break-word", wordBreak: "break-all" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm whitespace-pre-line" style={{ color: "#831843" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Booking CTA card */}
          <div className="flex flex-col gap-6">
            {/* Fresha booking */}
            <div
              className="card p-5 sm:p-8"
              style={{
                background: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
                border: "none",
                borderRadius: "1.25rem",
              }}
            >
              <h2
                className="text-2xl font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                Book Online
              </h2>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                Schedule your appointment 24/7 through Fresha — quick, easy, and secure.
              </p>
              <a
                href="https://www.fresha.com/a/yellowknife-skin-solutions-yellowknife-480a-range-lake-road-s59qr4ug/all-offer?menu=true&pId=547714"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm cursor-pointer transition-all duration-200 w-full justify-center whitespace-nowrap"
                style={{ background: "#fff", color: "#EC4899" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book on Fresha
              </a>
            </div>

            {/* Social / languages */}
            <div
              className="card p-5 sm:p-8"
              style={{ background: "#FFF7FB", border: "1px solid #FBCFE8", borderRadius: "1.25rem" }}
            >
              <h2
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
              >
                Follow Us
              </h2>
              <div className="flex gap-3 mb-6">
                <a
                  href="https://www.facebook.com/yellowknifeskinsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200"
                  style={{ background: "rgba(236,72,153,0.1)", color: "#EC4899" }}
                  aria-label="Visit us on Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/yellowknifeskinsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200"
                  style={{ background: "rgba(236,72,153,0.1)", color: "#EC4899" }}
                  aria-label="Visit us on Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </div>
              <p className="text-sm" style={{ color: "#9D174D" }}>
                <span className="font-semibold" style={{ color: "#8B5CF6" }}>Languages:</span>{" "}
                We serve clients in both English and French.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

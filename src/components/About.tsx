import Image from "next/image";

const team = [
  {
    id: "edith",
    name: "Edith",
    role: "Master Aesthetician & Owner",
    bio: "With years of expertise in advanced skincare, Edith leads every treatment with precision and a deep passion for helping clients achieve their skin goals. As Owner, she ensures every experience at YK Skin Solutions is exceptional.",
    rating: 5.0,
    photo: "/team/Edith.jpg",
  },
  {
    id: "joannie",
    name: "Joannie R.",
    role: "Nurse & Laser Technician",
    bio: "Joannie brings her nursing background and laser expertise to every session, combining clinical skill with a warm, professional bedside manner. Clients love her knowledge and gentle approach.",
    rating: 5.0,
    photo: "/team/Joannie.jpeg",
  },
];

const clinicDetails = [
  {
    label: "Location",
    value: "Centre Ice Plaza — 480A Range Lake Road, Yellowknife, NT X1A 3R9",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(867) 446-2013",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.11 2.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "yellowknifeskinsolutions@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Open until 7:00 PM · Online booking available",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Languages",
    value: "English & French",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6" style={{ background: "linear-gradient(160deg, #FDF2F8 0%, #FFF7FB 100%)" }}>
      <div className="section-inner">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="eyebrow">Who We Are</span>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
          >
            Meet Your Skin Experts
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#9D174D" }}>
            A dedicated team of certified professionals committed to your skin health and confidence.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          {team.map((member) => (
            <article key={member.id} id={`team-${member.id}`} className="card p-5 sm:p-8 text-center">
              {/* Photo */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <div
                  className="relative w-full h-full rounded-full overflow-hidden"
                  style={{ boxShadow: "0 0 0 3px #EC4899, 0 4px 20px rgba(236,72,153,0.25)" }}
                >
                  <Image
                    src={member.photo}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-0.5 mb-3" aria-label={`${member.rating} stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="#EC4899" aria-hidden="true">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                  </svg>
                ))}
              </div>

              <h3
                className="text-2xl font-semibold mb-1"
                style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
              >
                {member.name}
              </h3>
              <p className="text-sm font-semibold mb-4" style={{ color: "#8B5CF6" }}>
                {member.role}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#9D174D" }}>
                {member.bio}
              </p>
            </article>
          ))}
        </div>

        {/* About the clinic */}
        <div
          className="rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center"
          style={{ background: "rgba(249,168,212,0.1)", border: "1px solid #FBCFE8" }}
        >
          <div>
            <span className="eyebrow">Our Clinic</span>
            <h3
              className="text-3xl font-bold mb-5"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "#831843" }}
            >
              Yellowknife&apos;s Premier Skin Clinic
            </h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#9D174D" }}>
              Nestled at Centre Ice Plaza in the heart of Yellowknife, NT, Yellowknife Skin Solutions combines medical expertise with a luxurious, welcoming environment. Our clinic is a proud partner of ZO Skin Health, offering professional-grade skincare products alongside our treatments.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#9D174D" }}>
              We serve clients in both English and French, ensuring every patient feels comfortable and fully understood from the first consultation.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {clinicDetails.map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#8B5CF6" }}>{item.label}</p>
                  <p className="text-sm" style={{ color: "#831843" }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

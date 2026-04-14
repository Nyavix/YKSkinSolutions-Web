'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

const BOOKING_URL =
  'https://www.fresha.com/a/yellowknife-skin-solutions-yellowknife-480a-range-lake-road-s59qr4ug/all-offer?menu=true&pId=547714';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-50">
        <nav
          className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl"
          style={{
            background: 'rgba(253, 242, 248, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid #FBCFE8',
            boxShadow: '0 4px 24px rgba(236, 72, 153, 0.08)',
          }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            aria-label="Yellowknife Skin Solutions Home"
          >
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="14" cy="14" r="4" fill="#EC4899" />
              <ellipse cx="14" cy="7" rx="3" ry="5" fill="#F9A8D4" opacity="0.8" />
              <ellipse cx="14" cy="21" rx="3" ry="5" fill="#F9A8D4" opacity="0.8" />
              <ellipse cx="7" cy="14" rx="5" ry="3" fill="#F9A8D4" opacity="0.8" />
              <ellipse cx="21" cy="14" rx="5" ry="3" fill="#F9A8D4" opacity="0.8" />
              <ellipse cx="9" cy="9" rx="3" ry="4.5" fill="#FBCFE8" opacity="0.7" transform="rotate(-45 9 9)" />
              <ellipse cx="19" cy="9" rx="3" ry="4.5" fill="#FBCFE8" opacity="0.7" transform="rotate(45 19 9)" />
              <ellipse cx="9" cy="19" rx="3" ry="4.5" fill="#FBCFE8" opacity="0.7" transform="rotate(45 9 19)" />
              <ellipse cx="19" cy="19" rx="3" ry="4.5" fill="#FBCFE8" opacity="0.7" transform="rotate(-45 19 19)" />
            </svg>
            <span
              className="text-sm font-semibold tracking-tight"
              style={{ fontFamily: 'var(--font-playfair, serif)', color: '#831843' }}
            >
              YK Skin Solutions
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-200 cursor-pointer relative pb-0.5"
                    style={{
                      color: isActive ? '#EC4899' : '#9D174D',
                      borderBottom: isActive ? '2px solid #EC4899' : '2px solid transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side: Book Now (desktop) + Burger (mobile) */}
          <div className="flex items-center gap-3">
            {/* Desktop Book Now */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5 hidden md:inline-flex"
            >
              Book Now
            </a>

            {/* Hamburger — mobile only */}
            <button
              id="nav-burger"
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-xl cursor-pointer transition-colors duration-200 flex-shrink-0"
              style={{ background: menuOpen ? 'rgba(236,72,153,0.1)' : 'transparent' }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {/* Animated bar lines */}
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-300 origin-center"
                style={{
                  background: '#831843',
                  transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-300"
                style={{
                  background: '#831843',
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? 'scaleX(0)' : 'none',
                }}
              />
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-300 origin-center"
                style={{
                  background: '#831843',
                  transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className="md:hidden fixed inset-0 z-40 transition-all duration-300"
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'rgba(131, 24, 67, 0.15)',
            backdropFilter: 'blur(4px)',
            opacity: menuOpen ? 1 : 0,
          }}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-down panel */}
        <div
          className="absolute top-0 left-4 right-4 rounded-b-3xl shadow-2xl transition-all duration-300 overflow-hidden"
          style={{
            background: 'rgba(253, 242, 248, 0.98)',
            backdropFilter: 'blur(20px)',
            border: '1px solid #FBCFE8',
            borderTop: 'none',
            transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
            paddingTop: '88px', // clears the navbar
          }}
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col list-none m-0 p-0 px-6 pb-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      id={`mobile-nav-${link.label.toLowerCase()}`}
                      className="flex items-center justify-between py-4 text-base font-medium cursor-pointer transition-colors duration-200"
                      style={{
                        color: isActive ? '#EC4899' : '#831843',
                        borderBottom: i < navLinks.length - 1 ? '1px solid #FBCFE8' : 'none',
                      }}
                    >
                      {link.label}
                      {isActive ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9D174D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Book Now CTA in mobile menu */}
            <div className="px-6 py-5" style={{ borderTop: '1px solid #FBCFE8' }}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-sm py-3.5"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '8px' }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book an Appointment
              </a>

              {/* Quick contact */}
              <a
                href="tel:+18674462013"
                className="flex items-center justify-center gap-2 mt-3 py-2 text-sm font-medium cursor-pointer transition-colors duration-200"
                style={{ color: '#9D174D' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.11 2.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                (867) 446-2013
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

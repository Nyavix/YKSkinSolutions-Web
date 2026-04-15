'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const BOOKING_URL =
  'https://www.fresha.com/a/yellowknife-skin-solutions-yellowknife-480a-range-lake-road-s59qr4ug/all-offer?menu=true&pId=547714';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.pause();

    let targetTime = 0;
    let rafId: number;

    // rAF loop: lerp video.currentTime toward targetTime for butter-smooth scrub
    const tick = () => {
      if (video.duration && video.readyState >= 2) {
        const diff = targetTime - video.currentTime;
        if (Math.abs(diff) > 0.001) {
          video.currentTime += diff * 0.1; // 0.1 = smoothing factor (lower = slower/smoother)
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    // Scroll handler: only updates targetTime, no seeking
    const onScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0 || !video.duration) return;

      const scrolled = -top; // px scrolled into section
      const progress = Math.min(Math.max(scrolled / scrollable, 0), 1);
      targetTime = progress * video.duration;
    };

    video.addEventListener('loadedmetadata', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener('loadedmetadata', onScroll);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // Outer wrapper: 200vh gives the scroll room to drive the video
    <section
      ref={sectionRef}
      id="hero"
      className="relative"
      style={{ minHeight: '200vh' }}
    >
      {/* Sticky container — stays viewport-sized while outer section scrolls behind it */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* ── Video ── */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ objectFit: 'contain', objectPosition: 'center', zIndex: 0, background: '#FDF2F8' }}
        >
          <source src="/Hero-Vid.mp4" type="video/mp4" />
        </video>

        {/* Semi-transparent gradient overlay for text readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              'linear-gradient(160deg, rgba(253,242,248,0.75) 0%, rgba(255,247,251,0.65) 50%, rgba(253,232,244,0.75) 100%)',
          }}
        />

        {/* Decorative blobs */}
        <div aria-hidden="true" className="absolute top-[-10%] right-[-5%] w-80 h-80 rounded-full pointer-events-none"
          style={{ zIndex: 2, background: 'radial-gradient(circle, rgba(249,168,212,0.35) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div aria-hidden="true" className="absolute bottom-[5%] left-[-5%] w-96 h-96 rounded-full pointer-events-none"
          style={{ zIndex: 2, background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        {/* ── Hero content ── */}
        <div className="relative flex flex-col justify-center items-center text-center h-full px-6 pt-24 pb-16"
          style={{ zIndex: 3 }}>
          <div className="max-w-3xl mx-auto w-full">

            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
              style={{ background: 'rgba(249,168,212,0.3)', border: '1px solid #FBCFE8', color: '#9D174D' }}>
              <span className="flex gap-0.5" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#EC4899" aria-hidden="true">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                  </svg>
                ))}
              </span>
              5.0 · 452 Reviews on Fresha
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair, serif)', color: '#831843' }}
            >
              Your Skin Deserves{' '}
              <span className="block" style={{
                background: 'linear-gradient(90deg, #EC4899, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                the Best Care
              </span>
            </h1>

            <p className="text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: '#9D174D' }}>
              Yellowknife&apos;s premier medical aesthetics clinic — expert treatments from certified aestheticians and RN injectors, delivered with precision and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="btn-primary text-base px-8 w-full sm:w-auto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book an Appointment
              </a>
              <Link href="/services" className="btn-outline text-base px-8 w-full sm:w-auto">
                Explore Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10"
              style={{ borderTop: '1px solid rgba(251,207,232,0.6)' }}>
              {['Certified Aestheticians', 'RN Injector on Staff', 'ZO Skin Health Partner', 'Open Until 7 PM'].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: '#9D174D' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {b}
                </div>
              ))}
            </div>

            {/* Scroll cue */}
            <div className="mt-10 flex flex-col items-center gap-1" aria-hidden="true">
              <span className="text-xs tracking-widest uppercase" style={{ color: '#9D174D', opacity: 0.5 }}>Scroll</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'hero-bounce 1.8s infinite' }}>
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}

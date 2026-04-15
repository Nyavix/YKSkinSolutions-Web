'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

const TOTAL_FRAMES = 96;
const BOOKING_URL =
  'https://www.fresha.com/a/yellowknife-skin-solutions-yellowknife-480a-range-lake-road-s59qr4ug/all-offer?menu=true&pId=547714';

// Annotation cards: show/hide at scroll progress 0–1
const CARDS = [
  {
    id: 'card-1',
    showAt: 0.15,
    hideAt: 0.42,
    number: '01',
    title: 'Precision Skin Mapping',
    body: 'Advanced 3D topographic analysis scans every contour of your unique facial structure with clinical accuracy.',
    stat: '452',
    statLabel: 'Five-Star Reviews',
  },
  {
    id: 'card-2',
    showAt: 0.42,
    hideAt: 0.70,
    number: '02',
    title: 'Targeted Treatment Zones',
    body: 'Our certified team identifies exact zones for laser, filler, and aesthetic treatments — no guesswork.',
    stat: '5.0★',
    statLabel: 'Average Rating',
  },
  {
    id: 'card-3',
    showAt: 0.70,
    hideAt: 0.95,
    number: '03',
    title: 'Your Transformation Begins',
    body: 'Personalized protocols designed specifically for your skin — delivered by Yellowknife\'s premier aesthetics team.',
    stat: '10+',
    statLabel: 'Treatments Available',
  },
];

const STATS = [
  { value: 5, suffix: '.0★', label: 'Average Rating', decimals: 0 },
  { value: 452, suffix: '', label: 'Five-Star Reviews', decimals: 0 },
  { value: 10, suffix: '+', label: 'Treatments Available', decimals: 0 },
  { value: 100, suffix: '%', label: 'Certified Staff', decimals: 0 },
];

function fireConfetti() {
  const colors = ['#EC4899', '#F9A8D4', '#8B5CF6', '#FBCFE8', '#fff'];
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors,
    scalar: 1.1,
  });
  setTimeout(() => {
    confetti({ particleCount: 60, spread: 120, origin: { y: 0.55 }, colors, angle: 60 });
    confetti({ particleCount: 60, spread: 120, origin: { y: 0.55 }, colors, angle: 120 });
  }, 200);
}

// ── Count-up hook ──────────────────────────────────────────
function useCountUp(target: number, duration = 1800, triggered = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 4); // easeOutQuart
      setVal(Math.round(target * ease));
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [triggered, target, duration]);
  return val;
}

// ── Stat card ─────────────────────────────────────────────
function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const count = useCountUp(stat.value, 1600, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTriggered(true); }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-8 rounded-3xl"
      style={{
        background: 'rgba(249,168,212,0.08)',
        border: '1px solid #FBCFE8',
        animationDelay: `${index * 120}ms`,
      }}
    >
      <div
        className="text-5xl font-bold mb-2 tabular-nums"
        style={{
          fontFamily: 'var(--font-playfair, serif)',
          background: 'linear-gradient(90deg, #EC4899, #8B5CF6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: triggered ? 'drop-shadow(0 0 16px rgba(236,72,153,0.35))' : 'none',
          transition: 'filter 0.3s',
        }}
      >
        {count}{stat.suffix}
      </div>
      <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#9D174D' }}>
        {stat.label}
      </p>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef(0);
  const currentFrameRef = useRef(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const scrollProgressRef = useRef(0);

  // ── Preload all frames ──────────────────────────────────
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let loaded = 0;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = String(i).padStart(4, '0');
      img.src = `/frames/frame_${num}.jpg`;
      img.onload = () => {
        loaded++;
        loadedRef.current = loaded;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) setReady(true);
      };
      imgs.push(img);
    }
    framesRef.current = imgs;
  }, []);

  // ── Canvas render loop + scroll handler ─────────────────
  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d')!;
    let rafId: number;
    let targetFrame = 0;
    let smoothFrame = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
      drawFrame(currentFrameRef.current);
    };

    const drawFrame = (index: number) => {
      const img = framesRef.current[Math.round(index)];
      if (!img?.complete) return;
      const W = window.innerWidth;
      const H = window.innerHeight;
      const iW = img.naturalWidth;
      const iH = img.naturalHeight;
      ctx.clearRect(0, 0, W, H);

      // Cover-fit on all screen sizes: scale to fill the viewport,
      // cropping whichever axis overflows (sides on portrait mobile).
      const scale = Math.max(W / iW, H / iH);
      const offX = (W - iW * scale) / 2;
      const offY = (H - iH * scale) / 2;
      ctx.drawImage(img, offX, offY, iW * scale, iH * scale);
    };

    const onScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(Math.max(-top / scrollable, 0), 1);
      scrollProgressRef.current = progress;
      targetFrame = progress * (TOTAL_FRAMES - 1);

      // Update active annotation card
      const card = CARDS.find(c => progress >= c.showAt && progress < c.hideAt);
      setActiveCard(card?.id ?? null);
    };

    const tick = () => {
      // Lerp smoothFrame toward targetFrame
      const diff = targetFrame - smoothFrame;
      if (Math.abs(diff) > 0.05) {
        smoothFrame += diff * 0.12;
        const fi = Math.round(smoothFrame);
        if (fi !== currentFrameRef.current) {
          currentFrameRef.current = fi;
          drawFrame(fi);
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [ready]);

  return (
    <>
      {/* ── Loader ─────────────────────────────────────────── */}
      {!ready && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6"
          style={{ background: '#FDF2F8' }}
        >
          {/* Flower logo */}
          <svg width="52" height="52" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0 0 12px rgba(236,72,153,0.4))', animation: 'loader-pulse 1.4s ease-in-out infinite' }}>
            <circle cx="14" cy="14" r="4" fill="#EC4899" />
            <ellipse cx="14" cy="7" rx="3" ry="5" fill="#F9A8D4" opacity="0.85" />
            <ellipse cx="14" cy="21" rx="3" ry="5" fill="#F9A8D4" opacity="0.85" />
            <ellipse cx="7" cy="14" rx="5" ry="3" fill="#F9A8D4" opacity="0.85" />
            <ellipse cx="21" cy="14" rx="5" ry="3" fill="#F9A8D4" opacity="0.85" />
            <ellipse cx="9" cy="9" rx="3" ry="4.5" fill="#FBCFE8" opacity="0.7" transform="rotate(-45 9 9)" />
            <ellipse cx="19" cy="9" rx="3" ry="4.5" fill="#FBCFE8" opacity="0.7" transform="rotate(45 19 9)" />
            <ellipse cx="9" cy="19" rx="3" ry="4.5" fill="#FBCFE8" opacity="0.7" transform="rotate(45 9 19)" />
            <ellipse cx="19" cy="19" rx="3" ry="4.5" fill="#FBCFE8" opacity="0.7" transform="rotate(-45 19 19)" />
          </svg>
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#9D174D' }}>
            Loading experience…
          </p>
          <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: '#FBCFE8' }}>
            <div
              className="h-full rounded-full transition-all duration-200"
              style={{
                width: `${loadProgress}%`,
                background: 'linear-gradient(90deg, #EC4899, #8B5CF6)',
              }}
            />
          </div>
          <p className="text-xs tabular-nums" style={{ color: '#9D174D', opacity: 0.5 }}>{loadProgress}%</p>
        </div>
      )}

      {/* ── Scroll animation section ───────────────────────── */}
      <section
        ref={sectionRef}
        id="hero"
        className="relative"
        style={{ height: '500vh' }}
      >
        {/* Sticky canvas viewport */}
        <div className="sticky top-0 w-full overflow-hidden" style={{ height: '100vh' }}>

          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0"
            style={{ zIndex: 0, background: '#FDF2F8' }}
          />

          {/* Subtle overlay for text legibility */}
          <div className="absolute inset-0 pointer-events-none" style={{
            zIndex: 1,
            background: 'linear-gradient(to bottom, rgba(253,242,248,0.55) 0%, rgba(253,242,248,0.1) 40%, rgba(253,242,248,0.1) 60%, rgba(253,242,248,0.65) 100%)',
          }} />

          {/* ── Hero text (visible at scroll start) ── */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 pt-24 transition-opacity duration-700"
            style={{
              zIndex: 2,
              opacity: scrollProgressRef.current > 0.12 ? 0 : 1,
              pointerEvents: scrollProgressRef.current > 0.12 ? 'none' : 'auto',
            }}
          >
            <HeroContent fireConfetti={fireConfetti} />
          </div>

          {/* ── Annotation cards ── */}
          {CARDS.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="absolute left-6 sm:left-10 transition-all duration-500"
              style={{
                bottom: '10vh',
                zIndex: 3,
                opacity: activeCard === card.id ? 1 : 0,
                transform: activeCard === card.id ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
                pointerEvents: activeCard === card.id ? 'auto' : 'none',
                maxWidth: '340px',
              }}
            >
              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{
                  background: 'rgba(253,242,248,0.88)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid #FBCFE8',
                  boxShadow: '0 8px 40px rgba(236,72,153,0.15)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#EC4899,#8B5CF6)', color: '#fff' }}
                  >
                    {card.number}
                  </span>
                  <h3
                    className="text-base font-semibold"
                    style={{ fontFamily: 'var(--font-playfair, serif)', color: '#831843' }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-4 hidden sm:block" style={{ color: '#9D174D' }}>
                  {card.body}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="text-2xl font-bold tabular-nums"
                    style={{
                      fontFamily: 'var(--font-playfair, serif)',
                      background: 'linear-gradient(90deg,#EC4899,#8B5CF6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {card.stat}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#8B5CF6' }}>
                    {card.statLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Scroll cue — only at very start */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity duration-500"
            style={{ zIndex: 4, opacity: scrollProgressRef.current > 0.05 ? 0 : 1 }}
            aria-hidden="true"
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: '#9D174D', opacity: 0.55 }}>Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'hero-bounce 1.8s infinite' }}>
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Stats section ──────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6" style={{ background: 'linear-gradient(160deg, #FFF7FB 0%, #FDF2F8 100%)' }}>
        <div className="section-inner max-w-4xl">
          <div className="text-center mb-14">
            <span className="eyebrow">By the Numbers</span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-playfair, serif)', color: '#831843' }}>
              Yellowknife&apos;s Most Trusted Skin Clinic
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {STATS.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes hero-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes loader-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: 0.8; }
        }
      `}</style>
    </>
  );
}

// ── Hero text content (separated to avoid re-render issues) ──
function HeroContent({ fireConfetti }: { fireConfetti: () => void }) {
  return (
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

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        style={{ fontFamily: 'var(--font-playfair, serif)', color: '#831843' }}>
        Your Skin Deserves{' '}
        <span className="block" style={{
          background: 'linear-gradient(90deg, #EC4899, #8B5CF6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          the Best Care
        </span>
      </h1>

      <p className="text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: '#9D174D' }}>
        Yellowknife&apos;s premier medical aesthetics clinic — expert treatments from certified aestheticians and RN injectors.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base px-8 w-full sm:w-auto"
          onClick={fireConfetti}
          id="hero-book-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { Mono, SecHead } from '@/components/ui';
import { useWindowWidth } from '@/hooks';
import { EXP, type ExpEntry } from '@/data';

/* ─────────────────────────────────────────────────────────
   EXPAND PANEL
   ───────────────────────────────────────────────────────── */

function ExpandPanel({ ex, open }: { ex: ExpEntry; open: boolean }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: 'grid-template-rows 0.52s cubic-bezier(0.16,1,0.3,1)',
    }}>
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          padding: '14px 0 4px',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.38s ease 0.08s, transform 0.38s ease 0.08s',
        }}>
          <div style={{
            padding: '16px 18px',
            background: `color-mix(in srgb, ${ex.c} 5%, var(--surface))`,
            border: `1px solid color-mix(in srgb, ${ex.c} 16%, var(--border))`,
            borderLeft: `3px solid ${ex.c}`,
            borderRadius: 10,
          }}>
            <Mono style={{
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: 'var(--text3)',
              display: 'block', marginBottom: 10,
            }}>Key Contributions</Mono>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
              {ex.responsibilities.map((r, i) => (
                <li key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
                    background: ex.c, boxShadow: `0 0 6px ${ex.c}`, marginTop: 8,
                  }} />
                  <span style={{ fontSize: 13, lineHeight: 1.72, color: 'var(--text2)' }}>{r}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {ex.tags.map((t) => (
                <span key={t} style={{
                  padding: '3px 9px', borderRadius: 20,
                  fontSize: 10.5, fontWeight: 600, letterSpacing: '0.04em',
                  fontFamily: "'JetBrains Mono', monospace",
                  background: `color-mix(in srgb, ${ex.c} 11%, transparent)`,
                  color: ex.c,
                  border: `1px solid color-mix(in srgb, ${ex.c} 20%, transparent)`,
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   ENTRY TEXT
   ───────────────────────────────────────────────────────── */

function EntryText({
  ex, isLeft, open, setOpen,
}: {
  ex: ExpEntry; isLeft: boolean; open: boolean; setOpen: (v: boolean) => void;
}) {
  return (
    <>
      <Mono style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: ex.c, display: 'block', marginBottom: 6,
      }}>{ex.period}</Mono>

      <h3 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(15px, 1.6vw, 19px)', fontWeight: 800,
        color: 'var(--text)', letterSpacing: '-0.02em',
        margin: '0 0 4px', lineHeight: 1.2,
      }}>{ex.role}</h3>

      <div style={{ marginBottom: 10, display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
        {ex.orgHref ? (
          <a href={ex.orgHref} target="_blank" rel="noopener noreferrer"
            style={{
              fontSize: 13, fontWeight: 600, color: ex.c,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
            {isLeft ? <><ExternalLink size={10} />{' '}{ex.org}</> : <>{ex.org}{' '}<ExternalLink size={10} /></>}
          </a>
        ) : (
          <span style={{ fontSize: 13, fontWeight: 600, color: ex.c }}>{ex.org}</span>
        )}
      </div>

      <p style={{ fontSize: 13, lineHeight: 1.78, color: 'var(--text2)', margin: '0 0 9px' }}>
        {ex.desc}
      </p>

      <p style={{
        fontSize: 10.5, color: 'var(--text3)', marginBottom: 10,
        fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em',
      }}>
        {ex.tags.join(' · ')}
      </p>

      <div style={{ display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
        <button onClick={() => setOpen(!open)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '4px 12px', borderRadius: 20,
          fontSize: 10.5, fontWeight: 600, letterSpacing: '0.04em',
          fontFamily: "'JetBrains Mono', monospace", cursor: 'pointer',
          background: open ? `color-mix(in srgb, ${ex.c} 12%, var(--surface))` : 'transparent',
          color: open ? ex.c : 'var(--text3)',
          border: `1px solid ${open ? `color-mix(in srgb, ${ex.c} 26%, transparent)` : 'var(--border)'}`,
          transition: 'all 0.28s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = ex.c; e.currentTarget.style.borderColor = `color-mix(in srgb, ${ex.c} 36%, transparent)`; }}
          onMouseLeave={(e) => { if (!open) { e.currentTarget.style.color = 'var(--text3)'; e.currentTarget.style.borderColor = 'var(--border)'; } }}>
          {open ? 'Hide' : 'Details'}
          <ChevronDown size={11} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.38s cubic-bezier(0.16,1,0.3,1)' }} />
        </button>
      </div>

      <ExpandPanel ex={ex} open={open} />
    </>
  );
}

/* ─────────────────────────────────────────────────────────
   DESKTOP ENTRY — alternating zigzag
   ───────────────────────────────────────────────────────── */

function DesktopEntry({ ex, index, isLeft, seen, spinePct }: {
  ex: ExpEntry; index: number; isLeft: boolean; seen: boolean; spinePct: number;
}) {
  const [open, setOpen] = useState(false);
  const contentVisible = seen;
  const badgeActive = spinePct > 0.15;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 72px 1fr', position: 'relative' }}>
      {/* Left slot */}
      <div style={{ paddingRight: 28, paddingBottom: 56, display: 'flex', justifyContent: 'flex-end' }}>
        {isLeft && (
          <div style={{
            maxWidth: 340,
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'none' : 'translateX(-28px)',
            transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 40}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 40}ms`,
            textAlign: 'right',
          }}>
            <EntryText ex={ex} isLeft={true} open={open} setOpen={setOpen} />
          </div>
        )}
      </div>

      {/* Center — badge + branch arms */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', paddingBottom: 56, overflow: 'visible' }}>
        {/* Left arm (for right-content entries) */}
        <div style={{
          position: 'absolute', top: 21, right: '50%', marginRight: 20,
          width: 32, height: 1.5,
          background: ex.c,
          opacity: !isLeft ? (contentVisible ? 0.8 : 0) : 0,
          transform: `scaleX(${contentVisible ? 1 : 0})`,
          transformOrigin: 'right',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.22s, opacity 0.4s ease 0.22s',
          borderRadius: 2,
        }} />
        {/* Right arm (for left-content entries) */}
        <div style={{
          position: 'absolute', top: 21, left: '50%', marginLeft: 20,
          width: 32, height: 1.5,
          background: ex.c,
          opacity: isLeft ? (contentVisible ? 0.8 : 0) : 0,
          transform: `scaleX(${contentVisible ? 1 : 0})`,
          transformOrigin: 'left',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.22s, opacity 0.4s ease 0.22s',
          borderRadius: 2,
        }} />
        {/* Badge */}
        <div style={{
          width: 42, height: 42, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: ex.c,
          background: `color-mix(in srgb, ${ex.c} 14%, var(--surface2))`,
          border: `2px solid color-mix(in srgb, ${ex.c} ${badgeActive ? 55 : 20}%, var(--border))`,
          boxShadow: badgeActive
            ? `0 0 0 5px color-mix(in srgb, ${ex.c} 10%, transparent), 0 0 20px color-mix(in srgb, ${ex.c} 22%, transparent)`
            : 'none',
          opacity: seen ? 1 : 0.25,
          transition: 'border-color 0.6s ease, box-shadow 0.6s ease, opacity 0.6s ease',
          zIndex: 3, position: 'relative',
        }}>{ex.icon}</div>
      </div>

      {/* Right slot */}
      <div style={{ paddingLeft: 28, paddingBottom: 56, display: 'flex', justifyContent: 'flex-start' }}>
        {!isLeft && (
          <div style={{
            maxWidth: 340,
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'none' : 'translateX(28px)',
            transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 40}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 40}ms`,
            textAlign: 'left',
          }}>
            <EntryText ex={ex} isLeft={false} open={open} setOpen={setOpen} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MOBILE ENTRY — single column, spine on left
   ───────────────────────────────────────────────────────── */

function MobileEntry({ ex, index, seen, spinePct }: {
  ex: ExpEntry; index: number; seen: boolean; spinePct: number;
}) {
  const [open, setOpen] = useState(false);
  const badgeActive = spinePct > 0.15;

  return (
    <div style={{ display: 'flex', gap: 0, position: 'relative' }}>
      {/* Left: badge column */}
      <div style={{ width: 48, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Badge */}
        <div style={{
          width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: ex.c,
          background: `color-mix(in srgb, ${ex.c} 14%, var(--surface2))`,
          border: `2px solid color-mix(in srgb, ${ex.c} ${badgeActive ? 55 : 20}%, var(--border))`,
          boxShadow: badgeActive
            ? `0 0 0 4px color-mix(in srgb, ${ex.c} 10%, transparent), 0 0 14px color-mix(in srgb, ${ex.c} 20%, transparent)`
            : 'none',
          opacity: seen ? 1 : 0.25,
          transition: 'border-color 0.6s ease, box-shadow 0.6s ease, opacity 0.6s ease',
          zIndex: 3, position: 'relative', marginTop: 2,
        }}>{ex.icon}</div>
      </div>

      {/* Right: content */}
      <div style={{
        flex: 1, paddingLeft: 12, paddingBottom: 40,
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : 'translateX(18px)',
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 40}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 40}ms`,
        textAlign: 'left',
      }}>
        <Mono style={{
          fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: ex.c, display: 'block', marginBottom: 5,
        }}>{ex.period}</Mono>

        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 16, fontWeight: 800,
          color: 'var(--text)', letterSpacing: '-0.02em',
          margin: '0 0 3px', lineHeight: 1.2,
        }}>{ex.role}</h3>

        <div style={{ marginBottom: 9 }}>
          {ex.orgHref ? (
            <a href={ex.orgHref} target="_blank" rel="noopener noreferrer"
              style={{
                fontSize: 12.5, fontWeight: 600, color: ex.c,
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
              {ex.org} <ExternalLink size={10} />
            </a>
          ) : (
            <span style={{ fontSize: 12.5, fontWeight: 600, color: ex.c }}>{ex.org}</span>
          )}
        </div>

        <p style={{ fontSize: 12.5, lineHeight: 1.76, color: 'var(--text2)', margin: '0 0 8px' }}>
          {ex.desc}
        </p>

        <p style={{
          fontSize: 10, color: 'var(--text3)', marginBottom: 9,
          fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em',
          lineHeight: 1.7,
        }}>
          {ex.tags.join(' · ')}
        </p>

        <button onClick={() => setOpen((v) => !v)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '4px 10px', borderRadius: 20,
          fontSize: 10, fontWeight: 600, letterSpacing: '0.04em',
          fontFamily: "'JetBrains Mono', monospace", cursor: 'pointer',
          background: open ? `color-mix(in srgb, ${ex.c} 12%, var(--surface))` : 'transparent',
          color: open ? ex.c : 'var(--text3)',
          border: `1px solid ${open ? `color-mix(in srgb, ${ex.c} 26%, transparent)` : 'var(--border)'}`,
          transition: 'all 0.28s ease',
        }}>
          {open ? 'Hide' : 'Details'}
          <ChevronDown size={10} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.38s cubic-bezier(0.16,1,0.3,1)' }} />
        </button>

        <ExpandPanel ex={ex} open={open} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   EXPERIENCE SECTION
   ───────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────
   CATEGORY TIMELINE — renders one group of entries with its own spine
   ───────────────────────────────────────────────────────── */

function CategoryTimeline({
  entries,
  isMobile,
  globalOffset,
}: {
  entries: ExpEntry[];
  isMobile: boolean;
  globalOffset: number;    /* starting index for seen/spinePcts arrays */
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs   = useRef<(HTMLDivElement | null)[]>([]);

  const [seen,      setSeen]      = useState<boolean[]>(() => new Array(entries.length).fill(false));
  const [spineH,    setSpineH]    = useState(0);
  const [spinePcts, setSpinePcts] = useState<number[]>(() => new Array(entries.length).fill(0));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSeen((prev) => { if (prev[i]) return prev; const next = [...prev]; next[i] = true; return next; });
            obs.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [entries.length]);

  useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const { top, height } = sec.getBoundingClientRect();
      const front = window.innerHeight * 0.58;
      const drawn = Math.max(0, Math.min(height, front - top));
      setSpineH(drawn);
      setSpinePcts(itemRefs.current.map((el) => {
        if (!el || height === 0) return 0;
        const badgeTop = el.getBoundingClientRect().top - sec.getBoundingClientRect().top;
        return Math.max(0, Math.min(1, (drawn - badgeTop) / 60));
      }));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  const spineLeft      = isMobile ? '23px' : '50%';
  const spineTransform = isMobile ? 'none' : 'translateX(-50%)';

  return (
    <div ref={sectionRef} style={{ position: 'relative' }}>
      {/* Track line */}
      <div style={{
        position: 'absolute', left: spineLeft, transform: spineTransform,
        top: 20, bottom: 36, width: 1, background: 'var(--border)', zIndex: 0,
      }} />
      {/* Progress line */}
      <div style={{
        position: 'absolute', left: spineLeft, transform: spineTransform,
        top: 20, width: 2, height: spineH,
        background: 'linear-gradient(to bottom, var(--accent), var(--accent2), var(--amber), var(--accent))',
        backgroundSize: '100% 300%',
        animation: 'gradient-flow 4s ease infinite',
        boxShadow: '0 0 10px var(--glow)',
        zIndex: 1, borderRadius: 2, transition: 'height 0.08s linear',
      }} />
      {entries.map((ex, i) => (
        <div key={`${ex.org}-${globalOffset + i}`} ref={(el) => { itemRefs.current[i] = el; }}>
          {isMobile
            ? <MobileEntry  ex={ex} index={i} seen={seen[i]} spinePct={spinePcts[i]} />
            : <DesktopEntry ex={ex} index={i} isLeft={i % 2 === 0} seen={seen[i]} spinePct={spinePcts[i]} />
          }
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   EXPERIENCE SECTION
   ───────────────────────────────────────────────────────── */

const CATEGORY_ORDER: ExpEntry['category'][] = ['Internship', 'Clubs', 'Campus Ambassador'];
const CATEGORY_LABELS: Record<ExpEntry['category'], string> = {
  Internship:         'Internship',
  Clubs:              'Clubs & Societies',
  'Campus Ambassador': 'Campus Ambassador',
};

export function Experience() {
  const width    = useWindowWidth();
  const isMobile = width <= 768;

  /* Group EXP by category in defined order */
  const groups = CATEGORY_ORDER.map((cat) => ({
    cat,
    entries: EXP.filter((e) => e.category === cat),
  })).filter((g) => g.entries.length > 0);

  /* Compute global offsets so keys stay unique */
  let offset = 0;
  const groupsWithOffset = groups.map((g) => {
    const result = { ...g, offset };
    offset += g.entries.length;
    return result;
  });

  return (
    <section id="experience" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <SecHead
          eyebrow="Experience"
          title={<>Where I've <span className="g-text">contributed</span></>}
        />

        {groupsWithOffset.map(({ cat, entries, offset: off }, gi) => (
          <div key={cat} style={{ marginBottom: gi < groupsWithOffset.length - 1 ? 72 : 0 }}>
            {/* Category heading */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <div style={{
                padding: '5px 16px', borderRadius: 100,
                background: 'color-mix(in srgb, var(--accent) 10%, var(--surface))',
                border: '1px solid color-mix(in srgb, var(--accent) 26%, transparent)',
              }}>
                <Mono style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'var(--accent)',
                }}>
                  {CATEGORY_LABELS[cat]}
                </Mono>
              </div>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
              <Mono style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: '0.05em' }}>
                {entries.length} role{entries.length !== 1 ? 's' : ''}
              </Mono>
            </div>

            <CategoryTimeline entries={entries} isMobile={isMobile} globalOffset={off} />
          </div>
        ))}
      </div>
    </section>
  );
}

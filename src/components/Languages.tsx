import { useState } from 'react';
import { Mono, SecHead } from '@/components/ui';
import { LANGS } from '@/data';

const GLOBE_SIZE = 240;

/* ── Globe — receives shared selected state ─────────────────── */

function LanguageGlobe({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (name: string) => void;
}) {
  const [lineReady, setLineReady] = useState(false);
  const [prevSelected, setPrevSelected] = useState<string | null>(null);

  /* Trigger line animation when selection changes */
  if (selected !== prevSelected) {
    setPrevSelected(selected);
    setLineReady(false);
    if (selected) setTimeout(() => setLineReady(true), 80);
  }

  const sel = LANGS.find((l) => l.n === selected);
  const PANEL_ENTRY_X = GLOBE_SIZE + 36;
  const PANEL_ENTRY_Y = GLOBE_SIZE / 2;
  const circuitPath = sel
    ? `M ${sel.cx} ${sel.cy} L ${Math.min(sel.cx + 20, GLOBE_SIZE - 4)} ${sel.cy} L ${PANEL_ENTRY_X} ${PANEL_ENTRY_Y}`
    : '';

  return (
    <div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Globe sphere */}
        <div style={{ position: 'relative', flexShrink: 0, width: GLOBE_SIZE, height: GLOBE_SIZE }}>
          <div style={{
            position: 'absolute', inset: -12, borderRadius: '50%',
            background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)',
            pointerEvents: 'none',
          }} />

          {selected && sel && (
            <svg width={PANEL_ENTRY_X + 8} height={GLOBE_SIZE}
              style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible', pointerEvents: 'none', zIndex: 20 }}>
              <path d={circuitPath} fill="none" stroke={sel.c} strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" pathLength="1"
                strokeDasharray="1" strokeDashoffset={lineReady ? 0 : 1}
                style={{ transition: 'stroke-dashoffset 0.65s cubic-bezier(0.34,1.56,0.64,1)' }} />
              <circle cx={sel.cx} cy={sel.cy} r={9} fill="none" stroke={sel.c}
                strokeWidth="1" opacity={lineReady ? 0.45 : 0}
                style={{ transition: 'opacity 0.3s ease 0.2s' }} />
              <circle cx={PANEL_ENTRY_X} cy={PANEL_ENTRY_Y} r={3} fill={sel.c}
                opacity={lineReady ? 1 : 0}
                style={{ transition: 'opacity 0.3s ease 0.55s' }} />
            </svg>
          )}

          <div style={{
            width: GLOBE_SIZE, height: GLOBE_SIZE, borderRadius: '50%',
            position: 'relative', overflow: 'hidden',
            background: 'radial-gradient(circle at 32% 28%, #1e4b6e, #0d2840 45%, #060f1c)',
            boxShadow: [
              'inset -14px -14px 36px rgba(0,0,0,0.7)',
              'inset 6px 6px 20px rgba(56,189,248,0.06)',
              '0 0 60px color-mix(in srgb, var(--accent) 14%, transparent)',
            ].join(','),
          }}>
            {/* Rotating continent map */}
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: GLOBE_SIZE * 2, height: GLOBE_SIZE,
              animation: 'globe-map-rotate 22s linear infinite', display: 'flex',
            }}>
              {[0, 1].map((copy) => (
                <svg key={copy} width={GLOBE_SIZE} height={GLOBE_SIZE} viewBox="0 0 220 220" style={{ flexShrink: 0 }}>
                  <ellipse cx="68" cy="82" rx="28" ry="36" fill="#2a6e45" opacity="0.38" />
                  <ellipse cx="58" cy="68" rx="12" ry="10" fill="#2a6e45" opacity="0.35" />
                  <ellipse cx="56" cy="116" rx="10" ry="16" fill="#2a6e45" opacity="0.28" />
                  <ellipse cx="82" cy="152" rx="18" ry="30" fill="#2a6e45" opacity="0.38" />
                  <ellipse cx="118" cy="72" rx="13" ry="14" fill="#2a6e45" opacity="0.35" />
                  <ellipse cx="124" cy="138" rx="20" ry="40" fill="#2a6e45" opacity="0.38" />
                  <ellipse cx="114" cy="102" rx="10" ry="12" fill="#2a6e45" opacity="0.3" />
                  <ellipse cx="172" cy="74" rx="44" ry="28" fill="#2a6e45" opacity="0.38" />
                  <ellipse cx="150" cy="96" rx="22" ry="16" fill="#2a6e45" opacity="0.32" />
                  <ellipse cx="194" cy="96" rx="14" ry="20" fill="#2a6e45" opacity="0.30" />
                  <ellipse cx="194" cy="168" rx="17" ry="12" fill="#2a6e45" opacity="0.35" />
                  {[22,44,66,88,110,132,154,176,198].map((x) => (
                    <line key={x} x1={x} y1={0} x2={x} y2={220} stroke="rgba(0,196,167,0.055)" strokeWidth="0.7" />
                  ))}
                </svg>
              ))}
            </div>
            {/* Latitude lines */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 26px, rgba(0,196,167,0.045) 27px)',
            }} />
            {/* Atmosphere */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse at 28% 22%, rgba(56,189,248,0.10), transparent 55%)',
            }} />
            {/* Edge shadow */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: '50%',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.45)',
            }} />
            {/* Language dots */}
            {LANGS.map((lang) => {
              const isSelected = selected === lang.n;
              return (
                <div key={lang.n}
                  onClick={() => onSelect(lang.n)}
                  style={{ position: 'absolute', left: lang.cx, top: lang.cy,
                    transform: 'translate(-50%,-50%)', cursor: 'pointer', zIndex: 10 }}>
                  <div style={{
                    position: 'absolute', inset: -6, borderRadius: '50%',
                    border: `1.5px solid ${lang.c}`,
                    opacity: isSelected ? 1 : 0.3,
                    transform: isSelected ? 'scale(1.9)' : 'scale(1)',
                    transition: 'all 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                  }} />
                  <div style={{
                    width: isSelected ? 12 : 8, height: isSelected ? 12 : 8,
                    borderRadius: '50%', background: lang.c,
                    boxShadow: `0 0 ${isSelected ? 18 : 7}px ${lang.c}`,
                    transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                  }} />
                </div>
              );
            })}
          </div>

          {/* Ground shadow */}
          <div style={{
            position: 'absolute', bottom: -14, left: '10%', right: '10%', height: 20,
            background: 'radial-gradient(ellipse, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)',
            filter: 'blur(8px)', pointerEvents: 'none',
          }} />
        </div>

        {/* Info panel - appears with circuit line */}
        <div style={{
          flex: 1, minWidth: 180,
          opacity: sel && lineReady ? 1 : 0,
          transform: sel && lineReady ? 'translateX(0)' : 'translateX(-12px)',
          transition: 'opacity 0.45s ease 0.3s, transform 0.45s ease 0.3s',
          pointerEvents: sel ? 'auto' : 'none',
        }}>
          {sel && (
            <div style={{
              padding: '22px 24px',
              background: 'var(--surface)',
              border: `1.5px solid color-mix(in srgb, ${sel.c} 40%, transparent)`,
              borderLeft: `3px solid ${sel.c}`,
              borderRadius: 14,
              boxShadow: `0 8px 32px color-mix(in srgb, ${sel.c} 15%, transparent)`,
            }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{sel.flag}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 22, fontWeight: 800,
                color: sel.c, letterSpacing: '-0.02em', marginBottom: 2 }}>{sel.n}</div>
              <Mono style={{ fontSize: 11, color: 'var(--text3)', display: 'block', marginBottom: 12 }}>{sel.country}</Mono>
              <div style={{
                display: 'inline-block', padding: '4px 14px',
                background: `color-mix(in srgb, ${sel.c} 14%, transparent)`,
                color: sel.c, borderRadius: 20,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                fontFamily: "'JetBrains Mono',monospace", marginBottom: 14,
              }}>{sel.l}</div>
            </div>
          )}
        </div>
      </div>

      {/* Hint + legend pills */}
      <div style={{ marginTop: 14 }}>
        <Mono style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: '0.06em' }}>
          {selected ? '↑ Click dot again to dismiss' : '↑ Click a dot to explore language'}
        </Mono>
      </div>
      <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {LANGS.map((lang) => (
          <button key={lang.n} onClick={() => onSelect(lang.n)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '6px 14px',
              background: selected === lang.n
                ? `color-mix(in srgb, ${lang.c} 14%, var(--surface))`
                : 'var(--surface)',
              border: selected === lang.n
                ? `1px solid ${lang.c}60`
                : '1px solid var(--border)',
              borderRadius: 20, cursor: 'pointer', transition: 'all 0.25s ease',
            }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: lang.c, boxShadow: `0 0 6px ${lang.c}` }} />
            <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text)' }}>{lang.n}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Languages section ────────────────────────────────────────── */

export function Languages() {
  const [selected, setSelected] = useState<string | null>(null);
  /* Track click count per language to re-trigger bar animation */
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

  const handleSelect = (name: string) => {
    const next = selected === name ? null : name;
    setSelected(next);
    if (next) {
      setClickCounts((prev) => ({ ...prev, [name]: (prev[name] ?? 0) + 1 }));
    }
  };

  return (
    <section id="languages" style={{ padding: '120px 24px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <SecHead eyebrow="Languages" title={<>Global <span className="g-text">proficiency</span></>} />

        <div className="about-grid reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left: globe */}
          <div>
            <LanguageGlobe selected={selected} onSelect={handleSelect} />
          </div>

          {/* Right: proficiency bars — bar animates when its language is clicked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {LANGS.map((lang) => {
              const isSelected = selected === lang.n;
              const clickKey = clickCounts[lang.n] ?? 0;
              return (
                <div
                  key={lang.n}
                  onClick={() => handleSelect(lang.n)}
                  style={{
                    cursor: 'pointer',
                    padding: '14px 16px', borderRadius: 12,
                    background: isSelected
                      ? `color-mix(in srgb, ${lang.c} 6%, var(--surface))`
                      : 'var(--surface)',
                    border: isSelected
                      ? `1px solid color-mix(in srgb, ${lang.c} 35%, transparent)`
                      : '1px solid var(--border)',
                    transition: 'all 0.35s ease',
                  }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 22 }}>{lang.flag}</span>
                      <div>
                        <div style={{
                          fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 700,
                          color: isSelected ? lang.c : 'var(--text)',
                          transition: 'color 0.3s ease',
                        }}>{lang.n}</div>
                        <div style={{ fontSize: 10.5, color: 'var(--text3)', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.08em', textTransform: 'uppercase' }}>{lang.l}</div>
                      </div>
                    </div>
                    <Mono style={{ fontSize: 14, color: lang.c, fontWeight: 800 }}>{lang.p}%</Mono>
                  </div>

                  {/* Bar track */}
                  <div style={{ height: 7, background: 'var(--surface2)', borderRadius: 100, overflow: 'hidden', border: '1px solid var(--border)' }}>
                    {/*
                      Key changes on every click → element remounts → CSS transition fires from width:0 → lang.p%
                      This creates the fill animation on each click.
                    */}
                    <div style={{ width: `${lang.p}%`, height: '100%', transformOrigin: 'left center' }}>
                      <div
                        key={`bar-${lang.n}-${clickKey}`}
                        style={{
                          height: '100%', width: '100%',
                          background: isSelected
                            ? `linear-gradient(90deg, ${lang.c}, color-mix(in srgb, ${lang.c} 70%, white))`
                            : lang.c,
                          borderRadius: 100,
                          boxShadow: isSelected ? `0 0 10px ${lang.c}` : `0 0 5px ${lang.c}60`,
                          transformOrigin: 'left center',
                          animation: 'bar-fill-in 1.1s cubic-bezier(0.16,1,0.3,1) forwards',
                          transition: 'box-shadow 0.35s ease, background 0.35s ease',
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

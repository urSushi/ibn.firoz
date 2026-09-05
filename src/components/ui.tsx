import { useState, useEffect, type CSSProperties } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useScrollProgress } from '@/hooks';
import { ROLES } from '@/data';

/* ── Mono font wrapper ───────────────────────────────────── */

export function Mono({ children, style }: { children: React.ReactNode; style?: CSSProperties }) {
  return <span style={{ fontFamily: "'JetBrains Mono', monospace", ...style }}>{children}</span>;
}

/* ── Section header ──────────────────────────────────────── */

export function SecHead({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
      <Mono style={{
        fontSize: 11, fontWeight: 600, letterSpacing: '0.20em',
        textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: 12,
      }}>
        {eyebrow}
      </Mono>
      <h2 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800,
        lineHeight: 1.06, letterSpacing: '-0.025em', color: 'var(--text)',
      }}>{title}</h2>
    </div>
  );
}

/* ── Animated word-flip role ─────────────────────────────── */

export function AnimatedRole() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase('out');
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROLES.length);
        setPhase('in');
        setTimeout(() => setPhase('idle'), 420);
      }, 380);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const transform =
    phase === 'out' ? 'translateY(-110%)' :
    phase === 'in'  ? 'translateY(110%)' : 'translateY(0)';
  const opacity = phase === 'idle' ? 1 : 0;

  return (
    <div style={{ overflow: 'hidden', height: '1.3em' }}>
      <span style={{
        display: 'block', transform, opacity,
        transition: phase === 'idle'
          ? 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease'
          : 'transform 0.35s cubic-bezier(0.76,0,0.24,1), opacity 0.25s ease',
      }}>
        {ROLES[idx]}
      </span>
    </div>
  );
}

/* ── Theme toggle — circular icon button (yashahire.info style) ── */
/*
 * Single circular button. Shows the icon for the mode you will SWITCH TO.
 * Dark mode  → Sun icon  (click = go light)
 * Light mode → Moon icon (click = go dark)
 * On click: icon does a 360° spin + subtle scale pop.
 */

export function ThemeToggle({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    if (spinning) return;
    setSpinning(true);
    toggle();
    setTimeout(() => setSpinning(false), 520);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
        background: dark
          ? 'color-mix(in srgb, var(--surface2) 80%, var(--accent) 20%)'
          : 'color-mix(in srgb, var(--surface2) 85%, var(--accent2) 15%)',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 8px var(--shadow)',
        transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent), 0 4px 16px var(--glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = '0 2px 8px var(--shadow)';
      }}>
      {/* Icon wrapper — spins on click */}
      <span style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: spinning ? 'rotate(360deg) scale(0.75)' : 'rotate(0deg) scale(1)',
        transition: spinning
          ? 'transform 0.52s cubic-bezier(0.34, 1.56, 0.64, 1)'
          : 'transform 0.3s ease',
      }}>
        {dark
          ? <Sun  size={16} color="var(--amber)" />
          : <Moon size={16} color="var(--accent2)" />
        }
      </span>
    </button>
  );
}

/* ── Scroll progress bar ─────────────────────────────────── */

export function ScrollProgressBar() {
  const pct = useScrollProgress();
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 9999 }}>
      <div style={{
        height: '100%', width: `${pct}%`,
        background: 'linear-gradient(90deg, var(--accent), var(--accent2), var(--accent))',
        backgroundSize: '200% 100%',
        animation: 'gradient-flow 2s linear infinite',
        transition: 'width 0.12s linear',
        boxShadow: '0 0 12px var(--glow)',
      }} />
    </div>
  );
}

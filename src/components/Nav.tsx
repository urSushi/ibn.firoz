import { useState, useEffect, useRef } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { LinkedinIcon, GithubIcon, WhatsAppIcon } from '@/icons';
import { ThemeToggle, Mono } from '@/components/ui';

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

/* ── Fixed left social strip ─────────────────────────────── */

export function SocialStrip() {
  return (
    <div className="social-strip" style={{
      position: 'fixed', left: 24, bottom: 0, zIndex: 50,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
    }}>
      {[
        { icon: <LinkedinIcon size={15} />, href: 'https://www.linkedin.com/in/didar-ibn-firoz-376320414/', label: 'LinkedIn' },
        { icon: <GithubIcon size={15} />,   href: 'https://github.com/urSushi', label: 'GitHub' },
        { icon: <Mail size={15} />,         href: 'mailto:didarabid@gmail.com', label: 'Email' },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
          style={{ color: 'var(--text3)', display: 'flex', transition: 'color 0.2s, transform 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text3)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
          {s.icon}
        </a>
      ))}
      <div style={{ width: 1, height: 72, background: 'linear-gradient(to bottom, var(--text3), transparent)', marginTop: 4 }} />
    </div>
  );
}

/* ── Mobile slide-in sidebar ─────────────────────────────── */

export function MobileSidebar({
  open, onClose, dark, toggle, active, onCerts,
}: {
  open: boolean; onClose: () => void; dark: boolean; toggle: () => void; active: string; onCerts: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 199,
        background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.35s ease',
      }} />
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 200,
        width: 'min(300px, 82vw)',
        background: 'var(--surface)', borderLeft: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.42s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: open ? '-20px 0 60px rgba(0,0,0,0.35)' : 'none',
      }}>
        <div style={{
          padding: '20px 24px', borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Mono style={{ fontSize: 13, fontWeight: 700 }}>
            <span className="g-text">ibn.firoz</span>
          </Mono>
          <button onClick={onClose} aria-label="Close menu" style={{
            background: 'var(--surface2)', border: '1px solid var(--border)',
            borderRadius: 8, padding: 6, cursor: 'pointer', color: 'var(--text2)',
            display: 'flex', alignItems: 'center',
          }}>
            <X size={16} />
          </button>
        </div>
        <nav style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={onClose}
              style={{
                display: 'block', padding: '13px 16px', borderRadius: 10,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13, fontWeight: active === l.toLowerCase() ? 700 : 500,
                color: active === l.toLowerCase() ? 'var(--accent)' : 'var(--text2)',
                background: active === l.toLowerCase()
                  ? 'color-mix(in srgb, var(--accent) 10%, transparent)'
                  : 'transparent',
                border: active === l.toLowerCase()
                  ? '1px solid color-mix(in srgb, var(--accent) 25%, transparent)'
                  : '1px solid transparent',
                textDecoration: 'none', transition: 'all 0.2s ease',
              }}>
              {l}
            </a>
          ))}
          <button onClick={() => { onCerts(); onClose(); }}
            style={{
              display: 'block', padding: '13px 16px', borderRadius: 10,
              fontFamily: "'JetBrains Mono', monospace", textAlign: 'left',
              fontSize: 13, fontWeight: 600,
              color: 'var(--accent)',
              background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
              cursor: 'pointer', transition: 'all 0.2s ease', width: '100%',
            }}>
            Certifications
          </button>
        </nav>
        <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, color: 'var(--text3)' }}>Theme</span>
            <ThemeToggle dark={dark} toggle={toggle} />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { icon: <LinkedinIcon size={14} />, href: 'https://www.linkedin.com/in/didar-ibn-firoz-376320414/', label: 'LinkedIn' },
              { icon: <GithubIcon size={14} />,   href: 'https://github.com/urSushi', label: 'GitHub' },
              { icon: <Mail size={14} />,         href: 'mailto:didarabid@gmail.com', label: 'Email' },
              { icon: <WhatsAppIcon size={14} />, href: 'https://wa.me/8801959089483', label: 'WhatsApp' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{
                  width: 36, height: 36, borderRadius: 9,
                  background: 'var(--surface2)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text2)', textDecoration: 'none', transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Sliding-pill nav links ──────────────────────────────── */

function NavLinks({ active, onCerts }: { active: string; onCerts: () => void }) {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const idx = NAV_LINKS.findIndex((l) => l.toLowerCase() === active);
    const el = linkRefs.current[idx];
    const container = containerRef.current;
    if (!el || !container) { setPillStyle((p) => ({ ...p, opacity: 0 })); return; }
    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    setPillStyle({ left: eRect.left - cRect.left, width: eRect.width, opacity: 1 });
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="nav-desktop"
      style={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative' }}>

      {/* Sliding background pill */}
      <div style={{
        position: 'absolute', top: '50%', transform: 'translateY(-50%)',
        height: 30,
        left: pillStyle.left,
        width: pillStyle.width,
        borderRadius: 100,
        background: 'color-mix(in srgb, var(--accent) 12%, var(--surface))',
        border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
        opacity: pillStyle.opacity,
        transition: 'left 0.42s cubic-bezier(0.34,1.2,0.64,1), width 0.38s cubic-bezier(0.34,1.2,0.64,1), opacity 0.28s ease',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {NAV_LINKS.map((l, i) => {
        const isActive = active === l.toLowerCase();
        return (
          <a
            key={l}
            ref={(el) => { linkRefs.current[i] = el; }}
            href={`#${l.toLowerCase()}`}
            style={{
              position: 'relative', zIndex: 1,
              display: 'inline-flex', alignItems: 'center',
              padding: '6px 13px', borderRadius: 100,
              fontSize: 13, fontFamily: "'JetBrains Mono', monospace",
              fontWeight: isActive ? 600 : 400,
              letterSpacing: '0.01em',
              color: isActive ? 'var(--text)' : 'var(--text2)',
              textDecoration: 'none',
              background: 'transparent',
              border: '1px solid transparent',
              transition: 'color 0.28s cubic-bezier(0.16,1,0.3,1), font-weight 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.color = 'var(--text)';
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.color = 'var(--text2)';
            }}>
            {l}
          </a>
        );
      })}

      {/* Certifications — special button */}
      <button
        onClick={onCerts}
        style={{
          position: 'relative', zIndex: 1,
          display: 'inline-flex', alignItems: 'center',
          padding: '6px 13px', borderRadius: 100,
          fontSize: 13, fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 500, letterSpacing: '0.01em',
          color: 'var(--accent)',
          background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
          border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
          cursor: 'pointer', whiteSpace: 'nowrap',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 18%, transparent)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 10%, transparent)'; }}>
        Certifications
      </button>
    </div>
  );
}

/* ── Floating pill navigation ────────────────────────────── */
/*
 * Inspired by yashahire.info: a centered frosted-glass capsule that
 * floats above the page content. Logo on the left, nav links in the
 * center, theme toggle on the right — all inside one rounded pill.
 * On scroll the shadow deepens and the background becomes more opaque.
 */

export function Nav({ dark, toggle, active, onMenuOpen, onCerts }: {
  dark: boolean; toggle: () => void; active: string; onMenuOpen: () => void; onCerts: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    /* Outer wrapper keeps the pill centred with fixed positioning */
    <div style={{
      position: 'fixed',
      top: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      willChange: 'transform',
      transition: 'top 0.5s cubic-bezier(0.16,1,0.3,1)',
    }}>
      {/* The pill itself */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        /* Pill shape */
        borderRadius: 100,
        padding: '7px 7px 7px 20px',
        /* Frosted glass — more opaque on scroll */
        background: scrolled
          ? 'color-mix(in srgb, var(--nav-bg) 96%, transparent)'
          : 'color-mix(in srgb, var(--nav-bg) 82%, transparent)',
        backdropFilter: 'blur(32px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(32px) saturate(1.8)',
        /* Border — brighter accent tint on scroll */
        border: scrolled
          ? '1px solid color-mix(in srgb, var(--accent) 28%, var(--border))'
          : '1px solid var(--border)',
        /* Shadow deepens on scroll */
        boxShadow: scrolled
          ? '0 8px 40px var(--shadow), 0 2px 0 color-mix(in srgb, var(--accent) 8%, transparent), inset 0 1px 0 rgba(255,255,255,0.06)'
          : '0 2px 20px var(--shadow), inset 0 1px 0 rgba(255,255,255,0.04)',
        transition: 'background 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1)',
        whiteSpace: 'nowrap',
        willChange: 'box-shadow, background',
      }}>

        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', marginRight: 28, flexShrink: 0 }}>
          <Mono style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em' }}>
            <span className="g-text">ibn</span>
            <span style={{ color: 'var(--text3)' }}>.</span>
            <span style={{ color: 'var(--text)' }}>firoz</span>
            <span style={{
              color: 'var(--accent)',
              animation: 'cursor-blink 1.2s step-end infinite',
            }}>_</span>
          </Mono>
        </a>

        {/* Separator */}
        <div style={{ width: 1, height: 18, background: 'var(--border)', marginRight: 28, flexShrink: 0 }} />

        {/* Desktop nav links — sliding pill indicator */}
        <NavLinks active={active} onCerts={onCerts} />

        {/* Mobile: just show hamburger in place of links */}
        <div className="nav-mobile-btn" style={{ display: 'none', alignItems: 'center' }}>
          {/* intentionally empty — toggle + hamburger are after the separator below */}
        </div>

        {/* Separator */}
        <div className="nav-desktop" style={{ width: 1, height: 18, background: 'var(--border)', margin: '0 16px', flexShrink: 0 }} />

        {/* Theme toggle + (mobile) hamburger — always visible */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <ThemeToggle dark={dark} toggle={toggle} />
          {/* Hamburger — only on mobile */}
          <button
            onClick={onMenuOpen}
            aria-label="Open menu"
            className="nav-mobile-btn"
            style={{
              display: 'none',
              background: 'var(--surface2)', border: '1px solid var(--border)',
              borderRadius: 100, padding: '7px 10px', cursor: 'pointer', color: 'var(--text)',
              alignItems: 'center', marginLeft: 4,
            }}>
            <Menu size={16} />
          </button>
        </div>
      </nav>
    </div>
  );
}

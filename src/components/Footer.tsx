import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon, WhatsAppIcon } from '@/icons';
import { Mono } from '@/components/ui';

/* ── Floating WhatsApp button ────────────────────────────── */

export function WhatsAppFloat() {
  const [hov, setHov] = useState(false);
  return (
    <a href="https://wa.me/8801959089483" target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 200,
        display: 'flex', alignItems: 'center', gap: hov ? 8 : 0,
        padding: hov ? '12px 18px 12px 14px' : '13px',
        background: '#25d366', borderRadius: 100, textDecoration: 'none',
        boxShadow: '0 8px 28px rgba(37,211,102,0.35)',
        transition: 'all 0.38s cubic-bezier(0.16,1,0.3,1)', overflow: 'hidden',
      }}>
      <WhatsAppIcon size={20} />
      <span style={{
        color: '#fff', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap',
        maxWidth: hov ? 120 : 0, overflow: 'hidden',
        transition: 'max-width 0.38s cubic-bezier(0.16,1,0.3,1)', opacity: hov ? 1 : 0,
      }}>Chat with me</span>
    </a>
  );
}

/* ── Page footer ─────────────────────────────────────────── */

export function Footer() {
  const socials = [
    { icon: <LinkedinIcon size={16} />, href: 'https://www.linkedin.com/in/didar-ibn-firoz-376320414/', label: 'LinkedIn' },
    { icon: <GithubIcon size={16} />,   href: 'https://github.com/urSushi', label: 'GitHub' },
    { icon: <Mail size={16} />,         href: 'mailto:didarabid@gmail.com', label: 'Email' },
    { icon: <WhatsAppIcon size={16} />, href: 'https://wa.me/8801959089483', label: 'WhatsApp' },
  ];

  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Top gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 1,
        background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent2), var(--accent), transparent)',
      }} />

      {/* Main body */}
      <div style={{ padding: '72px 24px 48px', textAlign: 'center' }}>
        <Mono style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--text3)', display: 'block', marginBottom: 16 }}>
          Didar Ibn Firoz
        </Mono>

        {/* Big flowing name */}
        <h2 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900,
          letterSpacing: '-0.04em', lineHeight: 0.9, marginBottom: 20,
        }}>
          <span className="g-text-flow">ibn.firoz</span>
        </h2>

        <p style={{ fontSize: 15, color: 'var(--text3)', fontWeight: 500, marginBottom: 40 }}>
          UI/UX Designer · ICE Student · Digital Creator · Prompt Writer
        </p>

        {/* Social icon circles */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 52 }}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'var(--surface)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text2)', textDecoration: 'none',
                transition: 'all 0.28s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px var(--glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              {s.icon}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '13px 32px', borderRadius: 100,
          background: 'transparent', color: 'var(--text)',
          textDecoration: 'none', fontWeight: 600, fontSize: 14,
          border: '1.5px solid var(--border)', transition: 'all 0.28s ease', marginBottom: 52,
        }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}>
          Let's work together <ArrowRight size={14} />
        </a>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '20px 24px' }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <Mono style={{ fontSize: 12, color: 'var(--text3)' }}>© 2026 Didar Ibn Firoz</Mono>
          <Mono style={{ fontSize: 12, color: 'var(--text3)' }}>Crafted with care in Dhaka 🇧🇩</Mono>
          <a href="#home" style={{ fontSize: 12, color: 'var(--text3)', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 5, transition: 'color 0.2s',
            fontFamily: "'JetBrains Mono',monospace" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text3)')}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

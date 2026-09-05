import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/icons';
import { Mono, AnimatedRole } from '@/components/ui';
import profilePhotoDark from '@/imports/Didar_Ibn_Firoz.jpg';
import profilePhotoLight from '@/imports/didar-1.png';

export function Hero({ dark }: { dark: boolean }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', padding: '120px 24px 80px',
    }}>
      {/* Background ambient blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div className="anim-blob" style={{
          position: 'absolute', top: '-8%', right: '3%', width: 520, height: 520,
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)',
        }} />
        <div className="anim-blob" style={{
          position: 'absolute', bottom: '6%', left: '-4%', width: 420, height: 420,
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent2) 12%, transparent), transparent 70%)',
          animationDelay: '-4s',
        }} />
      </div>

      <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 400px', gap: 64, alignItems: 'center',
        }}>

          {/* ── Text column ── */}
          <div>
            {/* Name — appears first */}
            <h1 className="reveal" style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(46px, 7vw, 88px)', fontWeight: 800,
              lineHeight: 0.94, letterSpacing: '-0.03em', marginBottom: 20, color: 'var(--text)',
            }}>
              Didar<br /><span className="g-text-flow">Ibn Firoz</span>
            </h1>

            {/* Availability badge — d1 (appears after name) */}
            <div className="reveal d1" style={{ marginBottom: 24 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                position: 'relative', overflow: 'hidden',
                padding: '9px 20px 9px 14px',
                background: 'color-mix(in srgb, var(--accent) 10%, var(--surface))',
                border: '1px solid color-mix(in srgb, var(--accent) 40%, transparent)',
                borderRadius: 100,
                boxShadow: '0 0 24px color-mix(in srgb, var(--accent) 20%, transparent)',
              }}>
                <span style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  animation: 'badge-shine 3s ease-in-out infinite', borderRadius: 100,
                }} />
                <span className="anim-pulse" style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: 'var(--green)', display: 'inline-block', flexShrink: 0,
                }} />
                <Mono style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.06em' }}>
                  Actively Seeking Opportunities
                </Mono>
                <span style={{ fontSize: 10, color: 'var(--text3)' }}>→</span>
              </div>
            </div>

            <div className="reveal d2" style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(17px, 2.4vw, 24px)', fontWeight: 600,
              color: 'var(--text2)', marginBottom: 28,
            }}>
              <AnimatedRole />
            </div>

            {/* Professional bio with justified text */}
            <p className="reveal d3" style={{
              fontSize: 15.5, lineHeight: 1.88, color: 'var(--text2)',
              maxWidth: 520, marginBottom: 40,
              textAlign: 'justify', hyphens: 'auto',
            }}>
              A student of Information &amp; Communication Engineering at{' '}
              <a href="https://bup.edu.bd/" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text)', fontWeight: 700, textDecoration: 'none',
                  borderBottom: '1px solid var(--border)', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
                Bangladesh University of Professionals
              </a>{', '}
              with a deep-rooted passion for human-centered design. I translate complex ideas into
              elegant digital experiences. Currently advancing my craft as a{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 700 }}>
                UI/UX AI Intern at FlyRank AI
              </strong>.
            </p>

            <div className="reveal d4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href="#projects" style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '13px 28px', borderRadius: 8,
                background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 14,
                boxShadow: '0 4px 20px var(--glow)', transition: 'all 0.28s ease',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px var(--glow)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px var(--glow)'; }}>
                View Work <ArrowRight size={15} />
              </a>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '13px 28px', borderRadius: 8,
                background: 'transparent', color: 'var(--text)',
                textDecoration: 'none', fontWeight: 600, fontSize: 14,
                border: '1.5px solid var(--border)', transition: 'all 0.28s ease',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}>
                Contact
              </a>
            </div>

            <div className="reveal d5" style={{ display: 'flex', gap: 24 }}>
              {[
                { label: 'LinkedIn', icon: <LinkedinIcon size={12} />, href: 'https://www.linkedin.com/in/didar-ibn-firoz-376320414/' },
                { label: 'GitHub',   icon: <GithubIcon size={12} />,   href: 'https://github.com/urSushi' },
                { label: 'Email',    icon: <Mail size={12} />,         href: 'mailto:didarabid@gmail.com' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontSize: 12.5, fontWeight: 500, color: 'var(--text2)',
                    textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text2)')}>
                  {s.icon} {s.label} <ArrowUpRight size={10} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Photo column — 3D card flip ── */}
          <div className="hero-photo-col" style={{
            display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'relative',
          }}>
            {/* Dot grid background */}
            <div style={{
              position: 'absolute', inset: -20, zIndex: 0, opacity: 0.05,
              backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
            }} />

            <div className="reveal-r d7 anim-float" style={{ position: 'relative', zIndex: 1 }}>
              {/* Offset decorative frame */}
              <div style={{
                position: 'absolute', top: 14, left: 14, width: 270, height: 340,
                borderRadius: 18, border: '1.5px solid var(--accent)', opacity: 0.25,
              }} />

              {/* Cinematic reveal overlay */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 10, borderRadius: 16, overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(160deg, var(--accent), var(--accent2))',
                  transform: revealed ? 'translateY(-105%)' : 'translateY(0)',
                  transition: 'transform 1.1s cubic-bezier(0.76, 0, 0.24, 1)',
                }} />
              </div>

              {/* 3D card flip: dark=front, light=back */}
              <div style={{ perspective: '1200px' }}>
                <div style={{
                  width: 270, height: 340, position: 'relative',
                  transformStyle: 'preserve-3d',
                  transform: dark ? 'rotateY(0deg)' : 'rotateY(180deg)',
                  transition: 'transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 16, boxShadow: '0 32px 80px -16px var(--shadow)',
                }}>
                  <div style={{ position: 'absolute', inset: 0, borderRadius: 16, overflow: 'hidden',
                    backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                    <img src={profilePhotoDark} alt="Didar Ibn Firoz"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                  <div style={{ position: 'absolute', inset: 0, borderRadius: 16, overflow: 'hidden',
                    backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <img src={profilePhotoLight} alt="Didar Ibn Firoz"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                </div>
              </div>

              {/* Name tag */}
              <div style={{
                position: 'absolute', bottom: -18, left: '50%', transform: 'translateX(-50%)',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 8, padding: '8px 18px', whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px var(--shadow)',
              }}>
                <Mono style={{ fontSize: 12, fontWeight: 600, color: 'var(--text2)' }}>
                  <span style={{ color: 'var(--accent)' }}>&lt;</span>designer<span style={{ color: 'var(--accent)' }}>/&gt;</span>
                </Mono>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }} className="anim-float">
        <div style={{ width: 1.5, height: 52, background: 'linear-gradient(to bottom, var(--accent), transparent)', borderRadius: 1 }} />
        <Mono style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text3)' }}>scroll</Mono>
      </div>
    </section>
  );
}

import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Mono } from '@/components/ui';
import { EDU } from '@/data';

export function About() {
  const stats = [
    { v: '3+',  l: 'Projects' },
    { v: '8+',  l: 'Certifications' },
    { v: '5',   l: 'Languages' },
    { v: '5.0', l: 'Academic GPA' },
  ];

  return (
    <section id="about" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left: text + stats + contact */}
          <div>
            <div className="reveal">
              <Mono style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: 14 }}>
                About Me
              </Mono>
              <h2 style={{
                fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(30px,3.8vw,44px)',
                fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: 24, color: 'var(--text)',
              }}>
                Turning ideas into<br /><span className="g-text">visual stories</span>
              </h2>

              <p style={{ fontSize: 15.5, lineHeight: 1.88, color: 'var(--text2)', marginBottom: 18,
                overflowWrap: 'break-word', wordBreak: 'normal' }}>
                I am a student of Information &amp; Communication Engineering at{' '}
                <strong style={{ color: 'var(--text)', fontWeight: 700 }}>Bangladesh University of Professionals</strong>,
                where my academic pursuit of circuits and systems is deeply complemented by an equally
                strong passion for human-centered design and visual communication.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.88, color: 'var(--text2)', marginBottom: 36,
                overflowWrap: 'break-word', wordBreak: 'normal' }}>
                Currently contributing as a{' '}
                <strong style={{ color: 'var(--text)', fontWeight: 700 }}>UI/UX AI Intern at FlyRank AI</strong>,
                I bridge the gap between intelligent systems and intuitive interfaces. Beyond design,
                I invest in people — leading student teams, mentoring peers, and nurturing creative
                communities through music, photography, and collaborative leadership.
              </p>
            </div>

            <div className="stats-grid reveal d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
              {stats.map((s) => (
                <div key={s.l} className="card-lift" style={{
                  padding: '20px 22px', background: 'var(--surface)',
                  borderRadius: 12, border: '1px solid var(--border)',
                }}>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 36, fontWeight: 800,
                    lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--accent)' }}>{s.v}</div>
                  <div style={{ fontSize: 13, color: 'var(--text2)', marginTop: 6, fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div className="reveal d3" style={{
              marginTop: 28, padding: '20px 22px',
              background: 'var(--surface)', borderRadius: 12, border: '1px solid var(--border)',
            }}>
              {[
                { icon: <Mail size={13} />, text: 'didarabid@gmail.com' },
                { icon: <Phone size={13} />, text: '+880 1959 089 483' },
                { icon: <MapPin size={13} />, text: 'Rupnagar, Mirpur 2, Dhaka-1216' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'center', color: 'var(--text2)' }}>
                  {item.icon}
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Academic Journey */}
          <div className="reveal-r d2">
            <Mono style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: 14 }}>
              Academic Journey
            </Mono>
            <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 22, fontWeight: 800,
              color: 'var(--text)', letterSpacing: '-0.015em', marginBottom: 28 }}>
              Education &amp; <span className="g-text">background</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {EDU.map((e, i) => (
                <a key={i} href={e.href} target="_blank" rel="noopener noreferrer"
                  className="card-lift"
                  style={{
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                    padding: '20px 22px', background: 'var(--surface)',
                    borderRadius: 14, border: '1px solid var(--border)',
                    textDecoration: 'none', position: 'relative',
                    borderLeft: '3px solid var(--accent)',
                  }}>
                  {/* Icon */}
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: 'color-mix(in srgb, var(--accent) 12%, var(--surface2))',
                    border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)',
                  }}>
                    {e.icon}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14.5, fontWeight: 700,
                      color: 'var(--text)', lineHeight: 1.3, marginBottom: 4 }}>{e.d}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--text2)', fontWeight: 500, marginBottom: 8 }}>{e.s}</div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <Mono style={{
                        fontSize: 10, color: 'var(--text3)', letterSpacing: '0.08em',
                        background: 'var(--surface2)', padding: '3px 9px', borderRadius: 20,
                      }}>{e.p}</Mono>
                      <Mono style={{
                        fontSize: 10, color: 'var(--accent)', letterSpacing: '0.06em',
                        background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
                        padding: '3px 9px', borderRadius: 20,
                      }}>{e.n}</Mono>
                    </div>
                  </div>
                  <ExternalLink size={12} color="var(--text3)" style={{ flexShrink: 0, marginTop: 2 }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

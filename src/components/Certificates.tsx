import { ArrowLeft, ExternalLink, Award } from 'lucide-react';
import { CERTS } from '@/data';
import { Mono } from '@/components/ui';

interface Props {
  onBack: () => void;
}

/* Group certs by issuer, preserving order */
function groupByIssuer(certs: typeof CERTS) {
  const map = new Map<string, typeof CERTS>();
  for (const c of certs) {
    if (!map.has(c.issuer)) map.set(c.issuer, []);
    map.get(c.issuer)!.push(c);
  }
  return Array.from(map.entries());
}

/* Readable accent color that works on both light and dark --surface backgrounds */
function safeAccent(hex: string) {
  /* Parse luminance roughly; if the color is very dark, lighten it in dark mode via CSS */
  return hex;
}

export function Certificates({ onBack }: Props) {
  const groups = groupByIssuer(CERTS);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '0 24px 100px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', paddingTop: 100 }}>

        {/* Back */}
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '9px 18px', borderRadius: 100,
            background: 'var(--surface)', border: '1px solid var(--border)',
            color: 'var(--text2)', cursor: 'pointer', fontSize: 13,
            fontFamily: "'JetBrains Mono',monospace", fontWeight: 600,
            marginBottom: 48, transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
          <ArrowLeft size={14} /> Back to Portfolio
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Mono style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.20em',
            textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: 12,
          }}>Credentials</Mono>
          <h1 style={{
            fontFamily: "'Outfit',sans-serif",
            fontSize: 'clamp(32px,4vw,56px)', fontWeight: 800,
            lineHeight: 1.06, letterSpacing: '-0.025em', color: 'var(--text)',
            marginBottom: 16,
          }}>
            My <span className="g-text">Certifications</span>
          </h1>
          <p style={{ fontSize: 15, color: 'var(--text2)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Professional credentials from Anthropic and Grameenphone Academy, sorted alphabetically within each institution.
          </p>
        </div>

        {/* Groups */}
        {groups.map(([issuer, certs]) => (
          <div key={issuer} style={{ marginBottom: 64 }}>
            {/* Section divider */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32,
            }}>
              <div style={{
                padding: '6px 18px', borderRadius: 100,
                background: 'color-mix(in srgb, var(--accent) 10%, var(--surface))',
                border: '1px solid color-mix(in srgb, var(--accent) 28%, transparent)',
              }}>
                <Mono style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  {issuer}
                </Mono>
              </div>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
              <Mono style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: '0.06em' }}>
                {certs.length} certificate{certs.length !== 1 ? 's' : ''}
              </Mono>
            </div>

            {/* Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 22,
            }}>
              {certs.map((cert) => (
                <div key={cert.title} className="card-lift" style={{
                  borderRadius: 16, overflow: 'hidden',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  display: 'flex', flexDirection: 'column',
                }}>
                  {/* Colour band */}
                  <div style={{
                    background: cert.bg,
                    height: 72,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08), transparent 40%)',
                    }} />
                    <Award size={28} color={cert.accent} style={{ opacity: 0.9, position: 'relative', zIndex: 1 }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 15.5, fontWeight: 800, color: 'var(--text)',
                      lineHeight: 1.3,
                    }}>
                      {cert.title}
                    </div>

                    {/* Issuer + co-issuers */}
                    {cert.coIssuers && cert.coIssuers.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {cert.coIssuers.map((co) => (
                          <span key={co} style={{
                            fontSize: 10.5, fontWeight: 600, letterSpacing: '0.05em',
                            padding: '3px 10px', borderRadius: 20,
                            background: 'var(--surface2)',
                            color: 'var(--text2)',
                            border: '1px solid var(--border)',
                            fontFamily: "'JetBrains Mono',monospace",
                          }}>
                            {co}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* View button */}
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: 'auto',
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        padding: '9px 16px', borderRadius: 8,
                        background: 'var(--surface2)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        textDecoration: 'none', fontWeight: 600, fontSize: 12.5,
                        fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.03em',
                        transition: 'all 0.25s ease',
                        alignSelf: 'flex-start',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = cert.accent;
                        e.currentTarget.style.color = cert.accent;
                        e.currentTarget.style.background = `color-mix(in srgb, ${cert.accent} 8%, var(--surface2))`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.color = 'var(--text)';
                        e.currentTarget.style.background = 'var(--surface2)';
                      }}>
                      <ExternalLink size={12} /> View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/icons';
import { SecHead } from '@/components/ui';
import { PROJECTS } from '@/data';

export function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 24px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <SecHead eyebrow="Projects" title={<>Things I've <span className="g-text">built</span></>} />
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))', gap: 22 }}>
          {PROJECTS.map((p, i) => (
            <div key={p.name} className={`reveal card-lift d${i + 1}`} style={{
              padding: '28px 26px', background: 'var(--surface)',
              borderRadius: 16, border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, ${p.c}, transparent)` }} />
              <div style={{ color: p.c, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 19, fontWeight: 800,
                color: 'var(--text)', marginBottom: 10, letterSpacing: '-0.02em' }}>{p.name}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--text2)', flex: 1, marginBottom: 20,
                textAlign: 'justify', hyphens: 'auto' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
                {p.tags.map((t) => (
                  <span key={t} style={{
                    padding: '4px 10px', borderRadius: 6, fontSize: 11.5, fontWeight: 500,
                    background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text2)',
                  }}>{t}</span>
                ))}
              </div>
              <a href={p.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 13, fontWeight: 700, color: p.c, textDecoration: 'none',
                  transition: 'gap 0.22s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}>
                <GithubIcon size={14} /> View on GitHub <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

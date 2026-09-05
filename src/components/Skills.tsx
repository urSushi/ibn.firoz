import { SecHead } from '@/components/ui';
import { SKILL_CATS } from '@/data';

export function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 24px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <SecHead eyebrow="Skills" title={<>Crafts I've <span className="g-text">mastered</span></>} />
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(255px,1fr))', gap: 20 }}>
          {SKILL_CATS.map((cat, i) => (
            <div key={cat.title} className={`reveal card-lift d${i + 1}`} style={{
              padding: '26px 24px', background: 'var(--surface)',
              borderRadius: 16, border: '1px solid var(--border)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, ${cat.c}, transparent)` }} />
              <div style={{ color: cat.c, marginBottom: 14 }}>{cat.icon}</div>
              <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 700,
                color: 'var(--text)', marginBottom: 14, letterSpacing: '-0.01em' }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {cat.skills.map((sk) => (
                  <span key={sk} style={{
                    padding: '4px 10px', borderRadius: 6, fontSize: 11.5, fontWeight: 500,
                    background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text2)',
                    transition: 'all 0.2s ease', cursor: 'default',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = cat.c; e.currentTarget.style.color = cat.c; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Mail, Phone, ArrowRight, ArrowUpRight, MessageCircle, Award } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/icons';
import { Mono, SecHead } from '@/components/ui';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }); }, 4000);
  };

  return (
    <section id="contact" style={{ padding: '120px 24px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <SecHead eyebrow="Contact" title={<>Let's <span className="g-text">connect</span></>} />
        <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>

          {/* Left: contact info */}
          <div className="reveal-l">
            <p style={{ fontSize: 15, lineHeight: 1.88, color: 'var(--text2)', marginBottom: 28,
              textAlign: 'justify', hyphens: 'auto' }}>
              Whether you have a project in mind, an opportunity to share, or simply want to start a
              conversation — I am always open to meaningful collaboration and creative dialogue.
            </p>
            {[
              { icon: <Mail size={14} />, label: 'Email', val: 'didarabid@gmail.com', href: 'mailto:didarabid@gmail.com' },
              { icon: <Phone size={14} />, label: 'Phone', val: '+880 1959 089 483', href: 'tel:+8801959089483' },
              { icon: <LinkedinIcon size={14} />, label: 'LinkedIn', val: 'Didar Ibn Firoz', href: 'https://www.linkedin.com/in/didar-ibn-firoz-376320414/' },
              { icon: <GithubIcon size={14} />, label: 'GitHub', val: '@urSushi', href: 'https://github.com/urSushi' },
            ].map((item) => (
              <a key={item.label} href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" className="card-lift" style={{
                  display: 'flex', gap: 14, alignItems: 'center',
                  padding: '13px 16px', background: 'var(--surface)',
                  borderRadius: 12, border: '1px solid var(--border)',
                  textDecoration: 'none', marginBottom: 10, transition: 'all 0.3s ease',
                }}>
                <div style={{ color: 'var(--accent)', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <Mono style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.10em',
                    textTransform: 'uppercase', color: 'var(--text3)', display: 'block', marginBottom: 2 }}>
                    {item.label}
                  </Mono>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text)' }}>{item.val}</div>
                </div>
                <ArrowUpRight size={13} color="var(--text3)" style={{ marginLeft: 'auto', flexShrink: 0 }} />
              </a>
            ))}
            <a href="https://wa.me/8801959089483" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '13px 18px', borderRadius: 12,
                background: '#25d366', color: '#fff',
                textDecoration: 'none', fontWeight: 700, fontSize: 14,
                marginTop: 14, transition: 'all 0.28s ease',
                boxShadow: '0 4px 16px rgba(37,211,102,0.28)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.28)'; }}>
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <form onSubmit={submit} className="reveal-r" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              {(['Name', 'Email'] as const).map((f) => (
                <div key={f}>
                  <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase',
                    color: 'var(--text2)', display: 'block', marginBottom: 8, fontFamily: "'JetBrains Mono',monospace" }}>{f}</label>
                  <input className="form-inp" type={f === 'Email' ? 'email' : 'text'}
                    placeholder={f === 'Email' ? 'you@email.com' : 'Your name'} required
                    value={form[f.toLowerCase() as 'name' | 'email']}
                    onChange={(e) => setForm({ ...form, [f.toLowerCase()]: e.target.value })} />
                </div>
              ))}
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase',
                color: 'var(--text2)', display: 'block', marginBottom: 8, fontFamily: "'JetBrains Mono',monospace" }}>Message</label>
              <textarea className="form-inp" placeholder="Tell me about your project or opportunity..." rows={6}
                style={{ resize: 'vertical' }} required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" style={{
              alignSelf: 'flex-start',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 30px', borderRadius: 8,
              background: sent
                ? 'linear-gradient(135deg, var(--green), color-mix(in srgb, var(--green) 80%, #000))'
                : 'linear-gradient(135deg, var(--accent), var(--accent2))',
              color: '#fff', border: 'none', cursor: 'pointer',
              fontSize: 14, fontWeight: 700,
              boxShadow: sent ? '0 4px 16px rgba(16,185,129,0.3)' : '0 4px 16px var(--glow)',
              transition: 'all 0.38s ease',
            }}
              onMouseEnter={(e) => !sent && (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}>
              {sent ? <><Award size={14} /> Sent!</> : <>Send Message <ArrowRight size={14} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

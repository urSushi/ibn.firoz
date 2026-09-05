import { TICKER_ITEMS } from '@/data';

export function DesignationTicker() {
  const SEP = (
    <span style={{ margin: '0 22px', opacity: 0.45, fontSize: 9, lineHeight: 1 }}>◆</span>
  );

  /* Double the block for seamless -50% loop */
  const Block = () => (
    <>
      {TICKER_ITEMS.map((item, i) => (
        <span key={i} style={{
          display: 'inline-flex', alignItems: 'center',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11.5, fontWeight: 500, letterSpacing: '0.10em',
          textTransform: 'uppercase', whiteSpace: 'nowrap', lineHeight: 1.2,
        }}>
          {item}{SEP}
        </span>
      ))}
    </>
  );

  return (
    /* Extra vertical padding prevents descenders (g, y, p) from clipping */
    <div style={{ background: 'var(--accent)', overflow: 'hidden', padding: '15px 0', color: 'rgba(255,255,255,0.96)' }}>
      <div style={{
        display: 'flex', width: 'max-content', alignItems: 'center',
        animation: 'marquee 32s linear infinite', willChange: 'transform',
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center' }}><Block /></span>
        <span style={{ display: 'inline-flex', alignItems: 'center' }}><Block /></span>
      </div>
    </div>
  );
}

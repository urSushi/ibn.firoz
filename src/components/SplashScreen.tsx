import { useState, useEffect } from 'react';

/* Three greeting words cycling in English, German, Japanese */
const GREETINGS = [
  { word: 'Hello',       lang: 'English',  font: "'Playfair Display', Georgia, serif", style: 'italic' as const },
  { word: 'Hallo',       lang: 'Deutsch',  font: "'Outfit', sans-serif",              style: 'normal' as const },
  { word: 'こんにちは',   lang: '日本語',   font: "'Noto Sans JP', sans-serif",         style: 'normal' as const },
];

/* Each visitor gets a random starting greeting */
function randomStart() {
  return Math.floor(Math.random() * GREETINGS.length);
}

interface Props {
  onDone: () => void;
}

export function SplashScreen({ onDone }: Props) {
  const [step, setStep]       = useState(0);         /* which greeting is active */
  const [startIdx]            = useState(randomStart);
  const [phase, setPhase]     = useState<'in' | 'hold' | 'out'>('in');
  const [closing, setClosing] = useState(false);     /* final full-screen fade */

  const order = GREETINGS.map((_, i) => (startIdx + i) % GREETINGS.length);
  const current = GREETINGS[order[step]];
  const isLast  = step === GREETINGS.length - 1;

  /* Phase timing: in → hold → out, then next word or close */
  useEffect(() => {
    const T = { in: 500, hold: 900, out: 400 };
    let timer: ReturnType<typeof setTimeout>;

    if (phase === 'in') {
      timer = setTimeout(() => setPhase('hold'), T.in);
    } else if (phase === 'hold') {
      timer = setTimeout(() => setPhase('out'), T.hold);
    } else {
      timer = setTimeout(() => {
        if (isLast) {
          setClosing(true);
          setTimeout(onDone, 700);
        } else {
          setStep((s) => s + 1);
          setPhase('in');
        }
      }, T.out);
    }
    return () => clearTimeout(timer);
  }, [phase, isLast, onDone]);

  const wordOpacity   = phase === 'hold' ? 1 : 0;
  const wordTranslate = phase === 'in' ? '32px' : phase === 'out' ? '-32px' : '0';

  return (
    <div
      onClick={() => { setClosing(true); setTimeout(onDone, 700); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg)',
        opacity: closing ? 0 : 1,
        transition: closing ? 'opacity 0.7s ease' : 'none',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in srgb, var(--accent) 14%, transparent), transparent)',
      }} />

      {/* Language label */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 'clamp(10px, 1.2vw, 12px)',
        fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase',
        color: 'var(--text3)', marginBottom: 28,
        opacity: wordOpacity,
        transition: 'opacity 0.45s ease',
      }}>
        {current.lang}
      </div>

      {/* The greeting word */}
      <div style={{
        fontFamily: current.font,
        fontStyle: current.style,
        fontSize: 'clamp(56px, 14vw, 160px)',
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '-0.04em',
        color: 'var(--text)',
        opacity: wordOpacity,
        transform: `translateY(${wordTranslate})`,
        transition: 'opacity 0.45s ease, transform 0.45s cubic-bezier(0.16,1,0.3,1)',
        textAlign: 'center',
        padding: '0 24px',
      }}>
        {current.word}
      </div>

      {/* Dots */}
      <div style={{
        display: 'flex', gap: 8, marginTop: 48,
        opacity: wordOpacity, transition: 'opacity 0.45s ease',
      }}>
        {GREETINGS.map((_, i) => (
          <div key={i} style={{
            width: step === i ? 20 : 6, height: 6, borderRadius: 3,
            background: step === i ? 'var(--accent)' : 'var(--border)',
            transition: 'all 0.4s ease',
          }} />
        ))}
      </div>

      {/* Tap hint */}
      <div style={{
        position: 'absolute', bottom: 36,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'var(--text3)',
        opacity: phase === 'hold' ? 0.6 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        tap to skip
      </div>
    </div>
  );
}

import { useState, useEffect, useCallback } from 'react';

export function useWindowWidth() {
  const [w, setW] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1200));
  const update = useCallback(() => setW(window.innerWidth), []);
  useEffect(() => {
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, [update]);
  return w;
}

export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setPct(h > 0 ? Math.min((window.scrollY / h) * 100, 100) : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return pct;
}

export function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.3 }
    );
    document.querySelectorAll('section[id]').forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return active;
}

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: '3+',   label: 'Years building'   },
  { value: '10+',  label: 'Projects shipped' },
  { value: '100%', label: 'Curiosity driven' },
];

const STACK = ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Figma', 'Git'];

const TIMELINE = [
  { year: '2021', title: 'Started coding',        desc: 'Picked up HTML, CSS, and JavaScript. Built my first webpage and got completely hooked.' },
  { year: '2022', title: 'Learned React',          desc: 'Moved into component-driven UI. Started thinking in state, props, and reusable patterns.' },
  { year: '2023', title: 'Went deeper into UI',    desc: 'Focused on design systems, animations, and making interfaces that actually feel good to use.' },
  { year: '2024', title: 'Built real projects',    desc: 'Shipped multiple projects — from portfolio tools to OS-like browser dashboards and automation workflows.' },
  { year: 'Now',  title: 'Final year + freelance', desc: 'Pursuing B.E. in Computer Engineering at SPPU while building products and looking for the right opportunity.' },
];

const EDUCATION = [
  { degree: 'Diploma in Computer Engineering', institution: 'Institution name — placeholder', status: 'Completed',  pursuing: false },
  { degree: 'B.E. in Computer Engineering',    institution: 'SPPU — placeholder',            status: 'In progress', pursuing: true  },
];

// ── hooks ─────────────────────────────────────────────────────────────────────

const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

// ── components ────────────────────────────────────────────────────────────────

const Reveal = ({ children, delay = 0, direction = 'up' }) => {
  const [ref, visible] = useReveal();
  const from = { up: 'translateY(28px)', left: 'translateX(-40px)', right: 'translateX(40px)' }[direction];
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : from,
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
};

const GoldLabel = ({ children }) => (
  <p style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a84c', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
    <span style={{ width: 24, height: 1, background: '#c9a84c', opacity: 0.55, flexShrink: 0 }} />
    {children}
  </p>
);

const GlassCard = ({ children, style = {} }) => (
  <div
    style={{ border: '1px solid rgba(201,168,76,0.1)', borderRadius: 16, background: 'rgba(255,255,255,0.025)', backdropFilter: 'blur(8px)', padding: '1.75rem', transition: 'border-color 0.25s, background 0.25s, transform 0.25s', ...style }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.background = 'rgba(201,168,76,0.04)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; e.currentTarget.style.transform = 'none'; }}
  >{children}</div>
);

// ── about ─────────────────────────────────────────────────────────────────────

const About = () => (
  <section id="about" style={{ background: 'transparent', color: '#f0ede6', fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>

    {/* faint left line */}
    <div style={{ position: 'absolute', top: 0, left: '2rem', width: 1, height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.08) 30%, rgba(201,168,76,0.08) 70%, transparent)', pointerEvents: 'none' }} />

    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

      <Reveal><GoldLabel>About me</GoldLabel></Reveal>

      {/* headline + bio */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginBottom: '5rem' }}>
        <Reveal delay={0.05}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#f0ede6', margin: 0 }}>
            I build things that feel as good as they look.
          </h2>
        </Reveal>

        <Reveal delay={0.15} direction="right">
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#9a9485', marginBottom: '1.25rem' }}>
              I'm a frontend developer in my final year of Computer Engineering at SPPU. I focus on clean, responsive interfaces — the kind where every spacing decision was intentional and every interaction feels earned.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#9a9485', margin: 0 }}>
              I've spent the last few years going deep on React, UI systems, and developer tooling. Right now I'm building OS_UI — a browser-based desktop shell for any CLI machine — and looking for the right team to grow with.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.75rem', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 999, padding: '0.45rem 1rem', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#cbd5e1' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px rgba(74,222,128,0.8)', flexShrink: 0 }} />
              Available for work
            </div>
          </div>
        </Reveal>
      </div>

      {/* stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '5rem' }}>
        {STATS.map((s, i) => (
          <Reveal key={s.value} delay={i * 0.08}>
            <GlassCard style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#9a9485', marginTop: '0.4rem' }}>{s.label}</div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* stack */}
      <Reveal><GoldLabel>Tech I use</GoldLabel></Reveal>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '5rem' }}>
        {STACK.map((tech, i) => (
          <Reveal key={tech} delay={i * 0.05} direction={i % 2 === 0 ? 'left' : 'right'}>
            <span
              style={{ border: '1px solid rgba(201,168,76,0.15)', borderRadius: 8, padding: '0.45rem 1rem', fontSize: '0.82rem', color: '#fde68a', background: 'rgba(201,168,76,0.05)', letterSpacing: '0.04em', transition: 'border-color 0.2s, background 0.2s', display: 'inline-block', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'; e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'; e.currentTarget.style.background = 'rgba(201,168,76,0.05)'; }}
            >{tech}</span>
          </Reveal>
        ))}
      </div>

      {/* timeline */}
      <Reveal><GoldLabel>My journey</GoldLabel></Reveal>
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        <div style={{ position: 'absolute', top: 8, bottom: 8, left: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.2) 10%, rgba(201,168,76,0.2) 90%, transparent)' }} />
        {TIMELINE.map((item, i) => (
          <Reveal key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div style={{ display: 'flex', gap: '1.75rem', marginBottom: i < TIMELINE.length - 1 ? '2.5rem' : 0, position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', top: 6, width: 10, height: 10, borderRadius: '50%', background: '#c9a84c', boxShadow: '0 0 10px rgba(201,168,76,0.5)' }} />
              <div style={{ fontFamily: "'JetBrains Mono','Fira Code',monospace", fontSize: '0.72rem', color: '#c9a84c', letterSpacing: '0.1em', minWidth: '2.8rem', paddingTop: '0.2rem', flexShrink: 0 }}>{item.year}</div>
              <GlassCard style={{ flex: 1, padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#f0ede6', margin: '0 0 0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#9a9485', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </GlassCard>
            </div>
          </Reveal>
        ))}
      </div>

      {/* education */}
      <div style={{ marginTop: '5rem' }}>
        <Reveal><GoldLabel>Education</GoldLabel></Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
              <GlassCard style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 500, color: '#f0ede6', margin: '0 0 0.35rem' }}>
                    {edu.degree}
                    {edu.pursuing && <span style={{ marginLeft: '0.5rem', fontSize: '0.62rem', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', borderRadius: 999, padding: '0.15rem 0.55rem', verticalAlign: 'middle' }}>Pursuing</span>}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#9a9485', margin: 0 }}>{edu.institution}</p>
                </div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#504d46' }}>{edu.status}</span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default About;
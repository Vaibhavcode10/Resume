import { useState } from 'react';

const certificates = [
  {
    title: 'Frontend Development Foundations',
    issuer: 'Lorem Academy',
    issued: '2025',
    category: 'Frontend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.',
    id: 'DEMO-FE-2025-014',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'Example Learning',
    issued: '2024',
    category: 'Frontend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis.',
    id: 'DEMO-RWD-2024-028',
  },
  {
    title: 'Interface Design Essentials',
    issuer: 'Sample Design School',
    issued: '2024',
    category: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.',
    id: 'DEMO-UI-2024-006',
  },
];

const categories = ['All', 'Frontend', 'Design'];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleCertificates = certificates.filter(
    (certificate) => activeCategory === 'All' || certificate.category === activeCategory,
  );

  return (
    <section id="certificates" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-24 sm:px-8 lg:px-12">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">Learning & credentials</p>
      <div className="mb-8 flex flex-col justify-between gap-5 border-y border-amber-400/15 py-8 sm:flex-row sm:items-end">
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-slate-100 sm:text-4xl">Certificates</h2>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Selected learning milestones across frontend development and interface design.
          </p>
        </div>
        <span className="w-fit border border-amber-300/30 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-amber-200">
          Demo content
        </span>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400" aria-live="polite">
          Showing {visibleCertificates.length} sample certificates
        </p>
        <div className="flex border border-white/10" role="group" aria-label="Filter certificates">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-2 text-xs transition-colors sm:px-4 ${
                activeCategory === category
                  ? 'bg-amber-300 text-black'
                  : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleCertificates.map((certificate, index) => (
          <article key={certificate.id} className="flex min-h-64 flex-col border border-white/10 bg-white/[0.025] p-5 sm:p-6">
            <div className="mb-6 flex items-start justify-between gap-3">
              <span className="font-mono text-xs text-amber-200/75">0{index + 1}</span>
              <span className="border border-amber-300/25 px-2 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-amber-200">
                Sample
              </span>
            </div>
            <p className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-400">{certificate.category} / {certificate.issued}</p>
            <h3 className="mb-2 text-xl font-medium text-slate-100">{certificate.title}</h3>
            <p className="mb-5 text-sm text-amber-200/80">{certificate.issuer}</p>
            <p className="mb-6 flex-1 text-sm leading-6 text-slate-400">{certificate.description}</p>
            <p className="border-t border-white/10 pt-4 font-mono text-[0.65rem] text-slate-500">ID: {certificate.id}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

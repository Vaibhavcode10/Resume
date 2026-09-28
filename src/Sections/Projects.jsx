const project = {
  name: 'OS_UI',
  category: 'Web application · In development',
  description:
    'A browser-based desktop shell designed to bring a familiar graphical workspace to CLI machines.',
  details: [
    ['Purpose', 'Make command-line environments easier to navigate through a desktop-style interface.'],
    ['Focus', 'Building a clear, responsive experience around developer workflows.'],
    ['Stack', 'React · JavaScript · Web technologies'],
  ],
};

const Projects = () => (
  <section id="projects" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-24 text-slate-100 sm:px-8 lg:px-12">
    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">Selected work</p>
    <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">Projects</h2>
    <p className="mb-12 max-w-2xl text-lg text-slate-300">
      A selection of things I’m building and the problems behind them.
    </p>

    <article className="overflow-hidden border border-amber-400/20 bg-black/35 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
      <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex min-h-64 flex-col justify-between border-b border-amber-400/15 bg-gradient-to-br from-amber-300/10 via-black/10 to-transparent p-8 lg:border-b-0 lg:border-r">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-200/80">01 / Featured</span>
          <div>
            <p className="mb-3 text-sm text-slate-400">{project.category}</p>
            <h3 className="text-4xl font-semibold sm:text-5xl">{project.name}</h3>
          </div>
        </div>

        <div className="p-7 sm:p-10">
          <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">{project.description}</p>
          <dl className="divide-y divide-white/10">
            {project.details.map(([label, description]) => (
              <div key={label} className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-amber-200/80">{label}</dt>
                <dd className="text-sm leading-6 text-slate-300">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  </section>
);

export default Projects;
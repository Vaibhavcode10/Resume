const Certificates = () => (
  <section id="certificates" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-24 sm:px-8 lg:px-12">
    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">Learning & credentials</p>
    <div className="grid gap-8 border-y border-amber-400/15 py-8 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.65fr)] md:items-end">
      <div>
        <h2 className="mb-4 text-3xl font-semibold text-slate-100 sm:text-4xl">Certificates</h2>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          A record of courses and certifications completed along the way.
        </p>
      </div>
      <p className="border-l-2 border-amber-300/50 pl-5 text-sm leading-6 text-slate-400">
        No certificates have been added yet. This section is ready for credential names, issuers, dates, and verification links.
      </p>
    </div>
  </section>
);

export default Certificates;

const Contact = () => (
  <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-28 pt-16 sm:px-8 lg:px-12">
    <div className="grid gap-8 border-t border-amber-400/20 pt-10 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.65fr)] md:items-end">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">Contact</p>
        <h2 className="mb-4 text-3xl font-semibold text-slate-100 sm:text-4xl">Let’s build something thoughtful.</h2>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          I’m open to conversations about frontend roles, collaborations, and interesting projects.
        </p>
      </div>
      <div className="border border-white/10 bg-white/[0.03] p-5">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber-200/80">Get in touch</p>
        <p className="text-sm leading-6 text-slate-400">
          Contact details haven’t been added yet. Add an email address or profile link here to make this section actionable.
        </p>
      </div>
    </div>
    <p className="mt-16 border-t border-white/10 pt-5 text-xs text-slate-500">© {new Date().getFullYear()} Vaibhav</p>
  </section>
);

export default Contact;

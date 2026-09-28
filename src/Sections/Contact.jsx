const DEMO_EMAIL = 'hello@example.com';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = `Portfolio inquiry from ${name}`;
    const body = `Name: ${name}\nReply to: ${email}\n\n${message}`;

    window.location.href = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-28 pt-16 sm:px-8 lg:px-12">
      <div className="border-t border-amber-400/20 pt-10">
        <div className="mb-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.65fr)] md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">Contact</p>
            <h2 className="mb-4 text-3xl font-semibold text-slate-100 sm:text-4xl">Let’s build something thoughtful.</h2>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              Have an idea, a role, or a project in mind? Send a note and let’s start a conversation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 border-l-2 border-amber-300/50 pl-5">
            <div>
              <p className="mb-1 text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">Status</p>
              <p className="text-sm text-slate-200">Open to opportunities</p>
            </div>
            <div>
              <p className="mb-1 text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">Based</p>
              <p className="text-sm text-slate-200">Remote / demo</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber-200/80">Email</p>
            <a href={`mailto:${DEMO_EMAIL}`} className="break-all text-lg text-slate-100 underline decoration-amber-300/50 underline-offset-4 hover:text-amber-200">
              {DEMO_EMAIL}
            </a>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Sample contact details for layout preview. Replace this demo address before publishing.
            </p>
            <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-slate-500">
              Typical topics: frontend roles, UI collaboration, and web application projects.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300">
                Your name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="min-w-0 border border-white/15 bg-black/30 px-3 py-2.5 text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-amber-300/60"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Your email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 border border-white/15 bg-black/30 px-3 py-2.5 text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-amber-300/60"
                  placeholder="jane@example.com"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-slate-300">
              Message
              <textarea
                name="message"
                rows="5"
                required
                className="min-w-0 resize-y border border-white/15 bg-black/30 px-3 py-2.5 text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-amber-300/60"
                placeholder="Lorem ipsum dolor sit amet..."
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">Opens your email app with a prefilled draft. Demo recipient only.</p>
              <button type="submit" className="w-fit border border-amber-300 bg-amber-300 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-amber-200">
                Open email draft
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="mt-16 border-t border-white/10 pt-5 text-xs text-slate-500">© {new Date().getFullYear()} Vaibhav</p>
    </section>
  );
};

export default Contact;

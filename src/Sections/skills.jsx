import React from 'react';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Design & UI',
    items: ['UI Thinking', 'Responsive Design', 'Animation', 'Figma', 'Accessibility'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Node.js', 'npm'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 items-center px-6 py-28 sm:px-8 lg:px-12">
      <div className="w-full">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">Skills</p>
        <h2 className="mb-8 text-3xl font-semibold text-slate-100 sm:text-4xl lg:text-5xl">
          Building with focus, clarity, and careful detail.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-4 text-xl font-semibold text-amber-300">{group.title}</h3>
              <ul className="space-y-3 text-lg text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-300"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

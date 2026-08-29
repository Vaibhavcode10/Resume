import React from 'react';

const sections = [
  {
    id: 'about',
    title: 'About Me',
    text: 'I enjoy turning ideas into responsive, thoughtful experiences with strong design and clean code.',
    plain: true,
  },
  {
    id: 'projects',
    title: 'Projects',
    text: 'I have worked on modern frontend projects, UI systems, and interactive web experiences.',
  },
  {
    id: 'experience',
    title: 'Experience',
    text: 'My work blends creativity, problem-solving, and technical detail to create beautiful products.',
  },
  {
    id: 'contact',
    title: 'Contact',
    text: 'Let’s connect and build something meaningful together.',
  },
];

const Bottom = () => {
  return (
    <div className="px-2 py-2 sm:px-4 lg:px-6">
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`mx-auto mb-3 flex min-h-screen w-full max-w-7xl scroll-mt-24 items-center p-8 sm:p-12 lg:p-16 ${index % 2 === 1 ? 'justify-end' : 'justify-start'} rounded-none border-0 bg-transparent shadow-none`}
        >
          <div className={`max-w-2xl ${index % 2 === 1 ? 'text-right' : 'text-left'}`}>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">{section.title}</p>
            <h2 className="mb-5 text-3xl font-semibold text-slate-100 sm:text-4xl lg:text-5xl">{section.title}</h2>
            <p className="text-lg leading-8 text-slate-300 sm:text-xl">{section.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Bottom;
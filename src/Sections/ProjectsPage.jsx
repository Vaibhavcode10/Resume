import React from 'react';
import Navbar from './Navbar';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-transparent px-6 py-20 text-slate-100 sm:px-8 lg:px-12">
      <Navbar />
      <section id="projects-page" className="mx-auto max-w-6xl rounded-[2rem] border border-amber-400/15 bg-black/30 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">Projects</p>
        <h1 className="mb-6 text-4xl font-semibold sm:text-5xl">My selected work</h1>
        <p className="max-w-3xl text-lg text-slate-300">
          This is a separate projects page, but it still shares the same navbar as the home experience.
        </p>
      </section>
    </div>
  );
};

export default ProjectsPage;

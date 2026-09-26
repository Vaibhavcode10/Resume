const skills = [
  { name: 'React', category: 'Frontend', detail: 'Component-driven interfaces' },
  { name: 'Vite', category: 'Frontend', detail: 'Fast modern tooling' },
  { name: 'Tailwind CSS', category: 'Frontend', detail: 'Utility-first styling' },
  { name: 'JavaScript', category: 'Frontend', detail: 'Interactive web experiences' },
  { name: 'HTML / CSS', category: 'Frontend', detail: 'Semantic visual foundations' },
  { name: 'UI Thinking', category: 'Design & UI', detail: 'Clear user journeys' },
  { name: 'Responsive Design', category: 'Design & UI', detail: 'Fluid layouts everywhere' },
  { name: 'Animation', category: 'Design & UI', detail: 'Purposeful motion systems' },
  { name: 'Figma', category: 'Design & UI', detail: 'Ideas into prototypes' },
  { name: 'Accessibility', category: 'Design & UI', detail: 'Inclusive by default' },
  { name: 'Git', category: 'Tools', detail: 'Reliable version control' },
  { name: 'Node.js', category: 'Tools', detail: 'JavaScript beyond the browser' },
];

const Skills = () => {
  // Change pl-8, sm:pl-10, or lg:pl-14 to adjust Skills' left spacing.
  return (
    <section
      id="skills"className="skills-section relative mx-auto flex w-full max-w-none scroll-mt-24 items-start px-4 sm:px-10 sm:pb-4 lg:px-14"
    >
      <div className="skills-shell w-full">
        <div className="skills-heading">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300 ">Skills</p>
            <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl lg:text-5xl">
              Building with focus, clarity, and careful detail.
            </h2>
          </div>
        </div>

        <div className="skills-viewport">
          <div className="skills-track">
            {[0, 1].map((groupIndex) => (
              <div
                className="skills-group"
                key={groupIndex}
                aria-hidden={groupIndex === 1}
              >
                {skills.map((skill) => (
                  <article
                    className="skill-card"
                    key={`${skill.name}-${groupIndex}`}
                  >
                    <div className="skill-mark" aria-hidden="true">+</div>
                    <p className="skill-category">{skill.category}</p>
                    <h3>{skill.name}</h3>
                    <p className="skill-detail">{skill.detail}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
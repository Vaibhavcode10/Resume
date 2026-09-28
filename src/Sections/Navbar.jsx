import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", type: "scroll", target: "#home", priority: true },
  { label: "About", type: "scroll", target: "#about", priority: true },
  { label: "Skills", type: "scroll", target: "#skills", priority: true },
  { label: "Projects", type: "scroll", target: "#projects", priority: true },
  {
    label: "Certificates",
    type: "scroll",
    target: "#certificates",
    priority: false,
  },
  { label: "Contact", type: "scroll", target: "#contact", priority: false },
];

const scrollToTarget = (target) => {
  const el = document.querySelector(target);
  el?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        // Thin band near the vertical middle of the screen —
        // whichever section crosses it becomes "active"
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    navLinks
      .filter((item) => item.type === "scroll")
      .forEach((item) => {
        const section = document.querySelector(item.target);
        if (section) observer.observe(section);
      });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (item) => {
    setOpen(false);

    setActiveSection(item.target.slice(1));
    scrollToTarget(item.target);
  };

  const isActive = (item) => activeSection === item.target.slice(1);

  const linkClasses = (item) =>
    `relative px-5 py-1.5 text-lg lg:text-xl font-medium tracking-[0.2em] transition-all duration-500 ${
      isActive(item)
        ? "text-amber-300"
        : "text-slate-300 hover:text-amber-300"
    }`;

  return (
    <header className="fixed left-1/2 top-2 z-50 w-[92%] max-w-6xl -translate-x-1/2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 z-0 h-20 w-screen -translate-x-1/2 bg-black/20 backdrop-blur-md"
      />
      <div className="relative z-10 flex items-center justify-between px-3 py-1 sm:px-5">
        {/* Floating Logo */}
        <div
          onClick={() => handleNavigation(navLinks[0])}
          className="translate-y-1 cursor-pointer select-none text-3xl sm:text-4xl text-amber-300 transition-all duration-500 hover:scale-105 hover:text-amber-200"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            letterSpacing: "4px",
            textShadow: "0 0 20px rgba(201,168,76,0.35)",
          }}
        >
          Vaibhav
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:gap-10 xl:gap-14 md:flex">
          {navLinks.map((item) => {
            const button = (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={linkClasses(item)}
              >
                {item.label}
                {/* Always rendered, animated via scaleX so it slides in instead of popping */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] origin-center rounded-full bg-amber-300 shadow-[0_0_15px_rgba(201,168,76,0.8)] transition-all duration-500 ease-out ${
                    isActive(item) ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                ></span>
              </button>
            );

            return item.priority ? (
              button
            ) : (
              <div key={item.label} className="hidden xl:block">
                {button}
              </div>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
         <button
          className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center text-amber-300 transition-all duration-300 hover:scale-110 hover:text-amber-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-7 w-7 transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button> 
      </div>

      {/* Floating Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? "max-h-[500px] opacity-100 mt-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-[90%] rounded-3xl bg-black/20 backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,0.5)]">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item)}
              className={`block w-full px-6 py-5 text-center text-lg font-medium tracking-widest transition-colors duration-300 ${
                isActive(item)
                  ? "text-amber-300"
                  : "text-slate-300 hover:text-amber-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
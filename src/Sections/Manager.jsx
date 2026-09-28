import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './skills';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';

const Manager = () => {
  return (
    <div className="relative  bg-transparent px-4 pb-1 pt-1 text-slate-100 sm:px-6 lg:px-8">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Manager;
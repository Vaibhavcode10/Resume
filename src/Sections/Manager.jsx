import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './skills';
import About from './About';

const Manager = () => {
  return (
    <div className="relative  bg-transparent px-4 pb-1 pt-1 text-slate-100 sm:px-6 lg:px-8">
      <Navbar />
      <Home />
      <Skills />
      <About />
    </div>
  );
};

export default Manager;
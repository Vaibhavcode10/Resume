import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './skills';
import Bottom from './Bottom';

const Manager = () => {
  return (
    <div className="relative  bg-transparent px-4 pb-1 pt-1 text-slate-100 sm:px-6 lg:px-8">
      <Navbar />
      <Home />
      <Skills />
      <Bottom />
    </div>
  );
};

export default Manager;
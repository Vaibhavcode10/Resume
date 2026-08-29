import React from "react";
import { Routes, Route } from "react-router-dom";
import Manager from "./Sections/Manager";
import ProjectsPage from "./Sections/ProjectsPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Manager />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;

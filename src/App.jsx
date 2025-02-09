import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;

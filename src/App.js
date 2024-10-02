import React from 'react';
import './App.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Gamified Portfolio</h1>
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;

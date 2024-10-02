import React, { useState } from 'react';
import './App.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  const [unlockedSections, setUnlockedSections] = useState(0);

  const handleUnlock = () => {
    setUnlockedSections(prev => Math.min(prev + 1, 3)); // Increase by 1 for each unlock, with a max of 3
  };

  const totalSections = 3;
  const progress = (unlockedSections / totalSections) * 100;

  return (
    <div className="App">
      <h1>Welcome to My Gamified Portfolio</h1>
      
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          {Math.round(progress)}%
        </div>
      </div>

      <Skills onUnlock={handleUnlock} />
      <Projects onUnlock={handleUnlock} />
      <Experience onUnlock={handleUnlock} />

      {progress === 100 && <div className="badge">🎉 You've unlocked all sections! 🎉</div>}
    </div>
  );
}

export default App;

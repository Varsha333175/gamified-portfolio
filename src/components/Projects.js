import React, { useState } from 'react';

function Projects() {
  const [isUnlocked, setUnlocked] = useState(false);

  const unlockSection = () => {
    setUnlocked(true);
  };

  return (
    <div className={`section ${isUnlocked ? 'unlocked' : 'locked'}`}>
      <h2>Projects</h2>
      {isUnlocked ? (
        <p>This section is now unlocked! Here are my projects.</p>
      ) : (
        <>
          <p>This section is locked. Complete tasks to unlock!</p>
          <button onClick={unlockSection}>Unlock Projects</button>
        </>
      )}
    </div>
  );
}

export default Projects;

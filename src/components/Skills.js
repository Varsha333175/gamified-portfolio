import React, { useState } from 'react';

function Skills() {
  const [isUnlocked, setUnlocked] = useState(false);

  const unlockSection = () => {
    setUnlocked(true);
  };

  return (
    <div className={`section ${isUnlocked ? 'unlocked' : 'locked'}`}>
      <h2>Skills</h2>
      {isUnlocked ? (
        <p>This section is now unlocked! Here are my skills.</p>
      ) : (
        <>
          <p>This section is locked. Complete tasks to unlock!</p>
          <button onClick={unlockSection}>Unlock Skills</button>
        </>
      )}
    </div>
  );
}

export default Skills;

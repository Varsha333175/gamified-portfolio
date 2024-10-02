import React, { useState } from 'react';

function Experience() {
  const [isUnlocked, setUnlocked] = useState(false);

  const unlockSection = () => {
    setUnlocked(true);
  };

  return (
    <div className={`section ${isUnlocked ? 'unlocked' : 'locked'}`}>
      <h2>Experience</h2>
      {isUnlocked ? (
        <p>This section is now unlocked! Here is my experience.</p>
      ) : (
        <>
          <p>This section is locked. Complete tasks to unlock!</p>
          <button onClick={unlockSection}>Unlock Experience</button>
        </>
      )}
    </div>
  );
}

export default Experience;

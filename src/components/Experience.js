import React, { useState } from 'react';

function Experience({ onUnlock }) {
  const [isUnlocked, setUnlocked] = useState(false);

  const unlockSection = () => {
    if (!isUnlocked) {
      setUnlocked(true);
      onUnlock(); // Call this only the first time
    }
  };

  return (
    <div className={`section ${isUnlocked ? 'unlocked' : 'locked'}`}>
      <h2>Experience</h2>
      {isUnlocked ? (
        <ul>
          <li>
            Company A: Full Stack Developer (2022 - Present)
            <p>Worked on developing dynamic web applications using React and Node.js.</p>
          </li>
          <li>
            Company B: Frontend Developer (2020 - 2022)
            <p>Specialized in creating responsive user interfaces with React and CSS frameworks.</p>
          </li>
        </ul>
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

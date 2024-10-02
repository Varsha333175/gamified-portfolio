import React, { useState } from 'react';
import Quiz from './Quiz';

function Skills({ onUnlock }) {
  const [isUnlocked, setUnlocked] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizComplete = () => {
    setUnlocked(true);
    onUnlock();
  };

  return (
    <div className={`section ${isUnlocked ? 'unlocked' : 'locked'}`}>
      <h2>Skills</h2>
      {isUnlocked ? (
        <div>
          <h3>Programming Languages</h3>
          <ul>
            <li>Java (v8+)</li>
            <li>JavaScript (ES6+ and TypeScript)</li>
            <li>Python (v3.x)</li>
            <li>Ruby (v2.x)</li>
            <li>PHP (v7.x)</li>
            <li>SQL</li>
          </ul>
          {/* Additional skills go here */}
        </div>
      ) : (
        <>
          <p>This section is locked. Complete the quiz to unlock!</p>
          {!quizStarted && <button onClick={startQuiz}>Start Quiz</button>}
          {quizStarted && <Quiz onQuizComplete={handleQuizComplete} />}
        </>
      )}
    </div>
  );
}

export default Skills;

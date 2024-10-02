import React, { useState } from 'react';

function Skills({ onUnlock }) {
  const [isUnlocked, setUnlocked] = useState(false);

  const unlockSection = () => {
    if (!isUnlocked) {
      setUnlocked(true);
      onUnlock();
    }
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

          <h3>Frameworks & Tools</h3>
          <ul>
            <li>Spring Boot (v2.x)</li>
            <li>Hibernate (v5.x)</li>
            <li>AngularJS (v1.7)</li>
            <li>ReactJS (v18.x)</li>
            <li>Node.js (v16.x)</li>
          </ul>

          <h3>Databases</h3>
          <ul>
            <li>MySQL (v5.x)</li>
            <li>PostgreSQL (v12.x)</li>
            <li>MongoDB (v4.x)</li>
          </ul>

          <h3>Web Development</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap (v4.x)</li>
            <li>Sass</li>
            <li>RESTful APIs</li>
            <li>JSON</li>
            <li>Axios</li>
          </ul>

          <h3>Cloud Technologies</h3>
          <ul>
            <li>AWS (Certified Solutions Architect – Associate)</li>
            <li>Jenkins (v2.x)</li>
            <li>Docker (v20.x)</li>
            <li>Kubernetes</li>
            <li>CI/CD pipelines</li>
            <li>AWS Lambda</li>
          </ul>

          <h3>Version Control & Build Tools</h3>
          <ul>
            <li>Git</li>
            <li>Maven</li>
            <li>Gradle</li>
          </ul>
        </div>
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

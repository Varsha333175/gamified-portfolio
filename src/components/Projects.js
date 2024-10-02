import React, { useState } from 'react';

function Projects({ onUnlock }) {
  const [isUnlocked, setUnlocked] = useState(false);

  const unlockSection = () => {
    if (!isUnlocked) {
      setUnlocked(true);
      onUnlock();
    }
  };

  return (
    <div className={`section ${isUnlocked ? 'unlocked' : 'locked'}`}>
      <h2>Projects</h2>
      {isUnlocked ? (
        <ul>
          <li>
            <strong>1. E-commerce Web Application</strong> - A full-stack application built with Spring Boot (backend), React (frontend), and MySQL. It supports user authentication, product catalog, shopping cart, and checkout.
          </li>
          <li>
            <strong>2. Task Management Tool</strong> - A task management application with a RESTful API in Spring Boot and a React frontend. It includes user authentication, role-based access, and task assignment.
          </li>
          <li>
            <strong>3. Blogging Platform</strong> - A blogging system with CRUD functionality for posts and comments, built with Spring Boot, Thymeleaf, and PostgreSQL. Deployed using Docker containers and managed through Kubernetes.
          </li>
          <li>
            <strong>4. Real-time Chat Application</strong> - A real-time chat application using WebSockets with a Spring Boot backend and React frontend, integrated with MongoDB for storing message history.
          </li>
          <li>
            <strong>5. Social Media Clone</strong> - A social media platform that includes user profiles, posts, likes, and comments, developed using Spring Boot and React. Integrated with AWS for media storage.
          </li>
          <li>
            <strong>6. REST API for Banking System</strong> - A comprehensive REST API built using Spring Boot that handles customer information, transactions, and balance updates. Security is handled via JWT.
          </li>
          <li>
            <strong>7. Portfolio Website</strong> - A dynamic, gamified portfolio site showcasing my skills and projects, built using React and Node.js.
          </li>
        </ul>
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

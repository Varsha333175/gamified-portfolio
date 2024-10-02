import React, { useState } from 'react';

function Quiz({ onQuizComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const passingScore = 0.8;  // 80% required to pass

  // Custom questions based on your skills
  const questions = [
    {
      questionText: 'Which version of Java introduced lambda expressions?',
      answerOptions: [
        { answerText: 'Java 6', isCorrect: false },
        { answerText: 'Java 8', isCorrect: true },
        { answerText: 'Java 7', isCorrect: false },
        { answerText: 'Java 9', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of these is NOT a valid HTTP method?',
      answerOptions: [
        { answerText: 'GET', isCorrect: false },
        { answerText: 'FETCH', isCorrect: true },
        { answerText: 'POST', isCorrect: false },
        { answerText: 'PUT', isCorrect: false },
      ],
    },
    {
      questionText: 'In React, what is the purpose of useEffect?',
      answerOptions: [
        { answerText: 'To manage state', isCorrect: false },
        { answerText: 'To perform side effects in components', isCorrect: true },
        { answerText: 'To handle events', isCorrect: false },
        { answerText: 'To manage routing', isCorrect: false },
      ],
    },
    {
      questionText: 'Which framework is used to create REST APIs in Java?',
      answerOptions: [
        { answerText: 'Django', isCorrect: false },
        { answerText: 'Spring Boot', isCorrect: true },
        { answerText: 'Flask', isCorrect: false },
        { answerText: 'Express.js', isCorrect: false },
      ],
    },
    {
      questionText: 'What command is used to initialize a new Node.js project?',
      answerOptions: [
        { answerText: 'npm install', isCorrect: false },
        { answerText: 'npm init', isCorrect: true },
        { answerText: 'node start', isCorrect: false },
        { answerText: 'npm start', isCorrect: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleQuizCompletion = () => {
    const totalQuestions = questions.length;
    const requiredScore = totalQuestions * passingScore;
    if (score >= requiredScore) {
      onQuizComplete();
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="quiz">
      {!quizStarted ? (
        <div className="quiz-intro">
          <p>You need to score 80% or higher to unlock this section.</p>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      ) : showScore ? (
        <div className="score-section">
          {score >= questions.length * passingScore ? (
            <>
              <p>You scored {score} out of {questions.length}! You passed the quiz.</p>
              <button onClick={handleQuizCompletion}>Unlock Section</button>
            </>
          ) : (
            <>
              <p>You scored {score} out of {questions.length}. You did not pass the quiz.</p>
              <button onClick={() => window.location.reload()}>Retry Quiz</button>
            </>
          )}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option.isCorrect)}>
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;

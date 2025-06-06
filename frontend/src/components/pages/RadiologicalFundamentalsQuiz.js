// frontend/src/components/quizzes/RadiologicalFundamentalsQuiz.js
import React, { useState } from 'react';

function RadiologicalFundamentalsQuiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  
  // Sample quiz questions
  const questions = [
    {
      question: "What are the three basic particles of an atom?",
      options: [
        "Protons, electrons, and positrons",
        "Protons, neutrons, and electrons",
        "Neutrons, electrons, and photons",
        "Quarks, leptons, and bosons"
      ],
      correctAnswer: 1
    },
    {
      question: "What is ionization?",
      options: [
        "The process of adding electrons to atoms",
        "The process of removing electrons from atoms",
        "The process of adding neutrons to a nucleus",
        "The process of nuclear fission"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is NOT a type of ionizing radiation?",
      options: [
        "Alpha particles",
        "Beta particles",
        "Gamma rays",
        "Radio waves"
      ],
      correctAnswer: 3
    },
    {
      question: "Which type of radiation has the highest penetrating power?",
      options: [
        "Alpha particles",
        "Beta particles",
        "Gamma rays",
        "X-rays"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the SI unit for absorbed dose?",
      options: [
        "Rem",
        "Sievert",
        "Gray",
        "Curie"
      ],
      correctAnswer: 2
    }
  ];
  
  // Handle answer selection
  const handleAnswerSelect = (questionIndex, answerIndex) => {
    console.log("Answer selected:", questionIndex, answerIndex);
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };
  
  // Move to next question
  const handleNextQuestion = () => {
    console.log("Next question button clicked");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  // Move to previous question
  const handlePreviousQuestion = () => {
    console.log("Previous question button clicked");
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  // Calculate quiz score
  const calculateScore = () => {
    let correctCount = 0;
    
    Object.keys(selectedAnswers).forEach(questionIndex => {
      if (selectedAnswers[questionIndex] === questions[questionIndex].correctAnswer) {
        correctCount++;
      }
    });
    
    return {
      correct: correctCount,
      total: questions.length,
      percentage: Math.round((correctCount / questions.length) * 100)
    };
  };
  
  // Display quiz results
  if (showResults) {
    const score = calculateScore();
    
    return (
      <div className="max-w-3xl mx-auto card">
        <div className="card-body">
          <h3 className="text-2xl font-bold mb-6 text-center">Quiz Results</h3>
          
          <div className="mb-8 text-center">
            <div className="inline-block w-32 h-32 rounded-full border-8 border-blue-500 flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-blue-600">{score.percentage}%</span>
            </div>
            <p className="text-xl">
              You answered <span className="font-semibold">{score.correct}</span> out of <span className="font-semibold">{score.total}</span> questions correctly.
            </p>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Question Review</h4>
            {questions.map((q, index) => (
              <div key={index} className="mb-4 p-4 rounded-lg bg-gray-50">
                <p className="font-medium mb-2">{index + 1}. {q.question}</p>
                <p className={`${
                  selectedAnswers[index] === q.correctAnswer
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {selectedAnswers[index] === q.correctAnswer
                    ? '✓ Correct'
                    : `✗ Incorrect. The correct answer is: ${q.options[q.correctAnswer]}`
                  }
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => {
                console.log("Return to quizzes button clicked");
                onComplete();
              }}
              className="btn btn-primary"
            >
              Return to Quizzes
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // Display current question
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-6">Radiological Fundamentals Quiz</h3>
      
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Object.keys(selectedAnswers).length} answered</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Question card */}
      <div className="card mb-6">
        <div className="card-body">
          <h4 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h4>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <div 
                key={index} 
                className={`quiz-option ${
                  selectedAnswers[currentQuestion] === index ? 'selected' : ''
                }`}
                onClick={() => handleAnswerSelect(currentQuestion, index)}
              >
                <input
                  type="radio"
                  id={`option-${index}`}
                  name={`question-${currentQuestion}`}
                  checked={selectedAnswers[currentQuestion] === index}
                  onChange={() => handleAnswerSelect(currentQuestion, index)}
                  className="mr-3"
                />
                <label htmlFor={`option-${index}`} className="cursor-pointer flex-1">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePreviousQuestion}
          className={`btn ${
            currentQuestion === 0
              ? 'btn-secondary cursor-not-allowed opacity-50'
              : 'btn-secondary'
          }`}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          className={`btn ${
            selectedAnswers[currentQuestion] === undefined
              ? 'btn-secondary cursor-not-allowed opacity-50'
              : 'btn-primary'
          }`}
          disabled={selectedAnswers[currentQuestion] === undefined}
        >
          {currentQuestion === questions.length - 1 ? 'Submit Quiz' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default RadiologicalFundamentalsQuiz;
import React, { useState } from 'react';
import RadiologicalFundamentalsQuiz from './RadiologicalFundamentalsQuiz';

function QuizzesPage({ navigateToSection }) {
  const [activeQuiz, setActiveQuiz] = useState(null);
  
  const quizzes = [
    {
      id: 1, 
      title: "Radiological Fundamentals",
      description: "Test your knowledge of basic radiation physics concepts.",
      questions: 10,
      timeLimit: "20 minutes"
    },
    {
      id: 2, 
      title: "Biological Effects of Radiation",
      description: "Assess your understanding of how radiation affects living tissues.",
      questions: 15,
      timeLimit: "30 minutes"
    },
    {
      id: 3, 
      title: "Radiation Limits and Controls",
      description: "Test your knowledge of regulatory limits and control measures.",
      questions: 12,
      timeLimit: "25 minutes"
    },
    {
      id: 4, 
      title: "Contamination Control",
      description: "Assess your understanding of contamination control practices.",
      questions: 10,
      timeLimit: "20 minutes"
    }
  ];
  
  // Simplified quiz renderer for this demo
  const renderQuiz = (id) => {
    if (id === 1) {
      return <RadiologicalFundamentalsQuiz onComplete={() => {
        console.log("Quiz completed, returning to quiz list");
        setActiveQuiz(null);
      }} />;
    }
    
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">Quiz Coming Soon</h3>
        <p className="text-gray-600">This quiz is currently under development.</p>
        <button 
          onClick={() => {
            console.log("Return to quiz list button clicked");
            setActiveQuiz(null);
          }}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Return to Quiz List
        </button>
      </div>
    );
  };
  
  // If a quiz is active, show it
  if (activeQuiz) {
    return renderQuiz(activeQuiz);
  }
  
  // Otherwise show the list of available quizzes
  return (
    <div>
      {/* Add Home button at the top */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Knowledge Assessment</h2>
        <button 
          onClick={() => navigateToSection('home')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
      
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-gray-600">
          Test your understanding of radiation safety concepts and procedures.
          Select a quiz to begin.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {quizzes.map(quiz => (
          <div 
            key={quiz.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            onClick={() => {
              console.log("Quiz clicked:", quiz.title);
              setActiveQuiz(quiz.id);
            }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
              <p className="text-gray-600 mb-4">{quiz.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>{quiz.questions} questions</span>
                <span>{quiz.timeLimit}</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full">
                Start Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizzesPage;
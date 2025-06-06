// frontend/src/components/pages/QuizzesPage.js
import React, { useState } from 'react';
import appConfig, { isContentFree, getPaywallMessage } from '../../config/appConfig';
import RadiologicalFundamentalsQuiz from '../quizzes/RadiologicalFundamentalsQuiz';

function QuizzesPage({ navigateToSection }) {
  const [activeQuiz, setActiveQuiz] = useState(null);
  
  const quizzes = [
    {
      id: 'fundamentals-preview', 
      title: "Radiological Fundamentals",
      description: "Test your knowledge of basic radiation physics concepts.",
      questions: 10,
      timeLimit: "20 minutes"
    },
    {
      id: 'biological-effects', 
      title: "Biological Effects of Radiation",
      description: "Assess your understanding of how radiation affects living tissues.",
      questions: 15,
      timeLimit: "30 minutes"
    },
    {
      id: 'radiation-limits', 
      title: "Radiation Limits and Controls",
      description: "Test your knowledge of regulatory limits and control measures.",
      questions: 12,
      timeLimit: "25 minutes"
    },
    {
      id: 'contamination-control', 
      title: "Contamination Control",
      description: "Assess your understanding of contamination control practices.",
      questions: 10,
      timeLimit: "20 minutes"
    }
  ];
  
  // Check if quiz is free
  const isQuizFree = (quizId) => {
    return isContentFree('quizzes', quizId);
  };
  
  // Render quiz content
  const renderQuiz = (id) => {
    // Check if content is locked
    if (!isQuizFree(id)) {
      return (
        <div className="text-center py-12">
          <div className="inline-block p-8 bg-yellow-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Premium Content</h3>
            <p className="text-gray-700 mb-6">{getPaywallMessage('quizzes')}</p>
            <button className="btn btn-primary">
              Upgrade to Full Access
            </button>
            <button 
              onClick={() => {
                console.log("Return to quiz list button clicked");
                setActiveQuiz(null);
              }}
              className="btn btn-ghost ml-4"
            >
              Return to List
            </button>
          </div>
        </div>
      );
    }
    
    // Return actual quiz
    if (id === 'fundamentals-preview') {
      return <RadiologicalFundamentalsQuiz onComplete={() => {
        console.log("Quiz completed, returning to quiz list");
        setActiveQuiz(null);
      }} />;
    }
    
    // Placeholder for other quizzes
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">Quiz Coming Soon</h3>
        <p className="text-gray-600">This quiz is currently under development.</p>
        <button 
          onClick={() => {
            console.log("Return to quiz list button clicked");
            setActiveQuiz(null);
          }}
          className="mt-6 btn btn-primary"
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
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Knowledge Assessment</h2>
        <p className="text-gray-600">
          Test your understanding of radiation safety concepts and procedures.
          Select a quiz to begin.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {quizzes.map(quiz => (
          <div 
            key={quiz.id}
            className={`card ${!isQuizFree(quiz.id) ? 'relative' : ''}`}
          >
            <div 
              className="card-body cursor-pointer"
              onClick={() => {
                console.log("Quiz clicked:", quiz.title);
                setActiveQuiz(quiz.id);
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
              <p className="text-gray-600 mb-4">{quiz.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>{quiz.questions} questions</span>
                <span>{quiz.timeLimit}</span>
              </div>
              <button className="btn btn-primary btn-full">
                {isQuizFree(quiz.id) ? 'Start Quiz' : 'View Details'}
              </button>
              {!isQuizFree(quiz.id) && (
                <div className="absolute top-2 right-2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded">
                    Premium
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizzesPage;
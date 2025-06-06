// frontend/src/components/pages/VirtualLabPage.js
import React, { useState } from 'react';
import appConfig, { isContentFree, getPaywallMessage } from '../../config/appConfig';

function VirtualLabPage({ navigateToSection }) {
  const [activeExercise, setActiveExercise] = useState(null);
  
  const exercises = [
    {
      id: 'lab-survey', 
      title: "Laboratory Survey and Documentation",
      description: "Practice conducting a comprehensive radiation survey and properly documenting results.",
      duration: "45 minutes"
    },
    {
      id: 'material-handling', 
      title: "Radioactive Material Handling",
      description: "Practice proper techniques for handling various radioactive materials safely.",
      duration: "30 minutes"
    },
    {
      id: 'waste-segregation', 
      title: "Waste Segregation and Disposal",
      description: "Learn how to properly segregate and dispose of different types of radioactive waste.",
      duration: "40 minutes"
    },
    {
      id: 'emergency-response', 
      title: "Emergency Response Drill",
      description: "Simulate response to various radiological emergency scenarios.",
      duration: "60 minutes"
    }
  ];
  
  // Check if exercise is free
  const isExerciseFree = (exerciseId) => {
    return isContentFree('virtualLab', exerciseId);
  };
  
  // Render exercise content
  const renderExercise = (id) => {
    // Check if content is locked
    if (!isExerciseFree(id)) {
      return (
        <div className="text-center py-12">
          <div className="inline-block p-8 bg-yellow-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Premium Content</h3>
            <p className="text-gray-700 mb-6">{getPaywallMessage('lab')}</p>
            <button className="btn btn-primary">
              Upgrade to Full Access
            </button>
            <button 
              onClick={() => {
                console.log("Return to exercise list button clicked");
                setActiveExercise(null);
              }}
              className="btn btn-ghost ml-4"
            >
              Return to List
            </button>
          </div>
        </div>
      );
    }
    
    // Placeholder for exercises
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">Exercise Coming Soon</h3>
        <p className="text-gray-600">This laboratory exercise is currently under development.</p>
        <button 
          onClick={() => {
            console.log("Return to exercise list button clicked");
            setActiveExercise(null);
          }}
          className="mt-6 btn btn-primary"
        >
          Return to Exercise List
        </button>
      </div>
    );
  };
  
  // If an exercise is active, show it
  if (activeExercise) {
    return renderExercise(activeExercise);
  }
  
  // Otherwise show the list of available exercises
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Virtual Laboratory</h2>
        <p className="text-gray-600">
          Apply your knowledge in simulated laboratory environments.
          Complete these exercises to demonstrate practical skills.
        </p>
        {appConfig.features.enablePaywall && (
          <p className="text-sm text-yellow-700 mt-2">
            Note: Virtual lab exercises are premium content requiring full access.
          </p>
        )}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {exercises.map(exercise => (
          <div 
            key={exercise.id}
            className={`card ${!isExerciseFree(exercise.id) ? 'relative' : ''}`}
          >
            <div 
              className="card-body cursor-pointer"
              onClick={() => {
                console.log("Exercise clicked:", exercise.title);
                setActiveExercise(exercise.id);
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
              <p className="text-gray-600 mb-4">{exercise.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>Estimated time: {exercise.duration}</span>
              </div>
              <button className="btn btn-primary btn-full">
                {isExerciseFree(exercise.id) ? 'Start Exercise' : 'View Details'}
              </button>
              {!isExerciseFree(exercise.id) && (
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

export default VirtualLabPage;
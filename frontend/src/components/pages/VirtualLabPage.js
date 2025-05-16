
import React, { useState } from 'react';

function VirtualLabPage({ navigateToSection }) {
  const [activeExercise, setActiveExercise] = useState(null);
  
  const exercises = [
    {
      id: 1, 
      title: "Laboratory Survey and Documentation",
      description: "Practice conducting a comprehensive radiation survey and properly documenting results.",
      duration: "45 minutes"
    },
    {
      id: 2, 
      title: "Radioactive Material Handling",
      description: "Practice proper techniques for handling various radioactive materials safely.",
      duration: "30 minutes"
    },
    {
      id: 3, 
      title: "Waste Segregation and Disposal",
      description: "Learn how to properly segregate and dispose of different types of radioactive waste.",
      duration: "40 minutes"
    },
    {
      id: 4, 
      title: "Emergency Response Drill",
      description: "Simulate response to various radiological emergency scenarios.",
      duration: "60 minutes"
    }
  ];
  
  // Simplified exercise renderer
  const renderExercise = (id) => {
    return (
      <div className="text-center py-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Exercise</h3>
          <div>
            <button 
              onClick={() => setActiveExercise(null)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mr-2"
            >
              Back to Virtual Lab
            </button>
            <button 
              onClick={() => navigateToSection('home')}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Exercise Coming Soon</h3>
        <p className="text-gray-600">This laboratory exercise is currently under development.</p>
        <button 
          onClick={() => {
            console.log("Return to exercise list button clicked");
            setActiveExercise(null);
          }}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
      {/* Add Home button at the top */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Virtual Laboratory</h2>
        <button 
          onClick={() => navigateToSection('home')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
      
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-gray-600">
          Apply your knowledge in simulated laboratory environments.
          Complete these exercises to demonstrate practical skills.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {exercises.map(exercise => (
          <div 
            key={exercise.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            onClick={() => {
              console.log("Exercise clicked:", exercise.title);
              setActiveExercise(exercise.id);
            }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
              <p className="text-gray-600 mb-4">{exercise.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>Estimated time: {exercise.duration}</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full">
                Start Exercise
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VirtualLabPage;
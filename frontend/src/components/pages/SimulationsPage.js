import React, { useState } from 'react';
import SurveyMeterSimulation from './SurveyMeterSimulation';

function SimulationsPage({ navigateToSection }) {
  const [activeSimulation, setActiveSimulation] = useState(null);
  
  const simulations = [
    {
      id: 1, 
      title: "Radiation Survey Meter Operation",
      description: "Learn how to properly operate and read a Geiger-Mueller detector.",
      difficulty: "Beginner"
    },
    {
      id: 2, 
      title: "Personal Protective Equipment",
      description: "Practice the correct sequence for donning and removing PPE in a radiation area.",
      difficulty: "Beginner"
    },
    {
      id: 3, 
      title: "Spill Response Procedure",
      description: "Simulate responding to a radioactive material spill using the SWIMS methodology.",
      difficulty: "Intermediate"
    },
    {
      id: 4, 
      title: "Decontamination Procedure",
      description: "Learn proper decontamination techniques for different surfaces.",
      difficulty: "Intermediate"
    },
    {
      id: 5, 
      title: "Radiation Area Entry and Exit",
      description: "Practice the correct procedures for entering and exiting radiation controlled areas.",
      difficulty: "Advanced"
    },
    {
      id: 6, 
      title: "Sealed Source Handling",
      description: "Learn safe handling techniques for sealed radioactive sources.",
      difficulty: "Advanced"
    }
  ];
  
  // Simplified simulation content for this demo
  const renderSimulation = (id) => {
    if (id === 1) {
      return <SurveyMeterSimulation 
               setActiveSimulation={setActiveSimulation} 
               navigateToSection={navigateToSection} 
             />;
    }
    
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">Simulation Coming Soon</h3>
        <p className="text-gray-600">This simulation is currently under development.</p>
        <button 
          onClick={() => {
            console.log("Returning to simulation list");
            setActiveSimulation(null);
          }}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Return to Simulation List
        </button>
      </div>
    );
  };
  
  // If a simulation is active, show it
  if (activeSimulation) {
    return renderSimulation(activeSimulation);
  }
  
  // Otherwise show the list of available simulations
  return (
    <div>
      {/* Add Home button at the top */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Interactive Simulations</h2>
        <button 
          onClick={() => navigateToSection('home')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
      
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-gray-600">
          Practice radiation safety procedures in a virtual environment. 
          Select a simulation to begin your training.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {simulations.map(sim => (
          <div 
            key={sim.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            onClick={() => {
              console.log("Simulation clicked:", sim.title);
              setActiveSimulation(sim.id);
            }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{sim.title}</h3>
                <span 
                  className={`text-xs px-2 py-1 rounded ${
                    sim.difficulty === "Beginner" 
                      ? "bg-green-100 text-green-700" 
                      : sim.difficulty === "Intermediate" 
                        ? "bg-yellow-100 text-yellow-700" 
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {sim.difficulty}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{sim.description}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full">
                Start Simulation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimulationsPage;
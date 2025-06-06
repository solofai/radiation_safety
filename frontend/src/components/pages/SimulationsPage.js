// fronend/src/components/pages/SimulationsPage.js
import React, { useState } from 'react';
import appConfig, { isContentFree, getPaywallMessage } from '../../config/appConfig';
import SurveyMeterSimulation from '../simulations/SurveyMeterSimulation';

function SimulationsPage({ navigateToSection }) {
  const [activeSimulation, setActiveSimulation] = useState(null);
  
  const simulations = [
    {
      id: 'survey-meter', 
      title: "Radiation Survey Meter Operation",
      description: "Learn how to properly operate and read a Geiger-Mueller detector.",
      difficulty: "Beginner"
    },
    {
      id: 'ppe', 
      title: "Personal Protective Equipment",
      description: "Practice the correct sequence for donning and removing PPE in a radiation area.",
      difficulty: "Beginner"
    },
    {
      id: 'spill-response', 
      title: "Spill Response Procedure",
      description: "Simulate responding to a radioactive material spill using the SWIMS methodology.",
      difficulty: "Intermediate"
    },
    {
      id: 'decontamination', 
      title: "Decontamination Procedure",
      description: "Learn proper decontamination techniques for different surfaces.",
      difficulty: "Intermediate"
    },
    {
      id: 'area-entry', 
      title: "Radiation Area Entry and Exit",
      description: "Practice the correct procedures for entering and exiting radiation controlled areas.",
      difficulty: "Advanced"
    },
    {
      id: 'sealed-source', 
      title: "Sealed Source Handling",
      description: "Learn safe handling techniques for sealed radioactive sources.",
      difficulty: "Advanced"
    }
  ];
  
  // Check if simulation is free
  const isSimulationFree = (simulationId) => {
    return isContentFree('simulations', simulationId);
  };
  
  // Render simulation content
  const renderSimulation = (id) => {
    // Check if content is locked
    if (!isSimulationFree(id)) {
      return (
        <div className="text-center py-12">
          <div className="inline-block p-8 bg-yellow-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Premium Content</h3>
            <p className="text-gray-700 mb-6">{getPaywallMessage('simulations')}</p>
            <button className="btn btn-primary">
              Upgrade to Full Access
            </button>
            <button 
              onClick={() => {
                console.log("Returning to simulation list");
                setActiveSimulation(null);
              }}
              className="btn btn-ghost ml-4"
            >
              Return to List
            </button>
          </div>
        </div>
      );
    }
    
    // Return actual simulation
    if (id === 'survey-meter') {
      return <SurveyMeterSimulation setActiveSimulation={setActiveSimulation} />;
    }
    
    // Placeholder for other simulations
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">Simulation Coming Soon</h3>
        <p className="text-gray-600">This simulation is currently under development.</p>
        <button 
          onClick={() => {
            console.log("Returning to simulation list");
            setActiveSimulation(null);
          }}
          className="mt-6 btn btn-primary"
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
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Interactive Simulations</h2>
        <p className="text-gray-600">
          Practice radiation safety procedures in a virtual environment. 
          Select a simulation to begin your training.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {simulations.map(sim => (
          <div 
            key={sim.id}
            className={`card ${!isSimulationFree(sim.id) ? 'relative' : ''}`}
          >
            <div 
              className="card-body cursor-pointer"
              onClick={() => {
                console.log("Simulation clicked:", sim.title);
                setActiveSimulation(sim.id);
              }}
            >
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
              <button className="btn btn-primary btn-full">
                {isSimulationFree(sim.id) ? 'Start Simulation' : 'View Details'}
              </button>
              {!isSimulationFree(sim.id) && (
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

export default SimulationsPage;
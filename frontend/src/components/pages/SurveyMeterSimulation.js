import React, { useState } from 'react';

function SurveyMeterSimulation({ setActiveSimulation, navigateToSection }) {
  const [step, setStep] = useState(1);
  const [batteryChecked, setBatteryChecked] = useState(false);
  const [audioOn, setAudioOn] = useState(false);
  const [sourceChecked, setSourceChecked] = useState(false);
  const [backgroundChecked, setBackgroundChecked] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  const totalSteps = 5;
  
  const handleNext = () => {
    console.log("Next button clicked, current step:", step);
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };
  
  const handlePrevious = () => {
    console.log("Previous button clicked, current step:", step);
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const resetSimulation = () => {
    console.log("Resetting simulation");
    setStep(1);
    setBatteryChecked(false);
    setAudioOn(false);
    setSourceChecked(false);
    setBackgroundChecked(false);
    setCompleted(false);
  };
  
  // If the simulation is completed, show the results
  if (completed) {
    const allChecksCompleted = batteryChecked && audioOn && sourceChecked && backgroundChecked;
    
    return (
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-6 text-center">Simulation Results</h3>
        
        <div className={`p-6 mb-6 rounded-lg ${allChecksCompleted ? 'bg-green-100' : 'bg-yellow-100'}`}>
          <h4 className="text-xl font-semibold mb-4">
            {allChecksCompleted 
              ? 'Congratulations! You completed all pre-operational checks.' 
              : 'Some pre-operational checks were missed.'}
          </h4>
          
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className={`inline-block w-6 h-6 rounded-full mr-3 flex items-center justify-center ${batteryChecked ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {batteryChecked ? '✓' : '✗'}
              </span>
              Battery Check
            </li>
            <li className="flex items-center">
              <span className={`inline-block w-6 h-6 rounded-full mr-3 flex items-center justify-center ${audioOn ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {audioOn ? '✓' : '✗'}
              </span>
              Audio Turned On
            </li>
            <li className="flex items-center">
              <span className={`inline-block w-6 h-6 rounded-full mr-3 flex items-center justify-center ${sourceChecked ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {sourceChecked ? '✓' : '✗'}
              </span>
              Source Check
            </li>
            <li className="flex items-center">
              <span className={`inline-block w-6 h-6 rounded-full mr-3 flex items-center justify-center ${backgroundChecked ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {backgroundChecked ? '✓' : '✗'}
              </span>
              Background Check
            </li>
          </ul>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={resetSimulation}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Try Again
          </button>
          <button 
            onClick={() => {
              console.log("Exiting simulation");
              setActiveSimulation(null);
            }}
            className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Exit Simulation
          </button>
          <button 
            onClick={() => {
              console.log("Returning to home");
              navigateToSection('home');
            }}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }
  
  // Content for each step of the simulation
  const stepContent = () => {
    switch(step) {
      case 1:
        return (
          <div>
            <h4 className="text-xl font-semibold mb-4">Prepare for Survey Meter Operation</h4>
            <p className="mb-4">
              Before using a radiation survey meter, you must perform several pre-operational checks to ensure the instrument is functioning properly.
            </p>
            <p className="mb-4">
              In this simulation, you will practice the proper sequence for checking and operating a Geiger-Mueller detector before use in a radiation area.
            </p>
            <div className="bg-blue-100 p-4 rounded">
              <p className="font-medium text-blue-800">
                Pre-operational checks should always be performed in the following sequence:
              </p>
              <ol className="list-decimal ml-6 mt-2 text-blue-800">
                <li>Check the calibration sticker and battery</li>
                <li>Turn on the audio</li>
                <li>Perform a source check</li>
                <li>Check the background radiation level</li>
              </ol>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h4 className="text-xl font-semibold mb-4">Check Calibration and Battery</h4>
            <p className="mb-4">
              First, inspect the calibration sticker to ensure the instrument's calibration is valid. Most calibration cycles are one year.
            </p>
            <p className="mb-4">
              Next, check the battery indicator to ensure there is sufficient power for operation.
            </p>
            <div className="bg-yellow-100 p-4 rounded mb-6">
              <p className="font-medium text-yellow-800">
                Note: If the batteries have expired, replace them. An occasional check during the day's activities will identify if the instrument is still operational.
              </p>
            </div>
            <div className="mb-4">
              <button 
                onClick={() => {
                  console.log("Battery check button clicked");
                  setBatteryChecked(true);
                }}
                className={`px-4 py-2 rounded transition ${
                  batteryChecked ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {batteryChecked ? '✓ Battery Checked' : 'Check Battery'}
              </button>
            </div>
          </div>
        );
      // Add cases 3, 4, and 5 similar to above
      case 3:
        return (
          <div>
            <h4 className="text-xl font-semibold mb-4">Turn On the Audio</h4>
            <p className="mb-4">
              The audio on the instrument has a faster response time than the dial reading. By using the audio as an indicator for possible contamination, the operator is left free to visually concentrate on the location of the probe rather than on the meter.
            </p>
            <p className="mb-4">
              This should help prevent placing the probe in the contamination and reducing the effectiveness of the instrument.
            </p>
            <div className="mb-4">
              <button 
                onClick={() => {
                  console.log("Audio button clicked");
                  setAudioOn(true);
                }}
                className={`px-4 py-2 rounded transition ${
                  audioOn ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {audioOn ? '✓ Audio Turned On' : 'Turn On Audio'}
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h4 className="text-xl font-semibold mb-4">Perform a Source Check</h4>
            <p className="mb-4">
              A source check verifies that the instrument responds correctly to radiation. Use a known check source to confirm the instrument is detecting radiation properly.
            </p>
            <p className="mb-4">
              The source check should have a known response on the instrument. It is not recommended to use short-lived radionuclides as a source check. The response on the instrument should not vary over time.
            </p>
            <div className="mb-4">
              <button 
                onClick={() => {
                  console.log("Source check button clicked");
                  setSourceChecked(true);
                }}
                className={`px-4 py-2 rounded transition ${
                  sourceChecked ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {sourceChecked ? '✓ Source Check Completed' : 'Perform Source Check'}
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h4 className="text-xl font-semibold mb-4">Check Background Radiation Level</h4>
            <p className="mb-4">
              Know the background radiation levels. This should be done twice when using the instrument, both at the beginning and end of your work. In general, most laboratories try to identify low levels of contamination. For most operations, this is about two times the background.
            </p>
            <p className="mb-4">
              An increase in the background would suggest contamination is spreading.
            </p>
            <div className="mb-4">
              <button 
                onClick={() => {
                  console.log("Background check button clicked");
                  setBackgroundChecked(true);
                }}
                className={`px-4 py-2 rounded transition ${
                  backgroundChecked ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {backgroundChecked ? '✓ Background Check Completed' : 'Check Background Level'}
              </button>
            </div>
          </div>
        );
      default:
        return <p>Step content not found.</p>;
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Radiation Survey Meter Operation</h3>
        <button 
          onClick={() => {
            console.log("Returning to simulations list");
            setActiveSimulation(null);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Simulations
        </button>
      </div>
      
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i + 1 === step
                  ? 'bg-blue-600 text-white'
                  : i + 1 < step
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200'
              }`}
            >
              {i + 1 < step ? '✓' : i + 1}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Simulation content */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        {stepContent()}
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          className={`px-4 py-2 rounded ${
            step === 1
              ? 'bg-gray-200 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
          disabled={step === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {step === totalSteps ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default SurveyMeterSimulation;
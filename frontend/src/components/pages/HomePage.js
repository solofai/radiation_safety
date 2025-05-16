import React from 'react';
import { BookOpen, ClipboardCheck, Beaker, FileQuestion } from 'lucide-react';

function HomePage({ navigateToSection }) {
  const features = [
    {
      title: "Safety Manual",
      description: "Access comprehensive radiation safety documentation.",
      icon: <BookOpen size={40} />,
      action: () => navigateToSection('manual'),
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Interactive Simulations",
      description: "Practice procedures in a safe, virtual environment.",
      icon: <Beaker size={40} />,
      action: () => navigateToSection('simulations'),
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Knowledge Assessment",
      description: "Test your understanding with quizzes and assessments.",
      icon: <FileQuestion size={40} />,
      action: () => navigateToSection('quizzes'),
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Virtual Laboratory",
      description: "Apply your skills in simulated laboratory exercises.",
      icon: <ClipboardCheck size={40} />,
      action: () => navigateToSection('virtualLab'),
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Welcome to Radiation Safety Training</h2>
        <p className="text-gray-600 text-lg">
          Master essential radiation safety skills for laboratory work through 
          interactive learning, simulations, and assessments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            onClick={() => {
              console.log("Feature clicked:", feature.title);
              feature.action();
            }}
          >
            <div className="p-6">
              <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
import React, { useState } from 'react';

function ManualPage({ navigateToSection }) {
  const [activeChapter, setActiveChapter] = useState(1);
  
  // Sample chapter data
  const chapters = [
    { id: 1, title: "Introduction to Radiation Safety" },
    { id: 2, title: "Radiological Fundamentals" },
    { id: 3, title: "Biological Effects" },
    { id: 4, title: "Radiation Limits" },
    { id: 5, title: "ALARA Program" },
    { id: 6, title: "Personal Monitoring Programs" },
    { id: 7, title: "Contamination Control" },
    { id: 8, title: "Radiological Emergencies" },
    { id: 9, title: "Storage and Disposal" },
    { id: 10, title: "Safe Handling Procedures" },
  ];
  
  // Chapter content (simplified for this demo)
  const getChapterContent = (id) => {
    switch(id) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Introduction to Radiation Safety</h3>
            <p className="mb-4">
              If you have just accepted a position working with radiation sources, you have things to do to
              prepare. What is the next step? First you will need to know what will you be working with and
              how do you protect yourself as well as others. Typically, this requires training as a Radiation
              Worker. That will be you. Second, where do you receive the training, how long is it and what are
              your responsibilities?
            </p>
            <p className="mb-4">
              A common program where a general laboratory worker who is handling radiation sources can be
              found with many university programs. They are also found in research laboratories and medical
              institutions. There are too many to list here and would be a waste of your time to read them.
              Let's just assume you are at a university working in the laboratory handling radioactive
              materials. Working with x-ray systems or Class III or IV lasers may be administered the same
              way.
            </p>
            <p className="mb-4">
              The researcher (generally a faculty member and most likely your supervisor) has an
              authorization in his/her name. That means he/she has a permit. This is much like a license,
              although the actual license is held by the Radiation Safety Officer in the name of the institution.
              The researcher you are working for is most likely one of several or many others with an
              authorization under that license.
            </p>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Radiological Fundamentals</h3>
            <p className="mb-4">This chapter covers the basic concepts of radiation physics and identifies the three basic particles of an atom: protons, neutrons, and electrons.</p>
            <h4 className="text-lg font-medium mb-2">Atomic Structure</h4>
            <p className="mb-4">The basic unit of matter is the atom. It is made up of neutrons, protons, and electrons. The central portion of the atom is the nucleus, which consists of protons (with a positive electrostatic charge) and neutrons (no charge). Electrons orbit the nucleus (with a negative charge).</p>
            <h4 className="text-lg font-medium mb-2">Ionization</h4>
            <p className="mb-4">Ionization is the process of removing electrons from atoms. If enough energy is supplied to remove electrons from the atom, the remaining atom has a positive (+) charge. The positively charged atom and the negatively charged electron are called an ion pair.</p>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Biological Effects</h3>
            <p className="mb-4">This chapter examines how radiation affects living tissues and cells, and explores both short-term and long-term health effects of radiation exposure.</p>
            <p className="mb-4">Whether the source of radiation is natural or man-made, whether it is a small dose of radiation or a large dose, there will be some biological effects. Small doses will produce biological effects; however, these effects may not be observable and possibly even provide a life lengthening effect. Humans have evolved in a radiation environment.</p>
          </div>
        );
      default:
        return <p>Select a chapter to view its content.</p>;
    }
  };
  
  return (
    <div>
      {/* Add Home button at the top */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Safety Manual</h2>
        <button 
          onClick={() => navigateToSection('home')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Sidebar for chapter navigation */}
        <div className="md:w-1/4 bg-gray-100 p-4 rounded-lg mb-6 md:mb-0 md:mr-6">
          <h3 className="text-lg font-semibold mb-4">Chapters</h3>
          <ul className="space-y-2">
            {chapters.map(chapter => (
              <li key={chapter.id}>
                <button
                  onClick={() => {
                    console.log("Chapter clicked:", chapter.title);
                    setActiveChapter(chapter.id);
                  }}
                  className={`w-full text-left px-3 py-2 rounded transition ${
                    activeChapter === chapter.id
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-200'
                  }`}
                >
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Main content area */}
        <div className="md:w-3/4 bg-white p-6 rounded-lg shadow">
          {getChapterContent(activeChapter)}
        </div>
      </div>
    </div>
  );
}

export default ManualPage;
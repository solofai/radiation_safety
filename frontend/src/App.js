import React, { useState, useEffect } from 'react';
import './App.css';
import { BookOpen, ClipboardCheck, Beaker, FileQuestion, Menu, X } from 'lucide-react';

// Import common components
import NavButton from './components/common/NavButton';
import MobileNavButton from './components/common/MobileNavButton';
import DebugPanel from './components/common/DebugPanel';

// Import page components
import HomePage from './components/pages/HomePage';
import ManualPage from './components/pages/ManualPage';
import SimulationsPage from './components/pages/SimulationsPage';
import QuizzesPage from './components/pages/QuizzesPage';
import VirtualLabPage from './components/pages/VirtualLabPage';

// Main component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // For debugging - log state changes
  useEffect(() => {
    console.log("Active section changed to:", activeSection);
  }, [activeSection]);

  // Toggle mobile menu
  const toggleMenu = () => {
    console.log("Toggling menu, current state:", menuOpen);
    setMenuOpen(!menuOpen);
  };

  // Handler for section changes
  const navigateToSection = (section) => {
    console.log("Navigating to section:", section);
    setActiveSection(section);
    setMenuOpen(false);
  };

  // Render appropriate content based on active section
  const renderContent = () => {
    console.log("Rendering content for section:", activeSection);
    
    switch (activeSection) {
      case 'manual':
        return <ManualPage navigateToSection={navigateToSection} />;
      case 'simulations':
        return <SimulationsPage navigateToSection={navigateToSection} />;
      case 'quizzes':
        return <QuizzesPage navigateToSection={navigateToSection} />;
      case 'virtualLab':
        return <VirtualLabPage navigateToSection={navigateToSection} />;
      default:
        return <HomePage navigateToSection={navigateToSection} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div 
              onClick={() => navigateToSection('home')}
            >
              <h1 className="text-2xl font-bold cursor-pointer">
                THIS SITE IS UNDER DEVELOPMENT. Stay tuned for the official release.
                <br />
                Radiation Safety Training
              </h1>
              <p className="text-sm">
                By <a 
                  href="mailto:john@solofai.com" 
                  className="text-yellow-300 hover:underline font-medium !text-yellow-300"
                  style={{color: '#fde047'}} 
                  onClick={(e) => e.stopPropagation()} // This prevents the home navigation when clicking the email link
                >
                  John J. Pickering
                </a>
              </p>
            </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavButton 
              icon={<BookOpen size={18} />} 
              label="Safety Manual" 
              onClick={() => navigateToSection('manual')} 
              active={activeSection === 'manual'}
            />
            <NavButton 
              icon={<Beaker size={18} />} 
              label="Simulations" 
              onClick={() => navigateToSection('simulations')} 
              active={activeSection === 'simulations'}
            />
            <NavButton 
              icon={<FileQuestion size={18} />} 
              label="Quizzes" 
              onClick={() => navigateToSection('quizzes')} 
              active={activeSection === 'quizzes'}
            />
            <NavButton 
              icon={<ClipboardCheck size={18} />} 
              label="Virtual Lab" 
              onClick={() => navigateToSection('virtualLab')} 
              active={activeSection === 'virtualLab'}
            />
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {menuOpen && (
          <div className="md:hidden bg-blue-700 px-4 py-2">
            <nav className="flex flex-col space-y-2">
              <MobileNavButton 
                icon={<BookOpen size={18} />} 
                label="Safety Manual" 
                onClick={() => navigateToSection('manual')} 
              />
              <MobileNavButton 
                icon={<Beaker size={18} />} 
                label="Simulations" 
                onClick={() => navigateToSection('simulations')} 
              />
              <MobileNavButton 
                icon={<FileQuestion size={18} />} 
                label="Quizzes" 
                onClick={() => navigateToSection('quizzes')} 
              />
              <MobileNavButton 
                icon={<ClipboardCheck size={18} />} 
                label="Virtual Lab" 
                onClick={() => navigateToSection('virtualLab')} 
              />
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Radiation Safety Training Program. All rights reserved.</p>
          <p className="text-sm mt-2">
            Website generated by Lori Pickering (with the help of several chatbots)
          </p>
          <p className="text-sm mt-2">
            Contact: <a 
                        href="mailto:sol@solofai.com" 
                        className="underline text-yellow-300 font-medium !text-yellow-300"
                        style={{color: '#fde047'}}
                      >
                        sol@solofai.com
                      </a>
          </p>
        </div>
      </footer>
        
        {/* Debug Panel */}
      <DebugPanel activeSection={activeSection} menuOpen={menuOpen} />
    </div>
  );
}
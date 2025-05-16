import React from 'react';

function MobileNavButton({ icon, label, onClick }) {
  return (
    <button 
      onClick={(e) => {
        console.log("Mobile nav button clicked:", label);
        onClick(e);
      }} 
      className="flex items-center w-full px-3 py-2 rounded hover:bg-blue-800 transition"
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default MobileNavButton;


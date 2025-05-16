import React from 'react';

function NavButton({ icon, label, onClick, active }) {
  return (
    <button 
      onClick={(e) => {
        console.log("Nav button clicked:", label);
        onClick(e);
      }} 
      className={`flex items-center px-3 py-2 rounded transition ${
        active ? 'bg-blue-700' : 'hover:bg-blue-700'
      }`}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default NavButton;

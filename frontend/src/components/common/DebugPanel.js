import React from 'react';

function DebugPanel({ activeSection, menuOpen }) {
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px', 
      background: '#f0f0f0', 
      padding: '10px', 
      border: '1px solid #ccc',
      zIndex: 9999,
      fontSize: '12px'
    }}>
      <h4 style={{ margin: '0 0 5px 0' }}>Debug Info:</h4>
      <p style={{ margin: '0 0 5px 0' }}>Active Section: {activeSection}</p>
      <p style={{ margin: '0' }}>Menu Open: {menuOpen.toString()}</p>
    </div>
  );
}

export default DebugPanel;
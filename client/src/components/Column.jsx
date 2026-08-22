
import React from 'react';
import './Column.css'; 

function Column({ title, children }) {
  return (
    <div className="kanban-column" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '30%' }}>
      <h2>{title}</h2>
      <div className="column-content">
        {/* The Task Cards  will render inside here later */}
        {children || <p>No tasks yet...</p>}
      </div>
    </div>
  );
}

export default Column;
import React from 'react';

function TaskCard({ task, onDragStart }) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
      style={{
        backgroundColor: 'white',
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        cursor: 'grab'
      }}
    >
      <h4>{task.title}</h4>
      <p style={{ fontSize: '14px', color: '#555' }}>{task.description}</p>
    </div>
  );
}

export default TaskCard;
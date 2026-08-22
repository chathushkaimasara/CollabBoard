import React from 'react';
import TaskCard from './TaskCard';

function Column({ title, tasks, onDragOver, onDrop, onDragStart }) {
  return (
    <div
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, title)}
      style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '30%', minHeight: '300px', backgroundColor: '#f4f5f7' }}
    >
      <h2>{title}</h2>
      <div>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onDragStart={onDragStart} />
        ))}
      </div>
    </div>
  );
}

export default Column;
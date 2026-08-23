import React from 'react';
import TaskCard from './TaskCard';

function Column({ title, tasks, onDragOver, onDrop, onDragStart }) {
  return (
    <div
      className="kanban-column"
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, title)}
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
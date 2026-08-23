import React, { useState } from 'react';
import Column from './Column';

function Board() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Set up UI', description: 'Create React scaffolding', status: 'Done' },
    { id: 2, title: 'Kanban Columns', description: 'Build Board.jsx', status: 'Doing' },
    { id: 3, title: 'Drag and Drop', description: 'Add HTML5 events', status: 'To Do' },
  ]);

  const onDragStart = (e, id) => {
    e.dataTransfer.setData('taskId', id);
  };

  const onDragOver = (e) => {
    e.preventDefault(); 
  };

  const onDrop = (e, newStatus) => {
    const taskId = e.dataTransfer.getData('taskId');
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id.toString() === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="kanban-board">
      {['To Do', 'Doing', 'Done'].map(status => (
        <Column
          key={status}
          title={status}
          tasks={tasks.filter(task => task.status === status)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
}

export default Board;

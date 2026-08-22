import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Column from './Column';

const socket = io('http://localhost:5000');

function Board() {
  const [tasks, setTasks] = useState([ /* existing mock data */ ]);

  useEffect(() => {
  
    socket.on('update_board', (updatedTask) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id.toString() === updatedTask.taskId ? { ...task, status: updatedTask.newStatus } : task
        )
      );
    });

    return () => socket.off('update_board');
  }, []);

  const onDragStart = (e, id) => e.dataTransfer.setData('taskId', id);
  const onDragOver = (e) => e.preventDefault();

  const onDrop = (e, newStatus) => {
    const taskId = e.dataTransfer.getData('taskId');
    
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id.toString() === taskId ? { ...task, status: newStatus } : task
      )
    );

    socket.emit('task_moved', { taskId, newStatus });
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
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
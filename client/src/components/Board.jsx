import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Column from './Column';
import { saveTasksOffline, getTasksOffline } from '../utils/storage'; 

const socket = io('http://localhost:5000');

function Board() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  
    getTasksOffline().then((cachedTasks) => {
      if (cachedTasks.length > 0) setTasks(cachedTasks);
    });

    fetch('http://localhost:5000/api/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        saveTasksOffline(data); 
      })
      .catch((err) => console.log('Offline: relying on IndexedDB cache.'));

    
    socket.on('update_board', (updatedTask) => {
      setTasks((prevTasks) => {
        const newTasks = prevTasks.map((task) =>
          task.id.toString() === updatedTask.taskId ? { ...task, status: updatedTask.newStatus } : task
        );
        saveTasksOffline(newTasks); 
        return newTasks;
      });
    });

    return () => socket.off('update_board');
  }, []);

  

  const onDrop = (e, newStatus) => {
    const taskId = e.dataTransfer.getData('taskId');
    
    setTasks(prevTasks => {
      const newTasks = prevTasks.map(task =>
        task.id.toString() === taskId ? { ...task, status: newStatus } : task
      );
      
      
      saveTasksOffline(newTasks);
      return newTasks;
    });

    socket.emit('task_moved', { taskId, newStatus });

    const updateTaskStatus = async (taskId, newStatus, taskVersion) => {
  try {
    const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus, __v: taskVersion }) 
    });

    if (response.status === 409) {
      alert('Someone else just updated this task! Refreshing your board to sync.');
      window.location.reload(); 
    }
  } catch (error) {
    console.error('Error updating task:', error);
  }
};
    
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
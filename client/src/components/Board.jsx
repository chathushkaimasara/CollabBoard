import React, { useState, useEffect } from 'react'; // Added useEffect
import Column from './Column';
import io from 'socket.io-client'; // 1. Import socket.io

const socket = io('http://localhost:5000'); 

function Board() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Set up UI', description: 'Create React scaffolding', status: 'Done' },
    { id: 2, title: 'Kanban Columns', description: 'Build Board.jsx', status: 'Doing' },
    { id: 3, title: 'Drag and Drop', description: 'Add HTML5 events', status: 'To Do' },
    { id: 4, title: 'API Integration', description: 'Wire up the endpoints', status: 'To Do' },
  ]);

  useEffect(() => {
    socket.on('taskCreated', (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    });

    socket.on('taskUpdated', (updatedTask) => {
      setTasks((prevTasks) => 
        prevTasks.map((task) => ((task._id || task.id) === (updatedTask._id || updatedTask.id) ? updatedTask : task))
      );
    });

    socket.on('taskDeleted', ({ id }) => {
      setTasks((prevTasks) => prevTasks.filter((task) => (task._id || task.id) !== id));
    });

    return () => {
      socket.off('taskCreated');
      socket.off('taskUpdated');
      socket.off('taskDeleted');
    };
  }, []);

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
        task.id.toString() === taskId || task._id?.toString() === taskId ? { ...task, status: newStatus } : task
      )
    );
    
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      await taskService.deleteTask(taskId);
    } catch (error) {
      console.error('Failed to delete task:', error);
      alert('Could not delete task: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F7] font-sans overflow-x-auto selection:bg-black selection:text-white">
      <div className="p-8 md:p-12 max-w-7xl mx-auto">
        
        {/* iOS Style Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-black mb-1">SyncBoard</h1>
            <p className="text-gray-400 font-medium">Milestone 2 Project Workspace</p>
          </div>
          <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors active:scale-95">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>

        {/* Board Columns Layout */}
        <div className="flex flex-row gap-6 items-start pb-12">
          {['To Do', 'Doing', 'Done'].map(status => (
            <Column
              key={status}
              title={status}
              tasks={tasks.filter(task => task.status === status)}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Board;
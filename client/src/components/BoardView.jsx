import React, { useState, useEffect } from 'react';
import boardService from '../services/boardService';
import taskService from '../services/taskService';
import Column from './Column';

const BoardView = () => {
  const [boards, setBoards] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [activeBoard, setActiveBoard] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [taskError, setTaskError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBoards = await boardService.getBoards();
        setBoards(fetchedBoards);
        if (fetchedBoards.length > 0) {
          setActiveBoard(fetchedBoards[0]._id);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (activeBoard) {
      taskService.getTasks(activeBoard).then(setTasks).catch(console.error);
    }
  }, [activeBoard]);

  const onDragStart = (e, id) => {
    e.dataTransfer.setData('taskId', id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleMoveTask = async (e, newStatus) => {
    const taskId = e.dataTransfer.getData('taskId');
    if (!taskId) return;
    
    setTasks(prevTasks => prevTasks.map(t => 
      (t._id === taskId || t.id === taskId) ? { ...t, status: newStatus } : t
    ));

    try {
      await taskService.moveTask(taskId, newStatus);
    } catch (error) {
      console.error('Failed to move task:', error);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    setTaskError(null);
    if (!newTaskTitle.trim()) {
      setTaskError('Task title cannot be empty.');
      return;
    }

    if (!activeBoard) {
      setTaskError('No active board found. You must create a board in the database first.');
      return;
    }

    try {
      const newTask = await taskService.createTask({
        title: newTaskTitle,
        description: newTaskDesc,
        status: 'To Do',
        boardId: activeBoard
      });
      
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
      setNewTaskDesc('');
      setIsModalOpen(false);
    } catch (error) {
      console.error('API Error:', error);
      setTaskError(error.response?.data?.message || error.message || 'Failed to connect to the backend.');
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    const previousTasks = [...tasks];
    
    setTasks(prevTasks => prevTasks.filter(t => (t._id || t.id) !== taskId));

    try {
      await taskService.deleteTask(taskId);
    } catch (error) {
      console.error('Failed to delete task:', error);
      alert('Backend error: Could not delete task. ' + error.message);

      setTasks(previousTasks);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F7] font-sans overflow-x-auto selection:bg-black selection:text-white relative">
      <div className="p-8 md:p-12 max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-black mb-1">SyncBoard</h1>
            <p className="text-gray-400 font-medium">Active Tasks: {tasks.length}</p>
          </div>
          <button 
            onClick={() => {
              setIsModalOpen(true);
              setTaskError(null);
            }}
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>

        <div className="flex flex-row gap-6 items-start pb-12">
          {['To Do', 'Doing', 'Done'].map(status => (
            <Column
              key={status}
              title={status}
              tasks={tasks.filter(task => task.status === status)}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={handleMoveTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#F2F2F7] rounded-[32px] p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-2xl font-extrabold mb-4 text-center text-black">New Task</h3>
            
            {/* --- NEW: Visible Error Banner --- */}
            {taskError && (
              <div className="bg-white/50 border border-red-200 rounded-[20px] p-3 mb-4">
                <p className="text-red-500 text-sm font-bold text-center">{taskError}</p>
              </div>
            )}
            
            <form onSubmit={handleAddTask} className="flex flex-col gap-4">
              <div className="bg-white rounded-[24px] p-1 shadow-sm border border-gray-100">
                <input
                  type="text"
                  placeholder="Task Title"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full bg-transparent px-5 py-4 outline-none text-[17px] font-medium text-black placeholder-gray-400"
                  autoFocus
                  required
                />
              </div>
              <div className="bg-white rounded-[24px] p-1 shadow-sm border border-gray-100">
                <textarea
                  placeholder="Description (Optional)"
                  value={newTaskDesc}
                  onChange={(e) => setNewTaskDesc(e.target.value)}
                  className="w-full bg-transparent px-5 py-4 outline-none text-[17px] font-medium text-black placeholder-gray-400 resize-none h-28"
                />
              </div>
              
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-white text-black rounded-full py-4 font-bold text-[17px] hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-black text-white rounded-full py-4 font-bold text-[17px] hover:bg-gray-800 transition-colors shadow-md active:scale-95"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardView;
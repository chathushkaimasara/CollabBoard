import React, { useState, useEffect } from 'react';
import boardService from '../services/boardService';
import taskService from '../services/taskService';

const BoardView = () => {
  const [boards, setBoards] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [activeBoard, setActiveBoard] = useState(null);

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

  const handleMoveTask = async (taskId, newStatus) => {
    try {
      
      await taskService.moveTask(taskId, newStatus);
      
      setTasks(tasks.map(t => t._id === taskId ? { ...t, status: newStatus } : t));
    } catch (error) {
      console.error('Failed to move task');
    }
  };

  return (
    <div>
      {/* UI rendering logic for columns and tasks goes here */}
      <h2>Active Tasks: {tasks.length}</h2>
    </div>
  );
};

export default BoardView;
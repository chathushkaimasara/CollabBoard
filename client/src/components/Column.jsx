import React from 'react';
import TaskCard from './TaskCard';

function Column({ title, tasks, onDragOver, onDrop, onDragStart, onDelete }) {
  return (
    <div
      className="bg-gray-200/50 rounded-[32px] p-5 flex flex-col min-w-[320px] max-w-[320px] min-h-[600px]"
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, title)}
    >
      <div className="flex items-center justify-between mb-6 px-2 pt-2">
        <h2 className="text-xl font-bold text-black tracking-tight">{title}</h2>
        <span className="bg-white text-black text-sm font-bold px-3 py-1 rounded-full shadow-sm">
          {tasks.length}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto pb-4">
        {tasks.map(task => (
          <TaskCard 
            key={task._id || task.id} 
            task={task} 
            onDragStart={onDragStart} 
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
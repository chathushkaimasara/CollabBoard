import React from 'react';

function TaskCard({ task, onDragStart, onDelete }) {
  const taskId = task._id || task.id; 

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, taskId)}
      className="group relative bg-white rounded-[24px] p-5 mb-4 shadow-sm border border-gray-50 cursor-grab active:cursor-grabbing hover:-translate-y-1 transition-transform duration-200"
    >
      {/* Delete Button - Fixed Click Event */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(taskId);
        }}
        className="absolute top-4 right-4 text-gray-200 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        title="Delete Task"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>
        </svg>
      </button>

      <h4 className="font-bold text-[17px] text-black mb-1 pr-8">{task.title}</h4>
      <p className="text-gray-400 text-[13px] font-medium leading-relaxed">{task.description}</p>
    </div>
  );
}

export default TaskCard;
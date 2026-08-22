
import React from 'react';
import Column from './Column';

function Board() {
  return (
    <div className="kanban-board" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <Column title="To Do">
        {/* Placeholder for future Task Cards */}
      </Column>
      
      <Column title="Doing">
         {/* Placeholder for future Task Cards */}
      </Column>
      
      <Column title="Done">
         {/* Placeholder for future Task Cards */}
      </Column>
    </div>
  );
}

export default Board;
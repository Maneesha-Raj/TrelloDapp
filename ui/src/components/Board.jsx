

// Board.jsx


import React, { useState } from 'react';
import List from './List';

const initialData = [
  { id: 1, title: 'To Do', cards: ['Project planning', 'Kickoff meeting'] },
  { id: 2, title: 'Doing', cards: [] },
  { id: 3, title: 'Done', cards: [] }
];

function Board() {
  const [lists, setLists] = useState(initialData);

  return (
    <div className="board">
      {lists.map((list) => (
        <List key={list.id} title={list.title} cards={list.cards} />
      ))}
      <div className="add-list">+ Add another list</div>
    </div>
  );
}

export default Board;








//-------------------------------------*****  ***** ****-----------------------------------------------------------------------------


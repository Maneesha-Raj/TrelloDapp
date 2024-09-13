import React from 'react';
import Card from './Card';

const List = ({ list }) => {
  return (
    <div className="list">
      <h3>{list.title}</h3>
      {list.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
      <button>Add a card</button>
    </div>
  );
};

export default List;

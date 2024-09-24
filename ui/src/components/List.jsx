
// List.jsx


import React from 'react';
import Card from './Card';



const List = ({ title, cards }) => {
  return (
    <div className="list">
      <h3>{title}</h3>
      {cards.map((card, index) => (
        <Card key={index} text={card} />
      ))}
      <div className="add-card">+ Add a card</div>
    </div>
  );
};

export default List;





//----------------------------------------------------------------------------------------





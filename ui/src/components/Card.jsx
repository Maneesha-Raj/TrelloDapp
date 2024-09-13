import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      {card.text}
    </div>
  );
};

export default Card;

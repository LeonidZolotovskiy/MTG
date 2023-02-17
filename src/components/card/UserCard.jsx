import React from 'react';
import OneCard from './OneCard';

export default function UserCard({ cards }) {
  return (
    <div className="row mt-2">
      {cards?.map((card) => <OneCard key={card.id} card={card} />)}
    </div>
  );
}

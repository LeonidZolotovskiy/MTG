import React from 'react';
import OneCard from './OneCard';

export default function UserCard({ allCards }) {
  console.log(allCards);
  return (
    <div className="row mt-2">
      {allCards?.map((card) => <OneCard key={card.id} card={card} />)}
    </div>
  );
}

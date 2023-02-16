import React from 'react';
import AppStore from '../store';
import OneCard from './card/OneCard';

export default function AllCards() {
  const cards = AppStore((state) => state.cards);
  return (
    <div className="row mt-2">
      {cards.map((card) => <OneCard key={card.id} card={card} />)}
    </div>
  );
}

import React, { useState } from 'react';
import AddCard from './card/AddCard';
import UserCard from './card/UserCard';
import AppStore from '../store';

export default function PrivateCabinet() {
  const cards = AppStore((state) => state.cards);
  console.log(cards);
  // const [allCards, setAllCards] = useState(car || []);
  return (
    <div>
      <AddCard />
      <UserCard cards={cards} />
    </div>
  );
}

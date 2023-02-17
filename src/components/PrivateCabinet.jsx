import React, { useState } from 'react';
import AddCard from './card/AddCard';
import UserCard from './card/UserCard';
import AppStore from '../store';

export default function PrivateCabinet() {
  const user = AppStore((state) => state.user);
  const cards = AppStore((state) => state.cards);
  const userCards = cards.filter((el) => el.ownerId === user.id);
  const [allCards, setAllCards] = useState(userCards || []);
  return (
    <div>
      <AddCard setAllCards={setAllCards} />
      <UserCard user={user} allCards={allCards} />
    </div>
  );
}

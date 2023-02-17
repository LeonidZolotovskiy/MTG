import React, { useEffect, useState } from 'react';
import AppStore from '../store';
import OneCard from './card/OneCard';
import Search from './Search';
import SelectCity from './SelectCity';

export default function AllCards() {
  const [select, setSelect] = useState('Выбор');
  const [search, setSearch] = useState('');
  const cards = AppStore((state) => state.cards);
  const [allCards, setAllCards] = useState(cards || []);

  const handlerFilter = () => {
    setAllCards((prev) => prev
      .filter((card) => card.name.toLowerCase().includes(search.toLowerCase())));
  };

  useEffect(() => {
    handlerFilter();
  }, [search]);

  return (
    <>
      <SelectCity
        select={select}
        setSelect={setSelect}
        setAllCards={setAllCards}
      />
      <Search
        search={search}
        handlerFilter={handlerFilter}
        setSearch={setSearch}
      />
      <div className="row m-0">
        {allCards.map((card) => <OneCard key={card.id} card={card} />)}
      </div>
    </>
  );
}

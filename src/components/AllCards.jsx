import React, { useEffect, useState } from 'react';
import AppStore from '../store';
import OneCard from './card/OneCard';
import Search from './Search';

export default function AllCards({ select }) {
  const [search, setSearch] = useState('');
  const cards = AppStore((state) => state.cards);
  const [allCards, setAllCards] = useState(cards || []);

  const handlerFilter = () => {
    setAllCards((prev) => prev
      .filter((card) => card.name.toLowerCase().includes(search.toLowerCase())));
  };
  // const handlerCities = () => {
  //   setAllCards((prev) => prev
  //     .filter((card) => card.name.toLowerCase().includes(select.toLowerCase())));
  // };
  useEffect(() => {
    handlerFilter();
  }, [search]);

  // useEffect(() => {
  //   handlerCities();
  // }, [select]);

  return (
    <>
      <Search
        search={search}
        handlerFilter={handlerFilter}
        setSearch={setSearch}
      />
      <div className="row mt-2">
        {allCards.map((card) => <OneCard key={card.id} card={card} />)}
      </div>
    </>
  );
}

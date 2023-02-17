import React, { useEffect, useState } from 'react';
import AppStore from '../store';
import OneCard from './card/OneCard';
import Search from './Search';
import SelectCity from './SelectCity';

export default function AllCards() {
  const [select, setSelect] = useState('Выбор города');
  const [search, setSearch] = useState('');
  const cards = AppStore((state) => state.cards);
  const [allCards, setAllCards] = useState(cards || []);

  const handlerFilter = () => {
    setAllCards(cards
      .filter((card) => card.name.toLowerCase().includes(search.toLowerCase())));
  };

  useEffect(() => {
    handlerFilter();
  }, [search]);

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginBottom: '20px',
        marginTop: '20px',
      }}
      >
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
      </div>

      <div className="row mt-2">
        {allCards.map((card) => <OneCard key={card.id} card={card} />)}
      </div>
    </>
  );
}

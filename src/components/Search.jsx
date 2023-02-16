import React from 'react';

export default function Search({ search, setSearch, handlerFilter }) {
  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: '30px',
      }}
      >
        <form className="d-flex" role="search">
          <input value={search} onChange={handlerSearch} className="form-control me-2" type="search" placeholder="фильтр по названию" aria-label="Search" />
          <button onClick={() => { window.location = '/allCards'; }} className="btn btn-outline-success" type="button">Сброс</button>
        </form>
      </div>
    </div>
  );
}

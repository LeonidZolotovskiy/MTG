import React from 'react';

export default function Search({ search, setSearch }) {
  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div style={{ marginLeft: '30px', width: '20%' }}>
      <form className="d-flex" role="search">
        <input value={search} onChange={handlerSearch} className="form-control me-2" type="search" placeholder="фильтр по названию" aria-label="Search" />
      </form>
    </div>
  );
}

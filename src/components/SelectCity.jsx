import axios from 'axios';
import React from 'react';
import useAppStore from '../store';

export default function SelectCity({ setSelect, select, setAllCards }) {
  const getCities = useAppStore((state) => state.getCities);
  const city = useAppStore((state) => state.cities);

  const selectHandler = (e) => {
    axios.get(`/api/cities/${e.target.value}`).then((res) => {
      setSelect(e.target.value);
      setAllCards(res.data);
    });
  };
  return (
    <div style={{ marginRight: '30px', width: '20%' }}>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={() => selectHandler()}
        onClick={() => getCities()}
      >
        <option value={select}>{select}</option>
        {city.map((card) => <option key={Math.random()}>{card?.city}</option>)}
      </select>
    </div>
  );
}

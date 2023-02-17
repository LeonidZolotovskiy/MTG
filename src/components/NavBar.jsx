import React from 'react';
import useAppStore from '../store';

export default function NavBar({ setSelect, select }) {
  const user = useAppStore((state) => state.user);
  const getCities = useAppStore((state) => state.getCities);
  const city = useAppStore((state) => state.cities);

  const selectHandler = (e) => {
    setSelect(e.target.value);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            { user ? (
              <>
                <li className="nav-item">

                  <a className="nav-link" href="/private">
                    Здравствуйте,
                    {' '}
                    {user?.name}
                    !
                  </a>
                
</li>
                <li className="nav-item">
                  <a className="nav-link" href="/user/logout">Logout</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cart">Cart</a>
                </li>
                <li className="nav-item dropdown">
                  <select onChange={selectHandler} onClick={() => getCities()}>
                    <option value="">{select}</option>
                    {city.map((card) => <option key={Math.random()}>{card?.city}</option>)}
                  </select>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a className="nav-link active" aria-current="page" href="/signup">SingUp</a>
                </li>
                <li className="nav-item" />
                <li className="nav-item">
                  <a className="nav-link" href="/signin">SingIn</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

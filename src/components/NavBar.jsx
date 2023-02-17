import React from 'react';
import useAppStore from '../store';

export default function NavBar() {
  const user = useAppStore((state) => state.user);
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-white">
      <div className="container-fluid ">
        <a className="navbar-brand text-white" href="/"><img src="/img/Magicthegathering-logo.svg.png" style={{width:"60%"}} alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            { user ? (
              <>
                <li className="nav-item">

                  <a className="nav-link text-white" href="/private">
                    Здравствуйте,
                    {' '}
                    {user?.name}
                    !
                  </a>

                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/user/logout">Logout</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/cart">Cart</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a className="nav-link active text-white" aria-current="page" href="/signup">SingUp</a>
                </li>
                <li className="nav-item" />
                <li className="nav-item">
                  <a className="nav-link text-white" href="/signin">SingIn</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

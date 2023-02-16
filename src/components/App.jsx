import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllCards from './AllCards';
import Cart from './basket/Cart';
import Home from './Home';
import NavBar from './NavBar';
import SignIn from './registration/SingIn';
import SignUp from './registration/SingUp';
import PrivateCabinet from './PrivateCabinet';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/allCards" element={<AllCards />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/private" element={<PrivateCabinet />} />
      </Routes>
    </div>
  );
}

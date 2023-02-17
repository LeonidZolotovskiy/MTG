import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCard from './card/AddCard';
import AllCards from './AllCards';
import Cart from './basket/Cart';
import Home from './Home';
import NavBar from './NavBar';
import SignIn from './registration/SingIn';
import SignUp from './registration/SingUp';
import PrivateCabinet from './PrivateCabinet';
import OneCard from './card/OneCard';

export default function App(user) {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/card" element={<OneCard />} />
        <Route path="/" element={<AllCards />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/allCards" element={<AllCards />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/private" element={<PrivateCabinet />} />
      </Routes>
    </div>
  );
}

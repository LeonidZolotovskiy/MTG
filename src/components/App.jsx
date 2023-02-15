import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCard from './card/AddCard';
import SignIn from './registration/SingIn';
import SignUp from './registration/SingUp';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/addcard" element={<AddCard/>}/>
      </Routes>
    </div>
  );
}

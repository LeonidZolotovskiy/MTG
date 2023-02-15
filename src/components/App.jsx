import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import SignIn from './registration/SingIn';
import SignUp from './registration/SingUp';

export default function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={ <SignUp />}/>
      </Routes>
    </div>
  );
}

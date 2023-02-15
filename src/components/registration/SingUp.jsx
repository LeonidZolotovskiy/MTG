import React, { useState } from 'react';
import axios from 'axios';

export default function SignUp() {
  const [err, setError] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { email, password, name, city } = formData;
    if (!(password && name)) {
      return setError({ message: 'Password and username must be non-empty' });
    }
    axios.post('/user/signup', formData)
      .then(() => { window.location = '/'; })
      .catch((error) => {
        console.log(error);
        setError();
      });
  };
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
          <form className="signup-form" action="" method="post" onSubmit={submitHandler}>
            <div className="form-group mt-5">
              <input type="text" name="name" className="form-control" placeholder="имя..." required />
            </div>
            <div className="form-group mt-5">
              <input 
              type="email"
               name="email" 
               className="form-control" 
               placeholder="email..."
                required />
            </div>
            <div className="form-group mt-5">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="пароль..."
                required
              />
            </div>
            <div className="form-group mt-5">
              <input
                type="city"
                name="city"
                className="form-control"
                placeholder="город..."
                required
              />
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-secondary">&nbsp; register &nbsp;</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

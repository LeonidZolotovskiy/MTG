import React, { useState } from 'react';
import axios from 'axios';

export default function SignIn() {
  const [error, setError] = useState({});

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { email, password } = formData;
    if (!(email && password)) {
      return setError({ message: 'Error' });
    }
    axios.post('/user/login', formData)
      .then(() => window.location = '/')
      .catch((err) => setError(err));
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">

          <form className="signin-form" action="" method="post" onSubmit={loginHandler}>
            <div className="form-group mt-5">
              <input type="email" name="email" className="form-control email" id="email" placeholder="email..." />
            </div>
            <div className="form-group mt-5">
              <input
                type="password"
                name="password"
                className="form-control password"
                id="password"
                placeholder="password..."
              />
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-secondary">&nbsp; Login &nbsp;</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

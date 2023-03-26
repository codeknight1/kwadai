import React from 'react';
import './Style.css';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <div className="container">
      <h1>SIGN IN</h1>
      <form id="login-form" name="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email or Username</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" name="pass" placeholder="*******" required />
        <button type="submit" className='btn login'>Login</button>
      </form>
      <div className="btn-container">
        <a className='btn' href='/signUp'>Don't have an account?</a>
        <a className='btn' href='/newPass'>Forgot Password</a>
      </div>
    </div>
  );
};

export default Login;

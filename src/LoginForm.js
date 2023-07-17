import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate backend authentication
    if (username === 'admin' && password === 'password') {
      // Generate JWT token with an expiration time (e.g., 1 hour)
      const token = generateToken({ username, expiration: Date.now() + 3600000 });
      // Store the username.password and token in localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('token', token);
      onLogin(token);
      alert('Successfully Logged In!');
    } else {
      alert('Invalid username or password');
    }
  };

  const generateToken = (payload) => {
    // Encode the payload as a JSON string
    const payloadString = JSON.stringify(payload);
    // Base64url encode the payload
    const base64UrlPayload = btoa(payloadString).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    // Create the JWT token by combining the base64Url encoded payload and a secret key
    const token = `betterit.${base64UrlPayload}`;
    return token;
  };

  return (
    <div>
      <h2>Welcome!</h2>
      <h2>Welcome to the testing page of</h2>
      <h1>BetterIT Pvt Ltd.</h1>
      <h3>Login With Below Given Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="center-button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

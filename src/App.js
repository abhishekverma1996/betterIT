import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';


const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken('');
    // Remove the token from localStorage
    localStorage.removeItem('token');
  };

  useEffect(() => {
    // Check if a token exists in localStorage on application startup
    const cachedToken = localStorage.getItem('token');
    if (cachedToken) {
      setToken(cachedToken);
    }
  }, []);

  return (
    <div>
      {token ? (
        <div>
          <h2>Welcome!</h2>
          <h2>Welcome to the Dashboard page of </h2>
          <h1>BetterIT Pvt Ltd.</h1>
          <h2>Hope Doing Well.</h2>
          <h2>Please Click on Logout button to Redirect On Main Page.</h2>
          <button className="center-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

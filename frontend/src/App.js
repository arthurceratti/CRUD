import React, { useState } from 'react';
import Header from './Header';
import { AppRouter } from './routes';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  // Handle login success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Handle logout - keep this!
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    // Redirect to login after 1 second
    setTimeout(() => {
      window.location.hash = '/login';
    }, 1000);
  };
  return (
    <div className="App">
  
      <Header onLogout={handleLogout} />
      
      <AppRouter />
      
    </div>
  );
}

export default App;

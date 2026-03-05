import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ onLogout }) {


  const handleLogout = () => {
    localStorage.removeItem('authToken');
    // Redirect to login after 1 second
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Sistema de Ensino</h1>
        <div className="header-actions">
          {/* Only show logout button when on dashboard */}
          {window.location.hash !== '/login' && (
            <button 
              className="logout-btn"
              onClick={() => {
                handleLogout();
                if (onLogout) onLogout();
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

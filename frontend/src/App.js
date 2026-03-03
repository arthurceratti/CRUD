// frontend/src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD App2</h1>
      <div id="users">
        {/* You can add dynamic user cards here using React */}
        <div className="user-card">
          <h2>User 1</h2>
          <p>Email: user1@example.com</p>
        </div>
        <div className="user-card">
          <h2>User 2</h2>
          <p>Email: user2@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;


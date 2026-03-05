import React, { useState, useEffect } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';

export function AppRouter({ children }) {
  const [route, setRoute] = useState('login');
  
  // Listen for hash changes to update route
  useEffect(() => {
    const handleHashChange = () => {
    const hash = window.location.hash.replace('#', '');

      if (hash === '/login') setRoute('login');
      else if (hash === '/signup') setRoute('signup');
      else if (hash === '/dashboard') setRoute('dashboard');
   //   else setRoute('dashboard'); // Default route
    };
    
    // Initial check
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  // Only render the active component
  if (route === 'login') {
    return (
      <Login 
        onSuccess={() => window.location.hash = '/dashboard'} 
        onSignUp={() => window.location.hash = '/signup'} 
      />
    );
  }
  
  if (route === 'signup') {
    return (
      <SignUp 
        onCreated={() => window.location.hash = '/signup'} 
      />
    );
  }
  
  if (route === 'dashboard') {
    return (
      <Dashboard />
    );
  }
  
  return children;
}

export { Login, SignUp, Dashboard };

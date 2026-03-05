import React, { useState } from 'react';
import { ButtonPrimary, ButtonSecondary } from './Buttons';
import './Login.css';

function Login({ onSuccess, onSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual authentication API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simple validation
      if (!email || !password) {
        throw new Error('Please enter both email and password');
      }

      // TODO: Add actual authentication logic here
      console.log('Login successful:', { email });
      
         if (email && password) {
      // Login successful - redirect to dashboard
      if (onSuccess) {
        onSuccess();
      }
      
      // Also update hash to trigger AppRouter
      window.location.hash = '/dashboard';
    }
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
        </div>

        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={loading}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={loading}
              autoComplete="current-password"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
              type="checkbox"
              id="remember"
              checked={!!localStorage.getItem('remember')}
              onChange={(e) => {
                const value = e.target.checked ? 'true' : 'false';
                localStorage.setItem('remember', value);
                }}
            />
              Remember me
            </label>

            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <ButtonPrimary
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </ButtonPrimary>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#signup" 
          onClick={(e) => {
            e.preventDefault();
            // Pass the navigation function to the parent router
            onSignUp(); 
          }}>
            Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;

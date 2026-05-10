import { useState } from 'react';
import axios from 'axios';
import './AuthCard.css';

function Login({ onLoginSuccess, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  const loginUser = async () => {
    if (!email || !password) return showToast('error', 'Please fill in all fields.');
    setLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:3001/auth/login',
        { email, password },
        { withCredentials: true }
      );
      showToast('success', res.data.message || 'Welcome');
      setTimeout(() => onLoginSuccess && onLoginSuccess(email), 800);
    } catch (err) {
      showToast('error', err.response?.data?.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div className="card-header">
        <h2 className="card-title">Sign In</h2>
      </div>

      {toast && (
        <div className={`auth-toast ${toast.type}`}>
          {toast.type === 'success' ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 5v3.5M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
          {toast.msg}
        </div>
      )}

      <div className="field">
        <label className="field-label">Email address</label>
        <div className="input-wrap">
          <span className="input-icon">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M1.5 5.5l6.5 4 6.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </span>
          <input
            className="auth-input"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && loginUser()}
          />
        </div>
      </div>

      <div className="field">
        <label className="field-label">Password</label>
        <div className="input-wrap">
          <span className="input-icon">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              <circle cx="8" cy="10.5" r="1" fill="currentColor"/>
            </svg>
          </span>
          <input
            className="auth-input"
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && loginUser()}
          />
        </div>
      </div>

      <div className="card-divider" />

      <button className="btn-primary" onClick={loginUser} disabled={loading}>
        {loading && <span className="btn-spinner" />}
        {loading ? 'Signing in…' : 'Sign In'}
      </button>

      {onSwitchToRegister && (
        <p className="switch-text">
          Don't have an account?{' '}
          <button className="switch-link" onClick={onSwitchToRegister}>Create one</button>
        </p>
      )}
    </div>
  );
}

export default Login;
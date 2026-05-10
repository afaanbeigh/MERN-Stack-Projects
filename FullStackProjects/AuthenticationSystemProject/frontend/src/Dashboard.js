import axios from 'axios';
import './Dashboard.css';

function Dashboard({ userEmail, onLogout }) {
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/auth/logout', {}, { withCredentials: true })
        .catch(() => {});
    } finally {
      onLogout && onLogout();
    }
  };

  const initials = userEmail
    ? userEmail.split('@')[0].slice(0, 2).toUpperCase()
    : 'U';

  return (
    <div className="dash-card">
      {/* Top bar */}
      <div className="dash-topbar">
        <div className="dash-brand" />
        <button className="logout-btn" onClick={handleLogout}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h3M10 11l3-3-3-3M13 8H6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Log out
        </button>
      </div>

      {/* Hero */}
      <div className="dash-hero">
        <div className="dash-avatar">{initials}</div>
        <div className="dash-welcome">
          <p className="dash-eyebrow">Authenticated</p>
          <h2 className="dash-title">Welcome</h2>
          <p className="dash-email">{userEmail}</p>
        </div>
      </div>

      <div className="dash-divider" />

      {/* Stats row */}
      <div className="dash-stats">
        <div className="stat-card">
          <div className="stat-icon stat-green">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="stat-label">Status</p>
          <p className="stat-value">Active</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon stat-purple">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="stat-label">Session</p>
          <p className="stat-value">Secure</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon stat-blue">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M2.5 13.5C2.5 11 5 9 8 9s5.5 2 5.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="stat-label">Role</p>
          <p className="stat-value">Member</p>
        </div>
      </div>

      <div className="dash-note">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M8 5v3.5M8 11h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        Your session is valid for 1 hour. You'll be prompted to sign in again after expiry.
      </div>
    </div>
  );
}

export default Dashboard;
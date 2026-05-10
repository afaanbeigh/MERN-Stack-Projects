import React from 'react';
import './AuthLayout.css';

function AuthLayout({ children }) {
  return (
    <div className="auth-root">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grid-overlay" />

      <div className="auth-center">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
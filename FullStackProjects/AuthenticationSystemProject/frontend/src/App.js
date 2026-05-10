import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [view, setView] = useState('login');
  const [loggedInEmail, setLoggedInEmail] = useState('');

  const handleLoginSuccess = (email) => {
    setLoggedInEmail(email);
    setView('dashboard');
  };

  const handleLogout = () => {
    setLoggedInEmail('');
    setView('login');
  };

  if (view === 'dashboard') {
    return (
      <AuthLayout>
        <Dashboard userEmail={loggedInEmail} onLogout={handleLogout} />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      {view === 'login' ? (
        <Login
          onLoginSuccess={handleLoginSuccess}
          onSwitchToRegister={() => setView('register')}
        />
      ) : (
        <Register
          onSwitchToLogin={() => setView('login')}
        />
      )}
    </AuthLayout>
  );
}

export default App;
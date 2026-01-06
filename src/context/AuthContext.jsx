import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('mms-user');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  const login = ({ name, role }, navigate) => {
    const u = { name, role };
    setUser(u);
    try { localStorage.setItem('mms-user', JSON.stringify(u)); } catch (e) {/* ignore */}
    
    // Navigate to single dashboard
    if (navigate) {
      navigate('/dashboard');
    }
  };

  const logout = () => {
    setUser(null);
    try { localStorage.removeItem('mms-user'); } catch (e) {/* ignore */}
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

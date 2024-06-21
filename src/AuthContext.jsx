// AuthContext.jsx

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Example state for authenticated user

  const login = (userData) => {
    // Implement your login logic here
    setUser(userData);
  };

  const logout = () => {
    // Implement logout logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

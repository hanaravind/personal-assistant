import { createContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode token
        setUser(token);
        setUserId(decoded.userID)
      } catch (error) {
        console.error("Invalid token");
        return null;
      }
    }
  }, []);

  console.log('userid is', userId)

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    setUserId(null)
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, userId, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
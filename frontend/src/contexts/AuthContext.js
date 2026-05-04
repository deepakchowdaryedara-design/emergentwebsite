import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { API_BASE } from "../apiConfig";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE}/auth/me`, { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(false))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await axios.post(`${API_BASE}/auth/login`, { email, password }, { withCredentials: true });
    setUser(res.data);
    return res.data;
  };

  const logout = async () => {
    await axios.post(`${API_BASE}/auth/logout`, {}, { withCredentials: true });
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

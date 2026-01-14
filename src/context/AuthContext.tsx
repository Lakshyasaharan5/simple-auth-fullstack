import { createContext, useContext, useEffect, useState } from "react";
import type { AuthUser } from "../types/auth";

interface AuthContextType {
  user: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  function login(user: AuthUser) {
    setUser(user);
  }
  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // temporary: trust token presence
      setUser({ id: "unknown", username: "restored" });
    }
  }, []);
  

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}

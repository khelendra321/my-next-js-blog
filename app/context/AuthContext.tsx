"use client";

import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type User = {
  id: string;
  full_name: string;
  email: string;
  mobile: string;
};

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => useContext(AuthContext);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (token: string) => {
    const decoded: any = jwtDecode(token);
    setUser({
      id: decoded.id,
      email: decoded.email,
      full_name: decoded.full_name,
      mobile: decoded.mobile,
    });
    localStorage.setItem("accessToken", token);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    toast.success("Logged out successfully!");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decoded: any = jwtDecode(token);

      const isExpired = decoded.exp * 1000 < Date.now();
      if (!isExpired) {
        setUser({
          id: decoded.id,
          email: decoded.email,
          full_name: decoded.full_name,
          mobile: decoded.mobile,
        });
      } else {
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user, //
        isLoggedIn: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}

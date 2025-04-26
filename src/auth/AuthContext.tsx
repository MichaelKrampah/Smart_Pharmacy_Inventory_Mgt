import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Define user roles
export type UserRole = 'Admin' | 'Manager' | 'Staff';

// Define user interface
export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  name: string;
}

// Define authentication context interface
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  hasRole: (roles: UserRole[]) => boolean;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Local storage key for storing the user
const USER_STORAGE_KEY = 'pharmacy_user';

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Check if the user is already logged in (from local storage)
  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (err) {
        console.error('Failed to parse stored user data:', err);
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call
      // For demo purposes, we're simulating a successful login
      if (email && password) {
        // Simulating an API response for demo purposes
        const mockUser: User = {
          id: '1',
          username: email.split('@')[0],
          email,
          role: email.includes('admin') ? 'Admin' : email.includes('manager') ? 'Manager' : 'Staff',
          name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
        };
        
        // Store user in state and local storage
        setUser(mockUser);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(mockUser));
        
        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        throw new Error('Email and password are required');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
    navigate('/');
  };

  // Check if user has one of the specified roles
  const hasRole = (roles: UserRole[]) => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
    hasRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
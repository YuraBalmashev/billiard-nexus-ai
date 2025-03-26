
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('billman_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock validation (in a real app, this would be handled by a backend)
        if (email && password) {
          const mockUser: User = {
            id: '1',
            username: email.split('@')[0],
            email,
            avatar: '/placeholder.svg'
          };
          
          setUser(mockUser);
          localStorage.setItem('billman_user', JSON.stringify(mockUser));
          navigate('/profile');
          resolve(true);
        } else {
          resolve(false);
        }
      }, 800); // Simulate API delay
    });
  };

  // Register function
  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock validation (in a real app, this would be handled by a backend)
        if (username && email && password) {
          const mockUser: User = {
            id: '1',
            username,
            email,
            avatar: '/placeholder.svg'
          };
          
          setUser(mockUser);
          localStorage.setItem('billman_user', JSON.stringify(mockUser));
          navigate('/profile');
          resolve(true);
        } else {
          resolve(false);
        }
      }, 800); // Simulate API delay
    });
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('billman_user');
    navigate('/');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

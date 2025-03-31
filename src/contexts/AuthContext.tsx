
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  role: 'Player' | 'Coach' | 'Admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  deleteAccount: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Store the path where login was initiated
  const [lastPath, setLastPath] = useState<string | null>(null);

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
            avatar: '/placeholder.svg',
            role: 'Player'
          };
          
          setUser(mockUser);
          localStorage.setItem('billman_user', JSON.stringify(mockUser));
          
          // Redirect back to the page where login was initiated or to profile
          if (lastPath) {
            navigate(lastPath);
            setLastPath(null);
          } else {
            // If no stored path, redirect to profile
            navigate('/profile');
          }
          
          resolve(true);
        } else {
          resolve(false);
        }
      }, 800); // Simulate API delay
    });
  };

  // Store the current path when initiating login
  const storeCurrentPath = () => {
    // Don't store auth-related paths
    if (!location.pathname.includes('/profile') && 
        !location.pathname.includes('/dashboard')) {
      setLastPath(location.pathname);
    }
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
            avatar: '/placeholder.svg',
            role: 'Player'
          };
          
          setUser(mockUser);
          localStorage.setItem('billman_user', JSON.stringify(mockUser));
          
          // Redirect to profile after registration
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

  // Delete account function
  const deleteAccount = () => {
    // In a real app, this would make an API call to delete the user's account
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
        logout,
        deleteAccount
      }}
    >
      {React.Children.map(children, child => {
        // Add storeCurrentPath to context so it can be accessed by AuthModal
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            storeCurrentPath
          });
        }
        return child;
      })}
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

// Export this function so it can be accessed outside the context
export const useStoreCurrentPath = () => {
  const context = useContext(AuthContext);
  // @ts-ignore - we're adding this property in the provider
  return context?.storeCurrentPath;
};

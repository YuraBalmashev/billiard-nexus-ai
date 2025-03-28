
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from '@/components/auth/AuthModal';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-3 md:py-4 transition-all duration-300 ${
        isScrolled ? 'bg-billman-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">
              BILLMAN
            </span>
          </Link>
          
          {/* Desktop Navigation - only show on larger screens */}
          {!isMobile ? (
            <div className="hidden md:flex items-center space-x-2 lg:space-x-8">
              <NavLink to="/" className={({isActive}) => 
                `animated-link py-1 px-1 lg:px-2 text-sm lg:text-base transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
              }>
                {t('navigation.home')}
              </NavLink>
              <NavLink to="/features" className={({isActive}) => 
                `animated-link py-1 px-1 lg:px-2 text-sm lg:text-base transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
              }>
                {t('navigation.features')}
              </NavLink>
              <NavLink to="/pricing" className={({isActive}) => 
                `animated-link py-1 px-1 lg:px-2 text-sm lg:text-base transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
              }>
                {t('navigation.pricing')}
              </NavLink>
              <NavLink to="/clubs" className={({isActive}) => 
                `animated-link py-1 px-1 lg:px-2 text-sm lg:text-base transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
              }>
                {t('navigation.forClubs')}
              </NavLink>
              <NavLink to="/games" className={({isActive}) => 
                `animated-link py-1 px-1 lg:px-2 text-sm lg:text-base transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
              }>
                {t('navigation.myGames')}
              </NavLink>
              <NavLink to="/about" className={({isActive}) => 
                `animated-link py-1 px-1 lg:px-2 text-sm lg:text-base transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
              }>
                {t('navigation.about')}
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => 
                `animated-link py-1 px-1 lg:px-2 text-sm lg:text-base transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
              }>
                {t('navigation.contact')}
              </NavLink>
            </div>
          ) : null}
          
          {!isMobile ? (
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <LanguageSwitcher />
              
              {isAuthenticated ? (
                <Button 
                  variant="outline" 
                  className="border-billman-green text-billman-green hover:bg-billman-green/10 text-xs lg:text-sm px-2 lg:px-4"
                  asChild
                >
                  <Link to="/profile">
                    <User size={16} className="mr-1 lg:mr-2" />
                    {user?.username || t('navigation.profile')}
                  </Link>
                </Button>
              ) : (
                <AuthModal />
              )}
            </div>
          ) : null}
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-billman-black px-4 py-6 flex flex-col z-40 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.home')}
              </NavLink>
              <NavLink 
                to="/features" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.features')}
              </NavLink>
              <NavLink 
                to="/pricing" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.pricing')}
              </NavLink>
              <NavLink 
                to="/clubs" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.forClubs')}
              </NavLink>
              <NavLink 
                to="/games" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.myGames')}
              </NavLink>
              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.about')}
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navigation.contact')}
              </NavLink>
              
              {isAuthenticated && (
                <NavLink 
                  to="/profile" 
                  className={({isActive}) => 
                    `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navigation.profile')}
                </NavLink>
              )}
              
              <LanguageSwitcher isMobile={true} />
            </div>
            
            <div className="mt-6 flex flex-col space-y-3">
              {!isAuthenticated && (
                <div className="w-full">
                  <AuthModal />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

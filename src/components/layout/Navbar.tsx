
import React, { useState, useEffect, useMemo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from '@/components/auth/AuthModal';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  // Define navigation items in a structure for easier management
  const navItems = useMemo(() => [
    { path: '/', label: t('navigation.home') },
    { path: '/features', label: t('navigation.features') },
    { path: '/pricing', label: t('navigation.pricing') },
    { path: '/clubs', label: t('navigation.forClubs') },
    { path: '/games', label: t('navigation.myGames') },
    { path: '/about', label: t('navigation.about') },
    { path: '/contact', label: t('navigation.contact') },
  ], [t]);
  
  // State to track which items should be in the dropdown
  const [itemsInDropdown, setItemsInDropdown] = useState<number>(0);
  
  // Function to check if an item should be in the dropdown
  const shouldBeInDropdown = (index: number) => {
    return index >= navItems.length - itemsInDropdown;
  };
  
  // Check window size and adjust itemsInDropdown
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      
      // Adjust how many items go in dropdown based on screen width
      if (windowWidth >= 1280) { // xl
        setItemsInDropdown(0); // All items visible
      } else if (windowWidth >= 1024) { // lg
        setItemsInDropdown(1); // Last item in dropdown
      } else if (windowWidth >= 900) { // Medium-sized screens
        setItemsInDropdown(3); // Last 3 items in dropdown
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navItems.length]);

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
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {/* Visible navigation items */}
              {navItems.map((item, index) => (
                !shouldBeInDropdown(index) && (
                  <NavLink 
                    key={item.path}
                    to={item.path} 
                    className={({isActive}) => 
                      `animated-link py-1 px-1 lg:px-2 text-xs lg:text-sm xl:text-base transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
              
              {/* "More" dropdown for overflow items */}
              {itemsInDropdown > 0 && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="animated-link py-1 px-1 lg:px-2 text-xs lg:text-sm xl:text-base text-billman-white hover:text-billman-green hover:bg-transparent"
                    >
                      {t('navigation.more')}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-billman-dark border-billman-gray text-billman-white shadow-lg min-w-[120px] z-50">
                    {navItems.map((item, index) => (
                      shouldBeInDropdown(index) && (
                        <DropdownMenuItem key={item.path} asChild className="focus:bg-billman-gray focus:text-billman-green">
                          <NavLink 
                            to={item.path}
                            className={({isActive}) => 
                              `w-full p-2 text-xs lg:text-sm rounded-md transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </NavLink>
                        </DropdownMenuItem>
                      )
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
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
              {navItems.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path} 
                  className={({isActive}) => 
                    `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              
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

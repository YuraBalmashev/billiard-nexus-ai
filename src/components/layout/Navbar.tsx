
import React, { useState, useEffect, useMemo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, ChevronDown, MoreHorizontal } from 'lucide-react';
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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);
  
  // Check window size and adjust itemsInDropdown
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      
      // Set medium screen state (between mobile and full desktop)
      setIsMediumScreen(windowWidth >= 700 && windowWidth < 900);
      
      // Adjust how many items go in dropdown based on screen width
      if (windowWidth >= 1280) { // xl
        setItemsInDropdown(0); // All items visible
      } else if (windowWidth >= 1024) { // lg
        setItemsInDropdown(1); // Last item in dropdown
      } else if (windowWidth >= 900) { // Medium-large screens
        setItemsInDropdown(3); // Last 3 items in dropdown
      } else if (windowWidth >= 700) { // Medium screens
        setItemsInDropdown(5); // Only show 2 most important items
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navItems.length]);

  // Function to check if an item should be in the dropdown
  const shouldBeInDropdown = (index: number) => {
    return index >= navItems.length - itemsInDropdown;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Apple-style fullscreen mobile menu
  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-billman-white md:hidden">
          <Menu size={24} />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-80 bg-billman-black p-0 border-r border-billman-gray">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-billman-gray">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">
                BILLMAN
              </span>
            </Link>
          </div>
          
          <div className="flex-1 overflow-auto py-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path} 
                  className={({isActive}) => 
                    `py-3 px-4 text-base border-l-2 transition-colors ${
                      isActive 
                        ? 'border-billman-green text-billman-green bg-billman-dark/50' 
                        : 'border-transparent text-billman-white hover:bg-billman-dark/30 hover:border-billman-gray'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {isAuthenticated && (
                <NavLink 
                  to="/profile" 
                  className={({isActive}) => 
                    `py-3 px-4 text-base border-l-2 transition-colors ${
                      isActive 
                        ? 'border-billman-green text-billman-green bg-billman-dark/50' 
                        : 'border-transparent text-billman-white hover:bg-billman-dark/30 hover:border-billman-gray'
                    }`
                  }
                >
                  {t('navigation.profile')}
                </NavLink>
              )}
            </nav>
          </div>
          
          <div className="p-4 border-t border-billman-gray">
            <div className="flex flex-col space-y-4">
              <LanguageSwitcher isMobile={true} />
              
              {!isAuthenticated && (
                <div className="w-full">
                  <AuthModal />
                </div>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-3 md:py-4 transition-all duration-300 ${
        isScrolled ? 'bg-billman-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center mr-4">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">
                BILLMAN
              </span>
            </Link>
            
            {/* Desktop/Medium Navigation */}
            {!isMobile && (
              <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
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
                        className="animated-link py-1 px-1 lg:px-2 text-xs lg:text-sm xl:text-base text-billman-white hover:text-billman-green hover:bg-transparent flex items-center gap-1"
                      >
                        {isMediumScreen ? (
                          <MoreHorizontal className="h-4 w-4" />
                        ) : (
                          <>
                            {t('navigation.more')}
                            <ChevronDown className="ml-1 h-3 w-3" />
                          </>
                        )}
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
            )}
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            {/* Desktop/Tablet Authentication */}
            {!isMobile && (
              <>
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
              </>
            )}
            
            {/* Mobile Menu Button */}
            {isMobile && <MobileMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

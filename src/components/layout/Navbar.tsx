
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-billman-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">
              BILLMAN
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => 
              `animated-link py-2 transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
            }>
              Home
            </NavLink>
            <NavLink to="/features" className={({isActive}) => 
              `animated-link py-2 transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
            }>
              Features
            </NavLink>
            <NavLink to="/pricing" className={({isActive}) => 
              `animated-link py-2 transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
            }>
              Pricing
            </NavLink>
            <NavLink to="/clubs" className={({isActive}) => 
              `animated-link py-2 transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
            }>
              For Clubs
            </NavLink>
            <NavLink to="/games" className={({isActive}) => 
              `animated-link py-2 transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
            }>
              My Games
            </NavLink>
            <NavLink to="/about" className={({isActive}) => 
              `animated-link py-2 transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
            }>
              About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => 
              `animated-link py-2 transition-colors ${isActive ? 'text-billman-green' : 'text-billman-white hover:text-billman-green'}`
            }>
              Contact
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outline" className="border-billman-green text-billman-green hover:bg-billman-green/10">
              Log In
            </Button>
            <Button className="bg-billman-green hover:bg-billman-lightGreen text-white">
              Register
            </Button>
          </div>
          
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
                Home
              </NavLink>
              <NavLink 
                to="/features" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </NavLink>
              <NavLink 
                to="/pricing" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </NavLink>
              <NavLink 
                to="/clubs" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Clubs
              </NavLink>
              <NavLink 
                to="/games" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Games
              </NavLink>
              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({isActive}) => 
                  `py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-billman-dark text-billman-green' : 'text-white hover:bg-billman-dark'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              <LanguageSwitcher isMobile={true} />
            </div>
            <div className="mt-6 flex flex-col space-y-3">
              <Button variant="outline" className="w-full border-billman-green text-billman-green hover:bg-billman-green/10">
                Log In
              </Button>
              <Button className="w-full bg-billman-green hover:bg-billman-lightGreen text-white">
                Register
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-billman-dark pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">
                BILLMAN
              </span>
            </Link>
            <p className="text-billman-lightGray mb-6 max-w-md">
              Bringing innovation to billiards with AI-powered analytics, remote tournaments, 
              and interactive coaching to unite the billiards community worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-billman-lightGray hover:text-billman-green transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-billman-lightGray hover:text-billman-green transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-billman-lightGray hover:text-billman-green transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-billman-lightGray hover:text-billman-green transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-billman-lightGray hover:text-billman-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-billman-lightGray hover:text-billman-green transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-billman-lightGray hover:text-billman-green transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/clubs" className="text-billman-lightGray hover:text-billman-green transition-colors">
                  For Clubs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-billman-lightGray hover:text-billman-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-billman-lightGray hover:text-billman-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-billman-lightGray hover:text-billman-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-billman-lightGray hover:text-billman-green transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-billman-lightGray hover:text-billman-green transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-billman-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-billman-lightGray">info@billman.ai</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-billman-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-billman-lightGray">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-billman-gray/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-billman-lightGray text-sm">
              © {currentYear} BILLMAN. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap space-x-4 text-sm text-billman-lightGray">
                <li>
                  <Link to="/privacy" className="hover:text-billman-green transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-billman-green transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:text-billman-green transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

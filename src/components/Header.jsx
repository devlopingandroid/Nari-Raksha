import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Upload, HelpCircle } from 'lucide-react';

// Import logo
import logo from '../assets/images/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Detect Deepfake', href: '/detect' },
    { name: 'Report', href: '/report' },
    { name: 'Helpdesk', href: '/helpdesk' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Roadmap', href: '/roadmap' },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={logo}
                alt="Nari Raksha Logo" 
                className="w-8 h-8 group-hover:scale-110 transition-transform object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-white group-hover:text-primary-400 transition-colors">
                Nari Raksha
              </span>
              <span className="text-xs text-gray-400 -mt-1">Women's Digital Shield</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all hover:scale-105 ${
                  isActivePath(item.href)
                    ? 'text-primary-400 border-b-2 border-primary-500 pb-1'
                    : 'text-gray-300 hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/detect"
              className="flex items-center space-x-2 px-4 py-2 bg-dark-800 text-primary-400 rounded-lg hover:bg-dark-700 transition-all hover:scale-105"
            >
              <Upload className="w-4 h-4" />
              <span className="font-medium">Upload & Check</span>
            </Link>
            <Link
              to="/helpdesk"
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-dark-900 rounded-lg hover:bg-primary-500 transition-all hover:scale-105 shadow-md"
            >
              <HelpCircle className="w-4 h-4" />
              <span className="font-medium">Get Help</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-dark-800 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-dark-700 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    isActivePath(item.href)
                      ? 'text-primary-400 bg-dark-800'
                      : 'text-gray-300 hover:text-primary-400 hover:bg-dark-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-dark-700">
                <Link
                  to="/detect"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-dark-800 text-primary-400 rounded-lg hover:bg-dark-700 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  <span className="font-medium">Upload & Check</span>
                </Link>
                <Link
                  to="/helpdesk"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 text-dark-900 rounded-lg hover:bg-primary-500 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span className="font-medium">Get Help</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
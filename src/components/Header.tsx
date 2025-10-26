import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center group">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2 mr-3 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SRTMart
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Premium Shopping</p>
            </div>
          </Link>

          {/* Enhanced Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              Categories
            </Link>
          </nav>

          {/* Enhanced Cart */}
          <Link
            to="/cart"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors relative group"
          >
            <div className="relative p-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
              <svg
                className="w-6 h-6 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            onClick={() => {
              // TODO: Add mobile menu toggle
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Header;

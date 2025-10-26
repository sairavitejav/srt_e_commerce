import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-xl mx-auto">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="inline-block relative">
            <div className="text-8xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              404
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-lg text-gray-500">
            Let's get you back on track and find what you need.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10.5V5a2 2 0 012-2h12a2 2 0 012 2v5.5" />
              </svg>
              Back to Home
            </span>
          </Link>
          <Link
            to="/products"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shop Products
            </span>
          </Link>
        </div>

        {/* Helpful Tips */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-6">Here's what you can do:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/categories"
              className="p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-3xl mb-2">🏷️</div>
              <p className="font-semibold text-gray-900 text-sm mb-1">Browse Categories</p>
              <p className="text-gray-500 text-xs">Explore our product collections</p>
            </Link>
            <Link
              to="/products"
              className="p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-3xl mb-2">🛍️</div>
              <p className="font-semibold text-gray-900 text-sm mb-1">View Products</p>
              <p className="text-gray-500 text-xs">Browse all available items</p>
            </Link>
            <Link
              to="/cart"
              className="p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-3xl mb-2">🛒</div>
              <p className="font-semibold text-gray-900 text-sm mb-1">Your Cart</p>
              <p className="text-gray-500 text-xs">Check your shopping cart</p>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default NotFound;

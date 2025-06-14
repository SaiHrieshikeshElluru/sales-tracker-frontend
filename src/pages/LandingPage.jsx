import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import photo from "/photo.png";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleGetStarted = () => {
    setIsLoading(true);
    // Simulate a brief delay before navigation
    setTimeout(() => {
      navigate('/dashboard');
    }, 800); // Adjust timing as needed
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-white text-gray-900'}`}>
      <style>
        {`
          @keyframes slideInFromLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in {
            animation: slideInFromLeft 0.8s ease-out forwards;
          }
        `}
      </style>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="w-16 h-16 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin"></div>
            </div>
            <p className="text-white text-lg font-medium">Loading Dashboard...</p>
          </div>
        </div>
      )}

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-4 right-4 p-2 rounded-full
          ${darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
      >
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        )}
      </button>

      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left side content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className={`inline-flex items-center gap-2 ${
              darkMode ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-700'
            } px-4 py-2 rounded-full mb-6`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
              <span className="font-medium">Smart Sales Management</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">
              Track Your Sales
              <span className={`block ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                With Precision
              </span>
            </h1>
            
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-xl`}>
              Transform your sales process with our powerful tracking solution. 
              Monitor deals, analyze performance, and drive revenue growth with 
              real-time insights and comprehensive analytics.
            </p>
            
            <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Pipeline management
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Performance analytics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Revenue forecasting
              </li>
            </ul>
            
            <button 
              onClick={handleGetStarted}
              disabled={isLoading}
              className={`
                ${darkMode 
                  ? 'bg-blue-500 hover:bg-blue-600' 
                  : 'bg-blue-600 hover:bg-blue-700'
                } text-white px-8 py-4 rounded-lg text-lg font-semibold 
                transition-colors duration-200 flex items-center gap-2
                ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {isLoading ? 'Loading...' : 'Get Started'}
              {!isLoading && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Right side image with CSS animation */}
          <div className="flex-1 flex justify-center animate-slide-in">
            <div className="relative w-full max-w-md">
              <div className={`absolute inset-0 ${
                darkMode ? 'bg-blue-800/20' : 'bg-blue-100/40'
              } rounded-3xl transform rotate-3 transition-colors duration-200 backdrop-blur-sm`}></div>
              <div className={`relative ${
                darkMode ? 'bg-gray-800/50' : 'bg-white/50'
              } p-6 rounded-3xl shadow-xl transition-colors duration-200 backdrop-blur-sm`}>
                <img 
                  src={photo}
                  alt="Sales Analytics Dashboard"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
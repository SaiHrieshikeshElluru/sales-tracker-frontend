import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const LoadingOverlay = () => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-16 h-16">
        <div className="w-16 h-16 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin"></div>
      </div>
      <p className="text-white text-lg font-medium animate-pulse">Loading...</p>
    </div>
  </div>
);

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <nav className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 shadow-md'} p-4 transition-colors duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Expense Dashboard</h1>
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li>
                <button
                  onClick={() => handleNavigation('/')}
                  className={`${
                    darkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                  } transition-colors duration-200 px-3 py-2 rounded-md`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/dashboard')}
                  className={`${
                    darkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                  } transition-colors duration-200 px-3 py-2 rounded-md`}
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/reports')}
                  className={`${
                    darkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                  } transition-colors duration-200 px-3 py-2 rounded-md`}
                >
                  Reports
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/summary')}
                  className={`${
                    darkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                  } transition-colors duration-200 px-3 py-2 rounded-md`}
                >
                  Summary
                </button>
              </li>
            </ul>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              } transition-colors duration-200`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
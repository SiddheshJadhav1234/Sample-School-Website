import React from 'react';
import { FaBell, FaBars } from 'react-icons/fa';

const Header = ({ title, subtitle, badgeText, onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 p-3 sm:p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            <FaBars className="w-5 h-5" />
          </button>
          
          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-800 truncate">{title}</h1>
            <p className="text-sm sm:text-base text-gray-600 truncate">{subtitle}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300">
            <FaBell className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">{badgeText}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
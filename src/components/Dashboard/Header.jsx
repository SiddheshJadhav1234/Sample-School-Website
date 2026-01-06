import React from 'react';
import { FaBell } from 'react-icons/fa';

const Header = ({ title, subtitle, badgeText }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300">
            <FaBell className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">{badgeText}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
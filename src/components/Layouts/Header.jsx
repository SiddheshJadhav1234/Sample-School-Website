import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../Auth/AuthModal";

const Header = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-linear-to-r from-black via-gray-900 to-black text-white px-4 py-4 sticky top-0 z-50 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-10 w-10 md:h-12 md:w-12 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-sm md:text-lg">MM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                M.M. Vidya Mandir
              </h1>
              <p className="text-xs text-gray-300">Primary School</p>
            </div>
          </div>

          {/* DESKTOP NAVBAR */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-medium">
            <Link to="/" className="hover:text-amber-400 transition-colors duration-300 px-2 py-1">
              Home
            </Link>
            <Link to="/about" className="hover:text-amber-400 transition-colors duration-300 px-2 py-1">
              About
            </Link>
            <Link to="/academics" className="hover:text-amber-400 transition-colors duration-300 px-2 py-1">
              Academics
            </Link>
            <Link to="/admissions" className="hover:text-amber-400 transition-colors duration-300 px-2 py-1">
              Admissions
            </Link>
            <Link to="/gallery" className="hover:text-amber-400 transition-colors duration-300 px-2 py-1">
              Gallery
            </Link>
            <Link to="/contact" className="hover:text-amber-400 transition-colors duration-300 px-2 py-1">
              Contact
            </Link>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveModal("login")}
                className="border border-amber-400 text-amber-400 px-4 py-2 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300 text-sm"
              >
                Login
              </button>
              <button
                onClick={() => setActiveModal("signup")}
                className="bg-linear-to-r from-amber-400 to-amber-600 text-black px-4 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
              >
                Sign Up
              </button>
            </div>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1 p-2"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col gap-4 pt-4 pb-2">
            <Link 
              to="/" 
              className="hover:text-amber-400 transition-colors duration-300 px-2 py-2 border-b border-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-amber-400 transition-colors duration-300 px-2 py-2 border-b border-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/academics" 
              className="hover:text-amber-400 transition-colors duration-300 px-2 py-2 border-b border-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Academics
            </Link>
            <Link 
              to="/admissions" 
              className="hover:text-amber-400 transition-colors duration-300 px-2 py-2 border-b border-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link 
              to="/gallery" 
              className="hover:text-amber-400 transition-colors duration-300 px-2 py-2 border-b border-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-amber-400 transition-colors duration-300 px-2 py-2 border-b border-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="flex flex-col gap-3 px-2 pt-2">
              <button
                onClick={() => {
                  setActiveModal("login");
                  setIsMobileMenuOpen(false);
                }}
                className="border border-amber-400 text-amber-400 px-4 py-2 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300 text-sm w-full"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setActiveModal("signup");
                  setIsMobileMenuOpen(false);
                }}
                className="bg-linear-to-r from-amber-400 to-amber-600 text-black px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm w-full"
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </header>

      {activeModal && <AuthModal activeModal={activeModal} onClose={() => setActiveModal(null)} />}
    </>
  );
};
export default Header;
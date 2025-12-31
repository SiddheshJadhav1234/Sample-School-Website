import React, { useState } from "react";

const AuthModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Container */}
      <div className="relative w-3xl min-h-100 bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* LOGIN FORM */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex items-center justify-center transition-all duration-500
          ${isSignup ? "translate-x-full opacity-0 z-10" : "translate-x-0 opacity-100 z-20"}`}
        >
          <form className="w-full px-10 text-center">
            <h1 className="text-2xl font-bold mb-4">
              Login To Your Account
            </h1>
            <input className="w-full mb-2 px-4 py-2 border rounded-full" placeholder="Email" />
            <input className="w-full mb-4 px-4 py-2 border rounded-full" placeholder="Password" />
            <button className="border border-black text-black px-8 py-2 rounded-full cursor-pointer">
              Login
            </button>
          </form>
        </div>

        {/* SIGNUP FORM */}
        <div
          className={`absolute h-full w-1/2 flex items-center justify-center transition-all duration-500
          ${isSignup ? "translate-x-full opacity-100 z-20" : "translate-x-0 opacity-0 z-10"}`}
        >
            
          <form className="w-full px-10 text-center ">
            <h1 className="text-2xl font-bold mb-4">
              Create Your New Account 
            </h1>
            <input
                className="w-full mb-2 px-4 py-2 rounded-full border"
                placeholder="Email"
              />
              <input
                className="w-full mb-2 px-4 py-2 rounded-full border"
                placeholder="Mobile No"
              />
              <input
                className="w-full mb-2 px-4 py-2 rounded-full border"
                placeholder="Password"
              />
              <input
                className="w-full mb-4 px-4 py-2 rounded-full border"
                placeholder="Confirm Password"
              />
            <button className="border border-black text-black px-8 py-2 rounded-full cursor-pointer">
              Sign Up
            </button>
          </form>
        </div>

        {/* OVERLAY CONTAINER */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-500 z-30
          ${isSignup ? "-translate-x-full" : ""}`}
        >
          <div
            className={`relative -left-full w-[200%] h-full bg-linear-to-r from-amber-500 via-red-400 to-amber-500
            transition-transform duration-500
            ${isSignup ? "translate-x-1/2" : ""}`}
          >
            {/* LEFT PANEL */}
            <div className="absolute w-1/2 h-full flex flex-col items-center justify-center text-white text-center px-8">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="mt-2 text-sm">Please login</p>
              <button
                onClick={() => setIsSignup(false)}
                className="mt-4 border border-white px-6 py-2 rounded-full cursor-pointer"
              >
                Login
              </button>
            </div>

            {/* RIGHT PANEL */}
            <div className="absolute right-0 w-1/2 h-full flex flex-col items-center justify-center text-white text-center px-8">
              <h1 className="text-2xl font-bold">Hello Friend</h1>
              <p className="mt-2 text-sm">Start your journey</p>
              <button
                onClick={() => setIsSignup(true)}
                className="mt-4 border border-white px-6 py-2 rounded-full cursor-pointer"
              >
                Signup
              </button>
            </div>
          </div>
        </div>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 cursor-pointer text-xl text-gray-600 z-50"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AuthModal; 
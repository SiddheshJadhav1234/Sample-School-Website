import React from "react";

const SignUpModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      ></div>

      <div className="relative bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl z-10">

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        <h1 className="text-3xl font-serif font-bold text-center text-amber-700">
          Create Your Account
        </h1>

        <form className="mt-6 space-y-4">

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            type="text"
            placeholder="Mobile No"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <button
            type="button"
            className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignUpModal;

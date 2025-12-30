import React, { useState } from "react";

const AuthModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/*Main Container*/}
      <div className="relative w-full max-w-4xl h-130 bg-white rounded-xl shadow-2xl overflow-hidden">

        {/*Login Form*/}
        <div
          className={`
            ${isSignup ? "hidden" : "flex"}
            md:flex md:absolute
            top-0 left-0 h-full
            w-full md:w-1/2
            items-center justify-center
            transition-all duration-500
            md:${isSignup ? "translate-x-full opacity-0 z-10" : "translate-x-0 opacity-100 z-20"}
          `}
        >
          <form className="w-full px-10 text-center flex flex-col items-center gap-3">
            <h1 className="text-2xl font-bold mb-2">
              Login To Your Account
            </h1>

            <input
              className="w-full px-4 py-2 border rounded-full"
              placeholder="Email"
            />
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-full"
              placeholder="Password"
            />

            <button className="mt-4 border border-black px-8 py-2 rounded-full">
              Login
            </button>

            <p className="md:hidden mt-4 text-sm">
              New here?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(true)}
                className="underline"
              >
                Signup
              </button>
            </p>
          </form>
        </div>

        {/*Sign Up Form*/}
        <div
          className={`
            ${isSignup ? "flex" : "hidden"}
            md:flex md:absolute
            top-0 left-0 h-full
            w-full md:w-1/2
            items-center justify-center
            transition-all duration-500
            md:${isSignup ? "translate-x-full opacity-100 z-20" : "opacity-0 z-10"}
          `}
        >
          <form className="w-full px-10 text-center flex flex-col items-center gap-3">
            <h1 className="text-2xl font-bold mb-2">
              Create Your Account
            </h1>

            <input
              className="w-full px-4 py-2 border rounded-full"
              placeholder="Email"
            />
            <input
              className="w-full px-4 py-2 border rounded-full"
              placeholder="Mobile No"
            />
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-full"
              placeholder="Password"
            />
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-full"
              placeholder="Confirm Password"
            />

            <button className="mt-4 border border-black px-8 py-2 rounded-full">
              Sign Up
            </button>

            {/* Mobile Switch*/}
            <p className="md:hidden mt-4 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(false)}
                className="underline"
              >
                Login
              </button>
            </p>
          </form>
        </div>

        {/* OVERLAY (DESKTOP ONLY)  */}
        <div
          className={`
            hidden md:block
            absolute top-0 left-1/2 w-1/2 h-full
            overflow-hidden transition-transform duration-500 z-30
            ${isSignup ? "-translate-x-full" : ""}
          `}
        >
          <div
            className={`
              relative -left-full w-[200%] h-full
              bg-linear-to-r from-pink-500 via-orange-400 to-pink-500
              transition-transform duration-500
              ${isSignup ? "translate-x-1/2" : ""}
            `}
          >
            {/* Left Overlay*/}
            <div className="absolute w-1/2 h-full flex flex-col items-center justify-center text-white text-center px-8">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="mt-2 text-sm">
                To keep connected with us please login
              </p>
              <button
                onClick={() => setIsSignup(false)}
                className="mt-4 border border-white px-6 py-2 rounded-full"
              >
                Login
              </button>
            </div>

            {/* Right Overlay*/}
            <div className="absolute right-0 w-1/2 h-full flex flex-col items-center justify-center text-white text-center px-8">
              <h1 className="text-2xl font-bold">Hello Friend</h1>
              <p className="mt-2 text-sm">
                Enter your details and start journey with us
              </p>
              <button
                onClick={() => setIsSignup(true)}
                className="mt-4 border border-white px-6 py-2 rounded-full"
              >
                Signup
              </button>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-xl text-gray-600 z-50"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AuthModal;

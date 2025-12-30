import React, { useState } from "react";

const roleImages = {
  student: "https://i.pinimg.com/736x/aa/cf/88/aacf88105a41fb582e0ea7a9bd5ddc16.jpg",
  teacher: "https://i.pinimg.com/1200x/0f/22/c8/0f22c830494a2d3f845dee130895295d.jpg",
  admin: "https://i.pinimg.com/736x/c0/45/f6/c045f66252411eda5b7d130e2108c6a6.jpg",
};

const LoginModal = ({ onClose }) => {
  const [role, setRole] = useState("student");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-4xl h-130 rounded-3xl shadow-2xl z-10 overflow-hidden flex">

        <div className="w-full md:w-1/2 p-8 h-full flex flex-col justify-center">
          <button onClick={onClose} className="text-white text-bold absolute top-4 right-5 text-xl">✕</button>

          <h1 className="text-3xl font-bold text-amber-700 mb-6">Login</h1>

          <div className="flex gap-3 mb-6">
            {["admin", "student", "teacher"].map((item) => (
              <button
                key={item}
                onClick={() => setRole(item)}
                className={`px-4 py-1.5 rounded-full font-semibold transition
                  ${role === item ? "bg-amber-400" : "border"}`}
              >
                {item}
              </button>
            ))}
          </div>

         <form className="space-y-4">

            <div>
              <label className="block text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <button
              type="button"
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Login
            </button>

            <p className="text-sm text-gray-600 mt-2 cursor-pointer hover:underline text-center">
              Forgot password?
            </p>

          </form>

        </div>

        <div className="hidden md:block md:w-1/2">
          <img
            src={roleImages[role]}
            alt={role}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

      </div>
    </div>
  );
};

export default LoginModal;


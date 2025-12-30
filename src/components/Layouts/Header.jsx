import React, { useState } from "react";
import { FaSchool } from "react-icons/fa";
import LoginModal from "../Auth/LoginModal";
import SignUpModal from "../Auth/SignUpModal";

const Header = () => {
  const [activeModal, setActiveModal] = useState(null); 
  // null | "login" | "signup"

  return (
    <>
      <header className="bg-black text-white px-4 py-3 md:px-10 relative z-40">
        <div className="flex items-center justify-between flex-wrap gap-4">

          <div className="flex items-center gap-3">
            <FaSchool size={32} />
            <h1 className="text-2xl font-bold">Logo</h1>
          </div>

          <h2 className="hidden md:block text-xl font-semibold">
            M.M. Vidya Mandir Primary School
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveModal("login")}
              className="bg-white text-black px-5 py-1.5 rounded-full font-semibold"
            >
              Login
            </button>

            <button
              onClick={() => setActiveModal("signup")}
              className="bg-white text-black px-5 py-1.5 rounded-full font-semibold"
            >
              Sign Up
            </button>
          </div>

        </div>
      </header>

      {activeModal === "login" && (
        <LoginModal onClose={() => setActiveModal(null)} />
      )}

      {activeModal === "signup" && (
        <SignUpModal onClose={() => setActiveModal(null)} />
      )}
    </>
  );
};

export default Header;

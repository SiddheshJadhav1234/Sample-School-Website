import React, { useState } from "react";
import { FaSchool } from "react-icons/fa";
import AuthModal from "../Auth/AuthModal";

const Header = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <header className="bg-black text-white px-6 py-4 flex justify-between items-center relative z-40">
        <div className="flex items-center gap-3">
          <FaSchool size={30} />
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>

        <div className="flex gap-3">
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
      </header>

      {activeModal && (
        <AuthModal
          type={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  );
};

export default Header;

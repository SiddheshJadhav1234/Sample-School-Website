import React, { useState } from "react";
import AuthModal from "../Auth/AuthModal";


const GetStartedToday = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg border-2">
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-700">
            Get Started Today
          </h1>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Give your child the best start to a bright future. Join M.M. Vidya
            Mandir and become a part of a joyful learning journey.
          </p>

          <div className="mt-8">
            <button
              onClick={() => setActiveModal("signup")}
              className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"
            >
              Sign Up Now
            </button>
          </div>

        </div>
      </section>

      {activeModal && (
  <AuthModal
    type="signup"
    onClose={() => setActiveModal(null)}
  />
)}

    </>
  );
};

export default GetStartedToday;

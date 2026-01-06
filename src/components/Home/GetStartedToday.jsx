import React, { useEffect, useRef, useState } from "react";
import AuthModal from "../Auth/AuthModal";

const GetStartedToday = () => {
  const [activeModal, setActiveModal] = useState(null);
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-12 sm:py-16 px-4 sm:px-6 md:px-16"
      >
        <div
          className={`max-w-3xl mx-auto text-center bg-amber-50
          p-6 sm:p-8 md:p-10 rounded-2xl border-2
          transition-all duration-700
          hover:shadow-xl hover:-translate-y-2
          ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"}`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-700 leading-tight">
            Get Started Today
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 leading-relaxed px-2">
            Give your child the best start to a bright future. Join M.M. Vidya
            Mandir and become a part of a joyful learning journey.
          </p>

          <div className="mt-6 sm:mt-8">
            <button
              onClick={() => setActiveModal("signup")}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-black font-semibold
              px-6 sm:px-8 py-3 rounded-full transition-all duration-300
              hover:scale-105 shadow-md hover:shadow-xl cursor-pointer text-sm sm:text-base"
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

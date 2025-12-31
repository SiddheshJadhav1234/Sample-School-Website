import React, { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
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
    <section
      ref={sectionRef}
      className="bg-linear-to-b from-amber-50 to-white py-20 px-6 md:px-16"
    >
      {/* HEADING */}
      <div
        className={`text-center mb-16 transition-all duration-700
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
          Why Choose Us ?
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide a safe, joyful and strong foundation for your child
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* CARD 1 */}
        <div
          className={`group bg-white/80 backdrop-blur-lg p-7 rounded-3xl
          border border-amber-200 shadow-md
          hover:shadow-2xl hover:-translate-y-3
          transition-all duration-300
          ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}`}
        >
          <div className="w-12 h-1 bg-amber-400 rounded-full mb-4"></div>
          <h2 className="text-xl font-bold text-green-700 mb-3">
            Experienced Teachers
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our trained and caring teachers focus on every child’s growth and learning.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className={`group bg-white/80 backdrop-blur-lg p-7 rounded-3xl
          border border-amber-200 shadow-md
          hover:shadow-2xl hover:-translate-y-3
          transition-all duration-300 delay-100
          ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}`}
        >
          <div className="w-12 h-1 bg-amber-400 rounded-full mb-4"></div>
          <h2 className="text-xl font-bold text-green-700 mb-3">
            Safe & Friendly Environment
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A secure and joyful campus where children feel happy and confident.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className={`group bg-white/80 backdrop-blur-lg p-7 rounded-3xl
          border border-amber-200 shadow-md
          hover:shadow-2xl hover:-translate-y-3
          transition-all duration-300 delay-200
          ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}`}
        >
          <div className="w-12 h-1 bg-amber-400 rounded-full mb-4"></div>
          <h2 className="text-xl font-bold text-green-700 mb-3">
            Strong Academic Foundation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We focus on basics like reading, writing, thinking and creativity.
          </p>
        </div>

        {/* CARD 4 */}
        <div
          className={`group bg-white/80 backdrop-blur-lg p-7 rounded-3xl
          border border-amber-200 shadow-md
          hover:shadow-2xl hover:-translate-y-3
          transition-all duration-300 delay-300
          ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}`}
        >
          <div className="w-12 h-1 bg-amber-400 rounded-full mb-4"></div>
          <h2 className="text-xl font-bold text-green-700 mb-3">
            All-Round Development
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Activities, games and values help children grow mentally and socially.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

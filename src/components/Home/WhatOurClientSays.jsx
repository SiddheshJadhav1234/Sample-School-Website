import React, { useEffect, useRef, useState } from "react";

const WhatOurClientSays = () => {
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
      className="bg-white py-16 px-6 md:px-16"
    >
      {/* HEADING */}
      <div
        className={`text-center mb-10 transition-all duration-700
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black">
          What Our Principal Says
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          A message from the head of our institution
        </p>
      </div>

      {/* CONTENT CARD */}
      <div
        className={`flex flex-col md:flex-row items-center gap-10
        bg-amber-50 rounded-2xl border-2 p-8
        transition-all duration-700
        hover:shadow-xl hover:-translate-y-2
        ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"}`}
      >
        {/* IMAGE */}
        <div className="md:w-1/3">
          <img
            src="https://news.globalindianschool.org/content/thumbnail/Ms-Vandana-Midha_FI1x.jpg"
            alt="Principal"
            className="w-full h-80 object-cover rounded-2xl shadow-md
            hover:shadow-gray-300 hover:-translate-y-2 transition-all duration-300"
          />
        </div>

        {/* TEXT */}
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg text-gray-700 leading-relaxed">
            At M.M. Vidya Mandir, we believe that every child is unique and full
            of potential. Our mission is to provide a safe, joyful and inspiring
            environment where young minds can grow with confidence, values and
            knowledge.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-amber-500">
              Mrs. Sunita Sharma
            </h2>
            <p className="text-gray-600">
              Principal, M.M. Vidya Mandir Primary School
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientSays;

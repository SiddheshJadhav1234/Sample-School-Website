import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black-800">
          Why Choose Us ?
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          We provide a safe, joyful and strong foundation for your child
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <div className="bg-white p-6 rounded-2xl shadow-md border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-xl font-bold text-green-700 mb-2">
            Experienced Teachers
          </h2>
          <p className="text-gray-600">
            Our trained and caring teachers focus on every child’s growth and
            learning.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-xl font-bold text-green-700 mb-2">
            Safe & Friendly Environment
          </h2>
          <p className="text-gray-600">
            A secure and joyful campus where children feel happy and confident.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-xl font-bold text-green-700 mb-2">
            Strong Academic Foundation
          </h2>
          <p className="text-gray-600">
            We focus on basics like reading, writing, thinking and creativity.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-xl font-bold text-green-700 mb-2">
            All-Round Development
          </h2>
          <p className="text-gray-600">
            Activities, games and values help children grow mentally and
            socially.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

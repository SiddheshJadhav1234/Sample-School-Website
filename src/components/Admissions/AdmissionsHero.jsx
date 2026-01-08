import React from 'react';

const AdmissionsHero = () => {
  return (
    <section className="py-20 bg-linear-to-br from-amber-400 via-amber-500 to-amber-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Admissions Open
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Join our school family and give your child the best foundation for their educational journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer">
            Apply Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transform hover:scale-105 transition-all duration-300 cursor-pointer">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsHero;

import React from "react";

const Graph = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
          Our Growth & Learning Progress
        </h1>
        <p className="mt-4 text-gray-600 underlinetext-lg">
          A glimpse of how we nurture learning and development
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            alt="School Classroom"
            className="w-full h-85.7 object-cover rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        <div className="md:w-1/2 overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Student Progress Graph"
            className="w-full h-85.7 object-cover rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Graph;

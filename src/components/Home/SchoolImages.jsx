import React from "react";

const SchoolImages = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-10">
      <h1 className="text-5xl font-serif mb-8 text-center">Our School</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
          <img
            src="https://i.pinimg.com/736x/fb/09/e0/fb09e029699463f292d36e0d3323081d.jpg"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-white text-xl font-semibold">
              School Building
            </h2>
          </div>
        </div>

        <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
          <img
            src="https://i.pinimg.com/736x/e2/c8/a5/e2c8a598b9f77b6bf57bf059aaf56a2e.jpg"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-white text-xl font-semibold">
              School Playground
            </h2>
          </div>
        </div>

        <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
          <img
            src="https://i.pinimg.com/736x/06/70/c0/0670c038502df7edf5987211a050502f.jpg"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-white text-xl font-semibold">School Library</h2>
          </div>
        </div>

        <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
          <img
            src="https://i.pinimg.com/1200x/08/5f/90/085f90c6334de8c725603175d1283f6a.jpg"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-white text-xl font-semibold">Computer Lab</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolImages;

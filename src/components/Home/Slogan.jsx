import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://pratibhaintschool.org/wp-content/uploads/2025/02/PIS-Mobile-View-Video.mp4"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/45"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold">Welcome!</h1>

        <h2 className="text-1xl md:text-3xl font-serif mt-2">
          to our school site
        </h2>

        <h3 className="text-amber-400 text-4xl font-bold mt-4">
          M.M. Vidya Mandir
        </h3>

        <p className="text-2xl mt-1">Primary School</p>

        <div className="mt-10 space-y-4 max-w-xl w-full">
          <div className="bg-white/90 text-black px-6 py-3 rounded-xl hover:bg-amber-300 cursor-pointer">
            Tiny Steps, Big Dreams
          </div>

          <div className="bg-white/90 text-black px-6 py-3 rounded-xl hover:bg-amber-300 cursor-pointer ">
            Learning is a Joyful Adventure!
          </div>

          <div className="bg-white/90 text-black px-6 py-3 rounded-xl hover:bg-amber-300 cursor-pointer">
            Where Little Minds Become Big Thinkers
          </div>

          <div className="bg-white/90 text-black px-6 py-3 rounded-xl hover:bg-amber-300 cursor-pointer ">
            Learn, Explore, Excel
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
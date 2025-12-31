import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://pratibhaintschool.org/wp-content/uploads/2025/02/PIS-Mobile-View-Video.mp4"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        {/* MAIN HEADING */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wide
                       animate-[fadeInDown_1s_ease-out]">
          Welcome!
        </h1>

        <h2 className="text-lg md:text-3xl font-serif mt-2 text-gray-200
                       animate-[fadeIn_1.2s_ease-out]">
          to our school website
        </h2>

        <h3 className="text-amber-400 text-4xl md:text-5xl font-extrabold mt-5
                       animate-[zoomIn_1.4s_ease-out]">
          M.M. Vidya Mandir
        </h3>

        <p className="text-xl md:text-2xl mt-2 text-gray-100
                      animate-[fadeInUp_1.6s_ease-out]">
          Primary School
        </p>

        {/* MOTTO CARDS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl w-full">

          {[
            "Tiny Steps, Big Dreams",
            "Learning is a Joyful Adventure!",
            "Where Little Minds Become Big Thinkers",
            "Learn, Explore, Excel",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-white text-black
                         px-6 py-4 rounded-2xl font-semibold
                         shadow-lg cursor-pointer
                         transition-all duration-300
                         hover:bg-amber-100 hover:scale-105 hover:shadow-2xl
                         animate-[fadeInUp_0.8s_ease-out]"
            >
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;

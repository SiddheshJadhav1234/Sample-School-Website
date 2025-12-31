import React, { useEffect, useRef, useState } from "react";

const Graph = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false); // re-trigger when revisiting
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 px-6 md:px-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
          Our Growth & Learning Progress
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          A glimpse of how we nurture learning and development
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* IMAGE 1 */}
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          className={`w-full md:w-1/3 h-80 object-cover rounded-2xl shadow-lg
          transition-all duration-700
          ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}`}
        />

        {/* IMAGE 2 */}
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          className={`w-full md:w-1/3 h-80 object-cover rounded-2xl shadow-lg
          transition-all duration-700 delay-150
          ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}`}
        />

        {/* IMAGE 3 */}
        <img
          src="https://i.pinimg.com/1200x/ad/01/11/ad0111e3bd5a15839109bee7436e548f.jpg"
          className={`w-full md:w-1/3 h-80 object-cover rounded-2xl shadow-lg
          transition-all duration-700 delay-300
          ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}`}
        />
      </div>
    </section>
  );
};

export default Graph;

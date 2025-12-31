import { useEffect, useState } from "react";

const SchoolImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const schoolCards = [
    {
      title: "School Building",
      desc: "A safe, modern and well-structured campus for quality education.",
      img: "https://i.pinimg.com/736x/fb/09/e0/fb09e029699463f292d36e0d3323081d.jpg",
    },
    {
      title: "Playground",
      desc: "Large open playground for physical activities and sports.",
      img: "https://i.pinimg.com/736x/e2/c8/a5/e2c8a598b9f77b6bf57bf059aaf56a2e.jpg",
    },
    {
      title: "Library",
      desc: "A peaceful library with books to enhance reading habits.",
      img: "https://i.pinimg.com/736x/06/70/c0/0670c038502df7edf5987211a050502f.jpg",
    },
    {
      title: "Computer Lab",
      desc: "Well-equipped computer lab for digital learning.",
      img: "https://i.pinimg.com/1200x/08/5f/90/085f90c6334de8c725603175d1283f6a.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % schoolCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-6 overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 text-center mb-12">
        Our School
      </h1>

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {schoolCards.map((card, index) => (
            <div
              key={index}
              className="w-full shrink-0 flex flex-col md:flex-row
                         items-center px-6 md:px-16 gap-10"
            >
              {/* TEXT LEFT */}
              <div className="w-full p-10 md:w-1/2 space-y-4 bg-amber-100 rounded-2xl">
                <span className="inline-block text-sm font-semibold text-amber-600 bg-amber-100 px-4 py-1 rounded-full">
                  Campus Facility
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  {card.title}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {card.desc}
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Our school provides a balanced learning environment where
                  academics, discipline, and creativity grow together.
                </p>

                <ul className="space-y-2 text-gray-700 text-base">
                  <li>✔ Safe & child-friendly infrastructure</li>
                  <li>✔ Smart classrooms and learning tools</li>
                  <li>✔ Focus on overall development</li>
                </ul>

                <button className="mt-6 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                  Know More
                </button>
              </div>
              {/* IMAGE RIGHT */}
              <div className="w-full p-10 md:w-1/2">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-150 h-100 object-cover rounded-2xl shadow-md border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ml-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

  
    </section>
  );
};

export default SchoolImages;

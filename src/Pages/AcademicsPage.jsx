import React from 'react';
import { FaBook, FaFlask, FaCalculator, FaGlobe, FaPalette, FaMusic, FaRunning, FaLanguage } from 'react-icons/fa';

const AcademicsPage = () => {
  const subjects = [
    {
      icon: FaLanguage,
      name: "English Language",
      description: "Comprehensive language skills development including reading, writing, speaking, and listening.",
      features: ["Grammar & Vocabulary", "Creative Writing", "Public Speaking", "Literature Appreciation"]
    },
    {
      icon: FaCalculator,
      name: "Mathematics",
      description: "Building strong mathematical foundations through interactive and practical learning methods.",
      features: ["Number Concepts", "Problem Solving", "Mental Math", "Practical Applications"]
    },
    {
      icon: FaFlask,
      name: "Science",
      description: "Hands-on exploration of scientific concepts through experiments and observations.",
      features: ["Nature Studies", "Simple Experiments", "Scientific Method", "Environmental Awareness"]
    },
    {
      icon: FaGlobe,
      name: "Social Studies",
      description: "Understanding our world, culture, and society through engaging activities.",
      features: ["Geography", "History", "Civics", "Cultural Studies"]
    },
    {
      icon: FaPalette,
      name: "Arts & Crafts",
      description: "Nurturing creativity and artistic expression through various mediums.",
      features: ["Drawing & Painting", "Craft Projects", "Creative Expression", "Art Appreciation"]
    },
    {
      icon: FaMusic,
      name: "Music & Dance",
      description: "Developing musical talents and cultural appreciation through performance arts.",
      features: ["Vocal Training", "Instrument Learning", "Dance Forms", "Cultural Programs"]
    },
    {
      icon: FaRunning,
      name: "Physical Education",
      description: "Promoting physical fitness, teamwork, and sportsmanship through various activities.",
      features: ["Sports Training", "Fitness Activities", "Team Games", "Health Education"]
    },
    {
      icon: FaBook,
      name: "Hindi Language",
      description: "Developing proficiency in Hindi language and literature for cultural connection.",
      features: ["Reading & Writing", "Grammar", "Poetry", "Cultural Context"]
    }
  ];

  const methodology = [
    {
      title: "Play-Based Learning",
      description: "Learning through games, activities, and interactive experiences that make education enjoyable.",
      icon: "🎮"
    },
    {
      title: "Hands-On Activities",
      description: "Practical learning experiences that help students understand concepts through direct engagement.",
      icon: "✋"
    },
    {
      title: "Individual Attention",
      description: "Personalized support for each student to help them reach their full potential.",
      icon: "👥"
    },
    {
      title: "Technology Integration",
      description: "Using modern technology tools to enhance learning and prepare students for the digital age.",
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-amber-400 via-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Academic Program
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Comprehensive curriculum designed to nurture young minds and build strong foundations for lifelong learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Download Curriculum
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Schedule Visit
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="inline-block bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Curriculum
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-balanced curriculum that focuses on academic excellence while nurturing creativity, critical thinking, and character development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <subject.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{subject.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{subject.description}</p>
                </div>
                
                <div className="space-y-2">
                  {subject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Teaching <span className="inline-block bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Methodology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative teaching approaches that make learning engaging, effective, and enjoyable for every student.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((method, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-6">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Learning <span className="inline-block bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Approach
                </span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Foundation Building</h3>
                    <p className="text-gray-600">Strong emphasis on fundamental concepts in all subjects to create a solid base for future learning.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Skill Development</h3>
                    <p className="text-gray-600">Focus on developing critical thinking, problem-solving, and communication skills alongside academic knowledge.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Character Formation</h3>
                    <p className="text-gray-600">Integration of values and ethics in daily learning to develop well-rounded individuals.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Assessment</h3>
                    <p className="text-gray-600">Regular evaluation and feedback to track progress and provide personalized support.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-amber-100 to-amber-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Learning</h3>
                <p className="text-gray-600">Engaging classroom experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-amber-400 to-amber-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Our Academic Program?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a visit to see our curriculum in action and meet our dedicated teachers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Schedule Campus Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
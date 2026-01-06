import React, { useState } from 'react';
import { FaPlay, FaExpand, FaTimes } from 'react-icons/fa';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All', count: 24 },
    { id: 'classroom', name: 'Classroom', count: 8 },
    { id: 'events', name: 'Events', count: 6 },
    { id: 'sports', name: 'Sports', count: 5 },
    { id: 'facilities', name: 'Facilities', count: 5 }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'classroom',
      title: 'Interactive Learning Session',
      description: 'Students engaged in hands-on learning activities',
      type: 'image',
      placeholder: '🏫'
    },
    {
      id: 2,
      category: 'events',
      title: 'Annual Day Celebration',
      description: 'Students performing cultural programs',
      type: 'image',
      placeholder: '🎭'
    },
    {
      id: 3,
      category: 'sports',
      title: 'Sports Day Activities',
      description: 'Students participating in various sports',
      type: 'image',
      placeholder: '⚽'
    },
    {
      id: 4,
      category: 'facilities',
      title: 'Modern Computer Lab',
      description: 'State-of-the-art computer laboratory',
      type: 'image',
      placeholder: '💻'
    },
    {
      id: 5,
      category: 'classroom',
      title: 'Science Experiment',
      description: 'Students conducting science experiments',
      type: 'image',
      placeholder: '🔬'
    },
    {
      id: 6,
      category: 'events',
      title: 'Art Exhibition',
      description: 'Student artwork display',
      type: 'image',
      placeholder: '🎨'
    },
    {
      id: 7,
      category: 'sports',
      title: 'Swimming Competition',
      description: 'Inter-house swimming championship',
      type: 'image',
      placeholder: '🏊'
    },
    {
      id: 8,
      category: 'facilities',
      title: 'Library Reading Corner',
      description: 'Cozy reading space for students',
      type: 'image',
      placeholder: '📚'
    },
    {
      id: 9,
      category: 'classroom',
      title: 'Mathematics Class',
      description: 'Interactive math learning session',
      type: 'image',
      placeholder: '🧮'
    },
    {
      id: 10,
      category: 'events',
      title: 'School Assembly',
      description: 'Morning assembly and announcements',
      type: 'video',
      placeholder: '📹'
    },
    {
      id: 11,
      category: 'sports',
      title: 'Basketball Practice',
      description: 'Students practicing basketball skills',
      type: 'image',
      placeholder: '🏀'
    },
    {
      id: 12,
      category: 'facilities',
      title: 'Music Room',
      description: 'Students learning musical instruments',
      type: 'image',
      placeholder: '🎵'
    },
    {
      id: 13,
      category: 'classroom',
      title: 'English Literature Class',
      description: 'Students discussing literature',
      type: 'image',
      placeholder: '📖'
    },
    {
      id: 14,
      category: 'events',
      title: 'Science Fair',
      description: 'Student science project exhibition',
      type: 'image',
      placeholder: '🧪'
    },
    {
      id: 15,
      category: 'sports',
      title: 'Yoga Session',
      description: 'Morning yoga and meditation',
      type: 'image',
      placeholder: '🧘'
    },
    {
      id: 16,
      category: 'facilities',
      title: 'Playground',
      description: 'Outdoor play area for students',
      type: 'image',
      placeholder: '🎪'
    },
    {
      id: 17,
      category: 'classroom',
      title: 'Art and Craft Class',
      description: 'Creative art activities',
      type: 'image',
      placeholder: '✂️'
    },
    {
      id: 18,
      category: 'events',
      title: 'Independence Day',
      description: 'Patriotic celebration and flag hoisting',
      type: 'image',
      placeholder: '🇮🇳'
    },
    {
      id: 19,
      category: 'classroom',
      title: 'Group Discussion',
      description: 'Students in collaborative learning',
      type: 'image',
      placeholder: '👥'
    },
    {
      id: 20,
      category: 'classroom',
      title: 'Presentation Skills',
      description: 'Students giving presentations',
      type: 'image',
      placeholder: '📊'
    },
    {
      id: 21,
      category: 'classroom',
      title: 'Reading Session',
      description: 'Guided reading activities',
      type: 'image',
      placeholder: '📚'
    },
    {
      id: 22,
      category: 'facilities',
      title: 'Cafeteria',
      description: 'Healthy meal time for students',
      type: 'image',
      placeholder: '🍽️'
    },
    {
      id: 23,
      category: 'classroom',
      title: 'Creative Writing',
      description: 'Students working on creative stories',
      type: 'image',
      placeholder: '✍️'
    },
    {
      id: 24,
      category: 'events',
      title: 'Graduation Ceremony',
      description: 'Students receiving certificates',
      type: 'image',
      placeholder: '🎓'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Explore the vibrant life at M.M. Vidya Mandir through our collection of memorable moments and achievements.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                    {item.placeholder}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                      {item.type === 'video' ? (
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <FaPlay className="text-white w-5 h-5 ml-1" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <FaExpand className="text-white w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Category Badge */}
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Load More Images
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
              <div className="text-8xl opacity-60">{selectedImage.placeholder}</div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h2>
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 font-medium rounded-full capitalize">
                  {selectedImage.category}
                </span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-300">
                    Download
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full hover:shadow-lg transition-all duration-300">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-400 to-amber-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Be Part of These Memories?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our school community and create lasting memories with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Schedule a Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transform hover:scale-105 transition-all duration-300">
              Apply for Admission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
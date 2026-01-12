import React from 'react';

const LessonSection = ({ lessons }) => {
  return (
    <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Lesson Plans</h2>
        <button className="bg-linear-to-r from-amber-400 to-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">Create New Lesson</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {lessons.map((lesson, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4">
            <h3 className="font-semibold mb-2 text-sm sm:text-base">{lesson.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">{lesson.class}</p>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">{lesson.description}</p>
            <div className="flex gap-2">
              <button className="text-blue-600 text-xs sm:text-sm hover:underline">Edit</button>
              <button className="text-green-600 text-xs sm:text-sm hover:underline">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonSection;
import React from 'react';

const GradesSection = ({ subjects }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg text-center">
            <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 truncate">{subject.name}</h3>
            <p className={`text-xl sm:text-3xl font-bold text-${subject.color}-600`}>{subject.grade}</p>
            <p className="text-xs sm:text-sm text-gray-600">{subject.percentage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradesSection;
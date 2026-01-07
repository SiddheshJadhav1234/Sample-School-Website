import React from 'react';

const EmptySection = ({ message = 'No content available' }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
      <div className="text-gray-400 text-6xl mb-4">📋</div>
      <h3 className="text-lg font-semibold text-gray-600 mb-2">Nothing to Show</h3>
      <p className="text-gray-500">{message}</p>
    </div>
  );
};

export default EmptySection;
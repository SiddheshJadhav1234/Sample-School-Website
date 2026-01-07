import React from 'react';

const ReportsSection = ({ reports }) => {
  return (
    <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Reports & Analytics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
        {reports.map((report, index) => (
          <div key={index} className="p-3 sm:p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold mb-2 text-sm sm:text-base">{report.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{report.description}</p>
            <button className="bg-amber-500 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm w-full sm:w-auto hover:bg-amber-600 transition-colors duration-300">Download PDF</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsSection;
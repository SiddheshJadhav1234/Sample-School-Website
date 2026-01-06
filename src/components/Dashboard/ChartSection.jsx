import React from 'react';

const ChartSection = ({ title, charts }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-8">
      {charts.map((chart, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{chart.title}</h3>
          <div className={`h-64 bg-linear-to-br ${chart.bgColor} rounded-xl flex items-center justify-center`}>
            <div className="text-center">
              <div className="text-4xl mb-2">{chart.icon}</div>
              <p className="text-gray-600">{chart.placeholder}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartSection;
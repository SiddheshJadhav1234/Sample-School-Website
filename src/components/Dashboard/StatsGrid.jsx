import React from 'react';

const StatsGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className={`inline-flex items-center justify-center w-12 h-12 bg-linear-to-br ${stat.color} rounded-lg mb-4`}>
            <span className="text-white font-bold">{stat.value.slice(0, 2)}</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
          <p className="text-gray-600 mb-2">{stat.title}</p>
          <span className={`text-sm font-semibold ${
            stat.change.startsWith('+') ? 'text-green-600' : 
            stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-500'
          }`}>
            {stat.change} this {stat.period || 'month'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
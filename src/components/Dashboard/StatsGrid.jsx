import React from 'react';

const StatsGrid = ({ stats }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'blue': return 'from-blue-400 to-blue-600';
      case 'green': return 'from-green-400 to-green-600';
      case 'purple': return 'from-purple-400 to-purple-600';
      case 'amber': return 'from-amber-400 to-amber-600';
      case 'red': return 'from-red-400 to-red-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br ${getColorClasses(stat.color)} rounded-lg mb-3 sm:mb-4`}>
            <span className="text-white font-bold text-sm sm:text-base">{stat.value.slice(0, 2)}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-2 truncate">{stat.title}</p>
          <span className={`text-xs sm:text-sm font-semibold ${
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
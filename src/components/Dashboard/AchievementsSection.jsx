import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const AchievementsSection = ({ achievements }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'amber': return { trophy: 'text-amber-500', badge: 'bg-amber-100 text-amber-800' };
      case 'green': return { trophy: 'text-green-500', badge: 'bg-green-100 text-green-800' };
      case 'blue': return { trophy: 'text-blue-500', badge: 'bg-blue-100 text-blue-800' };
      case 'purple': return { trophy: 'text-purple-500', badge: 'bg-purple-100 text-purple-800' };
      case 'red': return { trophy: 'text-red-500', badge: 'bg-red-100 text-red-800' };
      default: return { trophy: 'text-gray-500', badge: 'bg-gray-100 text-gray-800' };
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
      {achievements.map((achievement, index) => {
        const colors = getColorClasses(achievement.color);
        return (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg text-center">
            <FaTrophy className={`text-2xl sm:text-4xl ${colors.trophy} mx-auto mb-2 sm:mb-4`} />
            <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{achievement.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">{achievement.description}</p>
            <span className={`${colors.badge} px-2 py-1 rounded-full text-xs`}>
              {achievement.date}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default AchievementsSection;
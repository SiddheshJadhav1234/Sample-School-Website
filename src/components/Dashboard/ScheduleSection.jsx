import React from 'react';

const ScheduleSection = ({ title, scheduleData }) => {
  return (
    <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {scheduleData.map((daySchedule, index) => (
          <div key={index} className="p-3 sm:p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-base sm:text-lg mb-2">{daySchedule.day}</h3>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              {daySchedule.periods.map((period, periodIndex) => (
                <div key={periodIndex} className="p-1 sm:p-0">{period}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSection;
import React from 'react';

const StudentScheduleSection = ({ className, schedule }) => {
  const isFullWeek = schedule && schedule.length >= 5;
  const title = isFullWeek ? `${className} - Weekly Schedule` : `${className} - Class Schedule`;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {schedule.map((daySchedule, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">{daySchedule.day}</h3>
            <div className="space-y-2 text-sm">
              {daySchedule.periods.map((period, periodIndex) => (
                <div key={periodIndex} className="p-2 bg-blue-100 rounded">
                  {period.time} - {period.subject}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentScheduleSection;
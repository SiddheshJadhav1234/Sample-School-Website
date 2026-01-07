import React from 'react';

const TeacherScheduleSection = ({ schedule }) => {
  const isFullWeek = schedule && schedule.length >= 5;
  const title = isFullWeek ? 'My Weekly Teaching Schedule' : 'My Teaching Schedule';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {schedule.map((daySchedule, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">{daySchedule.day}</h3>
            <div className="space-y-2 text-sm">
              {daySchedule.classes.map((classItem, classIndex) => (
                <div key={classIndex} className="p-2 bg-blue-100 rounded">
                  {classItem.time} - {classItem.subject}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherScheduleSection;
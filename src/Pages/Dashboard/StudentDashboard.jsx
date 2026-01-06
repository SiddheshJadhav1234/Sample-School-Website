import React, { useState } from 'react';
import { FaBook, FaClipboardList, FaCalendarAlt, FaTrophy, FaUser, FaSignOutAlt, FaBell, FaDownload, FaPlay } from 'react-icons/fa';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', name: 'Dashboard', icon: FaUser },
    { id: 'assignments', name: 'Assignments', icon: FaClipboardList },
    { id: 'lessons', name: 'Lessons', icon: FaBook },
    { id: 'schedule', name: 'Schedule', icon: FaCalendarAlt },
    { id: 'achievements', name: 'Achievements', icon: FaTrophy }
  ];

  const stats = [
    { title: 'Completed Assignments', value: '12', change: '+3', color: 'from-blue-400 to-blue-600' },
    { title: 'Pending Tasks', value: '3', change: '-1', color: 'from-amber-400 to-amber-600' },
    { title: 'Attendance', value: '95%', change: '+2%', color: 'from-green-400 to-green-600' },
    { title: 'Overall Grade', value: 'A', change: '+1', color: 'from-purple-400 to-purple-600' }
  ];

  const assignments = [
    { id: 1, title: 'Math Worksheet - Chapter 5', subject: 'Mathematics', dueDate: '2024-01-30', status: 'Pending', priority: 'High' },
    { id: 2, title: 'Science Project - Plants', subject: 'Science', dueDate: '2024-02-05', status: 'In Progress', priority: 'Medium' },
    { id: 3, title: 'English Essay - My Family', subject: 'English', dueDate: '2024-02-02', status: 'Completed', priority: 'Low' },
    { id: 4, title: 'Art & Craft - Collage Making', subject: 'Art', dueDate: '2024-02-08', status: 'Pending', priority: 'Medium' }
  ];

  const lessons = [
    { id: 1, subject: 'Mathematics', topic: 'Addition & Subtraction', date: '2024-01-25', duration: '45 min', status: 'Completed' },
    { id: 2, subject: 'Science', topic: 'Parts of Plants', date: '2024-01-25', duration: '40 min', status: 'Completed' },
    { id: 3, subject: 'English', topic: 'Story Writing', date: '2024-01-26', duration: '45 min', status: 'Available' },
    { id: 4, subject: 'Art', topic: 'Color Mixing', date: '2024-01-26', duration: '40 min', status: 'Available' }
  ];

  const todaySchedule = [
    { time: '8:00 - 8:45', subject: 'Mathematics', teacher: 'Mrs. Priya Sharma', room: 'Room 101' },
    { time: '9:00 - 9:45', subject: 'English', teacher: 'Ms. Sunita Patel', room: 'Room 102' },
    { time: '10:30 - 11:15', subject: 'Science', teacher: 'Mr. Rajesh Kumar', room: 'Room 103' },
    { time: '11:30 - 12:15', subject: 'Art & Craft', teacher: 'Mrs. Meera Gupta', room: 'Art Room' },
    { time: '1:00 - 1:45', subject: 'Physical Education', teacher: 'Mr. Amit Singh', room: 'Playground' }
  ];

  const achievements = [
    { id: 1, title: 'Math Star', description: 'Excellent performance in Mathematics', date: '2024-01-20', badge: '🌟' },
    { id: 2, title: 'Perfect Attendance', description: 'No absences this month', date: '2024-01-15', badge: '🎯' },
    { id: 3, title: 'Creative Writer', description: 'Best story in English class', date: '2024-01-10', badge: '✍️' },
    { id: 4, title: 'Team Player', description: 'Great teamwork in group project', date: '2024-01-05', badge: '🤝' }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Welcome Message */}
      <div className="bg-linear-to-r from-amber-400 to-amber-600 p-6 rounded-2xl text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, Arjun!</h2>
        <p className="opacity-90">Ready for another great day of learning? You have 3 classes today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className={`inline-flex items-center justify-center w-12 h-12 bg-linear-to-br ${stat.color} rounded-lg mb-4`}>
              <span className="text-white font-bold">{stat.value.slice(0, 2)}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
            <p className="text-gray-600 mb-2">{stat.title}</p>
            <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-500'}`}>
              {stat.change} this week
            </span>
          </div>
        ))}
      </div>

      {/* Today's Schedule */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Classes</h3>
        <div className="space-y-4">
          {todaySchedule.slice(0, 3).map((schedule, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{schedule.time.split(' - ')[0]}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{schedule.subject}</h4>
                  <p className="text-gray-600">{schedule.teacher} • {schedule.room}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{schedule.time}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300">
          View Full Schedule
        </button>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Achievements</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.slice(0, 2).map((achievement) => (
            <div key={achievement.id} className="flex items-center gap-4 p-4 bg-linear-to-r from-amber-50 to-amber-100 rounded-lg">
              <div className="text-3xl">{achievement.badge}</div>
              <div>
                <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
                <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">My Assignments</h2>
      </div>

      <div className="grid gap-6">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{assignment.title}</h3>
                <p className="text-gray-600 mb-2">{assignment.subject}</p>
                <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  assignment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  assignment.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {assignment.status}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  assignment.priority === 'High' ? 'bg-red-100 text-red-800' :
                  assignment.priority === 'Medium' ? 'bg-amber-100 text-amber-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {assignment.priority}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              {assignment.status !== 'Completed' && (
                <button className="bg-linear-to-r from-amber-400 to-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Start Working
                </button>
              )}
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
                <FaDownload className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLessons = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">My Lessons</h2>
      </div>

      <div className="grid gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{lesson.topic}</h3>
                <p className="text-gray-600 mb-2">{lesson.subject}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📅 {lesson.date}</span>
                  <span>⏱️ {lesson.duration}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                lesson.status === 'Completed' ? 'bg-green-100 text-green-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {lesson.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="bg-linear-to-r from-amber-400 to-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                <FaPlay className="w-4 h-4" />
                {lesson.status === 'Completed' ? 'Review' : 'Start Lesson'}
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                View Notes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">My Schedule</h2>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Classes</h3>
        <div className="space-y-4">
          {todaySchedule.map((schedule, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{schedule.time.split(' - ')[0]}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{schedule.subject}</h4>
                  <p className="text-gray-600">{schedule.teacher}</p>
                  <p className="text-sm text-gray-500">{schedule.room}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{schedule.time}</p>
                <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                  Join Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">My Achievements</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-4">
              <div className="text-6xl mb-4">{achievement.badge}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-2">{achievement.description}</p>
              <p className="text-sm text-gray-500">{achievement.date}</p>
            </div>
            <button className="w-full bg-linear-to-r from-amber-400 to-amber-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Share Achievement
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'assignments': return renderAssignments();
      case 'lessons': return renderLessons();
      case 'schedule': return renderSchedule();
      case 'achievements': return renderAchievements();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AP</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-800">Student Portal</h2>
              <p className="text-sm text-gray-600">Arjun Patel</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-linear-to-r from-amber-400 to-amber-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300">
            <FaSignOutAlt className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
              <p className="text-gray-600">Grade 3A • Roll No: 15</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <FaBell className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
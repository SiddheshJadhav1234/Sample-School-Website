import React, { useState } from 'react';
import { FaUsers, FaBook, FaClipboardList, FaCalendarAlt, FaChartLine, FaSignOutAlt, FaBell, FaPlus, FaEdit, FaEye } from 'react-icons/fa';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: FaChartLine },
    { id: 'students', name: 'My Students', icon: FaUsers },
    { id: 'lessons', name: 'Lesson Plans', icon: FaBook },
    { id: 'assignments', name: 'Assignments', icon: FaClipboardList },
    { id: 'schedule', name: 'Schedule', icon: FaCalendarAlt }
  ];

  const stats = [
    { title: 'My Students', value: '32', change: '+2', color: 'from-blue-400 to-blue-600' },
    { title: 'Active Lessons', value: '8', change: '+1', color: 'from-green-400 to-green-600' },
    { title: 'Pending Assignments', value: '5', change: '-2', color: 'from-amber-400 to-amber-600' },
    { title: 'Classes Today', value: '4', change: '0', color: 'from-purple-400 to-purple-600' }
  ];

  const myStudents = [
    { id: 1, name: 'Arjun Patel', grade: 'Grade 3', attendance: '95%', performance: 'Excellent' },
    { id: 2, name: 'Kavya Sharma', grade: 'Grade 3', attendance: '92%', performance: 'Good' },
    { id: 3, name: 'Rohan Kumar', grade: 'Grade 3', attendance: '88%', performance: 'Average' },
    { id: 4, name: 'Ananya Singh', grade: 'Grade 3', attendance: '97%', performance: 'Excellent' },
    { id: 5, name: 'Ishaan Gupta', grade: 'Grade 3', attendance: '90%', performance: 'Good' }
  ];

  const lessonPlans = [
    { id: 1, subject: 'Mathematics', topic: 'Addition & Subtraction', date: '2024-01-25', status: 'Completed' },
    { id: 2, subject: 'Mathematics', topic: 'Multiplication Tables', date: '2024-01-26', status: 'In Progress' },
    { id: 3, subject: 'Mathematics', topic: 'Division Basics', date: '2024-01-27', status: 'Planned' },
    { id: 4, subject: 'Mathematics', topic: 'Word Problems', date: '2024-01-28', status: 'Planned' }
  ];

  const assignments = [
    { id: 1, title: 'Math Worksheet - Chapter 5', subject: 'Mathematics', dueDate: '2024-01-30', submitted: 28, total: 32 },
    { id: 2, title: 'Science Project - Plants', subject: 'Science', dueDate: '2024-02-05', submitted: 15, total: 32 },
    { id: 3, title: 'English Essay - My Family', subject: 'English', dueDate: '2024-02-02', submitted: 30, total: 32 },
    { id: 4, title: 'Art & Craft - Collage Making', subject: 'Art', dueDate: '2024-02-08', submitted: 12, total: 32 }
  ];

  const todaySchedule = [
    { time: '8:00 - 8:45', subject: 'Mathematics', class: 'Grade 3A', room: 'Room 101' },
    { time: '9:00 - 9:45', subject: 'Mathematics', class: 'Grade 3B', room: 'Room 102' },
    { time: '10:30 - 11:15', subject: 'Mathematics', class: 'Grade 3C', room: 'Room 103' },
    { time: '11:30 - 12:15', subject: 'Mathematics', class: 'Grade 3D', room: 'Room 104' },
    { time: '2:00 - 2:45', subject: 'Extra Classes', class: 'Grade 3 (Remedial)', room: 'Room 101' }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
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
        <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Schedule</h3>
        <div className="space-y-4">
          {todaySchedule.map((schedule, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{schedule.time.split(' - ')[0]}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{schedule.subject}</h4>
                  <p className="text-gray-600">{schedule.class} • {schedule.room}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{schedule.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaPlus className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Create Assignment</h3>
          <p className="text-gray-600 mb-4">Add new assignment for students</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
            Create
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaBook className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Plan Lesson</h3>
          <p className="text-gray-600 mb-4">Create new lesson plan</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer">
            Plan
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-linear-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaClipboardList className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Grade Papers</h3>
          <p className="text-gray-600 mb-4">Review and grade submissions</p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300 cursor-pointer">
            Grade
          </button>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">My Students</h2>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Grade</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Attendance</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Performance</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{student.name}</td>
                  <td className="py-3 px-4 text-gray-600">{student.grade}</td>
                  <td className="py-3 px-4 text-gray-600">{student.attendance}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      student.performance === 'Excellent' ? 'bg-green-100 text-green-800' :
                      student.performance === 'Good' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {student.performance}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-300 cursor-pointer">
                      <FaEye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderLessons = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Lesson Plans</h2>
        <button className="bg-linear-to-r from-amber-400 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer">
          <FaPlus className="w-4 h-4" />
          New Lesson
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Topic</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {lessonPlans.map((lesson) => (
                <tr key={lesson.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{lesson.subject}</td>
                  <td className="py-3 px-4 text-gray-600">{lesson.topic}</td>
                  <td className="py-3 px-4 text-gray-600">{lesson.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      lesson.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      lesson.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {lesson.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-300 cursor-pointer">
                        <FaEye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-300 cursor-pointer">
                        <FaEdit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Assignments</h2>
        <button className="bg-linear-to-r from-amber-400 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
          <FaPlus className="w-4 h-4" />
          New Assignment
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Title</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Due Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Submissions</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{assignment.title}</td>
                  <td className="py-3 px-4 text-gray-600">{assignment.subject}</td>
                  <td className="py-3 px-4 text-gray-600">{assignment.dueDate}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-linear-to-r from-amber-400 to-amber-600 h-2 rounded-full" 
                          style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{assignment.submitted}/{assignment.total}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-300 cursor-pointer">
                        <FaEye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-300 cursor-pointer">
                        <FaEdit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'students': return renderStudents();
      case 'lessons': return renderLessons();
      case 'assignments': return renderAssignments();
      case 'schedule': return renderOverview(); // Placeholder
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
              <span className="text-white font-bold">MM</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-800">Teacher Panel</h2>
              <p className="text-sm text-gray-600">Mrs. Priya Sharma</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 ${
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
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 cursor-pointer">
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
              <h1 className="text-2xl font-bold text-gray-800">Teacher Dashboard</h1>
              <p className="text-gray-600">Welcome back, Mrs. Priya Sharma</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300 cursor-pointer">
                <FaBell className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">PS</span>
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

export default TeacherDashboard;
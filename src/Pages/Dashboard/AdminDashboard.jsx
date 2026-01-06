import React, { useState } from 'react';
import { FaUsers, FaChalkboardTeacher, FaGraduationCap, FaChartBar, FaCog, FaSignOutAlt, FaBell, FaSearch, FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: FaChartBar },
    { id: 'students', name: 'Students', icon: FaGraduationCap },
    { id: 'teachers', name: 'Teachers', icon: FaChalkboardTeacher },
    { id: 'admissions', name: 'Admissions', icon: FaUsers },
    { id: 'settings', name: 'Settings', icon: FaCog }
  ];

  const stats = [
    { title: 'Total Students', value: '485', change: '+12', color: 'from-blue-400 to-blue-600' },
    { title: 'Total Teachers', value: '52', change: '+3', color: 'from-green-400 to-green-600' },
    { title: 'Pending Admissions', value: '28', change: '+8', color: 'from-amber-400 to-amber-600' },
    { title: 'Active Classes', value: '24', change: '0', color: 'from-purple-400 to-purple-600' }
  ];

  const recentStudents = [
    { id: 1, name: 'Arjun Patel', grade: 'Grade 3', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Kavya Sharma', grade: 'Grade 2', status: 'Active', joinDate: '2024-01-14' },
    { id: 3, name: 'Rohan Kumar', grade: 'Grade 4', status: 'Active', joinDate: '2024-01-13' },
    { id: 4, name: 'Ananya Singh', grade: 'Grade 1', status: 'Active', joinDate: '2024-01-12' },
    { id: 5, name: 'Ishaan Gupta', grade: 'Grade 5', status: 'Active', joinDate: '2024-01-11' }
  ];

  const teachers = [
    { id: 1, name: 'Mrs. Priya Sharma', subject: 'Mathematics', experience: '8 years', status: 'Active' },
    { id: 2, name: 'Mr. Rajesh Kumar', subject: 'Science', experience: '12 years', status: 'Active' },
    { id: 3, name: 'Ms. Sunita Patel', subject: 'English', experience: '6 years', status: 'Active' },
    { id: 4, name: 'Mr. Amit Singh', subject: 'Social Studies', experience: '10 years', status: 'Active' },
    { id: 5, name: 'Mrs. Meera Gupta', subject: 'Hindi', experience: '5 years', status: 'Active' }
  ];

  const pendingAdmissions = [
    { id: 1, name: 'Aarav Mehta', grade: 'Grade 1', appliedDate: '2024-01-20', status: 'Under Review' },
    { id: 2, name: 'Diya Joshi', grade: 'Nursery', appliedDate: '2024-01-19', status: 'Documents Pending' },
    { id: 3, name: 'Vihaan Agarwal', grade: 'Grade 2', appliedDate: '2024-01-18', status: 'Interview Scheduled' },
    { id: 4, name: 'Saanvi Reddy', grade: 'LKG', appliedDate: '2024-01-17', status: 'Under Review' }
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
            <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-500'}`}>
              {stat.change} this month
            </span>
          </div>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Student Enrollment Trend</h3>
          <div className="h-64 bg-linear-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-gray-600">Enrollment Chart</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Grade Distribution</h3>
          <div className="h-64 bg-linear-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🥧</div>
              <p className="text-gray-600">Distribution Chart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Students</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Grade</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Join Date</th>
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{student.name}</td>
                  <td className="py-3 px-4 text-gray-600">{student.grade}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {student.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{student.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Students Management</h2>
        <button className="bg-linear-to-r from-amber-400 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
          <FaPlus className="w-4 h-4" />
          Add Student
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Grade</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Join Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{student.name}</td>
                  <td className="py-3 px-4 text-gray-600">{student.grade}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {student.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{student.joinDate}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-300 cursor-pointer">
                        <FaEye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-300 cursor-pointer">
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-300 cursor-pointer">
                        <FaTrash className="w-4 h-4" />
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

  const renderTeachers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Teachers Management</h2>
        <button className="bg-linear-to-r from-amber-400 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer">
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Experience</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{teacher.name}</td>
                  <td className="py-3 px-4 text-gray-600">{teacher.subject}</td>
                  <td className="py-3 px-4 text-gray-600">{teacher.experience}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {teacher.status}
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
                      <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-300 cursor-pointer">
                        <FaTrash className="w-4 h-4" />
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

  const renderAdmissions = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Admissions Management</h2>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Pending Applications</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Grade</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Applied Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingAdmissions.map((admission) => (
                <tr key={admission.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{admission.name}</td>
                  <td className="py-3 px-4 text-gray-600">{admission.grade}</td>
                  <td className="py-3 px-4 text-gray-600">{admission.appliedDate}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      admission.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      admission.status === 'Documents Pending' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {admission.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors duration-300 text-sm font-medium">
                        Approve
                      </button>
                      <button className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors duration-300 text-sm font-medium">
                        Reject
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
      case 'teachers': return renderTeachers();
      case 'admissions': return renderAdmissions();
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
              <h2 className="font-bold text-gray-800">Admin Panel</h2>
              <p className="text-sm text-gray-600">M.M. Vidya Mandir</p>
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
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, Administrator</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-300 cursor-pointer">
                <FaBell className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AD</span>
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

export default AdminDashboard;
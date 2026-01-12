import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaCalendarAlt, FaClock } from 'react-icons/fa';

const TestPlansSection = ({ testPlans = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTestPlans = testPlans.filter(test =>
    test.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl font-semibold text-gray-900">Test Plans</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search test plans..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaPlus className="w-4 h-4" />
              Add Test Plan
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Test Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject & Class
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Schedule
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Marks & Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTestPlans.map((test) => (
              <tr key={test.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{test.title}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{test.subject}</div>
                  <div className="text-sm text-gray-500">Class {test.class}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-sm text-gray-900">
                    <FaCalendarAlt className="w-3 h-3 text-gray-400" />
                    {test.date}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{test.totalMarks} marks</div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <FaClock className="w-3 h-3" />
                    {test.duration}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(test.status)}`}>
                    {test.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-blue-600 hover:text-blue-800 transition-colors">
                      <FaEye className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-green-600 hover:text-green-800 transition-colors">
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-red-600 hover:text-red-800 transition-colors">
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredTestPlans.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          <div className="text-lg font-medium mb-2">No test plans found</div>
          <div className="text-sm">Try adjusting your search criteria or create a new test plan.</div>
        </div>
      )}
    </div>
  );
};

export default TestPlansSection;
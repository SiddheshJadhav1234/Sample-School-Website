import React from 'react';

const SettingsSection = ({ schoolInfo, academicYear, notifications }) => {
  return (
    <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">System Settings</h2>
      <div className="space-y-4 sm:space-y-6">
        <div className="border-b pb-3 sm:pb-4">
          <h3 className="font-semibold mb-2 text-sm sm:text-base">School Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input 
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base" 
              placeholder="School Name" 
              defaultValue={schoolInfo.name} 
            />
            <input 
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base" 
              placeholder="Contact Number" 
              defaultValue={schoolInfo.contact} 
            />
          </div>
        </div>
        <div className="border-b pb-3 sm:pb-4">
          <h3 className="font-semibold mb-2 text-sm sm:text-base">Academic Year</h3>
          <select className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-auto text-sm sm:text-base" defaultValue={academicYear}>
            <option value="2024-2025">2024-2025</option>
            <option value="2023-2024">2023-2024</option>
          </select>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-sm sm:text-base">Notifications</h3>
          <div className="space-y-2">
            <label className="flex items-center text-sm sm:text-base">
              <input 
                type="checkbox" 
                className="mr-2" 
                defaultChecked={notifications.emailEnrollments} 
              />
              Email notifications for new enrollments
            </label>
            <label className="flex items-center text-sm sm:text-base">
              <input 
                type="checkbox" 
                className="mr-2" 
                defaultChecked={notifications.smsPayments} 
              />
              SMS alerts for fee payments
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
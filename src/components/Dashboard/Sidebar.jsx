import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ items, activeTab, setActiveTab, role }) => {
  const getRoleInfo = () => {
    switch (role) {
      case 'admin':
        return { title: 'Admin Panel', subtitle: 'M.M. Vidya Mandir', badge: 'MM' };
      case 'teacher':
        return { title: 'Teacher Panel', subtitle: 'Mrs. Priya Sharma', badge: 'MM' };
      case 'student':
        return { title: 'Student Portal', subtitle: 'Arjun Patel', badge: 'AP' };
      default:
        return { title: 'Dashboard', subtitle: 'User', badge: 'U' };
    }
  };

  const roleInfo = getRoleInfo();

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">{roleInfo.badge}</span>
          </div>
          <div>
            <h2 className="font-bold text-gray-800">{roleInfo.title}</h2>
            <p className="text-sm text-gray-600">{roleInfo.subtitle}</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-linear-to-r from-amber-400 to-amber-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
};

export default Sidebar;
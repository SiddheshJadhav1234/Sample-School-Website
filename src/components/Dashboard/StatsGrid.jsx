import React, { useState, useEffect } from 'react';
import { dashboardAPI } from '../../services/api';

const StatsGrid = ({ userRole = 'admin' }) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardStats();
  }, [userRole]);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      const data = await dashboardAPI.getStats();
      
      // Transform API data to stats format
      const transformedStats = [
        {
          title: 'Total Students',
          value: data.totalStudents?.toString() || '0',
          change: '+12%',
          period: 'month',
          color: 'blue'
        },
        {
          title: 'Total Teachers',
          value: data.totalTeachers?.toString() || '0',
          change: '+5%',
          period: 'month',
          color: 'green'
        },
        {
          title: 'Active Notices',
          value: data.totalNotices?.toString() || '0',
          change: '+3',
          period: 'week',
          color: 'purple'
        },
        {
          title: 'Today Present',
          value: data.attendanceStats?.present?.toString() || '0',
          change: `${data.attendanceStats?.total || 0} total`,
          period: 'today',
          color: 'amber'
        }
      ];
      
      setStats(transformedStats);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch dashboard stats:', err);
      setError('Failed to load dashboard data');
      // Fallback to default stats
      setStats([
        { title: 'Total Students', value: '0', change: 'Loading...', color: 'blue' },
        { title: 'Total Teachers', value: '0', change: 'Loading...', color: 'green' },
        { title: 'Active Notices', value: '0', change: 'Loading...', color: 'purple' },
        { title: 'Today Present', value: '0', change: 'Loading...', color: 'amber' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue': return 'from-blue-400 to-blue-600';
      case 'green': return 'from-green-400 to-green-600';
      case 'purple': return 'from-purple-400 to-purple-600';
      case 'amber': return 'from-amber-400 to-amber-600';
      case 'red': return 'from-red-400 to-red-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg animate-pulse">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-lg mb-3 sm:mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
      {error && (
        <div className="col-span-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
          <button 
            onClick={fetchDashboardStats}
            className="ml-2 underline hover:no-underline"
          >
            Retry
          </button>
        </div>
      )}
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br ${getColorClasses(stat.color)} rounded-lg mb-3 sm:mb-4`}>
            <span className="text-white font-bold text-sm sm:text-base">{stat.value.slice(0, 2)}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-2 truncate">{stat.title}</p>
          <span className={`text-xs sm:text-sm font-semibold ${
            stat.change.startsWith('+') ? 'text-green-600' : 
            stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-500'
          }`}>
            {stat.change} {stat.period && `this ${stat.period}`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
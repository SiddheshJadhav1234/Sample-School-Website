import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsGrid from './StatsGrid';
import TableSection from './TableSection';

import ScheduleSection from './ScheduleSection';
import FinanceSection from './FinanceSection';
import ReportsSection from './ReportsSection';
import SettingsSection from './SettingsSection';
import LessonSection from './LessonSection';
import TeacherScheduleSection from './TeacherScheduleSection';
import GradesSection from './GradesSection';
import StudentScheduleSection from './StudentScheduleSection';
import AchievementsSection from './AchievementsSection';
import EmptySection from './EmptySection';

const Dashboard = ({ role, data }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Reset state when role changes
  useEffect(() => {
    setActiveTab('overview');
    setSidebarOpen(false);
  }, [role]);

  // Component mapping - All components imported here
  const componentMap = {
    TableSection,
    ScheduleSection,
    FinanceSection,
    ReportsSection,
    SettingsSection,
    LessonSection,
    TeacherScheduleSection,
    GradesSection,
    StudentScheduleSection,
    AchievementsSection,
    EmptySection
  };

  if (!data || !data.sidebarItems || !data.header) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-xl text-gray-600">Loading dashboard...</div>
    </div>;
  }

  const renderContent = () => {
    if (!data.sections || !data.sections[activeTab]) {
      return <div className="text-gray-600">No content available for this section.</div>;
    }
    
    const sectionData = data.sections[activeTab];
    const ComponentToRender = componentMap[sectionData.component];
    
    if (!ComponentToRender) {
      return <div className="text-gray-600">Component not found: {sectionData.component}</div>;
    }
    
    return <ComponentToRender {...sectionData.props} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-auto transform transition-transform duration-300 ease-in-out lg:transform-none ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <Sidebar 
          items={data.sidebarItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          role={role}
          onClose={() => setSidebarOpen(false)}
        />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          title={data.header.title}
          subtitle={data.header.subtitle}
          badgeText={data.header.badgeText}
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        <main className="flex-1 p-3 sm:p-6 overflow-auto">
          {activeTab === 'overview' && data.stats && (
            <div className="mb-6">
              <StatsGrid stats={data.stats} />
            </div>
          )}
          <div className="min-w-0">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
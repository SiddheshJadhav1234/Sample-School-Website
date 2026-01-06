import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsGrid from './StatsGrid';
import TableSection from './TableSection';
import ChartSection from './ChartSection';

const Dashboard = ({ role, data }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!data || !data.sidebarItems || !data.header) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-xl text-gray-600">Loading dashboard...</div>
    </div>;
  }

  const renderContent = () => {
    if (!data.sections || !data.sections[activeTab]) {
      return <div className="text-gray-600">No content available for this section.</div>;
    }
    const section = data.sections[activeTab];
    return section();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        items={data.sidebarItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        role={role}
      />
      
      <div className="flex-1 flex flex-col">
        <Header 
          title={data.header.title}
          subtitle={data.header.subtitle}
          badgeText={data.header.badgeText}
        />
        
        <main className="flex-1 p-6">
          {activeTab === 'overview' && data.stats && (
            <StatsGrid stats={data.stats} />
          )}
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
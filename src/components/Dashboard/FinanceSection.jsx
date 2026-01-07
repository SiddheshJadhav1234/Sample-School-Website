import React from 'react';
import TableSection from './TableSection';

const FinanceSection = ({ revenue, pending, expenses, feeData }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
          <h3 className="text-base sm:text-lg font-semibold mb-2">Monthly Revenue</h3>
          <p className="text-2xl sm:text-3xl font-bold text-green-600">{revenue.value}</p>
          <p className="text-xs sm:text-sm text-gray-600">{revenue.change} from last month</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
          <h3 className="text-base sm:text-lg font-semibold mb-2">Pending Fees</h3>
          <p className="text-2xl sm:text-3xl font-bold text-red-600">{pending.value}</p>
          <p className="text-xs sm:text-sm text-gray-600">{pending.students} students</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
          <h3 className="text-base sm:text-lg font-semibold mb-2">Expenses</h3>
          <p className="text-2xl sm:text-3xl font-bold text-blue-600">{expenses.value}</p>
          <p className="text-xs sm:text-sm text-gray-600">{expenses.type}</p>
        </div>
      </div>
      <TableSection
        title="Fee Collection Status"
        columns={[
          { header: 'Student', accessor: 'student' },
          { header: 'Class', accessor: 'class' },
          { header: 'Amount', accessor: 'amount' },
          { header: 'Due Date', accessor: 'dueDate' },
          { header: 'Status', accessor: 'status' }
        ]}
        rows={feeData}
        showSearch={true}
      />
    </div>
  );
};

export default FinanceSection;
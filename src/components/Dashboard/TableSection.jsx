import React from 'react';
import { FaPlus, FaSearch, FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const TableSection = ({ title, columns, rows, showAddButton = false, showSearch = false, actions = [] }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {showAddButton && (
          <button className="bg-linear-to-r from-amber-400 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
            <FaPlus className="w-4 h-4" />
            Add New
          </button>
        )}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        {showSearch && (
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                {columns.map((column, index) => (
                  <th key={index} className="text-left py-3 px-4 font-semibold text-gray-700">
                    {column.header}
                  </th>
                ))}
                {actions.length > 0 && (
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-100 hover:bg-gray-50">
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="py-3 px-4">
                      {column.render ? column.render(row) : (
                        <span className={column.accessor === 'name' ? 'font-medium text-gray-800' : 'text-gray-600'}>
                          {row[column.accessor]}
                        </span>
                      )}
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        {actions.includes('view') && (
                          <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-300">
                            <FaEye className="w-4 h-4" />
                          </button>
                        )}
                        {actions.includes('edit') && (
                          <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-300">
                            <FaEdit className="w-4 h-4" />
                          </button>
                        )}
                        {actions.includes('delete') && (
                          <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-300">
                            <FaTrash className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
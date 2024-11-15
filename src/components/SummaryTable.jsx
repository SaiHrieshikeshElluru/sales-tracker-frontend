import React from 'react';
import { Download } from 'lucide-react';

export default function SummaryTable({ title, data, darkMode, downloadCSV }) {
  const formatCurrency = (amount) => {
    return `₹${amount.toFixed(2)}`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr.includes('-')) return dateStr;
    const [year, month, day] = dateStr.split('-');
    return day ? `${day}/${month}/${year}` : `${month}/${year}`;
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <button
          onClick={() => downloadCSV(data, `${title.toLowerCase()}-summary`)}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          <Download size={16} />
          Download CSV
        </button>
      </div>
      <div className={`shadow-md rounded-lg overflow-hidden ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <table className="w-full">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
            <tr>
              <th className={`px-4 py-2 text-left ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Date</th>
              <th className={`px-4 py-2 text-left ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Total Cost</th>
              <th className={`px-4 py-2 text-left ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Total Sales</th>
              <th className={`px-4 py-2 text-left ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Profit</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([date, summary]) => (
              <tr key={date} className={`border-b ${
                darkMode ? 'border-gray-700 text-gray-200' : 'border-gray-200 text-gray-900'
              }`}>
                <td className="px-4 py-2">{formatDate(date)}</td>
                <td className="px-4 py-2">{formatCurrency(summary.totalCost)}</td>
                <td className="px-4 py-2">{formatCurrency(summary.totalSales)}</td>
                <td className="px-4 py-2">{formatCurrency(summary.profit)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
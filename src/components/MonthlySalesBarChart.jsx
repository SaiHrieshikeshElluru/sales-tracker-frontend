import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const formatToINR = (value) => {
  return `₹${value.toLocaleString('en-IN')}`
}

const CustomTooltip = ({ active, payload, label, darkMode }) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-2 border rounded shadow`}>
        <p className="text-sm">{`Month: ${label}`}</p>
        <p className={`text-sm ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} font-semibold`}>
          {`Sales: ${formatToINR(payload[0].value)}`}
        </p>
      </div>
    )
  }
  return null
}

export default function MonthlySalesBarChart({ data, darkMode }) {
  return (
    <div className={`
      ${darkMode ? 'bg-gray-800' : 'bg-white'} 
      p-4 rounded-lg shadow
      transition-colors duration-300 ease-in-out
      animate-fade-in
    `}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { transform: scale(0.95); }
            to { transform: scale(1); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-scale-in {
            animation: scaleIn 0.5s ease-out forwards;
          }
          .bar-hover {
            transition: opacity 0.3s ease-in-out;
          }
          .bar-hover:hover {
            opacity: 0.8;
          }
        `}
      </style>
      <h3 className="text-lg font-semibold mb-2">Monthly Sales</h3>
      <div className="h-[400px] animate-scale-in">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={darkMode ? '#374151' : '#e5e7eb'}
            />
            <XAxis 
              dataKey="month" 
              stroke={darkMode ? '#9ca3af' : '#4b5563'}
            />
            <YAxis 
              tickFormatter={formatToINR}
              stroke={darkMode ? '#9ca3af' : '#4b5563'}
            />
            <Tooltip content={<CustomTooltip darkMode={darkMode} />} />
            <Legend />
            <Bar 
              dataKey="sales" 
              fill={darkMode ? '#818cf8' : '#8884d8'}
              barSize={30}
              className="bar-hover"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
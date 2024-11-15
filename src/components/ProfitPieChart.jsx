import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function ProfitPieChart({ data, darkMode }) {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow`}>
      <h3 className="text-lg font-semibold mb-2">Daily Profit Percentage</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="percentage"
              nameKey="date"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label={(entry) => `${entry.date}: ${entry.percentage.toFixed(2)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => `${value.toFixed(2)}%`}
              contentStyle={{
                backgroundColor: darkMode ? '#1f2937' : 'white',
                color: darkMode ? 'white' : 'black',
                border: '1px solid #374151'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
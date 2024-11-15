import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import ProfitPieChart from '../components/ProfitPieChart'
import MonthlySalesBarChart from '../components/MonthlySalesBarChart'
import Footer from '../components/Footer'

export default function ReportsPage() {
  const [chartData, setChartData] = useState([])
  const [monthlySalesData, setMonthlySalesData] = useState([])
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const storedEntries = localStorage.getItem('productEntries')
    if (storedEntries) {
      const entries = JSON.parse(storedEntries)
      const profitByDate = {}
      const totalByDate = {}
      const monthlySales = {}

      entries.forEach(entry => {
        const date = new Date(entry.date)
        const dateString = date.toISOString().split('T')[0]
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`

        const profit = entry.sellingPrice - entry.cost
        profitByDate[dateString] = (profitByDate[dateString] || 0) + profit
        totalByDate[dateString] = (totalByDate[dateString] || 0) + entry.sellingPrice

        monthlySales[monthKey] = (monthlySales[monthKey] || 0) + entry.sellingPrice
      })

      const newChartData = Object.keys(profitByDate).map(date => ({
        date,
        percentage: (profitByDate[date] / totalByDate[date]) * 100
      }))

      const newMonthlySalesData = Object.keys(monthlySales).map(month => ({
        month,
        sales: monthlySales[month]
      })).sort((a, b) => a.month.localeCompare(b.month))

      setChartData(newChartData)
      setMonthlySalesData(newMonthlySalesData)
    }
  }, [])

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Sales Reports</h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <ProfitPieChart data={chartData} darkMode={darkMode} />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <MonthlySalesBarChart data={monthlySalesData} darkMode={darkMode} />
          </div>
        </div>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}
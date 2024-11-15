import React, { useState, useEffect } from 'react';
import SummaryTable from '../components/SummaryTable';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function DataSummaryPage() {
  const [dailySummary, setDailySummary] = useState({});
  const [monthlySummary, setMonthlySummary] = useState({});
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const storedEntries = localStorage.getItem('productEntries');
    if (storedEntries) {
      const entries = JSON.parse(storedEntries);
      const dailyData = {};
      const monthlyData = {};

      entries.forEach(entry => {
        const date = new Date(entry.date);
        const dateString = date.toISOString().split('T')[0];
        const monthString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

        // Daily summary
        if (!dailyData[dateString]) {
          dailyData[dateString] = { totalCost: 0, totalSales: 0, profit: 0 };
        }
        dailyData[dateString].totalCost += entry.cost;
        dailyData[dateString].totalSales += entry.sellingPrice;
        dailyData[dateString].profit += entry.sellingPrice - entry.cost;

        // Monthly summary
        if (!monthlyData[monthString]) {
          monthlyData[monthString] = { totalCost: 0, totalSales: 0, profit: 0 };
        }
        monthlyData[monthString].totalCost += entry.cost;
        monthlyData[monthString].totalSales += entry.sellingPrice;
        monthlyData[monthString].profit += entry.sellingPrice - entry.cost;
      });

      setDailySummary(dailyData);
      setMonthlySummary(monthlyData);
    }
  }, []);

  const downloadCSV = (data, filename) => {
    const BOM = '\uFEFF';
    const headers = ['Date', 'Total Cost (₹)', 'Total Sales (₹)', 'Profit (₹)'];
    const csvContent = BOM + [
      headers.join(','),
      ...Object.entries(data).map(([date, summary]) => [
        `"${formatDate(date)}"`,
        summary.totalCost.toFixed(2),
        summary.totalSales.toFixed(2),
        summary.profit.toFixed(2)
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateStr) => {
    if (!dateStr.includes('-')) return dateStr;
    const [year, month, day] = dateStr.split('-');
    return day ? `${day}/${month}/${year}` : `${month}/${year}`;
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow container mx-auto p-4">
        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Data Summary
        </h2>
        <SummaryTable 
          title="Daily Summary" 
          data={dailySummary} 
          darkMode={darkMode} 
          downloadCSV={downloadCSV} 
        />
        <SummaryTable 
          title="Monthly Summary" 
          data={monthlySummary} 
          darkMode={darkMode} 
          downloadCSV={downloadCSV} 
        />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
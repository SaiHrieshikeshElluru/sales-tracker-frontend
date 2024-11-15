import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import ReportsPage from './pages/ReportsPage'
import DataSummaryPage from './pages/DataSummaryPage'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/summary" element={<DataSummaryPage />} />
      </Routes>
    </Router>
  )
}


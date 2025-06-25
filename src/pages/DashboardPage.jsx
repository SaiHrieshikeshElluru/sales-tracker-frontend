import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductEntryForm from '../components/ProductEntryForm'
import ProductList from '../components/ProductList'
import ProductCalculator from '../components/ProductCalculator'

function DashboardPage() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState(null)
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
      const parsedEntries = JSON.parse(storedEntries)
      const entriesWithDates = parsedEntries.map(entry => ({
        ...entry,
        date: new Date(entry.date)
      }))
      setEntries(entriesWithDates)
    }
  }, [])

  const addEntry = (newEntry) => {
    const newEntryWithId = { ...newEntry, id: Date.now() }
    const updatedEntries = [...entries, newEntryWithId]
    setEntries(updatedEntries)
    localStorage.setItem('productEntries', JSON.stringify(updatedEntries))
  }

  const updateEntry = (updatedEntry) => {
    const updatedEntries = entries.map(entry => 
      entry.id === updatedEntry.id ? { ...updatedEntry, date: new Date(updatedEntry.date) } : entry
    )
    setEntries(updatedEntries)
    localStorage.setItem('productEntries', JSON.stringify(updatedEntries))
  }

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter(entry => entry.id !== id)
    setEntries(updatedEntries)
    localStorage.setItem('productEntries', JSON.stringify(updatedEntries))
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Product Entry</h2>

        <ProductEntryForm addEntry={addEntry} setError={setError} darkMode={darkMode} />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <ProductList 
              entries={entries} 
              updateEntry={updateEntry} 
              deleteEntry={deleteEntry} 
              darkMode={darkMode} 
            />
          </div>
          <div className="md:w-1/3">
            <ProductCalculator />
          </div>
        </div>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default DashboardPage
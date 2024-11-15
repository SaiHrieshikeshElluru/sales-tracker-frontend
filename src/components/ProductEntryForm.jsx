import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

function ProductEntryForm({ addEntry, setError, darkMode }) {
  const [newEntry, setNewEntry] = useState({
    name: '',
    cost: 0,
    sellingPrice: 0,
    date: new Date()
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewEntry(prev => ({
      ...prev,
      [name]: name === 'name' ? value : parseFloat(value) || 0
    }))
  }

  const handleDateChange = (date) => {
    setNewEntry(prev => ({ ...prev, date }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newEntry.name || newEntry.cost <= 0 || newEntry.sellingPrice <= 0 || !newEntry.date) {
      setError('Please fill all fields with valid values.')
      return
    }

    addEntry(newEntry)
    setNewEntry({ name: '', cost: 0, sellingPrice: 0, date: new Date() })
    setError(null)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          name="name"
          value={newEntry.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          className={`flex-1 min-w-[200px] p-2 rounded ${
            darkMode 
              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
              : 'bg-white border-gray-300 text-gray-900'
          } border`}
        />
        <div className="relative w-32">
          <span className={`absolute left-2 top-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>₹</span>
          <input
            type="number"
            name="cost"
            value={newEntry.cost || ''}
            onChange={handleInputChange}
            placeholder="Cost"
            className={`w-full p-2 pl-6 rounded ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900'
            } border`}
            step="0.01"
          />
        </div>
        <div className="relative w-32">
          <span className={`absolute left-2 top-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>₹</span>
          <input
            type="number"
            name="sellingPrice"
            value={newEntry.sellingPrice || ''}
            onChange={handleInputChange}
            placeholder="Selling Price"
            className={`w-full p-2 pl-6 rounded ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900'
            } border`}
            step="0.01"
          />
        </div>
        <div className="w-40">
          <DatePicker
            selected={newEntry.date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className={`w-full p-2 rounded ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            } border`}
            wrapperClassName="w-full"
            showYearDropdown
            scrollableYearDropdown
            showMonthDropdown
            scrollableMonthYearDropdown
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add Entry
        </button>
      </div>
    </form>
  )
}

export default ProductEntryForm
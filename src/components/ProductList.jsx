import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Edit, Trash2, X, Check } from 'lucide-react'

function ProductList({ entries, updateEntry, deleteEntry, darkMode }) {
  const [editingId, setEditingId] = useState(null)
  const [editEntry, setEditEntry] = useState({})

  const handleEditInputChange = (e) => {
    const { name, value } = e.target
    setEditEntry(prev => ({
      ...prev,
      [name]: name === 'name' ? value : parseFloat(value) || 0
    }))
  }

  const handleEditDateChange = (date) => {
    setEditEntry(prev => ({ ...prev, date }))
  }

  const startEditing = (entry) => {
    setEditingId(entry.id)
    setEditEntry({ ...entry })
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditEntry({})
  }

  const saveEdit = () => {
    if (!editEntry.name || editEntry.cost <= 0 || editEntry.sellingPrice <= 0 || !editEntry.date) {
      console.error('Please fill all fields with valid values.')
      return
    }

    updateEntry(editEntry)
    setEditingId(null)
    setEditEntry({})
  }

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).split('-').join('/')
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="w-full border-collapse">
        <thead>
          <tr className={darkMode ? 'bg-gray-800' : 'bg-gray-100'}>
            <th className={`p-3 text-left ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
              Product Name
            </th>
            <th className={`p-3 text-left ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
              Cost
            </th>
            <th className={`p-3 text-left ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
              Selling Price
            </th>
            <th className={`p-3 text-left ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
              Date of Sale
            </th>
            <th className={`p-3 text-left ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className={darkMode ? 'bg-gray-800' : 'bg-white'}>
          {entries.map(entry => (
            <tr 
              key={entry.id} 
              className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} 
                ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}
            >
              {editingId === entry.id ? (
                <>
                  <td className={`p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
                    <input
                      type="text"
                      name="name"
                      value={editEntry.name}
                      onChange={handleEditInputChange}
                      className={`w-full p-1 rounded ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } border`}
                    />
                  </td>
                  <td className={`p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
                    <input
                      type="number"
                      name="cost"
                      value={editEntry.cost}
                      onChange={handleEditInputChange}
                      className={`w-full p-1 rounded ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } border`}
                      step="0.01"
                    />
                  </td>
                  <td className={`p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
                    <input
                      type="number"
                      name="sellingPrice"
                      value={editEntry.sellingPrice}
                      onChange={handleEditInputChange}
                      className={`w-full p-1 rounded ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } border`}
                      step="0.01"
                    />
                  </td>
                  <td className={`p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
                    <DatePicker
                      selected={new Date(editEntry.date)}
                      onChange={handleEditDateChange}
                      dateFormat="dd/MM/yyyy"
                      className={`w-full p-1 rounded ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } border`}
                    />
                  </td>
                  <td className={`p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
                    <button onClick={saveEdit} className="text-green-500 hover:text-green-600 mr-2">
                      <Check size={20} />
                    </button>
                    <button onClick={cancelEditing} className="text-red-500 hover:text-red-600">
                      <X size={20} />
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className={`p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
                    {entry.name}
                  </td>
                  <td className={`p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
                    {formatCurrency(entry.cost)}
                  </td>
                  <td className={`p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
                    {formatCurrency(entry.sellingPrice)}
                  </td>
                  <td className={`p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
                    {formatDate(entry.date)}
                  </td>
                  <td className={`p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border`}>
                    <button onClick={() => startEditing(entry)} className="text-blue-500 hover:text-blue-600 mr-2">
                      <Edit size={20} />
                    </button>
                    <button onClick={() => deleteEntry(entry.id)} className="text-red-500 hover:text-red-600">
                      <Trash2 size={20} />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList









import React, { useState, useEffect } from 'react'

function ProductCalculator() {
  const [costPrice, setCostPrice] = useState('')
  const [profitPercentage, setProfitPercentage] = useState('')
  const [sellingPrice, setSellingPrice] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const calculateSellingPrice = (cost, profit) => {
    const costValue = parseFloat(cost)
    const profitValue = parseFloat(profit)
    const profitAmount = (costValue * profitValue) / 100
    return Number((costValue + profitAmount).toFixed(2))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!costPrice || !profitPercentage) {
      alert('Please enter both cost price and profit percentage')
      return
    }

    const newSellingPrice = calculateSellingPrice(costPrice, profitPercentage)
    setSellingPrice(newSellingPrice)
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-all duration-500 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .input-transition {
          transition: all 0.3s ease-in-out;
        }
        .input-transition:focus {
          transform: scale(1.02);
        }
        .button-transition {
          transition: all 0.3s ease-in-out;
        }
        .button-transition:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .result-transition {
          transition: all 0.3s ease-in-out;
        }
      `}</style>

      <div className="bg-gray-800 text-white p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold">Profit Calculator</h2>
      </div>

      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="animate-fade-in">
          <div className="flex flex-col gap-4">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-2 text-gray-500 dark:text-gray-400">₹</span>
              <input
                type="number"
                placeholder="Cost Price"
                value={costPrice}
                onChange={(e) => setCostPrice(e.target.value)}
                className="w-full p-2 pl-7 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white input-transition"
                min="0"
                step="0.01"
                required
              />
            </div>
            <input
              type="number"
              placeholder="Profit %"
              value={profitPercentage}
              onChange={(e) => setProfitPercentage(e.target.value)}
              className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white input-transition"
              min="0"
              max="100"
              step="0.1"
              required
            />
            <button 
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 button-transition"
            >
              Calculate
            </button>
          </div>
        </form>
      </div>

      <div className="p-6">
        <div className="border rounded-lg overflow-hidden dark:border-gray-700 result-transition">
          <div className="grid grid-cols-3 bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
            <div className="p-3 font-semibold">Cost Price</div>
            <div className="p-3 font-semibold">Profit %</div>
            <div className="p-3 font-semibold">Selling Price</div>
          </div>
          
          {sellingPrice === null ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              Enter values and click Calculate to see the selling price
            </div>
          ) : (
            <div className="grid grid-cols-3 border-b dark:border-gray-600 animate-fade-in">
              <div className="p-3">₹{parseFloat(costPrice).toFixed(2)}</div>
              <div className="p-3">{profitPercentage}%</div>
              <div className="p-3 font-medium text-green-600 dark:text-green-400">
                ₹{sellingPrice}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCalculator


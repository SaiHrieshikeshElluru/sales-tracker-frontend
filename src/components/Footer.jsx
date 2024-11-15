import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer({ darkMode }) {
  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} py-6`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Ushodaya Matching Center</p>
            <p className="text-sm">Coded by Hrieshikesh</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <Phone size={16} className="mr-2" />
              <a href="tel:+919618190870" className="hover:underline">9618190870</a>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={16} className="mr-2" />
              <a href="mailto:elluru.saihrieshikesh@gmail.com" className="hover:underline">
                elluru.saihrieshikesh@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span>Hanamakonda, Warangal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
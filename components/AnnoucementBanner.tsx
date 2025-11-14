'use client'

import { useState } from 'react'
import { X, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          {/* Announcement Content */}
          <div className="flex items-center space-x-4 text-sm md:text-base">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Book before <strong>December 15th</strong> and get <strong>15% discount</strong> + free 3-month support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Link href="/contact">
            <Button 
              size="sm" 
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold shadow-lg"
              >
              <Calendar className="w-4 h-4 mr-2" />
              Get yours
            </Button>
                 </Link>
            {/* <Button 
              size="sm" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 font-semibold"
              onClick={() => window.open('https://wa.me/234XXXXXXXXX', '_blank')}
            >
              WhatsApp Now
            </Button> */}
          </div>
        </div>
      </div>
      
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  )
}



"use client"


import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
       

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Enterprise-Grade Technology
          <span className="text-blue-600 block">For Growing Businesses</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          As a registered Nigerian company, we understand local business challenges. 
          We build reliable, scalable solutions that establish credibility and drive measurable growth.
        </p>
        
        {/* Updated CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            asChild
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            <Link href="#portfolio">
              View Our Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            <Link href="/contact">
             Stop losing clients
            </Link>
          </Button>
        </div>

        {/* Urgent CTA Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200 max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-2 text-orange-600 mb-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">LIMITED TIME OFFER</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Book Your Free Consultation Before December 15th
          </h3>
          <p className="text-gray-600 mb-6">
             <strong className="text-green-600">Limited spots</strong> + 
            <strong className="text-green-600"> free 3-month support</strong> when you book now
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg font-semibold text-lg py-6"
              ><Link href="/contact">
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Strategy Session
              
              </Link>
              
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-50 font-semibold py-6"
              onClick={() => window.open('https://wa.me/234XXXXXXXXX', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quick WhatsApp Chat
            </Button> */}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ⚡ Usually responds in under 5 minutes
          </p>
        </div>

        {/* Social Proof & Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">47%</div>
            <div className="text-sm text-gray-600">Avg. Revenue Increase</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">24/7</div>
            <div className="text-sm text-gray-600">Dedicated Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">RC-8754824</div>
            <div className="text-sm text-gray-600">CAC Registered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">97.99%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
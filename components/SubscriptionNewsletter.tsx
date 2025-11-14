// components/newsletter-subscribe.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('🎉 Thank you! Check your email for welcome message.')
        setEmail('')
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    }
    // catch (error) {
    //   setMessage('Failed to subscribe. Please try again.')
    // } 
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get Business Growth Insights
        </h3>
        <p className="text-gray-600">
          Weekly tips on technology, business growth, and exclusive offers for Nigerian businesses.
        </p>
        <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 text-sm text-gray-600 mt-3">
          <span>✓</span>
          <span>CAC Registered • RC-87373745</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>
        {message && (
          <p className={`text-sm text-center ${
            message.includes('🎉') ? 'text-green-600' : 'text-red-600'
          }`}>
            {message}
          </p>
        )}
      </form>
      
      <p className="text-xs text-gray-500 text-center mt-4">
        No spam. Unsubscribe at any time. We respect your privacy.
      </p>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface ContactFormProps {
  buttonText?: string
  buttonVariant?: 'default' | 'outline' | 'secondary'
  className?: string
  showAdditionalFields?: boolean
  compact?: boolean
  width?: string
  height?: string
}

export default function ContactForm({ 
  buttonText = "Send Message", 
  buttonVariant = "default",
  className = "",
  showAdditionalFields = true,
  compact = false,
  width = "w-full max-w-md",
  height = "h-auto"
}: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message || 'Thank you! We will get back to you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        })
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`${width} ${height} ${className} mx-auto`}>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <Input
              name="name"
              placeholder="Your Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full text-base md:text-sm px-4 py-3 md:py-2"
            />
          </div>
          
          {/* Email Field */}
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Your Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full text-base md:text-sm px-4 py-3 md:py-2"
            />
          </div>

          {/* Additional Fields */}
          {showAdditionalFields && (
            <>
              <div>
                <Input
                  name="company"
                  placeholder="Business/Company name"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full text-base md:text-sm px-4 py-3 md:py-2"
                />
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full text-base md:text-sm px-4 py-3 md:py-2"
                />
              </div>
            </>
          )}

          {/* Message Textarea */}
          <div>
            <Textarea
              name="message"
              placeholder={
                compact 
                  ? "Tell us about your project..." 
                  : "Tell us about your project, challenges, and what you'd like to achieve... *"
              }
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
              className={`w-full text-base md:text-sm px-4 py-3 md:py-2 resize-vertical ${
                compact ? "min-h-[100px]" : "min-h-[120px]"
              }`}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          variant={buttonVariant}
          disabled={isLoading}
          className="w-full py-3 md:py-2 text-base md:text-sm font-semibold"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            buttonText
          )}
        </Button>
      </form>

      {/* Message Alert */}
      {message && (
        <div className={`mt-4 p-4 rounded-lg text-center ${
          message.includes('Thank you') || message.includes('successfully') 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          <div className="flex items-center justify-center space-x-2">
            {message.includes('Thank you') || message.includes('successfully') ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
            <span className="text-sm md:text-base">{message}</span>
          </div>
        </div>
      )}

      {/* Trust Text */}
      {!compact && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="block">✓ CAC Registered Company • RC-8754824</span>
            <span className="block mt-1">We typically respond within 2-4 hours during business days</span>
          </p>
        </div>
      )}
    </div>
  )
}
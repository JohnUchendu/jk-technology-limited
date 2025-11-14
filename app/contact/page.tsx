"use client"

import ContactForm from '@/components/ContactForm'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something Amazing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our team for a free consultation.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mt-6 border border-blue-200">
            <span className="text-sm font-medium text-gray-700">
              ✓ CAC Registered Company • RC-8754824
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@jktl.com.ng</p>
                    <p className="text-sm text-gray-500">We'll respond within 2-4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+234 703 658 0994</p>
                    <p className="text-sm text-gray-500">Mon - Fri, 9AM - 6PM WAT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">Port Harcourt, Nigeria</p>
                    <p className="text-sm text-gray-500">CAC Registered: RC-8754824</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  {/* <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quick Connect</h3>
                    <p className="text-gray-600">Prefer a quick chat?</p>
                    <button 
                      onClick={() => window.open('https://wa.me/2346580994', '_blank')}
                      className="text-green-600 font-semibold hover:text-green-700 mt-1"
                    >
                      Message us on WhatsApp →
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <ContactForm 
                buttonText="Send Message"
                showAdditionalFields={true}
                compact={false}
              />
            </div>
          </div>
        </div>
      </section>

     
    </main>
  )
}
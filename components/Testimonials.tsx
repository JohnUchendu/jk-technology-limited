"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    id: 1,
    name: "Hon. K.K. Ubani",
    company: "K.K. Ubani & Co.",
    role: "CEO",
    image: "/testimonials/kkubani.jpg",
    rating: 5,
    text: "JKTL transformed our outdated website into a modern sales machine. Within 3 months, our online clients increase by 156%. Their understanding of Nigerian business needs is exceptional.",
    project: "Corporate Law Firm",
    result: "156% Lead Growth",
    verified: true
  },
  {
    id: 2,
    name: "Chinwe Okoro",
    company: "EduTech Africa",
    role: "Operations Director",
    image: "/testimonials/chinwe.jpg",
    rating: 5,
    text: "The custom software solution JKT Labs built automated our manual enrollment processes, saving us 25+ hours weekly. Their support team is incredibly responsive and professional.",
    project: "Student Management System",
    result: "80% Time Saved",
    verified: true
  },
  {
    id: 3,
    name: "Emeka Nwosu",
    company: "Green Farms Ltd",
    role: "Managing Director",
    image: "/testimonials/emeka.jpg",
    rating: 5,
    text: "As a CAC registered company ourselves, we appreciate working with another legitimate Nigerian business. JKT Labs delivered our corporate website on time and within budget. Lead generation increased by 47%.",
    project: "Corporate Website Redesign",
    result: "47% More Leads",
    verified: true
  },
  {
    id: 4,
    name: "Mr Bob Pepple",
    company: "Eljards Limited Services",
    role: "Founder",
    image: "/testimonials/bob.jpg",
    rating: 5,
    text: "The mobile friendly website JKTL developed for our solar and business consulting company has revolutionized how we serve customers. User engagement tripled and we're now expanding to other African markets.",
    project: "Corporate Website",
    result: "3x User Engagement",
    verified: true
  },
  {
    id: 5,
    name: "David Chen",
    company: "Tech Logistics NG",
    role: "CTO",
    image: "/testimonials/david.jpg",
    rating: 5,
    text: "We needed a complex logistics tracking system integrated with multiple payment gateways. JKT Labs handled the technical challenges seamlessly. Their expertise in Nigerian payment systems is unmatched.",
    project: "Logistics Management System",
    result: "99.9% Uptime",
    verified: true
  },
  {
    id: 6,
    name: "Grace Williams",
    company: "Healthcare Plus",
    role: "Administrative Manager",
    image: "/testimonials/grace.jpg",
    rating: 5,
    text: "From consultation to delivery, JKT Labs demonstrated professionalism and technical excellence. Our hospital management system has improved patient care and operational efficiency significantly.",
    project: "Hospital Management Software",
    result: "60% Efficiency Gain",
    verified: true
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Quote className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Client Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Nigerian Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses across Nigeria overcome technical challenges and achieve remarkable growth.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span>4.9/5 from 3+ reviews</span>
            </div>
            <span>•</span>
            <span>✓ CAC Registered • RC-8754824</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="text-blue-100 group-hover:text-blue-200 transition-colors mb-4">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Testimonial Text */}
                <blockquote className="mt-4 mb-6">
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </blockquote>

                {/* Project & Result */}
                <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">Project: </span>
                    <span className="text-gray-700">{testimonial.project}</span>
                  </div>
                  <div className="text-sm mt-1">
                    <span className="font-semibold text-green-700">Result: </span>
                    <span className="text-green-600">{testimonial.result}</span>
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Businesses Choose JKT Labs
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">CAC Registered</h4>
                <p className="text-sm text-gray-600"></p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">⏱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">On-Time Delivery</h4>
                <p className="text-sm text-gray-600">100% Track Record</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">💬</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                <p className="text-sm text-gray-600">Always Available</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">💰</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">ROI Focused</h4>
                <p className="text-sm text-gray-600">Measurable Results</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join dozens of satisfied Nigerian businesses who trust JKT Labs with their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
               <Link href="/contact">
               
                Book Free Consultation
               </Link>
              </button>
              {/* <button 
                onClick={() => window.open('https://wa.me/234XXXXXXXXX', '_blank')}
                className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Chat on WhatsApp
              </button> */}
            </div>
            <p className="text-sm text-blue-200 mt-4">
              ✓ • 5+ Projects Delivered
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
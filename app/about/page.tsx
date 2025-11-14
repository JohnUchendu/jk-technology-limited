
import { Button } from '@/components/ui/button'
import { Check, Users, Target, Award, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About JKT Labs - CAC Registered Web Development Company in Nigeria',
  description: 'Learn about JKT Labs (RC-8754824), a trusted Nigerian web development company with proven track record of delivering enterprise-grade solutions for businesses.',
  keywords: 'about JKT Labs, Nigerian web development company, CAC registered, RC-8754824, Lagos software developers',
  openGraph: {
    title: 'About JKT Labs - Trusted Nigerian Web Development Company',
    description: 'CAC Registered (RC-8754824) company delivering enterprise-grade web and software solutions for Nigerian businesses.',
    type: 'website',
  },
}

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable business outcomes, not just code. Every project must contribute to your growth.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We become an extension of your team, understanding your business deeply to deliver solutions that truly work.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in code quality, design, and project delivery for every client.'
  },
  {
    icon: Heart,
    title: 'Passion for Impact',
    description: 'We\'re driven by the positive impact our solutions create for Nigerian businesses and their customers.'
  }
]

const stats = [
  { number: '3+', label: 'Projects Completed' },
  { number: '47%', label: 'Avg. Client Revenue Growth' },
  { number: '97.99%', label: 'Client Satisfaction Rate' },
  { number: '7', label: 'Years of Excellence' }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 border border-blue-200">
            <span className="text-sm font-medium text-gray-700">
              ✓ CAC Registered Company • RC-8754824
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building Digital Excellence
            <span className="text-blue-600 block">For Nigerian Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            JKT Labs is a CAC-registered Nigerian company dedicated to transforming businesses 
            through cutting-edge web and software solutions. We bridge the gap between technology 
            and business growth.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019, JKTL Labs emerged from a simple observation: many Nigerian businesses 
                  were struggling with outdated technology, missing out on growth opportunities, and 
                  losing competitive edge due to inadequate digital presence.
                </p>
                <p>
                  Our founder, John Uchendu, recognized that technology shouldn't be a barrier to business 
                  success but rather a catalyst for growth. With this vision, JKTL Labs was established 
                  as a CAC-registered company (RC-8754824) to provide reliable, enterprise-grade solutions 
                  tailored to the unique challenges of Nigerian businesses.
                </p>
                <p>
                  Today, we've helped dozens of businesses across various industries transform their 
                  operations, increase revenue, and establish dominant market positions through 
                  strategic technology implementation.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Why Choose JKT Labs?</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    CAC Registered & Legitimate Nigerian Company
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    Deep Understanding of Nigerian Business Landscape
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    Proven Track Record with Measurable Results
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    Ongoing Support & Maintenance
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define how we work with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the growing list of Nigerian businesses that trust JKTL Labs with their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 font-semibold">
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-blue-200 text-sm">
            ✓ CAC Registered Company • RC-8754824 • Trusted by Nigerian Businesses
          </div>
        </div>
      </section>

    </main>
  )
}

import { Check, ArrowRight, ExternalLink, Smartphone, Globe, Search, Zap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Professional Web Development Services Nigeria | JKT Labs',
  description: 'Get a modern, responsive website that establishes credibility and drives growth. CAC Registered web development company in Lagos.',
  keywords: 'web development Nigeria, website design Lagos, responsive websites, SEO optimization, CAC registered developers',
  openGraph: {
    title: 'Professional Web Development Services - JKT Labs',
    description: 'Modern, responsive websites that establish credibility and drive business growth in Nigeria.',
    type: 'website',
  },
}

const features = [
  {
    icon: Globe,
    title: 'Responsive Design',
    description: 'Websites that work perfectly on all devices - desktop, tablet, and mobile'
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built to rank higher on Google and attract more organic traffic'
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Lightning-fast loading speeds to reduce bounce rates and improve conversions'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Priority on mobile experience where most of your customers are'
  }
]

const demos = [
  {
    title: 'Corporate Website - Prime Retail',
    description: 'Modern corporate website with lead generation focus',
    image: '/demos/corporate-website.jpg',
    liveUrl: 'https://primeretail.ng',
    features: ['Responsive Design', 'Contact Forms', 'SEO Optimized', 'Fast Loading']
  },
  {
    title: 'Business Portfolio - Tech Logistics',
    description: 'Professional portfolio website for logistics company',
    image: '/demos/portfolio-website.jpg', 
    liveUrl: 'https://techlogistics.ng',
    features: ['Modern Design', 'Service Showcase', 'Client Testimonials', 'Mobile Optimized']
  },
  {
    title: 'Professional Services - EduTech Africa',
    description: 'Website for educational technology consulting firm',
    image: '/demos/services-website.jpg',
    liveUrl: 'https://edutechafrica.com',
    features: ['Service Pages', 'Blog Integration', 'Contact System', 'Social Media Links']
  }
]

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 border border-blue-200">
              <span className="text-sm font-medium text-gray-700">
                ✓ CAC Registered Company • RC-8754824
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Web Development
              <span className="text-blue-600 block">That Builds Trust & Drives Growth</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stop losing potential clients to competitors with better websites. Get a modern, 
              responsive website that establishes credibility and converts visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <Link href="/contact">
                  Get Your Website Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold">
                <Link href="#demos">
                  View Live Demos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Is Your Website Costing You Business?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  In today's digital age, your website is often the first interaction potential 
                  clients have with your business. An outdated or poorly functioning website can:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Damage your credibility and professional image
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Cause you to lose clients to competitors with better websites
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Make your business invisible on Google searches
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Frustrate mobile users with poor experience
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Solution</h3>
              <p className="text-blue-800 mb-6">
                We build websites that solve these problems and position your business for growth:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800"><strong>Establish Instant Credibility:</strong> Professional design that builds trust immediately</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800"><strong>Attract More Clients:</strong> SEO-optimized to rank higher on Google</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800"><strong>Convert Visitors:</strong> Strategic design that guides users to take action</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800"><strong>Mobile Excellence:</strong> Perfect experience on all devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes Our Websites Different</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build websites that don't just look good - they deliver real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demos */}
      <section id="demos" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Our Work in Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real websites we've built for Nigerian businesses - click to explore live versions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
                  <div className="text-white text-center p-4">
                    <Globe className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="font-bold text-lg">{demo.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{demo.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {demo.features.map((feature, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all"
                  >
                    <a href={demo.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      View Live Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a Website That Actually Works?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop losing business to competitors. Let's build you a website that establishes credibility and drives growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link href="/contact">
                Get Free Website Assessment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 font-semibold">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

    
    </main>
  )
}
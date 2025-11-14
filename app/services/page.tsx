
import { Code, Cpu, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Our Services - Web Development, Software Solutions & E-commerce | JKT Labs',
  description: 'Professional web development, custom software solutions, and e-commerce platforms for Nigerian businesses. CAC Registered Company (RC-8754824).',
  keywords: 'web development Nigeria, software solutions Lagos, e-commerce development, custom applications, CAC registered developers',
  openGraph: {
    title: 'Professional Web & Software Development Services - JKT Labs',
    description: 'CAC Registered company offering web development, software solutions, and e-commerce platforms for Nigerian businesses.',
    type: 'website',
  },
}

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Professional websites that establish credibility and drive business growth',
    features: ['Responsive Design', 'SEO Optimization', 'Fast Performance', 'Modern UI/UX'],
    href: '/services/web-development',
    cta: 'View Web Development',
    color: 'blue'
  },
  {
    icon: Cpu,
    title: 'Software Solutions',
    description: 'Custom software that automates processes and boosts operational efficiency',
    features: ['Process Automation', 'Custom Applications', 'API Integration', 'Scalable Architecture'],
    href: '/services/software-solutions',
    cta: 'View Software Solutions',
    color: 'purple'
  },
//   {
//     icon: ShoppingCart,
//     title: 'E-commerce Platforms',
//     description: 'Online stores that convert visitors into loyal, repeat customers',
//     features: ['Payment Integration', 'Inventory Management', 'Mobile Shopping', 'Analytics Dashboard'],
//     href: '/services/ecommerce-platforms',
//     cta: 'View E-commerce',
//     color: 'green'
//   }
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your business needs and create a detailed project roadmap'
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Our team designs and builds your solution with regular progress updates'
  },
  {
    step: '03',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your solution works perfectly across all devices'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We deploy your solution and provide ongoing maintenance and support'
  }
]

export default function ServicesPage() {
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
            Technology Solutions That
            <span className="text-blue-600 block">Drive Business Growth</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We build digital solutions that address your specific business challenges, 
            from establishing online presence to automating complex operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to solve your business challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={service.href}
                  className={`inline-flex items-center font-semibold text-${service.color}-600 hover:text-${service.color}-700 group-hover:translate-x-2 transition-transform`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach that ensures your project's success from concept to launch
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Solve Your Business Challenges?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can address your specific needs and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 font-semibold">
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

    
    </main>
  )
}
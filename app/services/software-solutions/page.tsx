
import { Check, ArrowRight, ExternalLink, Cpu, Zap, Database, Shield, Workflow } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Custom Software Development Nigeria | Business Automation Solutions | JKT Labs',
  description: 'Custom software solutions that automate processes, boost efficiency, and solve complex business challenges. CAC Registered software developers in Lagos.',
  keywords: 'custom software Nigeria, business automation Lagos, software development, process automation, enterprise software, CAC registered developers',
  openGraph: {
    title: 'Custom Software Solutions & Business Automation - JKT Labs',
    description: 'Automate processes and boost efficiency with custom software solutions for Nigerian businesses.',
    type: 'website',
  },
}

const features = [
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and streamline your business operations'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Centralize and secure your business data with custom databases'
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Connect your existing tools and systems for seamless workflow'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security to protect your business data'
  }
]

const demos = [
  {
    title: 'Inventory Management System',
    description: 'Custom inventory and stock management for retail business',
    image: '/demos/inventory-system.jpg',
    liveUrl: 'https://inventory.prime-retail.ng',
    features: ['Real-time Tracking', 'Automated Alerts', 'Reporting Dashboard', 'Multi-location']
  },
  {
    title: 'CRM & Sales Automation',
    description: 'Customer relationship management with sales pipeline automation',
    image: '/demos/crm-system.jpg', 
    liveUrl: 'https://crm.techlogistics.ng',
    features: ['Lead Management', 'Sales Automation', 'Customer Tracking', 'Analytics']
  },
  {
    title: 'School Management System',
    description: 'Complete management solution for educational institutions',
    image: '/demos/school-system.jpg',
    liveUrl: 'https://portal.edutechafrica.com',
    features: ['Student Management', 'Fee Processing', 'Academic Records', 'Parent Portal']
  }
]

const automationBenefits = [
  { metric: '70%', description: 'Reduction in manual data entry time' },
  { metric: '45%', description: 'Increase in operational efficiency' },
  { metric: '90%', description: 'Fewer human errors in processes' },
  { metric: '3x', description: 'Faster decision making with real-time data' }
]

export default function SoftwareSolutionsPage() {
  return (
    <main className="min-h-screen">
      
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 border border-purple-200">
              <span className="text-sm font-medium text-gray-700">
                ✓ CAC Registered Company • RC-8754824
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Custom Software Solutions
              <span className="text-purple-600 block">That Automate & Scale Your Business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stop wasting time on manual processes. We build custom software that automates 
              your operations, eliminates errors, and helps you scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                <Link href="/contact">
                  Get Custom Solution Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold">
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
                Are Manual Processes Slowing Your Growth?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Many businesses struggle with inefficient manual processes that:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Waste valuable employee time on repetitive tasks
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Lead to costly errors and data inconsistencies
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Make it difficult to scale operations efficiently
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Prevent real-time decision making with outdated information
                  </li>
                </ul>
                <p>
                  These inefficiencies cost Nigerian businesses millions in lost productivity 
                  and missed opportunities every year.
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Our Automation Solution</h3>
              <p className="text-purple-800 mb-6">
                We develop custom software that transforms your operations:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-800"><strong>Automate Repetitive Tasks:</strong> Free up your team for strategic work</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-800"><strong>Eliminate Human Errors:</strong> Ensure data accuracy and consistency</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-800"><strong>Scale Efficiently:</strong> Handle growth without proportional cost increases</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-purple-800"><strong>Real-time Insights:</strong> Make decisions based on current data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Measurable Business Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our custom software solutions deliver tangible results for Nigerian businesses
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {automationBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">{benefit.metric}</div>
                <div className="text-gray-600 text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Software Development Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build robust, scalable software solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demos */}
      <section id="demos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Software Solutions in Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore live demos of custom software we've built for Nigerian businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center relative">
                  <div className="text-white text-center p-4">
                    <Cpu className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="font-bold text-lg">{demo.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{demo.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {demo.features.map((feature, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white group-hover:shadow-lg transition-all"
                  >
                    <a href={demo.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      View Live Demo
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
      <section className="py-20 px-4 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Stop wasting time on manual processes. Let's build custom software that scales your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
              <Link href="/contact">
                Get Free Automation Assessment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-purple-700 font-semibold">
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
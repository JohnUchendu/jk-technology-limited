
import { Check, ArrowRight, Lightbulb, Target, BarChart, Users } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'IT Consulting Services Nigeria | Technology Strategy | JKT Labs',
  description: 'Strategic IT consulting to align technology with business goals. Digital transformation, technology roadmaps, and IT infrastructure planning for Nigerian businesses.',
  keywords: 'IT consulting Nigeria, technology strategy Lagos, digital transformation, IT infrastructure, business technology, CAC registered consultants',
  openGraph: {
    title: 'Strategic IT Consulting & Technology Planning - JKT Labs',
    description: 'Align technology with business objectives through expert IT consulting and strategic planning.',
    type: 'website',
  },
}

const services = [
  {
    icon: Target,
    title: 'Technology Strategy',
    description: 'Align technology investments with business objectives for maximum ROI'
  },
  {
    icon: BarChart,
    title: 'Digital Transformation',
    description: 'Modernize operations and leverage technology for competitive advantage'
  },
  {
    icon: Lightbulb,
    title: 'IT Infrastructure Planning',
    description: 'Design scalable and secure technology infrastructure for growth'
  },
  {
    icon: Users,
    title: 'Team Training & Enablement',
    description: 'Empower your team with the skills to leverage new technologies'
  }
]

const caseStudies = [
  {
    title: 'Retail Chain Digital Transformation',
    description: 'Strategic roadmap for nationwide retail chain technology upgrade',
    result: '35% operational efficiency improvement',
    features: ['Inventory System', 'POS Upgrade', 'Customer Analytics', 'Staff Training']
  },
  {
    title: 'Manufacturing Process Automation', 
    description: 'Technology assessment and implementation plan for manufacturing',
    result: '50% reduction in production errors',
    features: ['Process Mapping', 'Automation Strategy', 'Quality Control', 'Data Systems']
  },
  {
    title: 'Service Company Cloud Migration',
    description: 'Comprehensive cloud strategy and migration plan',
    result: '40% cost reduction in IT infrastructure',
    features: ['Cloud Assessment', 'Migration Plan', 'Security Strategy', 'Cost Analysis']
  }
]

const consultingBenefits = [
  { metric: '2-5x', description: 'ROI on technology investments' },
  { metric: '40%', description: 'Average cost savings identified' },
  { metric: '6-12', description: 'Months faster digital transformation' },
  { metric: '100%', description: 'Client satisfaction rate' }
]

export default function ITConsultingPage() {
  return (
    <main className="min-h-screen">
     
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 border border-orange-200">
              <span className="text-sm font-medium text-gray-700">
                ✓ CAC Registered Company • RC-8754824
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Strategic IT Consulting
              <span className="text-orange-600 block">That Drives Business Results</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Make smart technology decisions with expert guidance. We help you align IT investments 
              with business objectives for maximum impact and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                <Link href="/contact">
                  Book Strategy Session
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold">
                <Link href="#case-studies">
                  View Case Studies
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
                Making the Wrong Technology Decisions?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Many businesses struggle with technology decisions that lead to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Wasted investments on wrong technology solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Missed opportunities from outdated systems
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Security risks from improper technology implementation
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Inefficient operations due to poor technology alignment
                  </li>
                </ul>
                <p>
                  Without expert guidance, technology can become a cost center rather than 
                  a strategic advantage for your business.
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Our Consulting Approach</h3>
              <p className="text-orange-800 mb-6">
              We provide strategic guidance that transforms technology into business advantage:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-orange-800"><strong>Strategic Alignment:</strong> Ensure technology supports business objectives</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-orange-800"><strong>Cost Optimization:</strong> Identify savings and maximize ROI</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-orange-800"><strong>Risk Mitigation:</strong> Protect your business from technology risks</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-orange-800"><strong>Future-Proofing:</strong> Plan for scalability and emerging technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Consulting Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our strategic guidance delivers measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {consultingBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">{benefit.metric}</div>
                <div className="text-gray-600 text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT consulting to guide your technology decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from our IT consulting engagements with Nigerian businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all group bg-white">
                <div className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{study.description}</p>
                  
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-green-700 font-semibold text-sm">Result: {study.result}</div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.features.map((feature, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Smarter Technology Decisions?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get expert guidance to align technology with your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
              <Link href="/contact">
                Schedule Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-700 font-semibold">
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
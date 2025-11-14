import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, ArrowRight, TrendingUp, Users, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: "Starter",
    price: "₦200,000",
    description: "Stop losing clients to competitors with outdated websites",
    features: [
      "5-Page Professional Website - Establish instant credibility",
      "Mobile-First Design - Don't miss mobile traffic",
      "Basic SEO Setup - Start appearing on Google searches", 
      "Contact Form Integration - Never miss a lead again",
      "1 Month Technical Support - Peace of mind guarantee",
      "Fast Loading Speed - Reduce bounce rates immediately",
      "Social Media Integration - Boost your online presence"
    ],
    weaknessesAddressed: [
      "Fear of losing clients to better-looking competitors",
      "Embarrassment from outdated/unprofessional website",
      "Missing mobile customers with non-responsive design",
      "Low search visibility hurting lead generation"
    ],
    cta: "Fix My Website",
    popular: false,
    color: "blue",
    icon: Shield
  },
  {
    name: "Business",
    price: "₦450,000",
    description: "Automate processes and scale your operations efficiently",
    features: [
      "Up to 15 Page Custom Website - Outshine competitors",
      "E-commerce Integration - Start selling online 24/7",
      "Advanced SEO Strategy - Dominate search rankings",
      "Payment Gateway Setup - Secure multiple payment options",
      "CRM Integration - Never lose track of customers",
      "3 Months Priority Support - Focus on business, not tech issues",
      "Advanced Analytics - Make data-driven decisions",
      "API Integrations - Connect your business tools seamlessly",
      "Lead Capture Systems - Automate customer acquisition"
    ],
    weaknessesAddressed: [
      "Manual processes wasting valuable time and resources",
      "Competitors with better tech getting ahead",
      "Difficulty scaling operations efficiently", 
      "Missing revenue from lack of online sales",
      "Inefficient customer management costing sales"
    ],
    cta: "Scale My Business",
    popular: true,
    color: "purple",
    icon: TrendingUp
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Solve complex business challenges with tailored software solutions",
    features: [
      "Custom Software Development - Exactly what your business needs",
      "Dedicated Project Manager - Your single point of contact",
      "Scalable Architecture - Grow without technical limitations",
      "Advanced Security - Protect your business data and reputation",
      "API Development - Connect all your business systems",
      "Ongoing Maintenance - Future-proof your investment",
      "Training & Documentation - Empower your team",
      "24/7 Priority Support - Zero downtime guarantee",
      "Performance Optimization - Maximum efficiency always"
    ],
    weaknessesAddressed: [
      "Complex business processes needing automation",
      "Fear of data breaches and security issues",
      "Technical debt slowing down innovation",
      "Need for competitive advantage through technology",
      "Inefficient systems affecting customer experience"
    ],
    cta: "Solve Complex Challenges",
    popular: false,
    color: "green",
    icon: Users
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stop Losing Business to Technology Limitations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your competitors are investing in technology. Choose the solution that addresses your biggest business challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            
            return (
              <Card 
                key={index} 
                className={`relative border-2 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-xl scale-105' 
                    : 'border-gray-200'
                } transition-all duration-300 hover:shadow-lg group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className={`text-center pb-4 ${
                  plan.popular ? 'bg-purple-50' : 'bg-white'
                } rounded-t-lg`}>
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${
                      plan.color === 'blue' ? 'bg-blue-100' :
                      plan.color === 'purple' ? 'bg-purple-100' :
                      'bg-green-100'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        plan.color === 'blue' ? 'text-blue-600' :
                        plan.color === 'purple' ? 'text-purple-600' :
                        'text-green-600'
                      }`} />
                    </div>
                  </div>
                  <CardTitle className={`text-2xl font-bold ${
                    plan.color === 'blue' ? 'text-blue-600' :
                    plan.color === 'purple' ? 'text-purple-600' :
                    'text-green-600'
                  }`}>
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-gray-600">/project</span>}
                  </div>
                  <p className="text-gray-600 mt-2 font-medium">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-6">
                  {/* Pain Points Addressed */}
                  <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-semibold text-orange-800 text-sm mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      ADDRESSES THESE CHALLENGES:
                    </h4>
                    <ul className="text-xs text-orange-700 space-y-1">
                      {plan.weaknessesAddressed.map((weakness, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <h4 className="font-semibold text-gray-900 mb-4 text-sm">WHAT YOU GET:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    asChild
                    className={`w-full py-3 font-semibold ${
                      plan.popular 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : plan.color === 'blue' 
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-green-600 hover:bg-green-700'
                    } group-hover:shadow-lg transition-all`}
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Trust Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-semibold">CAC Registered Company • RC-8754824</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Unsure Which Solution You Need?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Many business owners struggle to identify their exact technology needs. Let us help you 
              analyze your challenges and recommend the perfect solution during a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                <Link href="/contact" className="flex items-center">
                  Get Free Technology Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 font-semibold"
              >
                <Link href="/contact">
                  Discuss Custom Requirements
                </Link>
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>15-min Discovery Call</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>Expert Recommendations</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// app/services/page.tsx
import { Code, Cpu, ArrowRight, Check, Globe, Shield, ShoppingCart } from 'lucide-react'
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
  {
    icon: Globe,
    title: 'Web Hosting',
    description: 'Reliable Vercel hosting with automatic SSL certificates',
    features: ['Vercel Premium Hosting', 'Free SSL Certificates', '99.9% Uptime', 'Global CDN', 'Monthly/Yearly Plans'],
    href: '#hosting',
    cta: 'View Hosting Plans',
    color: 'green'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    description: 'Online stores that convert visitors into loyal, repeat customers',
    features: ['Payment Integration', 'Inventory Management', 'Mobile Shopping', 'Analytics Dashboard'],
    href: '/services/ecommerce-platforms',
    cta: 'View E-commerce',
    color: 'indigo'
  }
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

// Paystack shop links
const PAYSTACK_LINKS = {
  MONTHLY_HOSTING: 'https://paystack.shop/pay/f3s6ajvf85', // ₦2,500/month
  YEARLY_HOSTING: 'https://paystack.shop/pay/f3s6ajvf85', // Same link for yearly (you might want a different one)
  SSL_CERTIFICATE: 'https://paystack.shop/pay/kzpoojdxpx', // ₦9,000/year
}

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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all group">
                  <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${service.color}-600`} />
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
              )
            })}
          </div>
        </div>
      </section>

      {/* Hosting & SSL Section */}
      <section id="hosting" className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-6">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Hosting & SSL Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reliable hosting with automatic SSL certificates included
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Monthly Hosting */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Hosting</h3>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">₦2,500</span>
                  <span className="text-gray-500 ml-2">per month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Vercel Premium Hosting',
                  'Automatic SSL Certificate',
                  '99.9% Uptime Guarantee',
                  'Global CDN',
                  'Automatic Backups',
                  '24/7 Support'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full font-semibold py-6 text-lg bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <a 
                  href={PAYSTACK_LINKS.MONTHLY_HOSTING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  Get Monthly Hosting
                </a>
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">Secure payment via Paystack</p>
            </div>

            {/* Yearly Hosting */}
            <div className="bg-white rounded-2xl p-8 border-2 border-green-500 shadow-lg relative transition-all hover:shadow-xl">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Yearly Hosting</h3>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">₦30,000</span>
                  <span className="text-gray-500 ml-2">per year</span>
                </div>
                <p className="text-green-600 font-medium mt-2">Save ₦5,000 (2 months free!)</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Everything in Monthly',
                  'Priority Support',
                  'Free Domain Setup',
                  'Advanced Analytics',
                  'Custom Email Setup',
                  '2 Free Emergency Fixes'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full font-semibold py-6 text-lg bg-green-600 hover:bg-green-700"
                asChild
              >
                <a 
                  href={PAYSTACK_LINKS.YEARLY_HOSTING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  Get Yearly Hosting
                </a>
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">Secure payment via Paystack</p>
            </div>

            {/* SSL Certificate */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SSL Certificate</h3>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">₦9,000</span>
                  <span className="text-gray-500 ml-2">per year</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  '256-bit Encryption',
                  'Trust Seal',
                  'Unlimited Reissues',
                  '99% Browser Recognition',
                  'Site Seal',
                  'Daily Malware Scan'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full font-semibold py-6 text-lg bg-purple-600 hover:bg-purple-700"
                asChild
              >
                <a 
                  href={PAYSTACK_LINKS.SSL_CERTIFICATE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  Purchase SSL Certificate
                </a>
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">Secure payment via Paystack</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Our Hosting?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Powered by Vercel</h4>
                <p className="text-gray-600 text-sm">
                  Industry-leading infrastructure with edge network performance
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">SSL Included</h4>
                <p className="text-gray-600 text-sm">
                  Free automatic SSL certificates with all hosting plans
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Managed Service</h4>
                <p className="text-gray-600 text-sm">
                  We handle setup, maintenance, and support so you don't have to
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2 text-center">How It Works:</h4>
              <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
                <li>Click on your preferred plan button</li>
                <li>You'll be redirected to Paystack for secure payment</li>
                <li>Complete your payment details</li>
                <li>After successful payment, we'll contact you within 24 hours</li>
                 </ol>
            </div>
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
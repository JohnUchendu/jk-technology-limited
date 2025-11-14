
import { Check, ArrowRight, ExternalLink, ShoppingCart, CreditCard, Package, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'E-commerce Development Nigeria | Online Store Solutions | JKT Labs',
  description: 'Professional e-commerce platforms that convert visitors into customers. Secure payment integration, inventory management, and mobile shopping experiences.',
  keywords: 'e-commerce development Nigeria, online store Lagos, shopping cart, payment integration, mobile commerce, CAC registered developers',
  openGraph: {
    title: 'Professional E-commerce Platform Development - JKT Labs',
    description: 'Build online stores that convert visitors into loyal customers with secure payment processing.',
    type: 'website',
  },
}

const features = [
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Multiple payment options including cards, transfers, and mobile money'
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Real-time stock tracking and automated inventory updates'
  },
  {
    icon: ShoppingCart,
    title: 'Mobile Shopping',
    description: 'Optimized mobile experience for on-the-go customers'
  },
  {
    icon: TrendingUp,
    title: 'Sales Analytics',
    description: 'Comprehensive dashboard to track performance and growth'
  }
]

const demos = [
  {
    title: 'Fashion E-commerce Store',
    description: 'Modern online fashion store with size guides and lookbook',
    image: '/demos/fashion-store.jpg',
    liveUrl: 'https://stylehub.ng',
    features: ['Product Variants', 'Size Guides', 'Lookbook', 'Wishlist']
  },
  {
    title: 'Electronics Marketplace',
    description: 'Multi-vendor electronics marketplace with reviews',
    image: '/demos/electronics-store.jpg', 
    liveUrl: 'https://techmart.ng',
    features: ['Multi-vendor', 'Product Reviews', 'Comparison Tools', 'Warranty Management']
  },
  {
    title: 'Grocery Delivery Platform',
    description: 'Online grocery store with delivery scheduling',
    image: '/demos/grocery-store.jpg',
    liveUrl: 'https://freshmart.ng',
    features: ['Delivery Scheduling', 'Fresh Produce', 'Subscription Boxes', 'Recipe Integration']
  }
]

const ecommerceStats = [
  { metric: '24/7', description: 'Store open for business' },
  { metric: '3x', description: 'Average sales increase' },
  { metric: '45%', description: 'Mobile transactions' },
  { metric: '60%', description: 'Repeat customer rate' }
]

export default function EcommercePlatformsPage() {
  return (
    <main className="min-h-screen">
    
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 border border-green-200">
              <span className="text-sm font-medium text-gray-700">
                ✓ CAC Registered Company • RC-8754824
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              E-commerce Platforms That
              <span className="text-green-600 block">Convert & Scale</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your business with online stores that work 24/7, reach more customers, 
              and drive consistent revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                <Link href="/contact">
                  Launch Your Online Store
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 font-semibold">
                <Link href="#demos">
                  View Store Demos
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
                Are You Missing Out on Online Sales?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The e-commerce revolution is here, and businesses without online stores are losing:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Potential customers who prefer shopping online
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Revenue from 24/7 sales opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Market share to competitors with better online presence
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">•</span>
                    Mobile customers who shop on their phones
                  </li>
                </ul>
                <p>
                  In Nigeria's growing digital economy, not having an e-commerce presence means 
                  leaving money on the table every single day.
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Our E-commerce Solution</h3>
              <p className="text-green-800 mb-6">
                We build online stores that capture the digital market:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-green-800"><strong>24/7 Revenue Stream:</strong> Sell anytime, anywhere to Nigerian customers</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-green-800"><strong>Mobile-First Experience:</strong> Capture the growing mobile shopping trend</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-green-800"><strong>Secure Payments:</strong> Multiple payment options including local methods</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-green-800"><strong>Scale Nationwide:</strong> Reach customers across Nigeria without physical stores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">E-commerce Growth Potential</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nigerian businesses see significant results with proper e-commerce platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ecommerceStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete E-commerce Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a successful online store
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Successful Online Stores We've Built</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore real e-commerce platforms serving Nigerian customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-300 hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
                  <div className="text-white text-center p-4">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="font-bold text-lg">{demo.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{demo.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Store Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {demo.features.map((feature, idx) => (
                        <span key={idx} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:shadow-lg transition-all"
                  >
                    <a href={demo.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Visit Live Store
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
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Selling Online?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on the e-commerce revolution. Launch your online store and start growing your business 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
              <Link href="/contact">
                Get Free E-commerce Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-green-700 font-semibold">
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
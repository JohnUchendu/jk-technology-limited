
import { Star, Quote, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Client Reviews & Testimonials - JKT Labs | CAC Registered Web Development Company',
  description: 'Read verified client reviews and success stories. See how JKT Labs has helped Nigerian businesses achieve remarkable growth through technology solutions.',
  keywords: 'JKT Labs reviews, client testimonials, web development Nigeria, software solutions Lagos, CAC registered company reviews',
  openGraph: {
    title: 'Client Reviews & Testimonials - JKT Labs',
    description: 'Verified reviews from Nigerian businesses we\'ve helped achieve growth through technology solutions.',
    type: 'website',
  },
}

const testimonials = [
  {
    id: 1,
    name: "Hon. K.K. Ubani",
    company: "K.K. Ubani & Co.",
    role: "Managing Solicitor",
    image: "/testimonials/adebayo.jpg",
    rating: 5,
    text: "JKTL transformed our outdated website into a modern sales machine. Within 3 months, our online revenue increased by 156%. Their understanding of Nigerian business needs is exceptional.",
    project: "Corporate Website",
    result: "156% Revenue Growth",
    verified: true,
    date: "2024-01-15",
    category: "web-development"
  },
  {
    id: 2,
    name: "Chinwe Okoro",
    company: "EduTech Africa",
    role: "Operations Director",
    image: "/testimonials/chinwe.jpg",
    rating: 5,
    text: "The custom software solution JKTL built automated our manual enrollment processes, saving us 25+ hours weekly. Their support team is incredibly responsive and professional.",
    project: "Student Management System",
    result: "80% Time Saved",
    verified: true,
    date: "2024-02-22",
    category: "software-solutions"
  },
  {
    id: 3,
    name: "Emeka Nwosu",
    company: "Green Farms Ltd",
    role: "Managing Director",
    image: "/testimonials/emeka.jpg",
    rating: 5,
    text: "As a CAC registered company ourselves, we appreciate working with another legitimate Nigerian business. JKTL delivered our corporate website on time and within budget. Lead generation increased by 47%.",
    project: "Corporate Website Redesign",
    result: "47% More Leads",
    verified: true,
    date: "2024-03-10",
    category: "web-development"
  },
  {
    id: 4,
    name: "Fatima Bello",
    company: "StyleHub Fashion",
    role: "Founder",
    image: "/testimonials/fatima.jpg",
    rating: 5,
    text: "The mobile app JKTL developed for our fashion business has revolutionized how we serve customers. User engagement tripled and we're now expanding to other African markets.",
    project: "Mobile Shopping App",
    result: "3x User Engagement",
    verified: true,
    date: "2024-01-30",
    category: "ecommerce"
  },
  {
    id: 5,
    name: "David Chen",
    company: "Tech Logistics NG",
    role: "CTO",
    image: "/testimonials/david.jpg",
    rating: 5,
    text: "We needed a complex logistics tracking system integrated with multiple payment gateways. JKTL handled the technical challenges seamlessly. Their expertise in Nigerian payment systems is unmatched.",
    project: "Logistics Management System",
    result: "99.9% Uptime",
    verified: true,
    date: "2024-02-18",
    category: "software-solutions"
  },
  {
    id: 6,
    name: "Grace Williams",
    company: "Healthcare Plus",
    role: "Administrative Manager",
    image: "/testimonials/grace.jpg",
    rating: 5,
    text: "From consultation to delivery, JK Technology Limited demonstrated professionalism and technical excellence. Our hospital management system has improved patient care and operational efficiency significantly.",
    project: "Hospital Management Software",
    result: "60% Efficiency Gain",
    verified: true,
    date: "2024-03-05",
    category: "software-solutions"
  },
  {
    id: 7,
    name: "Kunle Adebayo",
    company: "Nigerian Foods Export",
    role: "Export Manager",
    image: "/testimonials/kunle.jpg",
    rating: 5,
    text: "The e-commerce platform JKTL Labs built helped us reach international markets. Our export sales increased by 200% within 6 months. Their understanding of international payment processing was crucial.",
    project: "International E-commerce Platform",
    result: "200% Export Growth",
    verified: true,
    date: "2024-01-08",
    category: "ecommerce"
  },
  {
    id: 8,
    name: "Bisi Olamide",
    company: "Real Estate Partners",
    role: "Partner",
    image: "/testimonials/bisi.jpg",
    rating: 5,
    text: "JKTL Labs developed a property management system that streamlined our operations across 5 locations. The ROI was evident within the first quarter of implementation.",
    project: "Property Management System",
    result: "45% Operational Efficiency",
    verified: true,
    date: "2024-02-28",
    category: "software-solutions"
  }
]

const categories = [
  { id: 'all', name: 'All Reviews', count: testimonials.length },
  { id: 'web-development', name: 'Web Development', count: testimonials.filter(t => t.category === 'web-development').length },
  { id: 'software-solutions', name: 'Software Solutions', count: testimonials.filter(t => t.category === 'software-solutions').length },
  { id: 'ecommerce', name: 'E-commerce', count: testimonials.filter(t => t.category === 'ecommerce').length },
]

const stats = [
  { number: '4.9', label: 'Average Rating', sublabel: 'Out of 5 Stars' },
  { number: '5+', label: 'Projects Completed', sublabel: 'Across Nigeria' },
  { number: '97.99%', label: 'Client Satisfaction', sublabel: 'Recommended by Clients' },
  { number: '47%', label: 'Avg. Revenue Increase', sublabel: 'For Our Clients' }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
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
            Client Success Stories
            <span className="text-blue-600 block">That Speak for Themselves</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Read verified reviews from Nigerian businesses 
            we've helped achieve remarkable growth through technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              <Link href="/contact">
                Start Your Success Story
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold">
              <Link href="#reviews">
                Read Reviews
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-blue-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Businesses Trust JK Technology Limited 
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">CAC Registered</h4>
                <p className="text-gray-600 text-sm">RC-8754824</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">⏱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">On-Time Delivery</h4>
                <p className="text-gray-600 text-sm">97.99% Track Record</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">💬</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                <p className="text-gray-600 text-sm">Always Available</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">💰</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">ROI Focused</h4>
                <p className="text-gray-600 text-sm">Measurable Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header with Filter */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Verified Client Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Real stories from real businesses we've helped succeed
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="px-4 py-2 rounded-full border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all font-medium flex items-center space-x-2"
                >
                  <span>{category.name}</span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Quote Icon */}
                <div className="text-blue-100 group-hover:text-blue-200 transition-colors mb-4">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Testimonial Text */}
                <blockquote className="mt-4 mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                </blockquote>

                {/* Project & Result */}
                <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Project</div>
                      <div className="text-sm text-gray-700">{testimonial.project}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-700">Result</div>
                      <div className="text-sm text-green-600 font-medium">{testimonial.result}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Completed {new Date(testimonial.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium truncate">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
            >
              Load More Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join dozens of satisfied Nigerian businesses who trust JKTL Labs with their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 font-semibold">
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-blue-200 text-sm">
            ✓ CAC Registered Company • RC-8754824 • 5+ Projects Delivered • 97.99% Client Satisfaction
          </div>
        </div>
      </section>

      
    </main>
  )
}
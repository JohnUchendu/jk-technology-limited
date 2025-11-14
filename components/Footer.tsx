import Image from "next/image";
import NewsletterSubscribe from "./SubscriptionNewsletter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                 <Image src="/logos/jktl-logo.png" width={100} height={100} alt='jktl logo'/>
              </div>
              <div>
                <h3 className="text-xl font-bold">JK Technology Limited</h3>
                <p className="text-blue-200 text-sm"></p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A registered Nigerian company providing enterprise-grade web and software development 
              solutions to businesses across Africa and beyond.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>✓ CAC Registered</span>
              <span>•</span>
              <span>✓ Trusted Partner</span>
              <span>•</span>
              <span>✓ Quality Guaranteed</span>
            </div>
          </div>


<div className="md:col-span-2">
 
  <NewsletterSubscribe />
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="services/web-development" className="hover:text-white">Web Development</a></li>
              <li><a href="services/software-solutions" className="hover:text-white">Software Solutions</a></li>
              {/* <li><a href="#" className="hover:text-white">E-commerce</a></li> */}
              <li><a href="services/it-consulting" className="hover:text-white">IT Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@jktl.com.ng</li>
              <li>+234 703 658 0994</li>
              <li>Port Harcourt, Nigeria</li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JK Technology Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
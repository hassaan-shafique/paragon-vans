'use client'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-4 md:px-10 lg:px-20 border-t border-red-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Company Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Paragon Van Lines</h2>
          <p className="text-sm mb-4">Your trusted moving company, offering top-tier moving services across the country. We care about your belongings as much as you do.</p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4 text-red-600" />
              5616094272
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4 text-red-600" />
              8484595056
            </p>
            <p className="text-sm break-all">📧 paragonvanlines770@gmail.com</p>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-red-600 mb-4">Follow Us</h3>
          <div className="flex justify-center gap-8 text-xl">
            <a
              href="https://www.instagram.com/paragon_van_lines_inc__?igsh=ZXUyb2FzNDB1cnZj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.facebook.com/share/1BXCAkiszM/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaFacebook size={28} />
            </a>
          </div>
        </div>

        {/* Right: Quick Links */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-red-600 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-red-600 transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-red-600 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-600 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-red-200 pt-6">
        <p>&copy; {new Date().getFullYear()} <span className="text-red-600 font-semibold">Paragon Van Lines</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

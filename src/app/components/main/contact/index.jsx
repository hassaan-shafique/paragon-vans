'use client'
import React, { useState } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    dropoff: '',
    description: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id='contact'> 
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl overflow-hidden">
        
        {/* Left - Contact Form */}
        <div className="p-8 bg-white">
          <h1 className="text-3xl font-bold text-red-900 mb-6">Contact Paragon Van Lines</h1>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 placeholder-gray-500 text-black"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 placeholder-gray-500 text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 placeholder-gray-500 text-black"
            />
            <input
              type="text"
              name="pickup"
              placeholder="Pickup Location"
              value={formData.pickup}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 placeholder-gray-500 text-black"
              required
            />
            <input
              type="text"
              name="dropoff"
              placeholder="Drop-off Location"
              value={formData.dropoff}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2  placeholder-gray-500 text-black"
              required
            />
             <input
              type="text"
              name="description"
              placeholder="Any Instruction"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2  placeholder-gray-500 text-black"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 font-semibold rounded-lg hover:bg-red-700 transition-all placeholder-gray-500 "
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right - Info + SVG */}
        <div className="bg-red-400 text-white flex flex-col justify-center items-center p-8 space-y-6 relative">
          {/* Decorative SVG */}
          <div className="absolute top-4 right-4 opacity-20 w-24 h-24">
            <svg viewBox="0 0 100 100" fill="currentColor" className="text-white">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>

          <div className="text-center z-10">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p className="text-sm">We’re here to help you move with ease.</p>
          </div>

          <div className="z-10 text-center">
            <p className="text-sm break-all"> 📧 paragonvanlines770@gmail.com</p>
          </div>
          <div className="z-10 text-center space-y-2">
  <p className="flex items-center justify-center gap-2">
    <Phone className="w-4 h-4 white" />
    5616094272
  </p>
  <p className="flex items-center justify-center gap-2">
    <Phone className="w-4 h-4 white" />
    8484595056
  </p>
  <p className="flex items-center justify-center gap-2">
    <Phone className="w-4 h-4 white" />
    5618099517
  </p>
</div>

          <div className="z-10 text-center flex gap-7">
           
            <a
              href="https://www.instagram.com/paragon_van_lines_inc__?igsh=ZXUyb2FzNDB1cnZj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:text-pink-200 transition"
            >
              <FaInstagram size={24} />
             
            </a>
            <a
              href="https://www.facebook.com/share/1BXCAkiszM/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:text-pink-200 transition"
            >
              <FaFacebook size={24} />
             
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact

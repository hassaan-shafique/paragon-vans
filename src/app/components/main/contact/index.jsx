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
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl overflow-hidden border border-red-700">
          
          {/* Left - Contact Form */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-red-500 mb-6">Contact Paragon Van Lines</h1>
            <form className="space-y-4">
              {["name", "phone", "email", "pickup", "dropoff", "description"].map((field, i) => (
                <input
                  key={i}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  placeholder={
                    field === "description"
                      ? "Any Instruction"
                      : field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  required={field !== "email"}
                  className="w-full px-4 py-2  text-white border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 placeholder-gray-400 transition-all"
                />
              ))}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 font-semibold rounded-lg transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right - Info + Socials */}
          <div className="bg-red-600 text-white flex flex-col justify-center items-center p-8 space-y-6 relative">
            {/* Decorative SVG */}
            <div className="absolute top-4 right-4 opacity-20 w-24 h-24">
              <svg viewBox="0 0 100 100" fill="currentColor" className="text-black">
                <circle cx="50" cy="50" r="50" />
              </svg>
            </div>

            <div className="text-center z-10">
              <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
              <p className="text-sm">We’re here to help you move with ease.</p>
            </div>

            <div className="z-10 text-center">
              <p className="text-sm break-all">📧 paragonvanlines770@gmail.com</p>
            </div>

            <div className="z-10 text-center space-y-2">
              {["5616094272", "8484595056", "5618099517"].map((num, i) => (
                <p key={i} className="flex items-center justify-center gap-2 text-white">
                  <Phone className="w-4 h-4" />
                  {num}
                </p>
              ))}
            </div>

            <div className="z-10 text-center flex gap-7">
              <a
                href="https://www.instagram.com/paragon_van_lines_inc__?igsh=ZXUyb2FzNDB1cnZj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-transform transform hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/share/1BXCAkiszM/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-transform transform hover:scale-110"
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

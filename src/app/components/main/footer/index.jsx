'use client';
import React from 'react';
import { FaFacebook, FaInstagram, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaMoneyBillWave } from 'react-icons/fa';
import { Phone } from 'lucide-react';
import { SiZelle, SiVenmo } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-4 md:px-10 lg:px-20 border-t border-red-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Company Info */}
        <div className="md:col-span-2 text-center md:text-left">
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
            <p>4838 Ne 12 Ave Oakland Park, FL 33334<br />Suite # A</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="text-center md:text-left">
  <h3 className="text-xl font-semibold text-red-600 mb-4">Working Hours</h3>
  <ul className="text-sm space-y-2">
    {[
      { day: 'Monday', hours: '9:00am – 9:00pm' },
      { day: 'Tuesday', hours: '9:00am – 9:00pm' },
      { day: 'Wednesday', hours: '9:00am – 9:00pm' },
      { day: 'Thursday', hours: '9:00am – 9:00pm' },
      { day: 'Friday', hours: '9:00am – 9:00pm' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' },
    ].map(({ day, hours }) => (
      <li
        key={day}
        className="flex justify-between items-center border border-gray-200 rounded-md px-4 py-2 bg-gray-50"
      >
        <span className="font-medium">{day}</span>
        <span className="text-gray-700">{hours}</span>
      </li>
    ))}
  </ul>
</div>


        {/* Payment Accepted */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-red-600 mb-4">Payment Accepted</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-2xl text-gray-700">
            <FaCcVisa title="Visa" />
            <FaCcMastercard title="MasterCard" />
            <FaCcAmex title="American Express" />
            <FaCcDiscover title="Discover" />
            <FaMoneyBillWave title="Cash/Check" />
            <SiVenmo title="Venmo" />
            <SiZelle title="Zelle" />
          </div>
        </div>

        {/* Quick Links */}
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
            <li>
              <a href="#testimonials" className="hover:text-red-600 transition">
                Testimonials
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-6 flex justify-center md:justify-end gap-4 text-xl">
            <a
              href="https://www.instagram.com/paragon_van_lines_inc__?igsh=ZXUyb2FzNDB1cnZj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1BXCAkiszM/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-red-200 pt-6">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-red-600 font-semibold">Paragon Van Lines</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

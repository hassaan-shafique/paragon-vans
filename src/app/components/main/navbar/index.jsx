"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Paragon Logo" width={400} height={300} />
          </div>

          {/* Right Side: Call + Button + Links */}
          <div className="w-full md:w-auto mt-4 md:mt-0 flex flex-col items-start md:items-end text-center md:text-right">
            {/* Call and Button */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-3">
              <span className="text-gray-800 font-semibold text-base">
                Call us: <a href="tel:+1234567890" className="text-red-600 hover:underline">800-392-9570
                </a>
              </span>
              <Link
                href="#contact"
                className="mt-2 md:mt-0 bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700 transition duration-300 text-sm font-medium"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex space-x-8 text-gray-800 font-medium text-base">
              {["Home", "About Us", "Services", "Gallery","States", "Testimonials" , "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item === "Home" ? "/" : `#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="hover:text-red-600 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden absolute top-4 right-6">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-gray-800 font-medium">
            {["Home", "About Us", "Services", "Gallery", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={item === "Home" ? "/" : `#${item.toLowerCase().replace(/\s+/g, "")}`}
                onClick={toggleMenu}
                className="block hover:text-red-600 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

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
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/paragon-logo.png" alt="Paragon Logo" width={60} height={60} />
          <span className="text-xl md:text-2xl font-bold text-red-600 tracking-wide">
            Paragon Van Lines
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium text-base">
          {["Home", "About Us", "Services", "Gallery", "Contact"].map((item, index) => (
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

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-gray-800 font-medium">
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
    </nav>
  );
};

export default Navbar;

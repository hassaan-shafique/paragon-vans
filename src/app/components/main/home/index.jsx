"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section id="home">
      <div className="relative h-[90vh] w-full">
        {/* Background Image */}
        <Image
          src="truck.png"
          alt="Paragon Van Lines"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

        {/* Main Content */}
        <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
          
          {/* Spacer (Left Side) */}
          <div className="hidden md:block w-full md:w-1/2"></div>

          {/* Right Section (Card) */}
          <div className="text-gray-800 w-full md:w-1/2 relative">
            {/* Background Flag */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/flag.svg"
                alt="Background Flag"
                fill
                className="object-cover opacity-90 blur-sm"
              />
            </div>

            {/* Foreground Card */}
            <div className="relative z-10 bg-white p-8 md:p-10 rounded-2xl backdrop-blur-md shadow-2xl border border-red-600">
              <div className="mb-6 -ml-10">
                <Image
                  src="/bg-paragon.png"
                  alt="Paragon Van Lines"
                  width={220}
                  height={100}
                  className="object-contain"
                />
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-800">
                Professional Moving & Storage Services
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mt-4 font-light">
                Reliable. Affordable. <span className="text-red-600">Nationwide.</span>
              </p>

              <div className="flex gap-4 mt-6 flex-wrap">
                <Link
                  href="#contact"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
                >
                  Contact
                </Link>
                <button className="bg-white hover:bg-gray-100 text-red-600 font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300">
                  Book Us
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <> 
    <section id="home"> 
    <div className="relative h-[90vh] w-full">
      {/* Background Image */}
      <Image
        src="/paragon-home.jpg"
        alt="Paragon Van Lines"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
        
        {/* Left Section */}
        <div className="text-white w-full md:w-1/2 mb-10 md:mb-0 relative">
  {/* Blurred Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/flag.svg"
      alt="Background Flag"
      fill
      className="object-cover opacity-70 blur-sm"
    />
  </div>

  {/* Foreground Card */}
  <div className="relative z-10 bg-black/50 p-8 md:p-10 rounded-2xl backdrop-blur-md shadow-sm">
    <div className="mb-6">
      <Image
        src="/bg-paragon.png"
        alt="Paragon Van Lines"
        width={220}
        height={100}
        className="object-contain"
      />
    </div>

    <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
      Professional Moving & Storage Services
    </h1>

    <p className="text-lg md:text-xl text-gray-200 mt-4 font-light">
      Reliable. Affordable. Nationwide.
    </p>

    <div className="flex gap-4 mt-6">
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


        {/* Right Section - Trust Card */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-white/90 p-6 md:p-8 rounded-2xl shadow-xl max-w-sm text-center border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Trusted Nationwide
            </h3>
            <p className="text-gray-600 mb-4">
              Rated <span className="font-bold text-yellow-500">4.9/5</span> by 1,200+ customers
            </p>
            <div className="flex justify-center mb-4">
              {"★★★★★".split("").map((_, idx) => (
                <span key={idx} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <div className="text-sm text-gray-500 italic">
              "Smoothest move ever – highly recommended!" <br />– Sarah L.
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default Home;

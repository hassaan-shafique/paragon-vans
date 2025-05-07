'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <section id="home" className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/main-image.png"
          alt="Professional Moving Services"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-75"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/3 to-transparent z-10" />
      {/* Content */}
      <div className="relative z-20 flex items-center h-full px-6 md:px-20">
        <div className="text-white w-full md:w-2/3 lg:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide drop-shadow-md">
            Professional Moving & Storage Services
          </h1>

          <p className="text-xl md:text-2xl font-light text-gray-200">
            Reliable. Affordable. <span className="text-red-500 font-semibold">Nationwide.</span>
          </p>

          <Link
            href="#contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl transition duration-300"
          >
            Get A Quote Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

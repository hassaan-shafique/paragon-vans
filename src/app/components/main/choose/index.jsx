"use client"

import React from 'react'

const ChooseUs = () => {
    return (
      <section className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Why Choose Paragon Van Lines?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Experienced Professionals",
              desc: "Our trained team ensures your move is handled with the utmost care and efficiency.",
            },
            {
              title: "Nationwide Services",
              desc: "We cover long-distance moves across the entire United States with reliable delivery.",
            },
            {
              title: "Transparent Pricing",
              desc: "No hidden fees. Just clear, upfront, and competitive pricing.",
            },
          ].map((item, index) => (
            <div key={index} className="border border-red-200 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-red-600 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ChooseUs;
  
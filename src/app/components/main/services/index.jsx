import React from "react";
import Image from "next/image";

const services = [
  {
    title: "White Glove Moves",
    image: "/services/gloves.jpg",
    desc: "Our white glove service ensures the highest level of care, precision, and discretion when handling luxury furnishings, delicate décor, and high-end residences.",
  },
  {
    title: "Packing & Unpacking",
    image: "/services/packaging-services.jpeg",
    desc: "We take the stress out of your move by providing efficient, organized, and secure packing and unpacking services tailored to your specific needs.",
  },
  {
    title: "Commercial",
    image: "/services/custom.jpg",
    desc: "From small offices to large corporate spaces, we provide smooth, disruption-free commercial moves with expert planning and execution.",
  },
  {
    title: "International",
    image: "/services/international.png",
    desc: "Moving overseas? We offer end-to-end international relocation support, including customs handling, shipping, and delivery coordination.",
  },
  {
    title: "Antique & Fine Art",
    image: "/services/fine-art-movers.png",
    desc: "We use museum-grade materials and techniques to transport antique furniture, sculptures, and fine art with the utmost care and expertise.",
  },
  {
    title: "Long Distance Moves",
    image: "/services/long-move.jpg",
    desc: "Whether you're moving to another state or across the country, we offer reliable and timely long-distance moving services with detailed tracking.",
  },
  {
    title: "Partial & Full Packing",
    image: "/services/partial.jpg",
    desc: "Choose the level of service that works for you—our team can handle everything or assist with specific items you need packed with care.",
  },
  {
    title: "Secure Storage",
    image: "/services/secure-storage.jpg",
    desc: "Our secure storage solutions include clean, climate-controlled facilities ideal for storing household goods, business inventory, or seasonal items.",
  },
  {
    title: "Residential",
    image: "/services/Residential.jpg",
    desc: "We make moving homes easy and stress-free with personalized plans, skilled movers, and a commitment to protecting your belongings.",
  },
];


const Services = () => {
  return (
    <section id="services" className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-600">
          Our Services
        </h2>
         
         <div>
          <p className="text-2xl text-black"> 25+ Years Experience in Moving & Storage
	The best choice for Relocation
	We bring the best value to transportation solutions, You can count on professional movers at Paragon Van lines
  </p>
</div>

        <div className=" mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-red-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-90"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

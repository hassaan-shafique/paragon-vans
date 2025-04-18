import React from "react";
import Image from "next/image";

const services = [
  {
    title: "White Glove Moves",
    image: "/services/gloves.jpg",
    desc: "Top-tier, careful handling for luxury items and homes.",
  },
  {
    title: "Packing & Unpacking",
    image: "/services/packaging-services.jpeg",
    desc: "Efficient, secure packing and unpacking for your move.",
  },
  {
    title: "Commercial And Overseas",
    image: "/services/custom.jpg",
    desc: "A seamless, end-to-end relocation solution for businesses and individuals moving's, across international borders..",
  },
  {
    title: "Antique & Fine Art",
    image: "/services/fine-art-movers.png",
    desc: "Expert care for antiques, art, and delicate pieces.",
  },
  {
    title: "Long Distance Moves",
    image: "/services/long-move.jpg",
    desc: "Seamless moves across all 50 states with reliability.",
  },
  {
    title: "Secure Storage",
    image: "/services/secure-storage.jpg",
    desc: "Short and long-term storage with climate control.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-600">
          Our Services
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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

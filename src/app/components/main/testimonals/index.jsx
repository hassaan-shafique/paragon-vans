import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John D.',
    text: 'Paragon Van Lines made my move across states incredibly smooth. Professional, punctual, and careful with all my belongings!',
    avatar: 'https://i.pravatar.cc/100?img=1',
    rating: 5,
  },
  {
    name: 'Sarah M.',
    text: 'Absolutely loved the service! The team was courteous and handled everything with great care. Highly recommended.',
    avatar: 'https://i.pravatar.cc/100?img=2',
    rating: 5,
  },
  {
    name: 'Michael R.',
    text: 'From booking to delivery, everything was top-notch. Very reliable and stress-free moving experience.',
    avatar: 'https://i.pravatar.cc/100?img=3',
    rating: 4,
  },
  {
    name: 'Emily S.',
    text: 'I was nervous about my long-distance move, but Paragon exceeded expectations. Friendly staff and very responsive!',
    avatar: 'https://i.pravatar.cc/100?img=4',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-800 mb-14">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-2 border-red-700 border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-red-800 text-lg">{testimonial.name}</h4>
                  <div className="flex text-yellow-400 text-sm">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">“{testimonial.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

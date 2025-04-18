import React from "react";

const About = () => {
  return (
    <section
      id="aboutus"
      className="bg-white py-20 px-6 md:px-12 lg:px-24 text-black"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-red-600">
          About Paragon Van Lines
        </h2>
        <p className="text-lg font-bold md:text-xl mb-12 text-gray-700">
        At Paragon Van Lines, we offer high-quality moving services across the United States and internationally. We have over 25 years of experience and are a locally and veteran-owned business based in Florida. Our owner is a former Navy Seal. Moving doesn't have to be a stressful experience. To make it better for you, we always keep an open line of communication with our clients. Any time that you have a question, don’t hesitate to reach out to us. We will break everything down in a way that is easy to understand

       Paragon Van Lines is a professional Moving company that will be responsible for your move from pick up to delivery. Our trucks are owned and operated by our team. Our moving team is Vetted and our customer service is open 24/7.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Our Services */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4 border-b border-red-600 pb-2">
              What We Offer
            </h3>
            <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
              <li>✅ White Glove Moving Services</li>
              <li>✅ Professional Packing & Unpacking</li>
              <li>✅ Custom Crating for High-Value Items</li>
              <li>✅ Fragile & Antique Item Handling</li>
              <li>✅ Climate-Controlled Storage Options</li>
              <li>✅ Comercials and Overseas</li>
            </ul>
          </div>

          {/* Promotions */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4 border-b border-red-600 pb-2">
              Special Offer
            </h3>
            <div className="bg-red-100 p-4 rounded-lg shadow-md border border-red-600">
              <p className="text-red-500 font-semibold mb-2">
                🎁 Free Storage on Out-of-State Moves (Outside Florida)
              </p>
              <p className="text-gray-700">
                We provide secure, affordable solutions whether you're moving
                your home or your business. Let us tailor a plan that fits your
                unique needs.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee / Assurance */}
        <div className="mt-16 bg-red-100 p-8 rounded-xl shadow-xl border border-red-500 max-w-3xl mx-auto text-center">
          <p className="text-2xl font-semibold text-red-600">
            🛡️ Fully Licensed & Insured
          </p>
          <p className="text-gray-700 mt-3">
            Trusted by hundreds of satisfied customers, our team is dedicated to delivering safe and reliable moving experiences with complete peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

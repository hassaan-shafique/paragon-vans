"use client";
import React, { useState } from "react";

const galleryItems = [
  { type: "image", src: "/gallery/gallery1.jpg", alt: "Moving furniture" },
  { type: "image", src: "/gallery/gallery2.jpg", alt: "Moving truck" },
  { type: "image", src: "/gallery/gallery3.jpg", alt: "Setup at home" },
  { type: "image", src: "/gallery/gallery4.jpg", alt: "Furniture being moved" },
  { type: "image", src: "/gallery/gallery5.jpg", alt: "Moving truck" },
  { type: "image", src: "/gallery/gallery7.jpg", alt: "Setup at home" },
  { type: "video", src: "/gallery/gallery6.mp4", poster: "/poster1.png", alt: "Furniture loading" },
  { type: "image", src: "/gallery/gallery8.jpg", alt: "Furniture being moved" },
  { type: "video", src: "/gallery/gallery10.mp4", poster: "/poster2.png", alt: "Truck on site" },
];

const Gallery = () => {
  const [modalContent, setModalContent] = useState(null);

  const handlePreview = (item) => {
    setModalContent(item);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section id="gallery" className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12">
          Our Work Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-lg hover:shadow-red-500/40 transition duration-300 border border-red-200"
              onClick={() => handlePreview(item)}
            >
              {/* Hover label */}
              <div className="absolute top-2 left-2 bg-red-700 bg-opacity-80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {item.type === "image" ? "Image" : "Video"}
              </div>

              {/* Media */}
              {item.type === "image" ? (
                <img
                  loading="lazy"
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-60 object-cover brightness-90"
                />
              ) : (
                <video
                  className="w-full h-60 object-cover brightness-90"
                  preload="none"
                  muted
                  playsInline
                  poster={item.poster}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
            <div className="bg-zinc-900 rounded-lg overflow-hidden relative max-w-3xl w-full border border-red-600">
              <button
                className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full z-10"
                onClick={closeModal}
              >
                ✕
              </button>

              {/* Modal content */}
              {modalContent.type === "image" ? (
                <img
                  src={modalContent.src}
                  alt={modalContent.alt}
                  className="w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={modalContent.src}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] object-contain"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

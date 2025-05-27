// src/components/Carousel.jsx
import React, { useRef, useState } from 'react';

const Carousel = ({ children }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      const newIndex = Math.max(activeIndex - 1, 0);
      setActiveIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      const newIndex = Math.min(activeIndex + 1, React.Children.count(children) - 1);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="relative">
      {/* Tombol Navigasi */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-800 text-white px-4 py-2 rounded-full"
        aria-label="Previous"
      >
        &larr;
      </button>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-800 text-white px-4 py-2 rounded-full"
        aria-label="Next"
      >
        &rarr;
      </button>

      {/* Indikator Dots */}
      <div className="flex justify-center mt-4">
        {React.Children.map(children, (_, index) => (
          <span
            key={index}
            className={`inline-block w-3 h-3 mx-1 rounded-full ${
              activeIndex === index ? 'bg-red-500' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>

      {/* Container Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-4 p-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="min-w-[200px] md:min-w-[250px] lg:min-w-[300px] flex-shrink-0 snap-start"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
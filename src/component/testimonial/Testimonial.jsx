import React, { useEffect, useRef } from 'react';

// Testimonial Data
const testimonials = [
  {
    name: "John Doe",
    message: "This service was fantastic! Highly recommend.",
    role: "CEO at ExampleCorp"
  },
  {
    name: "Jane Smith",
    message: "A wonderful experience from start to finish.",
    role: "Marketing Manager at CompanyX"
  },
  {
    name: "Sam Wilson",
    message: "Great customer service and high-quality results.",
    role: "Freelancer"
  },
  {
    name: "Alice Johnson",
    message: "My go-to place for reliable results every time.",
    role: "Designer at DesignHub"
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval = null;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          // Auto scroll
          scrollContainer.scrollLeft += 1;

          // If we've reached the end, reset to the beginning
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20); // Adjust speed by changing the interval time
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div name="testi" className="relative w-full overflow-hidden py-12 ">
      <div ref={scrollRef} className="flex space-x-8 overflow-hidden w-full">
        {/* Clone testimonials twice to create infinite scrolling illusion */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="min-w-[300px]  p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <p className="text-lg italic mb-4">"{testimonial.message}"</p>
            <h4 className="font-bold text-lg text-blue-600">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

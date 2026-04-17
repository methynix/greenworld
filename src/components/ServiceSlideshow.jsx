import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const ServiceSlideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  // Auto-play feature
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
      </AnimatePresence>

      {/* Navigation Buttons - Only show if more than 1 image */}
      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-6 z-20 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gw-leaf transition-all shadow-xl"
          >
            <HiChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gw-leaf transition-all shadow-xl"
          >
            <HiChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-500 rounded-full ${i === index ? "w-8 bg-gw-sun" : "w-2 bg-white/30"}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSlideshow;
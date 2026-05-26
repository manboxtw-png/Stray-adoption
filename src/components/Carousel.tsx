import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    hiddenRight: { x: '100%', opacity: 0 },
    hiddenLeft: { x: '-100%', opacity: 0 },
    visible: { x: '0', opacity: 1, transition: { duration: 0.3 } },
    exitRight: { x: '100%', opacity: 0, transition: { duration: 0.3 } },
    exitLeft: { x: '-100%', opacity: 0, transition: { duration: 0.3 } },
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) {
    return <div className="h-64 bg-gray-200 rounded-t-2xl w-full" />;
  }

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-t-2xl bg-gray-100 group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit={direction < 0 ? "exitRight" : "exitLeft"}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`Animal image ${currentIndex + 1}`}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

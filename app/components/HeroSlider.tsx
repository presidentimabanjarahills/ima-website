'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  readMoreLink: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
  transitionDuration?: number;
}

export default function HeroSlider({ 
  slides, 
  autoPlayInterval = 5000, 
  transitionDuration = 1000 
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Skip the fade-in animation on the very first paint so it never delays
  // the initial slide's LCP - only animate on later slide changes.
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, autoPlayInterval]);

  // Handle transition
  const handleSlideChange = useCallback((newSlide: number) => {
    if (isTransitioning || newSlide === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(newSlide);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);
  }, [currentSlide, isTransitioning, transitionDuration]);

  // Navigation functions
  const goToNext = useCallback(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    handleSlideChange(nextSlide);
  }, [currentSlide, slides.length, handleSlideChange]);

  const goToPrevious = useCallback(() => {
    const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    handleSlideChange(prevSlide);
  }, [currentSlide, slides.length, handleSlideChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === ' ') {
        event.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious, isAutoPlaying]);

  if (!slides || slides.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No slides available</p>
      </div>
    );
  }

  return (
    <section 
      className="relative w-full h-[67vh] md:h-[75vh] max-h-[700px] overflow-hidden"
      role="region"
      aria-label="Hero slider"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onFocus={() => setIsAutoPlaying(false)}
      onBlur={() => setIsAutoPlaying(true)}
    >
      {/* Slides Container - only the active slide is mounted, so the other
          slides' images aren't fetched until they're actually shown. */}
      <div className="relative w-full h-full bg-brand-navy">
        <div
          key={slides[currentSlide].id}
          className={`absolute inset-0 ${isInitialRender.current ? '' : 'hero-slide-in'}`}
          style={{ animationDuration: `${transitionDuration}ms` }}
        >
          {/* Background Image */}
          <div className="relative w-full h-full overflow-hidden">
             <div className="absolute inset-0 hero-kenburns">
               <Image
                 src={slides[currentSlide].imageUrl}
                 alt={slides[currentSlide].altText}
                 fill
                 sizes="100vw"
                 className="object-contain"
                 priority={currentSlide === 0}
                 onError={(e) => {
                   console.error('Image failed to load:', slides[currentSlide].imageUrl, e);
                 }}
               />
             </div>

            {/* Light overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>

      {/* Text Content Below Slider */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent p-3 sm:p-4 md:p-6 lg:p-8">
        <div key={currentSlide} className="text-center text-white max-w-5xl mx-auto hero-text-in">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 leading-tight drop-shadow-lg px-2 sm:px-4">
            {slides[currentSlide]?.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/90 drop-shadow-md px-2 sm:px-4 max-w-4xl mx-auto">
            {slides[currentSlide]?.description}
          </p>
        </div>

        {/* Slide Indicators */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className="group p-2.5 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-full"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              >
                <span
                  className={`block h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-6 sm:w-8 bg-gradient-to-r from-brand-navy to-brand-teal shadow-md'
                      : 'w-1.5 sm:w-2 bg-white/50 group-hover:bg-white/80'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
           <button
             onClick={goToPrevious}
             className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg hover:shadow-xl hover:scale-110 touch-manipulation"
             aria-label="Previous slide"
           >
             <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
             </svg>
           </button>
           
           <button
             onClick={goToNext}
             className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg hover:shadow-xl hover:scale-110 touch-manipulation"
             aria-label="Next slide"
           >
             <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
             </svg>
           </button>
        </>
      )}

      {/* Auto-play Indicator */}
      {slides.length > 1 && (
         <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6">
           <button
             onClick={() => setIsAutoPlaying(!isAutoPlaying)}
             className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white p-2 sm:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg hover:shadow-xl hover:scale-110 touch-manipulation"
             aria-label={isAutoPlaying ? 'Pause slideshow' : 'Resume slideshow'}
           >
             {isAutoPlaying ? (
               <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
               </svg>
             ) : (
               <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M8 5v14l11-7z"/>
               </svg>
             )}
           </button>
         </div>
      )}

       {/* Progress Bar */}
       {isAutoPlaying && slides.length > 1 && (
         <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 backdrop-blur-sm z-10">
           <div 
             className="h-full bg-gradient-to-r from-brand-navy to-brand-teal transition-all duration-100 ease-linear shadow-lg"
             style={{
               width: '100%',
               animation: `progress ${autoPlayInterval}ms linear infinite`
             }}
           />
         </div>
       )}

      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }

        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        .hero-kenburns {
          animation: kenburns 12s ease-in-out infinite alternate;
        }

        @keyframes heroTextIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-text-in {
          animation: heroTextIn 600ms ease-out both;
        }

        @keyframes heroSlideIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .hero-slide-in {
          animation-name: heroSlideIn;
          animation-timing-function: ease-in-out;
          animation-fill-mode: both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns {
            animation: none;
          }
          .hero-text-in {
            animation: none;
          }
          .hero-slide-in {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

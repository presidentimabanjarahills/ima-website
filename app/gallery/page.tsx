'use client';

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const galleryImages = [
  "DSC_2670 (1).jpg",
  // "DSC_2670.jpg",
  "DSC_7927 (1).jpg",
  // "DSC_7927.jpg",
  "DSC_7934.jpg",
  "WhatsApp Image 2026-07-31 at 21.34.17.jpeg",
  "WhatsApp Image 2026-07-31 at 21.34.18 (1).jpeg",
  "WhatsApp Image 2026-07-31 at 21.34.18 (2).jpeg",
  "WhatsApp Image 2026-07-31 at 21.34.18.jpeg",
  "WhatsApp Image 2026-07-31 at 21.34.19.jpeg",
  "WhatsApp Image 2026-07-31 at 21.34.58.jpeg",
  "WhatsApp Image 2026-07-31 at 21.34.59 (1).jpeg",
  "WhatsApp Image 2026-07-31 at 21.34.59 (2).jpeg",
  "WhatsApp Image 2026-07-31 at 21.34.59.jpeg",
  "WhatsApp Image 2026-07-31 at 21.35.00 (1).jpeg",
  "WhatsApp Image 2026-07-31 at 21.35.00.jpeg",
  "WhatsApp Image 2026-07-31 at 21.35.01 (1).jpeg",
  "WhatsApp Image 2026-07-31 at 21.35.01.jpeg",
  "WhatsApp Image 2026-07-31 at 21.35.02 (1).jpeg",
  "WhatsApp Image 2026-07-31 at 21.35.02.jpeg",
  "WhatsApp Image 2026-07-31 at 21.35.03 (1).jpeg",
  "WhatsApp Image 2026-07-31 at 21.35.03.jpeg",
  "WhatsApp Image 2026-07-31 at 21.35.04 (1).jpeg",
  "WhatsApp Image 2026-07-31 at 21.35.04.jpeg",
  "photo 07.jpg.jpeg",
  "photo 08.jpg.jpeg",
  "photo 09.jpg.jpeg",
  "photo 10.jpg.jpeg",
  "photo 11.jpg.jpeg",
  "photo 12.jpg.jpeg",
].map((file, index) => ({
  src: `/nov-event-pic/${encodeURIComponent(file)}`,
  alt: `IMA Banjara Hills November Event Photo ${index + 1}`,
}));

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-6 sm:mb-8">
          Event Gallery
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-emerald-700 max-w-4xl mx-auto leading-relaxed">
          Moments captured from the IMA Banjara Hills November event.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group block w-full break-inside-avoid overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <div className="relative w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close gallery viewer"
            className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white hover:text-emerald-300 transition-colors p-2 rounded-full hover:bg-white/10 z-10"
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-2 sm:left-6 text-white hover:text-emerald-300 transition-colors p-2 sm:p-3 rounded-full hover:bg-white/10 z-10"
          >
            <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-2 sm:right-6 text-white hover:text-emerald-300 transition-colors p-2 sm:p-3 rounded-full hover:bg-white/10 z-10"
          >
            <svg className="w-7 h-7 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] sm:h-[80vh]">
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-3 sm:mt-4 text-emerald-100 text-xs sm:text-sm">
              {activeIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

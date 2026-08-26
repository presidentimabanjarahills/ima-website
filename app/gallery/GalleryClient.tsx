'use client';

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  photoAlbums,
  galleryVideos,
  galleryChannelUrl,
  galleryChannelName,
  type PhotoAlbum,
} from "./data";

const BATCH_SIZE = 30;

type Tab = "photos" | "videos";

export default function GalleryClient() {
  const [tab, setTab] = useState<Tab>("photos");
  const [selectedAlbum, setSelectedAlbum] = useState<PhotoAlbum | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const openAlbum = useCallback((album: PhotoAlbum) => {
    setSelectedAlbum(album);
    setVisibleCount(Math.min(BATCH_SIZE, album.photos.length));
  }, []);

  const closeAlbum = useCallback(() => {
    setSelectedAlbum(null);
    setActiveIndex(null);
  }, []);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    if (!selectedAlbum) return;
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + selectedAlbum.photos.length) % selectedAlbum.photos.length
    );
  }, [selectedAlbum]);

  const showNext = useCallback(() => {
    if (!selectedAlbum) return;
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % selectedAlbum.photos.length
    );
  }, [selectedAlbum]);

  const loadMore = useCallback(() => {
    if (!selectedAlbum) return;
    setVisibleCount((current) => Math.min(current + BATCH_SIZE, selectedAlbum.photos.length));
  }, [selectedAlbum]);

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

  const visiblePhotos = selectedAlbum ? selectedAlbum.photos.slice(0, visibleCount) : [];
  const remainingCount = selectedAlbum ? selectedAlbum.photos.length - visibleCount : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
          Event Gallery
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-brand-navy max-w-4xl mx-auto leading-relaxed">
          Moments captured from IMA Banjara Hills events.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-10 sm:mb-14">
        {(
          [
            { id: "photos" as const, label: "Photo Albums" },
            { id: "videos" as const, label: "Videos" },
          ]
        ).map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={tab === t.id}
            onClick={() => {
              setTab(t.id);
              closeAlbum();
            }}
            className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
              tab === t.id
                ? "text-white bg-gradient-to-r from-brand-navy to-brand-teal shadow-lg"
                : "text-brand-navy bg-white border border-brand-navy/15 hover:border-brand-teal/50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "photos" && !selectedAlbum && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {photoAlbums.map((album) => (
            <button
              key={album.slug}
              type="button"
              onClick={() => openAlbum(album)}
              className="group text-left overflow-hidden rounded-2xl shadow-lg border border-brand-navy/10 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={album.cover.src}
                  alt={album.cover.alt}
                  fill
                  sizes="(min-width: 640px) 600px, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-brand-teal/90 mb-2">
                    {album.year}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{album.title}</h2>
                  <p className="text-sm text-brand-surface/90">{album.photos.length} photos</p>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-xs sm:text-sm text-brand-navy/70 mb-1">{album.dateLabel}</p>
                <p className="text-sm sm:text-base text-brand-navy leading-relaxed">{album.description}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {tab === "photos" && selectedAlbum && (
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
            <div>
              <button
                type="button"
                onClick={closeAlbum}
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-brand-teal hover:text-brand-navy transition-colors mb-2"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                All Albums
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">{selectedAlbum.title}</h2>
              <p className="text-sm text-brand-navy/70">{selectedAlbum.dateLabel}</p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {visiblePhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group block overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            ))}
          </div>

          {/* Load More */}
          {remainingCount > 0 && (
            <div className="flex flex-col items-center gap-3 mt-10 sm:mt-14">
              <button
                type="button"
                onClick={loadMore}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-brand-navy to-brand-teal shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
              >
                Load {Math.min(BATCH_SIZE, remainingCount)} more photos
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <p className="text-xs sm:text-sm text-brand-navy">
                Showing {visiblePhotos.length} of {selectedAlbum.photos.length} photos
              </p>
            </div>
          )}
        </div>
      )}

      {tab === "videos" && (
        <div>
          {galleryVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {galleryVideos.map((video) => (
                <div
                  key={video.videoId}
                  className="overflow-hidden rounded-2xl shadow-lg border border-brand-navy/10 bg-white/70 backdrop-blur-sm"
                >
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <p className="p-4 sm:p-5 text-sm sm:text-base font-semibold text-brand-navy">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center rounded-2xl shadow-lg border border-brand-navy/10 bg-white/70 backdrop-blur-sm p-8 sm:p-12">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">
                Watch on {galleryChannelName}
              </h2>
              <p className="text-sm sm:text-base text-brand-navy/80 mb-6 leading-relaxed">
                Event videos and health awareness content are published on our YouTube channel.
                Individual video embeds will appear here once specific videos are added.
              </p>
              <a
                href={galleryChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-brand-navy to-brand-teal shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
              >
                Visit Channel
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedAlbum && activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={selectedAlbum.photos[activeIndex].alt}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close gallery viewer"
            className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white hover:text-brand-teal transition-colors p-2 rounded-full hover:bg-white/10 z-10"
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
            className="absolute left-2 sm:left-6 text-white hover:text-brand-teal transition-colors p-2 sm:p-3 rounded-full hover:bg-white/10 z-10"
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
            className="absolute right-2 sm:right-6 text-white hover:text-brand-teal transition-colors p-2 sm:p-3 rounded-full hover:bg-white/10 z-10"
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
                src={selectedAlbum.photos[activeIndex].src}
                alt={selectedAlbum.photos[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 sm:mt-4 text-brand-surface text-xs sm:text-sm text-center max-w-3xl px-4">
              {selectedAlbum.photos[activeIndex].alt}
            </p>
            <p className="mt-1 text-brand-surface/70 text-xs sm:text-sm">
              {activeIndex + 1} / {selectedAlbum.photos.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

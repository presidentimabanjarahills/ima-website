'use client';

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import CalendarView from "./CalendarView";
import { upcomingEvents, pastEvents, type PastEvent } from "./data";
import { useEscapeToClose } from "../lib/useEscapeToClose";

type ViewMode = "list" | "calendar";

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [selectedPastEvent, setSelectedPastEvent] = useState<PastEvent | null>(null);
  const [yearFilter, setYearFilter] = useState<string>("all");

  const years = useMemo(
    () => Array.from(new Set(pastEvents.map((event) => event.year))).sort((a, b) => b - a),
    []
  );

  const filteredPastEvents = useMemo(
    () =>
      yearFilter === "all"
        ? pastEvents
        : pastEvents.filter((event) => String(event.year) === yearFilter),
    [yearFilter]
  );

  useEscapeToClose(selectedPastEvent !== null, () => setSelectedPastEvent(null));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
          IMA Events
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-brand-navy max-w-4xl mx-auto leading-relaxed">
          Discover upcoming medical conferences, workshops, and professional development events organized by the Indian Medical Association.
        </p>
      </div>

      {/* Upcoming Events Section */}
      <section className="mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent text-center sm:text-left">
            Upcoming Events
          </h2>

          {/* List / Calendar toggle */}
          <div className="inline-flex items-center bg-white/70 backdrop-blur-sm rounded-full border border-brand-navy/10 shadow-sm p-1">
            <button
              onClick={() => setViewMode("list")}
              aria-pressed={viewMode === "list"}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                viewMode === "list"
                  ? "bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-md"
                  : "text-brand-navy hover:bg-brand-surface"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              List
            </button>
            <button
              onClick={() => setViewMode("calendar")}
              aria-pressed={viewMode === "calendar"}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                viewMode === "calendar"
                  ? "bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-md"
                  : "text-brand-navy hover:bg-brand-surface"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Calendar
            </button>
          </div>
        </div>

        {viewMode === "calendar" ? (
          <CalendarView events={upcomingEvents} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {upcomingEvents.map((event) => (
              <Link key={event.slug} href={event.href} className="group">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                        {event.title}
                      </h3>
                      <p className="text-sm sm:text-base text-brand-surface mb-2 sm:mb-3">
                        {event.dateLabel} | {event.venue}
                      </p>
                      <p className="text-xs sm:text-sm text-brand-surface line-clamp-3">{event.description}</p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-brand-surface text-brand-navy">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {event.category}
                      </span>
                      <span className="inline-flex items-center text-brand-navy hover:text-brand-teal font-semibold text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                        Learn More
                        <svg className="w-4 h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* More Events Coming Soon */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 p-6 sm:p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-surface to-brand-surface rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2 sm:mb-3">More Events Coming Soon</h3>
                <p className="text-sm sm:text-base text-brand-navy leading-relaxed">
                  Stay tuned for more exciting medical conferences, workshops, and professional development events.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Past Events Section */}
      <section className="mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent text-center sm:text-left">
            Past Events
          </h2>

          {years.length > 0 && (
            <label className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
              Year:
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="rounded-full border border-brand-navy/15 bg-white/70 backdrop-blur-sm px-4 py-2 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy"
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>

        {filteredPastEvents.length === 0 ? (
          <p className="text-center text-brand-navy/70">No past events found for this year.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {filteredPastEvents.map((event) => (
              <div key={event.slug} className="group">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                        {event.title}
                      </h3>
                      <p className="text-sm sm:text-base text-brand-surface mb-2 sm:mb-3">
                        {event.dateLabel} | {event.location}
                      </p>
                      <p className="text-xs sm:text-sm text-brand-surface line-clamp-3">{event.description}</p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-brand-surface text-brand-navy">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Past Event
                      </span>
                      {event.videos.length > 0 && (
                        <button
                          onClick={() => setSelectedPastEvent(event)}
                          className="inline-flex items-center text-brand-navy hover:text-brand-teal font-semibold text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300"
                        >
                          View More
                          <svg className="w-4 h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Video Modal */}
      {selectedPastEvent && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-heading"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-7xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl mx-2 sm:mx-4">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-brand-navy to-brand-teal px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
              <h3 id="video-modal-heading" className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate pr-4">
                {selectedPastEvent.title} - Conference Highlights
              </h3>
              <button
                onClick={() => setSelectedPastEvent(null)}
                className="text-white hover:text-brand-surface transition-colors p-1.5 sm:p-2 rounded-full hover:bg-white/20 flex-shrink-0"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-4 md:p-6 overflow-y-auto max-h-[calc(95vh-60px)] sm:max-h-[calc(90vh-80px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {selectedPastEvent.videos.map((video) => (
                  <div key={video.youtubeEmbedUrl} className="space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-lg font-semibold text-brand-navy mb-2 sm:mb-3">{video.title}</h4>
                    <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={video.youtubeEmbedUrl}
                        title={video.title}
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>

              {/* Event Details */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-brand-surface to-brand-surface rounded-xl">
                <h4 className="text-lg sm:text-xl font-bold text-brand-navy mb-3 sm:mb-4">Event Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-brand-navy">Event:</span>
                    <p className="text-brand-navy break-words">{selectedPastEvent.title}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-navy">Date:</span>
                    <p className="text-brand-navy">{selectedPastEvent.dateLabel}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-navy">Location:</span>
                    <p className="text-brand-navy">{selectedPastEvent.location}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-navy">Organizer:</span>
                    <p className="text-brand-navy">{selectedPastEvent.organizer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

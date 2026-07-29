'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-6 sm:mb-8">
          IMA Events
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-emerald-700 max-w-4xl mx-auto leading-relaxed">
          Discover upcoming medical conferences, workshops, and professional development events organized by the Indian Medical Association.
        </p>
      </div>

      {/* Upcoming Events Section */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-8 sm:mb-12 text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* CMA Global Conference Card */}
          <Link href="/events/ai-healthcare-conference" className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="/eventPic1.png"
                  alt="CMA Global Conference 2025 on AI in Healthcare & Medicine"
                  fill
                  className=" group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                    CMA Global Conference 2025 on AI in Healthcare & Medicine
                  </h3>
                  <p className="text-sm sm:text-base text-emerald-100 mb-2 sm:mb-3">
                    22nd & 23rd November 2025 | Jubilee Hills Convention Centre, Hyderabad
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-200 line-clamp-3">
                    &quot;Transforming Care Together: AI & Digital Health for a Healthier Commonwealth&quot;. Join 1000+ delegates including Supreme Court Justice, Telangana Ministers, and global healthcare leaders.
                  </p>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-emerald-100 text-emerald-800">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    CMA Global Conference
                  </span>
                  <span className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* More Events Coming Soon */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 p-6 sm:p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2 sm:mb-3">More Events Coming Soon</h3>
              <p className="text-sm sm:text-base text-emerald-700 leading-relaxed">
                Stay tuned for more exciting medical conferences, workshops, and professional development events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Older Events Section */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-8 sm:mb-12 text-center">
          Past Events
        </h2>
        <div className="flex justify-start lg:justify-start md:justify-center sm:justify-center">
          {/* IMPACT CON 2024 Card */}
          <div className="group w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="/oldevent1.png"
                  alt="IMA Banjara Hills Impact Con 2024"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                    IMA Banjara Hills Impact Con 2024
                  </h3>
                  <p className="text-sm sm:text-base text-emerald-100 mb-2 sm:mb-3">
                    1st December 2024 | Hyderabad
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-200 line-clamp-3">
                    Indian Medical Association BANJARAHILLS Impact Con 2024 conference Highlights featuring distinguished speakers and medical professionals.
                  </p>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-emerald-100 text-emerald-800">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                    Past Event
                  </span>
                  <button 
                    onClick={openModal}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300"
                  >
                    View More
                    <svg className="w-4 h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-7xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl mx-2 sm:mx-4">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate pr-4">
                IMPACT CON 2024 - Conference Highlights
              </h3>
              <button
                onClick={closeModal}
                className="text-white hover:text-emerald-200 transition-colors p-1.5 sm:p-2 rounded-full hover:bg-white/20 flex-shrink-0"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-4 md:p-6 overflow-y-auto max-h-[calc(95vh-60px)] sm:max-h-[calc(90vh-80px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Video 1 */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold text-emerald-800 mb-2 sm:mb-3">Part 1 - Conference Highlights</h4>
                  <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/qaEYykYmLfA?si=auol5uXXgRsqdJco"
                      title="IMPACT CON 2024 - Part 1"
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold text-emerald-800 mb-2 sm:mb-3">Part 2 - Conference Highlights</h4>
                  <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/y2De_V8HIls?si=8F3xB1WOxPKEwL4N"
                      title="IMPACT CON 2024 - Part 2"
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
                <h4 className="text-lg sm:text-xl font-bold text-emerald-800 mb-3 sm:mb-4">Event Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-emerald-700">Event:</span>
                    <p className="text-emerald-600 break-words">IMA Banjara Hills Impact Con 2024</p>
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-700">Date:</span>
                    <p className="text-emerald-600">1st December 2024</p>
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-700">Location:</span>
                    <p className="text-emerald-600">Hyderabad</p>
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-700">Organizer:</span>
                    <p className="text-emerald-600">IMA Banjara Hills Branch</p>
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
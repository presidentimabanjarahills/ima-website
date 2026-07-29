'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Header() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 100); // Small delay to prevent flickering
  };

  return (
    <>
      {/* Social Media Strip */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Follow us on social media for latest updates</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a 
                href="https://www.facebook.com/prabhukumar.challagali?rdid=FRwj9Eov9cwhr3tQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ohATfMHj%2F#" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="rounded-full p-1.5 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40 transition"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.404.595 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.314h3.59l-.467 3.696h-3.123V24h6.116C23.405 24 24 23.404 24 22.674V1.326C24 .595 23.405 0 22.675 0z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@dr.prabhuhealthtv29" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube" 
                className="rounded-full p-1.5 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40 transition"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div> 
        </div>
      </div>

      {/* Header Section */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-emerald-100 relative z-50">
        {/* Top Contact Bar */}
        <div className="bg-[#f6f6f6] text-py-2 bg-green-100 py-2 sm:py-3">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
              {/* Logo Space */}
              <div className="flex items-center justify-center lg:justify-start px-4 sm:px-8 lg:px-14">
                <Image 
                  src="/imalogo.png"
                  alt="IMA India Logo"
                  width={384}
                  height={112}
                  className="w-56 h-14 sm:w-64 sm:h-16 md:w-72 md:h-18 lg:w-64 lg:h-16 xl:w-72 xl:h-18 object-contain"
                  priority
                />
                <Image 
                  src="/imalogo4.png" 
                  alt="IMA India Logo"
                  width={384}
                  height={112}
                  className="w-32 h-24 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-36 lg:h-18 xl:w-40 xl:h-20 object-contain"
                  priority
                />
              </div>
              
              {/* Contact Information - 3 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-0 w-full lg:w-auto px-4 sm:px-8 lg:px-24">
                <div className="flex items-center gap-1 sm:gap-2 text-emerald-800 min-w-0">
                  <div className="flex items-center justify-center flex-shrink-0"><svg className="w-6 h-5 sm:w-8 sm:h-6 md:w-10 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg></div>
                  <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-sm font-medium" style={{color: "#808080"}}>MAIL US TODAY</span>
                      <span className="text-[10px] sm:text-[12px] break-words">presidentimabanjarahills@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-emerald-800 min-w-0">
                  <div className="flex items-center justify-center flex-shrink-0"><svg className="w-6 h-5 sm:w-8 sm:h-6 md:w-10 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg></div>
                  <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-sm font-medium" style={{color: "#808080"}}>CALL US</span>
                      <span className="text-[10px] sm:text-[12px]">+91 99892-20003</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-emerald-800 min-w-0 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-center flex-shrink-0"><svg className="w-6 h-5 sm:w-8 sm:h-6 md:w-10 md:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg></div>
                  <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-sm font-medium" style={{color: "#808080"}}>ADDRESS</span>
                      <a 
                        href="https://maps.app.goo.gl/ZCu58bikwGTUqWij7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[9px] sm:text-[11px] leading-tight hover:text-emerald-600 transition-colors duration-200"
                      >
                        <div className="font-semibold text-emerald-900 hover:text-emerald-700 break-words">Dr Prabhu Life Multispeciality Clinics and Hospital</div>
                        <div>House No 3-2-10/6, 3rd Floor</div>
                        <div>Chaitanyanagar Colony, Manikonda</div>
                        <div>Hyderabad 500089</div>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-white/60 backdrop-blur-sm py-3" role="navigation" aria-label="Primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 sm:gap-4 bg-white/70 backdrop-blur-md border border-emerald-100 shadow-sm rounded-full px-2 sm:px-4 py-2 flex-wrap">
                <Link
                  href="/"
                  className="text-emerald-700 hover:text-green-700 font-semibold text-sm sm:text-base transition-all duration-300 relative group px-3 sm:px-4 py-1.5 rounded-full hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  Home
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <div 
                  className="relative" 
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="text-emerald-700 hover:text-green-700 font-semibold text-sm sm:text-base transition-all duration-300 relative group px-3 sm:px-4 py-1.5 rounded-full hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 flex items-center gap-1"
                  >
                    About Us
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  {/* Dropdown Menu */}
                  {isAboutDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-2xl border-2 border-emerald-200"
                      style={{ 
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        minHeight: '200px',
                        zIndex: 99999
                      }}
                    >
                      <div className="py-2">
                        <Link
                          href="/about/ima"
                          className="block px-4 py-3 text-sm text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors duration-200 border-b border-emerald-100"
                        >
                          <div className="font-semibold">About IMA</div>
                          <div className="text-xs text-emerald-600 mt-1">Vision, Mission & Objectives</div>
                        </Link>
                        <Link
                          href="/about/who-we-are"
                          className="block px-4 py-3 text-sm text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors duration-200"
                        >
                          <div className="font-semibold">Who We Are</div>
                          <div className="text-xs text-emerald-600 mt-1">About IMA Banjara Hills</div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  href="/events"
                  className="text-emerald-700 hover:text-green-700 font-semibold text-sm sm:text-base transition-all duration-300 relative group px-3 sm:px-4 py-1.5 rounded-full hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  Events
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

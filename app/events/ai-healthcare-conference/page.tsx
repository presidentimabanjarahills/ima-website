'use client';

import Image from "next/image";
import { useState } from "react";




export default function AIHealthcareConference() {
  const [activeTab, setActiveTab] = useState<'cma' | 'event'>('event');
  const [showAllGuestsOfHonour, setShowAllGuestsOfHonour] = useState(false);
  const [showAllCmaSubcommittee, setShowAllCmaSubcommittee] = useState(false);
  const [showAllSpeakers, setShowAllSpeakers] = useState(false);
  const [showAllCmaMembers, setShowAllCmaMembers] = useState(false);
  const [showAgendaModal, setShowAgendaModal] = useState(false);
  const [agendaDay, setAgendaDay] = useState<'day1' | 'day2'>('day1');
  

  const openPDF = () => {
    window.open('/AI in Healthcare.pdf', '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
      {/* Event Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4 leading-tight">
          The CMA Global Conference 2025 on AI in Healthcare & Medicine
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
      
        
        {/* Event Motto */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 mx-2 sm:mx-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center leading-tight">
            &quot;Transforming Care Together: AI & Digital Health for a Healthier Commonwealth&quot;
          </h2>
        </div>
        
        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl mb-6 sm:mb-8 mx-2 sm:mx-0">
          <Image
            src="/eventPic1.png"
            alt="AI in Healthcare Conference"
            fill
            className=""
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-green-900/40"></div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 sm:mb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-200/50 p-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveTab('cma')}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'cma'
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                  : 'text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <span className="text-sm sm:text-base">CMA Details</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('event')}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'event'
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                  : 'text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span className="text-sm sm:text-base">Event Details</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'cma' && (
        <div className="space-y-8 sm:space-y-12">
          {/* About CMA Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              About the Commonwealth Medical Association (CMA)
          </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-emerald-100">
              <p className="text-lg sm:text-xl text-emerald-800 leading-relaxed text-center font-medium">
                The Commonwealth Medical Association (CMA) is the collective voice of physicians across the Commonwealth of Nations, 
                representing medical associations and professionals from more than <span className="font-bold text-emerald-700">56 member countries</span>. 
                CMA&apos;s vision is to create a healthier Commonwealth through shared expertise, global partnerships, and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2">Medical Excellence</h3>
                    <p className="text-sm sm:text-base text-emerald-800 leading-relaxed">Promote excellence in medical education and clinical practice across the Commonwealth.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2">Policy Leadership</h3>
                    <p className="text-sm sm:text-base text-emerald-800 leading-relaxed">Drive thought leadership in healthcare policy and advocacy on a global scale.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2">Research & Innovation</h3>
                    <p className="text-sm sm:text-base text-emerald-800 leading-relaxed">Support research and innovation for health needs of emerging and developed economies.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2">Equitable Healthcare</h3>
                    <p className="text-sm sm:text-base text-emerald-800 leading-relaxed">Advancing equitable healthcare delivery for all Commonwealth nations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2">Global Collaboration</h3>
                    <p className="text-sm sm:text-base text-emerald-800 leading-relaxed">Build capacity and collaboration among physicians across the Commonwealth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Conference Overview Section */}
      <section className="mb-12 sm:mb-16">
        <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Conference Overview
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Theme Section */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-emerald-200">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4 sm:mb-6">
                  &quot;Transforming Care Together: AI & Digital Health for a Healthier Commonwealth&quot;
                </h3>
                <p className="text-lg sm:text-xl text-emerald-800 leading-relaxed">
                  The CMA Global Conference 2025 on AI in Healthcare & Medicine will convene over <span className="font-bold text-emerald-700">1,000+ delegates</span> including 
                  physicians, innovators, researchers, policymakers, and industry leaders. This premier event will serve as a 
                  knowledge, networking, and innovation hub.
                </p>
              </div>
            </div>

            {/* Distinguished Dignitaries Section - Special Focus */}
            <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border-2 border-emerald-300">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">Distinguished Dignitaries</h3>
                <p className="text-lg text-emerald-800">Honoring Excellence in Healthcare Leadership</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4">
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-emerald-900">Chief Guest</h4>
                    </div>
                    <p className="text-emerald-800 font-semibold">Hon. Justice of India, Supreme Court</p>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-emerald-900">Government Leadership</h4>
                    </div>
                    <ul className="text-emerald-800 space-y-1">
                      <li>• Hon. Minister for IT, Government of Telangana</li>
                      <li>• Hon. Minister for Health, Government of Telangana</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-emerald-900">Administrative Excellence</h4>
                    </div>
                    <p className="text-emerald-800">Senior IAS officials, regulators, and industry leaders</p>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-emerald-900">Global Expertise</h4>
                    </div>
                    <p className="text-emerald-800">Renowned international and national speakers from leading universities, global health bodies, and innovation hubs</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conference Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">CME-Accredited Workshops</h3>
                </div>
                <p className="text-emerald-800 leading-relaxed">
                  Jointly certified by the Commonwealth Medical Association and the Royal College of Physicians, Edinburgh. 
                  Participants will receive internationally recognized CME credits and certification.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">Innovation & Impact Pitch Fest</h3>
                </div>
                <p className="text-emerald-800 leading-relaxed">
                  Healthcare and AI startups present breakthrough ideas before a distinguished jury of investors, policymakers, 
                  and healthcare leaders. Top three winners receive the CMA Innovation Award with global visibility and mentorship.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-emerald-200">
              <p className="text-lg sm:text-xl text-emerald-800 leading-relaxed font-medium">
                This conference positions India and the Commonwealth at the forefront of global healthcare transformation, 
                making it a landmark event in AI, medicine, and health policy.
              </p>
            </div>
          </div>
            </div>
          </section>

          {/* Why Partner Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Why Partner with CMA Global Conference 2025?
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-emerald-100">
              <p className="text-lg sm:text-xl text-emerald-800 leading-relaxed text-center font-medium">
                Becoming a Sponsor or Exhibitor at this prestigious event offers unparalleled opportunities to connect with 
                <span className="font-bold text-emerald-700"> 1,000+ healthcare leaders</span> from across the Commonwealth and beyond.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">Brand Leadership</h3>
                </div>
                <p className="text-emerald-800 leading-relaxed">
                  Position your company as a global thought leader at the intersection of medicine and technology.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">High-Value Exposure</h3>
                </div>
                <p className="text-emerald-800 leading-relaxed">
                  Showcase your products, services, and innovations to a targeted audience of decision-makers, including clinicians, hospital leaders, policymakers, and international delegates.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">Direct Engagement</h3>
                </div>
                <p className="text-emerald-800 leading-relaxed">
                  Build relationships with healthcare providers, investors, and regulators shaping the future of healthcare.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">Media Visibility</h3>
                </div>
                <p className="text-emerald-800 leading-relaxed">
                  Featured in national & international media coverage and CMA digital campaigns.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">Global Recognition</h3>
                </div>
                <p className="text-emerald-800 leading-relaxed">
                  Benefit from association with CMA—an organization with influence across 56 nations—and visibility across international communications and press.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8 sm:mt-12 space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button 
                  onClick={openPDF}
                  className="inline-flex items-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-xl hover:shadow-2xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 text-lg sm:text-xl"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  More About The Event
                </button>
                
                <a
                  href="/events/ai-healthcare-conference/register"
                  className="inline-flex items-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 text-lg sm:text-xl"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Register Now
                </a>
              </div>
            </div>
          </div>
            </div>
          </section>

          {/* CMA Innovation & Impact Pitch Fest Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  CMA Innovation & Impact Pitch Fest
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-emerald-100">
                  <p className="text-lg sm:text-xl text-emerald-800 leading-relaxed text-center font-medium">
                    The highlight of the conference, the Innovation & Impact Pitch Fest, is where 
                    <span className="font-bold text-emerald-700"> future unicorns in health-tech</span> take the stage. 
                    Emerging companies present their solutions before an eminent global jury of physicians, investors, and innovators. 
                    This is not just a competition. It is a launchpad for global credibility.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-8 sm:mb-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-xl">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-900 mb-4">Participation Details</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="font-semibold text-emerald-900">Entry Fee</span>
                        </div>
                        <p className="text-lg font-bold text-emerald-700">INR 10000</p>
                      </div>
          
                      <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="font-semibold text-emerald-900">Delegate Access</span>
                        </div>
                        <p className="text-emerald-800">2 Complimentary delegate passes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-xl">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-900 mb-4">The Top 3 Innovations will receive:</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-emerald-900 mb-1">CMA Approved Innovation</p>
                            <p className="text-sm text-emerald-800">A seal of excellence recognised across 56 nations</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-emerald-900 mb-1">Global Visibility</p>
                            <p className="text-sm text-emerald-800">Elevated recognition and international exposure</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-emerald-900 mb-1">Future Opportunities</p>
                            <p className="text-sm text-emerald-800">Showcase opportunities at future CMA events (subject to approval)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* A Landmark Event Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  A Landmark Event of Knowledge, Networking & Innovation
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-emerald-100">
                  <p className="text-lg sm:text-xl text-emerald-800 leading-relaxed text-center font-medium">
                    The CMA Global Conference 2025 is more than a medical meeting. It is a 
                    <span className="font-bold text-emerald-700"> premier international platform</span> for:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-3 sm:mb-4">Knowledge</h3>
                    <p className="text-emerald-800 leading-relaxed">CME workshops, global keynotes, and evidence-based updates</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-3 sm:mb-4">Networking</h3>
                    <p className="text-emerald-800 leading-relaxed">Connecting policymakers, industry captains, investors, and clinicians</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-3 sm:mb-4">Innovation</h3>
                    <p className="text-emerald-800 leading-relaxed">Unveiling cutting-edge technologies and disruptive ideas in AI and medicine</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl p-6 sm:p-8 text-center border border-emerald-200">
                  <p className="text-lg sm:text-xl text-emerald-800 leading-relaxed font-medium">
                    Join us in Hyderabad for the CMA Global Conference 2025 – where the Commonwealth and the world unite to reimagine the future of healthcare.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conference Overview Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Conference Overview
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-emerald-200">
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4 sm:mb-6">
                      &quot;Transforming Care Together: AI & Digital Health for a Healthier Commonwealth&quot;
                    </h3>
                    <p className="text-lg sm:text-xl text-emerald-800 leading-relaxed">
                      The CMA Global Conference 2025 on AI in Healthcare & Medicine will convene over <span className="font-bold text-emerald-700">1,000+ delegates</span> including 
                      physicians, innovators, researchers, policymakers, and industry leaders. This premier event will serve as a 
                      knowledge, networking, and innovation hub.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Event Details Tab */}
      {activeTab === 'event' && (
        <div className="space-y-8 sm:space-y-12">

          {/* Registration CTA Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-emerald-200">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
                  Ready to Join the Conference?
                </h2>
                <p className="text-lg text-emerald-800 mb-6 max-w-2xl mx-auto">
                  Register now to secure your spot at the CMA Global Conference 2025 on AI in Healthcare & Medicine
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/events/ai-healthcare-conference/register"
                    className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold shadow-xl hover:shadow-2xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 text-lg sm:text-xl transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Register Now
                  </a>
                  
                  <button
                    onClick={() => setShowAgendaModal(true)}
                    className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 text-lg sm:text-xl transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    Click to See Agenda
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Venue Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4 sm:mb-6 text-center">
            Event Venue & Schedule
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-emerald-900">Date</h3>
              </div>
              <p className="text-sm sm:text-base text-emerald-800 leading-relaxed">
                    <strong>22nd & 23rd November, 2025</strong>
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-emerald-900">Venue</h3>
              </div>
              <p className="text-sm sm:text-base text-emerald-800 leading-relaxed">
                    <strong>Jubilee Hills Convention Centre</strong><br/>
                    Hyderabad, India
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Chief Guests Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Chief Guests
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {/* Chief Guest 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-7 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                         <Image
                           src="/Events Pics/Chief Guests/Chief Guest 1.jpg"
                           alt="Chief Guest 1"
                           width={112}
                           height={112}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                           style={{ objectPosition: 'center top' }}
                         />
                          </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                            </svg>
                          </div>
                        </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Hon&apos;ble</p>
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Chief Minister</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Sri. A. Revanth Reddy</h4>
                      <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                      </div>
                    </div>
                    
                  {/* Chief Guest 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-7 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                         <Image
                           src="/Events Pics/Chief Guests/Chief Guest 2.jpg"
                           alt="Chief Guest 2"
                           width={112}
                           height={112}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                           style={{ objectPosition: 'center top' }}
                         />
                        </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                            </svg>
                        </div>
                        </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Hon&apos;ble</p>
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Mallu Bhatti Vikramarka</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Deputy Chief Minister</h4>
                      <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                        </div>
                      </div>
                      
                  {/* Chief Guest 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-7 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                         <Image
                           src="/Events Pics/Chief Guests/Chief Guest 3.jpg"
                           alt="Chief Guest 3"
                           width={112}
                           height={112}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                           style={{ objectPosition: 'center top' }}
                         />
                        </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                        </div>
                        </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Hon&apos;ble</p>
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. P. Ashok Gajapathi Raju</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Governor of Goa</h4>
                        </div>
                      </div>
                      
                  {/* Chief Guest 4 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-7 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                         <Image
                           src="/Events Pics/Chief Guests/Chief Guest 4.jpeg"
                           alt="Chief Guest 4"
                           width={112}
                           height={112}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                           style={{ objectPosition: 'center top' }}
                         />
                        </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                        </div>
                        </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Hon&apos;ble</p>
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Justice Ujjal Bhuyan</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Judge, Supreme Court of India</h4>
                      </div>
                        </div>
                        </div>
                        </div>
                      </div>
          </section>

          {/* Guest of Honour Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                        </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Guests of Honour
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
                      </div>
                      
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {/* Guest of Honour 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-7 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Guest of Honour/Guest of Honour 1.jpg"
                          alt="Sri C. Damodar Raja Narasimha"
                          width={112}
                          height={112}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                        </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        </div>
                        </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri C. Damodar Raja Narasimha</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Minister for Health Medical & Family Welfare</h4>
                      <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                        </div>
                      </div>
                      
                  {/* Guest of Honour 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Guest of Honour/Guest of Honour 2.jpg"
                          alt="Sri. D. Sridhar Babu"
                          width={112}
                          height={112}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                        </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        </div>
                        </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. D. Sridhar Babu</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Minister for IT, Electronics, Communications, Industries & Commerce</h4>
                      <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                  </div>
                </div>

                  {/* Guest of Honour 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Guest of Honour/Guest of Homour 3.jpg"
                          alt="Sri Vem Narender Reddy"
                          width={112}
                          height={112}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                          </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                            </svg>
                          </div>
                        </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri Vem Narender Reddy</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Special Advisor to Chief Minister</h4>
                      <p className="text-xs text-emerald-700">(Public Affairs)</p>
                      </div>
                    </div>
                    
                  {/* Guest of Honour 4 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Guest of Honour/Guest of Honour 4.jpg"
                          alt="Sri. Jupally Krishna Rao"
                          width={112}
                          height={112}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                        </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        </div>
                        </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Jupally Krishna Rao</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Minister for Prohibition & Excise, Tourism and Culture</h4>
                      <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                        </div>
                      </div>
                      
                  {/* Guest of Honour 5 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Guest of Honour/Guest of Honour 5.jpg"
                          alt="Sri. G. Vivek Venkatswamy"
                          width={112}
                          height={112}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                        </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        </div>
                        </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. G. Vivek Venkatswamy</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Minister for Labour, Employment, Training and Factories</h4>
                      <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                        </div>
                      </div>
                      
                  {/* Guest of Honour 6 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Guest of Honour/Guest of Honour 6.jpg"
                          alt="Sri. Ponnam Prabhakar Goud"
                          width={112}
                          height={112}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                        </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        </div>
                        </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Ponnam Prabhakar Goud</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Minister for Transport and BC Welfare</h4>
                      <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                        </div>
                      </div>
                      
                  {/* Guest of Honour 7 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Guest of Honour/Guest of Honour 7.jpg"
                          alt="Smt. Dansari Anasuya"
                          width={112}
                          height={112}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                        </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        </div>
                        </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Smt. Dansari Anasuya</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Minister For Panchayati Raj & Rural Development, Rural Water Supply, Women & Child Welfare</h4>
                      <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                        </div>
                      </div>
                      
                  {/* Guest of Honour 8 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Guest of Honour/Guest ofr Honour 8.jpg"
                          alt="Smt. Konda Surekha"
                          width={112}
                          height={112}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                        </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        </div>
                        </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Smt. Konda Surekha</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Minister for Forest & Environment, & Endowments</h4>
                      <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                        </div>
                      </div>
                  {/* Additional Guests (shown when View More is clicked) */}
                  {showAllGuestsOfHonour && (
                    <>
                      {/* Guest of Honour 9 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                            <Image
                              src="/Events Pics/Guest of Honour/Guest of Honour 9.jpg"
                              alt="Sri. Bomma Mahesh Kumar Goud"
                              width={112}
                              height={112}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                        </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                            </svg>
                        </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Bomma Mahesh Kumar Goud</h3>
                          <h4 className="text-sm sm:text-base font-semibold text-emerald-800">President, Telangana Pradesh Congress Committee</h4>
                        </div>
                      </div>
                      
                      {/* Guest of Honour 10 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                            <Image
                              src="/Events Pics/Guest of Honour/Guest of Honour 10.jpg"
                              alt="Sri. Adluri Laxman Kumar"
                              width={112}
                              height={112}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                        </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                            </svg>
                        </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Adluri Laxman Kumar</h3>
                          <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Minister for SC, ST and Minority, Welfare</h4>
                          <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                        </div>
                      </div>
                      
                      {/* Guest of Honour 11 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                            <Image
                              src="/Events Pics/Guest of Honour/Guest of Honor 11.jpg"
                              alt="Sri. Vakiti Srihari"
                              width={112}
                              height={112}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                        </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                    </div>
                  </div>
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Vakiti Srihari</h3>
                          <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Minister for Animal Husbandry, Dairy Development & Fisheries, Sports, & Youth Affairs</h4>
                          <p className="text-xs text-emerald-700">Govt. of Telangana</p>
                    </div>
                  </div>
                  
                      {/* Guest of Honour 12 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                            <Image
                              src="/Events Pics/Guest of Honour/Guest of Honour 12.jpg"
                              alt="Sri. Dr. Samudrala Venugopala Chary"
                              width={112}
                              height={112}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                    </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                    </div>
                  </div>
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Dr. Samudrala Venugopala Chary</h3>
                          <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Former Central Minister</h4>
                    </div>
                  </div>
                  
                      {/* Guest of Honour 13 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                            <Image
                              src="/Events Pics/Guest of Honour/Guest of Honour 13.jpg"
                              alt="Sri. Dr. Mallu Ravi"
                              width={112}
                              height={112}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                    </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                    </div>
                  </div>
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Dr. Mallu Ravi</h3>
                          <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Hon&apos;ble MP, Nagarkurnool</h4>
                    </div>
                  </div>
                  
                      {/* Guest of Honour 14 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                            <Image
                              src="/Events Pics/Guest of Honour/Guest of Honour 14.jpg"
                              alt="Sri. Prasada rao Dagumalla"
                              width={112}
                              height={112}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                    </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                    </div>
                  </div>
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Prasada rao Dagumalla</h3>
                          <h4 className="text-sm sm:text-base font-semibold text-emerald-800">Hon&apos;ble MP, Chittoor</h4>
                    </div>
                  </div>
                  
                      {/* Guest of Honour 15 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-3 ring-emerald-100 group-hover:ring-emerald-200">
                            <Image
                              src="/Events Pics/Guest of Honour/Guest of Honour 15.png"
                              alt="Sri. Dr Dilip Bhanushali"
                              width={112}
                              height={112}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                    </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                      </svg>
                    </div>
                  </div>
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Dr Dilip Bhanushali</h3>
                          <h4 className="text-sm sm:text-base font-semibold text-emerald-800">IMA National President</h4>
                    </div>
                    </div>
                    </>
                  )}
                  </div>

                {/* View More Button */}
                <div className="text-center mt-8 sm:mt-10">
                  <button
                    onClick={() => setShowAllGuestsOfHonour(!showAllGuestsOfHonour)}
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full shadow-lg text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {showAllGuestsOfHonour ? 'View Less' : 'View More'} Guests
                    <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                </div>
          </div>
        </div>
      </section>

          {/* Special Guests Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Special Guests
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-8xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Special Guest 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 1.jpeg"
                          alt="Sri. Sevala Naik Mude"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-900 leading-tight">Sri. Sevala Naik Mude</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <h4 className="text-sm sm:text-base font-semibold text-emerald-800 leading-relaxed">Addl. Secretary</h4>
                        <p className="text-xs sm:text-sm text-emerald-700 mt-1">Central and West Africa</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Guest 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 2.jpg"
                          alt="Sri. Jayesh Ranjan IAS"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-900 leading-tight">Sri. Jayesh Ranjan IAS</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <h4 className="text-sm sm:text-base font-semibold text-emerald-800 leading-relaxed">Special Chief Secretary of Telangana</h4>
                        <p className="text-xs sm:text-sm text-emerald-700 mt-1">Youth Advancement, Tourism and Culture Department, CEO of SPEED, Chief Minister&apos;s Office</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Guest 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 3.jpg"
                          alt="Smt Dr. Christina Z. Chongthu IAS"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-900 leading-tight">Smt Dr. Christina Z. Chongthu IAS</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <h4 className="text-sm sm:text-base font-semibold text-emerald-800 leading-relaxed">Secretary to Government</h4>
                        <p className="text-xs sm:text-sm text-emerald-700 mt-1">Health Medical & Family Welfare Department, Telangana</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Guest 4 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 4.jpg"
                          alt="Sri. Sanjay Kumar IAS"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-900 leading-tight">Sri. Sanjay Kumar IAS</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <h4 className="text-sm sm:text-base font-semibold text-emerald-800 leading-relaxed">Special Chief Secretary</h4>
                        <p className="text-xs sm:text-sm text-emerald-700 mt-1">ITE & C, Government of Telangana</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Guest 5 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 5.jpg"
                          alt="Sri. Obaidullah Kotwal"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-900 leading-tight">Sri. Obaidullah Kotwal</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <h4 className="text-sm sm:text-base font-semibold text-emerald-800 leading-relaxed">Chairman</h4>
                        <p className="text-xs sm:text-sm text-emerald-700 mt-1">Telangana State Minority Finance Corporation</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Guest 6 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-200">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 6.jpeg"
                          alt="Sri. Deepak John"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-900 leading-tight">Sri. Deepak John</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <h4 className="text-sm sm:text-base font-semibold text-emerald-800 leading-relaxed">Chairman</h4>
                        <p className="text-xs sm:text-sm text-emerald-700 mt-1">Telangana Christian Minorities Finance Corporation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

            {/* Commonwealth Medical Association Section */}
            <section className="mb-12 sm:mb-16">
              <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-2 sm:mb-4">
                    Commonwealth Medical Association
                  </h2>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-700 mb-4 sm:mb-6">
                    Executive Members 2024-2026
                  </h3>
                  <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
                  <p className="text-base sm:text-lg text-emerald-700/80 max-w-3xl mx-auto leading-relaxed">
                    Leadership team and executive members of the Commonwealth Medical Association, dedicated to advancing healthcare excellence across the Commonwealth nations.
                  </p>
                </div>
                
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                    
                    {/* Member 1 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                          <Image
                            src="/Events Pics/Cma Executive Members/Cmaem 1.jpg"
                            alt="Prof. Dr. J.A. Jayalai"
                            width={112}
                            height={112}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'center' }}
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Prof. Dr. J.A. Jayalai</h3>
                        <div className="pt-2 border-t border-emerald-100">
                          <p className="text-xs sm:text-sm text-emerald-700 font-semibold">CMA- President</p>
                        </div>
                      </div>
                    </div>

                    {/* Member 2 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                          <Image
                            src="/Events Pics/Cma Executive Members/Cmaem 2.jpg"
                            alt="Dr. Murugaraj Rajathurai"
                            width={112}
                            height={112}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'center' }}
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Murugaraj Rajathurai</h3>
                        <div className="pt-2 border-t border-emerald-100">
                          <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Immediate Past President, CMA</p>
                        </div>
                      </div>
                    </div>

                    {/* Member 3 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                          <Image
                            src="/Events Pics/Cma Executive Members/Cmaem 3.jpg"
                            alt="Dr. Mugambi Joy K."
                            width={112}
                            height={112}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'center' }}
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Mugambi Joy K.</h3>
                        <div className="pt-2 border-t border-emerald-100">
                          <p className="text-xs sm:text-sm text-emerald-700 font-semibold">CMA-Secretary General Kenya</p>
                        </div>
                      </div>
                    </div>

                    {/* Member 4 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                          <Image
                            src="/Events Pics/Cma Executive Members/Cmaem 4.png"
                            alt="Dr. Colin Abel"
                            width={112}
                            height={112}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'center' }}
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Colin Abel</h3>
                        <div className="pt-2 border-t border-emerald-100">
                          <p className="text-xs sm:text-sm text-emerald-700 font-semibold">CMA Treasurer Jamaica</p>
                        </div>
                      </div>
                    </div>

                    {/* Member 5 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                          <Image
                            src="/Events Pics/Cma Executive Members/Cmaem 5.jpg"
                            alt="Dr. Gordon"
                            width={112}
                            height={112}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'center' }}
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Gordon</h3>
                        <div className="pt-2 border-t border-emerald-100">
                          <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Vice President Malta</p>
                        </div>
                      </div>
                    </div>

                    {/* Member 6 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                          <Image
                            src="/Events Pics/Cma Executive Members/Cmaem 6.png"
                            alt="Dr. Vishi Yohan Beharry"
                            width={112}
                            height={112}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'center' }}
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Vishi Yohan Beharry</h3>
                        <div className="pt-2 border-t border-emerald-100">
                          <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Vice President Trinidad</p>
                        </div>
                      </div>
                    </div>
                    {/* Member 7 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                          <Image
                            src="/Events Pics/Cma Executive Members/Cmaem 7.jpg"
                            alt="Dr. Mary Amoakoh-Coleman"
                            width={112}
                            height={112}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'center' }}
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Mary Amoakoh-Coleman</h3>
                        <div className="pt-2 border-t border-emerald-100">
                          <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Vice President Ghana</p>
                        </div>
                      </div>
                    </div>

                    {/* Member 8 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                          <Image
                            src="/Events Pics/Cma Executive Members/Cmaem 8.png"
                            alt="Dr.Kaumba Manyoni Tolopu"
                            width={112}
                            height={112}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'center' }}
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr.Kaumba Manyoni Tolopu</h3>
                        <div className="pt-2 border-t border-emerald-100">
                          <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Vice President Zambia</p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Members (9-15) - Hidden by default */}
                    {showAllCmaMembers && (
                      <>
                        {/* Member 9 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                          <div className="relative mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                              <Image
                                src="/Events Pics/Cma Executive Members/Cmaem 9.jpg"
                                alt="Dr. R.V. Asokan"
                                width={112}
                                height={112}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                style={{ objectPosition: 'center' }}
                              />
                            </div>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. R.V. Asokan</h3>
                            <div className="pt-2 border-t border-emerald-100">
                              <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Vice President</p>
                            </div>
                          </div>
                        </div>

                        {/* Member 10 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                          <div className="relative mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                              <Image
                                src="/Events Pics/Cma Executive Members/Cmaem 10.jpg"
                                alt="Dr. Vasu Pillai"
                                width={112}
                                height={112}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                style={{ objectPosition: 'center' }}
                              />
                            </div>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Vasu Pillai</h3>
                            <div className="pt-2 border-t border-emerald-100">
                              <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Vice President Malaysia</p>
                            </div>
                          </div>
                        </div>

                        {/* Member 11 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                          <div className="relative mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                              <Image
                                src="/Events Pics/Cma Executive Members/Cmaem 11.jpeg"
                                alt="Prof. Vajira H. W. Dissanayake"
                                width={112}
                                height={112}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                style={{ objectPosition: 'center' }}
                              />
                            </div>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Prof. Vajira H. W. Dissanayake</h3>
                            <div className="pt-2 border-t border-emerald-100">
                              <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Chairman, AI & Digital Health CMA</p>
                            </div>
                          </div>
                        </div>

                        {/* Member 12 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                          <div className="relative mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                              <Image
                                src="/Events Pics/Cma Executive Members/Cmaem 12.jpeg"
                                alt="Prof. Dr. S.Aruirhaj"
                                width={112}
                                height={112}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                style={{ objectPosition: 'center' }}
                              />
                            </div>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Prof. Dr. S.Aruirhaj</h3>
                            <div className="pt-2 border-t border-emerald-100">
                              <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Co Chairman, AI & Digital Health, CMA</p>
                            </div>
                          </div>
                        </div>

                        {/* Member 13 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                          <div className="relative mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                              <Image
                                src="/Events Pics/Cma Executive Members/Cmaem 13.jpg"
                                alt="Dr. Prabhu Kumar Challagali"
                                width={112}
                                height={112}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                style={{ objectPosition: 'center' }}
                              />
                            </div>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Prabhu Kumar Challagali</h3>
                            <div className="pt-2 border-t border-emerald-100">
                              <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Convener - AI, Digital Committee, Organizing Chairman</p>
                            </div>
                          </div>
                        </div>
                        {/* Member 14 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                          <div className="relative mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                              <Image
                                src="/Events Pics/Cma Executive Members/Cmaem 14.jpg"
                                alt="Dr. Osahon Enabulele"
                                width={112}
                                height={112}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                style={{ objectPosition: 'center' }}
                              />
                            </div>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Osahon Enabulele</h3>
                            <div className="pt-2 border-t border-emerald-100">
                              <p className="text-xs sm:text-sm text-emerald-700 font-semibold">CMA Constitution Committee Chairman Nigeria</p>
                            </div>
                          </div>
                        </div>

                        {/* Member 15 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                          <div className="relative mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-emerald-300 transition-all duration-300">
                              <Image
                                src="/Events Pics/Cma Executive Members/Cmaem 15.png"
                                alt="Dr. Merlinda Shazellennne"
                                width={112}
                                height={112}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                style={{ objectPosition: 'center' }}
                              />
                            </div>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Merlinda Shazellennne</h3>
                            <div className="pt-2 border-t border-emerald-100">
                              <p className="text-xs sm:text-sm text-emerald-700 font-semibold">CMA Young Dr&apos;s forum Chairperson Malaysia</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* View More Button */}
                  <div className="text-center mt-8 sm:mt-12">
                    <button
                      onClick={() => setShowAllCmaMembers(!showAllCmaMembers)}
                      className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showAllCmaMembers ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}/>
                      </svg>
                      {showAllCmaMembers ? 'View Less Members' : 'View More Members'}
                    </button>
                  </div>
                </div>
              </div>
            </section>

          {/* CMA Subcommittee Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                  Commonwealth Medical Association
                </h2>
                <div className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-full mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base font-semibold">SUBCOMMITTEE—AI and DIGITAL HEALTH 2024-2026</p>
                </div>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                  {/* Member 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Cma Subcommitee/Cmas 1.jpeg"
                          alt="Prof. Vajira H. W. Dissanayake"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Prof. Vajira H. W. Dissanayake</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Chairman, AI & Digital Health CMA</p>
                      </div>
                    </div>
                  </div>

                  {/* Member 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-7 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Cma Subcommitee/Cmas 2.jpeg"
                          alt="Prof. Dr.S.Arulrhaj"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Prof. Dr.S.Arulrhaj</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Co Chairman, AI & Digital Health, CMA</p>
                      </div>
                    </div>
                  </div>

                  {/* Member 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Cma Subcommitee/Cmas 3.jpg"
                          alt="Mr.Suresh Yadav JI"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Mr.Suresh Yadav JI</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Mentor Deputy Chief of Staff & Director of AI & Digital Transformation Commonwealth Secretariat, London</p>
                      </div>
                    </div>
                  </div>

                  {/* Member 4 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Cma Subcommitee/Cmas 4.jpg"
                          alt="Prof. Dr. Chelliah Selvasekar"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Prof. Dr. Chelliah Selvasekar</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Consultant Colorectal Surgeon, NHS, UK, Christie Hospital, Mentor</p>
                      </div>
                    </div>
                  </div>

                  {/* Member 5 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Cma Subcommitee/Cmas 5.jpg"
                          alt="Dr. Prabhu Kumar Challagali"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Prabhu Kumar Challagali</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Convener -AI, Digital Committee, Organizing Chairman</p>
                      </div>
                    </div>
                  </div>

                  {/* Member 6 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Cma Subcommitee/Cmas 6.jpg"
                          alt="Dr. Sivakumar Manickam"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Sivakumar Manickam</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Paediatric Radiologist, Kings College UK, Member</p>
                      </div>
                    </div>
                  </div>

                  {/* Member 7 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Cma Subcommitee/Cmas 7.jpg"
                          alt="PROF. (Dr.) Saurabh Varshney"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: '70% 28%' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">PROF. (Dr.) Saurabh Varshney</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Exec. Director & CEO (AIIMS)</p>
                      </div>
                    </div>
                  </div>

                  {/* Member 8 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Cma Subcommitee/Cmas 8.jpg"
                          alt="Dr.Duan MurugaRaj, Junior"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr.Duan MurugaRaj, Junior</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Member, Malaysia</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Members (shown when View More is clicked) */}
                  {showAllCmaSubcommittee && (
                    <>
                      {/* Member 9 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Cma Subcommitee/Cmas 9.jpg"
                              alt="Prof. Dr. Rajesh Sivaprakasam"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Prof. Dr. Rajesh Sivaprakasam</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart&apos;s Health</p>
                          </div>
                        </div>
                      </div>

                      {/* Member 10 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Cma Subcommitee/Cmas 10.jpeg"
                              alt="Dr. Sivakumar Dhanaraj"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Sivakumar Dhanaraj</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Consultant Radiologist, Neuroradiologist, Stroke Imaging Expert</p>
                          </div>
                        </div>
                      </div>

                      {/* Member 11 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Cma Subcommitee/Cmas 11.jpg"
                              alt="Dr. Sarah Catania HST surgery"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Sarah Catania HST surgery</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Member, Malta</p>
                          </div>
                        </div>
                      </div>
                      {/* Member 12 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Cma Subcommitee/Cmas 12.png"
                              alt="Dr. S. Luxman Family Physician"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. S. Luxman Family Physician</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Member, UK</p>
                          </div>
                        </div>
                      </div>

                      {/* Member 13 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Cma Subcommitee/Cmas 13.jpg"
                              alt="Ms. Rehana Ameer Advisor"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Ms. Rehana Ameer Advisor</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Former Councillor - City of London & Founder SMAART Healthcare</p>
                          </div>
                        </div>
                      </div>

                      {/* Member 14 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Cma Subcommitee/Cmas 14.jpeg"
                              alt="Sri. Dr. S. Karthick prabhu"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Dr. S. Karthick prabhu</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Health Committee, Member</p>
                          </div>
                        </div>
                      </div>

                      {/* Member 15 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Cma Subcommitee/Cmas 15.jpg"
                              alt="Dr. V S Hariharan"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. V S Hariharan</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Member</p>
                          </div>
                        </div>
                      </div>

                      {/* Member 16 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Cma Subcommitee/Cmas 16.jpeg"
                              alt="Dr. Gumindu Kulatunga"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Gumindu Kulatunga</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold">Member, Srilanka</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* View More Button */}
                <div className="text-center mt-10 sm:mt-12">
                  <button
                    onClick={() => setShowAllCmaSubcommittee(!showAllCmaSubcommittee)}
                    className="inline-flex items-center px-10 py-4 border-2 border-emerald-500 text-base font-bold rounded-full shadow-lg text-emerald-700 bg-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className={`mr-2 h-5 w-5 transition-transform duration-300 ${showAllCmaSubcommittee ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                    {showAllCmaSubcommittee ? 'View Less Members' : 'View More Members'}
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Speakers Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 11l-4-4m0 0l-4 4m4-4v12"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Distinguished Speakers
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                  {/* Speaker 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Speakers/Speaker 1.jpeg"
                          alt="Sri. Jayesh Ranjan, IAS"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Jayesh Ranjan, IAS</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Special Chief Secretary of Telangana Youth Advancement, Tourism and Culture Department, CEO of SPEED, Chief Minister&apos;s Office</p>
                      </div>
                    </div>
                  </div>

                  {/* Speaker 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Speakers/Speaker 2.jpeg"
                          alt="Sri. Dr. K.M. Abul Hasan"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Dr. K.M. Abul Hasan</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Chairman Hospital board of India</p>
                      </div>
                    </div>
                  </div>

                  {/* Speaker 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Speakers/Speaker 3.jpeg"
                          alt="Sri. Prof. Bapiraju"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Prof. Bapiraju</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Head, Centre For Cognitive Science, IIIT, Hyderabad</p>
                      </div>
                    </div>
                  </div>

                  {/* Speaker 4 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Speakers/Speaker 4.jpeg"
                          alt="Sri. Ajay Mishra"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Ajay Mishra</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">IAS(Rtd), Chairman Redcross Society</p>
                      </div>
                    </div>
                  </div>

                  {/* Speaker 5 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Speakers/Speaker 5.jpeg"
                          alt="Sri. Mohan Silaparasetty"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Mohan Silaparasetty</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Trendwise Analytics AI Bangalore</p>
                      </div>
                    </div>
                  </div>

                  {/* Speaker 6 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Speakers/Speaker 6.jpeg"
                          alt="Sri. D Pradeep VM"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. D Pradeep VM</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Head Of Cyber Security, Cybercrime Investigator, CISO</p>
                      </div>
                    </div>
                  </div>
                  {/* Speaker 7 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Speakers/Speaker 7.jpeg"
                          alt="Sri. Sarvesh Singh"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Sarvesh Singh</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Member, Committee of Advanced Technologies, Government of AP</p>
                      </div>
                    </div>
                  </div>

                  {/* Speaker 8 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                        <Image
                          src="/Events Pics/Speakers/Speaker 8.jpeg"
                          alt="Sri. Prof. Vishal Karungulam"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Prof. Vishal Karungulam</h3>
                      <div className="pt-2 border-t border-emerald-100">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Clinical Assistant Professor (Teaching), Information Systems Academic Director, ISB</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Speakers (shown when View More is clicked) */}
                  {showAllSpeakers && (
                    <>
                      {/* Speaker 9 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Speakers/Speaker 9.jpeg"
                              alt="Smt. Dr Kamala Kanaparthy"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Smt. Dr Kamala Kanaparthy</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">General Physician Ex. Supdt Esic Hospital, Nacharam, ISB</p>
                          </div>
                        </div>
                      </div>

                      {/* Speaker 10 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Speakers/Speaker 10.jpeg"
                              alt="Dr. Anuradha Sekaran"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Anuradha Sekaran</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Director and Chief of Pathology, AIG hospitals</p>
                          </div>
                        </div>
                      </div>

                      {/* Speaker 11 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Speakers/Speaker 11.jpg"
                              alt="Prof. Dr. Rajesh Sivaprakasam"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Prof. Dr. Rajesh Sivaprakasam</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart&apos;s Health</p>
                          </div>
                        </div>
                      </div>

                      {/* Speaker 12 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Speakers/Speaker 12.jpeg"
                              alt="Sri. Prof. Dr. Ananth Padmanabhan. Dean"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Prof. Dr. Ananth Padmanabhan. Dean</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Vinayaka Mission Law School</p>
                          </div>
                        </div>
                      </div>

                      {/* Speaker 13 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Speakers/Speaker 13.jpeg"
                              alt="Dr. Sivakumar Dhanaraj"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. Sivakumar Dhanaraj</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Consultant Radiologist, Neuroradiologist, Stroke Imaging Expert</p>
                          </div>
                        </div>
                      </div>
                      {/* Speaker 14 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Speakers/Speaker 14.jpeg"
                              alt="Sri. Raja Poladi Head"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Raja Poladi Head</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">CDiTH, IIIT H, Technology Leader - Data, Analytics & AI IIM Calcutta Centre for Digital Tech in Healthcare, Hyderabad</p>
                          </div>
                        </div>
                      </div>

                      {/* Speaker 15 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Speakers/Speaker 15.png"
                              alt="Dr. J. Gopala Krishna"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Dr. J. Gopala Krishna</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Gen. Physician OMC/OGH Hony, Secretary IMA B.Hills</p>
                          </div>
                        </div>
                      </div>

                      {/* Speaker 16 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Speakers/Speaker 16.jpeg"
                              alt="Sri. Dr. K. Manivannan"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Dr. K. Manivannan</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">Associate Professor & HOI i/c Vinayaka Missions School of Health Systems</p>
                          </div>
                        </div>
                      </div>

                      {/* Speaker 17 */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-emerald-100 group-hover:ring-emerald-300">
                            <Image
                              src="/Events Pics/Speakers/Speaker 17.jpeg"
                              alt="Sri. Venkata Sureshbabu Bondu"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center top' }}
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a5 5 0 01-5 5H6a3 3 0 01-3-3V7a3 3 0 013-3h7a5 5 0 015 5v2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-bold text-emerald-900 leading-tight">Sri. Venkata Sureshbabu Bondu</h3>
                          <div className="pt-2 border-t border-emerald-100">
                            <p className="text-xs sm:text-sm text-emerald-700 font-semibold leading-relaxed">AVP -Life Sciences R&D | Manufacturing AI solutions, Hexaware Technologies</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* View More Button */}
                <div className="text-center mt-10 sm:mt-12">
                  <button
                    onClick={() => setShowAllSpeakers(!showAllSpeakers)}
                    className="inline-flex items-center px-10 py-4 border-2 border-emerald-500 text-base font-bold rounded-full shadow-lg text-emerald-700 bg-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className={`mr-2 h-5 w-5 transition-transform duration-300 ${showAllSpeakers ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                    {showAllSpeakers ? 'View Less Speakers' : 'View More Speakers'}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Local Organising Committee Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Local Organising Committee
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-14">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl p-6 border border-emerald-200">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-4 text-center">Committee Members</h3>
                      <div className="space-y-4">
                        {/* Chairman */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-emerald-200 shadow-md hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. Prabhu Kumar Challagali</h4>
                              <p className="text-sm text-emerald-700 font-semibold">(Organizing Chairman)</p>
                            </div>
                          </div>
                        </div>

                        {/* Secretary */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-emerald-200 shadow-md hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. J. Gopala Krishna</h4>
                              <p className="text-sm text-emerald-700 font-semibold">(Organising Secretary)</p>
                            </div>
                          </div>
                        </div>
                        {/* Other Members */}
                        <div className="space-y-3">
                          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                              </div>
                              <h4 className="font-semibold text-emerald-900">Dr. Apoorva</h4>
                            </div>
                          </div>

                          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                              </div>
                              <h4 className="font-semibold text-emerald-900">Dr. Ranganayakulu</h4>
                            </div>
                          </div>

                          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                              </div>
                              <h4 className="font-semibold text-emerald-900">Dr. Haricharan</h4>
                            </div>
                          </div>

                          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                              </div>
                              <h4 className="font-semibold text-emerald-900">Dr. B. Sandeep Reddy</h4>
                            </div>
                          </div>

                          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                              </div>
                              <h4 className="font-semibold text-emerald-900">Dr. Surya Teja</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl p-6 border border-emerald-200">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-4 text-center">Committee Members</h3>
                      <div className="space-y-3">
                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-semibold text-emerald-900">Dr. Karunakar Rapolu</h4>
                          </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-semibold text-emerald-900">Dr. Haritha</h4>
                          </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-semibold text-emerald-900">Dr. Elizabeth</h4>
                          </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-semibold text-emerald-900">Dr. Sravanthi</h4>
                          </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-semibold text-emerald-900">Dr. Sishir</h4>
                          </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-semibold text-emerald-900">Dr. Divya Konda</h4>
                          </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-semibold text-emerald-900">Dr. Manisha</h4>
                          </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-semibold text-emerald-900">Dr. Amer Mohammed Naseeruddin</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Advisory Board Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-emerald-50/30 to-green-50/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Advisory Board
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-7xl mx-auto space-y-8">
                {/* Key Advisory Roles */}
                <div className="space-y-6">
                  {/* Political Advisor */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-300 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-purple-900 mb-2">POLITICAL ADVISOR</h3>
                        <h4 className="text-xl font-bold text-emerald-900 mb-1">Sri. Dr. S. Venugopala Chary</h4>
                        <p className="text-sm text-emerald-700 font-medium">Former Central Minister and Former Spl. Representative of Telangana</p>
                      </div>
                    </div>
                  </div>

                  {/* Patron */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-300 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-amber-900 mb-2">PATRON</h3>
                        <h4 className="text-xl font-bold text-emerald-900 mb-1">Sri Dr. Dilip Bhanushali</h4>
                        <p className="text-sm text-emerald-700 font-medium">IMA National President</p>
                      </div>
                    </div>
                  </div>

                  {/* Chief Advisors */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-300 shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-emerald-900 mb-4">CHIEF ADVISORS</h3>
                        
                        <div className="space-y-4">
                          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-emerald-200">
                            <h4 className="text-lg font-bold text-emerald-900 mb-1">Dr. E. Ravindra Reddy</h4>
                            <p className="text-sm text-emerald-700 font-medium">Chairman Action Committee, National IMA</p>
                          </div>
                          
                          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-emerald-200">
                            <h4 className="text-lg font-bold text-emerald-900 mb-1">Sri. Ajay Misra, IAS (Rtd.)</h4>
                            <p className="text-sm text-emerald-700 font-medium">Chairman, Red Cross Society, Former Secretary</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Legal Advisor */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-300 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-blue-900 mb-2">LEGAL ADVISOR</h3>
                        <h4 className="text-xl font-bold text-emerald-900 mb-1">Shri A. Tulsi Raj Gokul</h4>
                        <p className="text-sm text-emerald-700 font-medium">Supreme Court & High Court Advocate, Standing Counsel for Telangana State Legislative Assembly & Council</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advisory Board Members - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-14 mt-12">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl p-6 border border-emerald-200">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-4 text-center">Advisory Board Members</h3>
                      <div className="space-y-3">
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. K. Mahesh Kumar</h4>
                              <p className="text-xs text-emerald-700">Chairman, TGMC</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. Dwarakanath Reddy</h4>
                              <p className="text-xs text-emerald-700">President IMA Telangana State</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. Kaliprasad</h4>
                              <p className="text-xs text-emerald-700">Immediate Past President, IMA</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. P. Kishan</h4>
                              <p className="text-xs text-emerald-700">President Elect IMA Telangana State</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. V Ashok</h4>
                              <p className="text-xs text-emerald-700">Hony Secretary, IMA Telangana State</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. Narsinga Reddy</h4>
                              <p className="text-xs text-emerald-700">Past President, IMA</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. M. Sampath Rao</h4>
                              <p className="text-xs text-emerald-700">Past President, IMA</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. K. Shyamsunder</h4>
                              <p className="text-xs text-emerald-700">Past President, IMA</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-bold text-emerald-900">Dr. Mohan Gupta</h4>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-bold text-emerald-900">Dr. Sanjeev Singh Yadav</h4>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-bold text-emerald-900">Dr. Sambasiva Rao Pilli</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl p-6 border border-emerald-200">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-4 text-center">Advisory Board Members</h3>
                      <div className="space-y-3">
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-bold text-emerald-900">Dr. Shivaraj Armoor</h4>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. K. Balraj</h4>
                              <p className="text-xs text-emerald-700">President, IMA Airport</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. Nalla Ravi Kumar</h4>
                              <p className="text-xs text-emerald-700">(Trade Advisor)</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-bold text-emerald-900">Dr. PR. Sai Kumar</h4>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. G. Srinivas</h4>
                              <p className="text-xs text-emerald-700">TGMC</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-bold text-emerald-900">Dr. J. Ram Mohan</h4>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-bold text-emerald-900">Dr. B. Narender Reddy</h4>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. Vishnu Rao Veerapaneni</h4>
                              <p className="text-xs text-emerald-700">Chairman SWASA Hospital & Foundation</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. Manjula Anagani</h4>
                              <p className="text-xs text-emerald-700">Renowned Gynecologist</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <h4 className="font-bold text-emerald-900">Dr. Jayanthi Reddy</h4>
                          </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. M. Prabhakar Rao</h4>
                              <p className="text-xs text-emerald-700">Nirmal</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-200 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-emerald-900">Dr. D. Ramulu</h4>
                              <p className="text-xs text-emerald-700">Senior Physician and Poet</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </section>

          

          </div>
        )}

   
      {/* Agenda Modal */}
      {showAgendaModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden my-4 sm:my-8">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4 sm:p-6 md:p-8 relative">
              <button
                onClick={() => setShowAgendaModal(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-2 pr-8 sm:pr-0">
                Conference Agenda
              </h2>
              <p className="text-emerald-50 text-center text-xs sm:text-sm md:text-base">22nd & 23rd November, 2025</p>
            </div>

            {/* Day Tabs */}
            <div className="bg-emerald-50 px-3 sm:px-6 py-3 sm:py-4 border-b border-emerald-200">
              <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
                <button
                  onClick={() => setAgendaDay('day1')}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-bold transition-all duration-300 text-sm sm:text-base ${
                    agendaDay === 'day1'
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                      : 'bg-white text-emerald-700 hover:bg-emerald-100'
                  }`}
                >
                  <span className="hidden sm:inline">Day 1 - Nov 22</span>
                  <span className="sm:hidden">Day 1</span>
                </button>
                <button
                  onClick={() => setAgendaDay('day2')}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-bold transition-all duration-300 text-sm sm:text-base ${
                    agendaDay === 'day2'
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                      : 'bg-white text-emerald-700 hover:bg-emerald-100'
                  }`}
                >
                  <span className="hidden sm:inline">Day 2 - Nov 23</span>
                  <span className="sm:hidden">Day 2</span>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(95vh-180px)] sm:max-h-[calc(90vh-200px)]">
              {agendaDay === 'day1' && (
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  {/* Hall A - Day 1 */}
                  <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-emerald-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-3 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold">Hall A - Scientific Sessions & Workshops</h3>
                    </div>
                    
                    {/* Mobile Card View */}
                    <div className="md:hidden p-3 space-y-3 bg-emerald-50/30 max-h-[60vh] overflow-y-auto">
                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">08:00 AM - 09:00 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900">Registrations</h4>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">08:45 AM - 09:00 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Welcome Note: Introduction Of The Course</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Prof. V.A. Jayalal</span>, President-CMA</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">09:00 AM - 09:20 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">An Introduction To AI: Exploring The Basics & Beyond</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Prof. Vajira H. W. Dissanayake</span>, Chairman, AI & Digital Health CMA; <span className="font-bold text-emerald-900">Mohan Silaparasetty</span>, Trendwise Analytics AI Bangalore</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">09:20 AM - 09:40 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI - Google Doctor ------ Challenges</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Dr Prabhu Kumar Challagali</span>, Convenor, AI & Scientific Digital Committee President, IMA, B.Hills; <span className="font-bold text-emerald-900">Dr S. Karthick Prabhu</span> - Secretary, IMA, Tamilnadu; <span className="font-bold text-emerald-900">DR J Gopala Krishna</span>, OMC, Hony.Secretary, IMA B.Hills</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">09:40 AM - 10:00 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Orientation To AI: Empowering Medical Professionals For The Future Of Healthcare</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Prof. Bapiraju</span>, (Head, Centre - Cognitive Sciences, IIIT)</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">10:00 AM - 10:20 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Data Analysis & AI Application In Health Care Research, Publication & Development</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Dr Kamala Kanaparthy</span>, Ex Supdt Esic Hospital, Nacharam, ISB</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">10:20 AM - 10:40 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Optimizing Patient Acquisition & Revenue Cycle Management In Healthcare Through AI</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Lakshmi Mohan</span>, Director of Centre For Industry & Intl. Relations, AV Group of Institutions</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg border-2 border-amber-300 p-4 shadow-md">
                        <div className="flex items-center justify-center gap-2 text-amber-900 mb-1">
                          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                          </svg>
                          <span className="font-bold text-base">☕ Coffee / Tea Break</span>
                        </div>
                        <p className="text-center text-xs font-bold text-amber-800">10:40 AM - 11:00 AM</p>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">11:00 AM - 11:20 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Integrating AI In Healthcare Manpower Management: Challenges & Opportunities</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Dr Suraj Bhansali</span>, VP & Country Head, Certara</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">11:20 AM - 11:40 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI Techniques for Enhancing Efficiency In Organizational Administration & Financial Decision-Making</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Deeksha Agarwal</span>, CA</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">11:40 AM - 12:00 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI & The Law: Addressing Emerging Legal Complexities & Challenges</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Hon&apos;ble Mr Justice Ujjal Bhuyan</span>, Judge, Supreme Court of India</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">12:00 PM - 12:20 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI - Cyber Security</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">D Pradeep VM</span>, Head of Cyber Security, CISO</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">12:20 PM - 12:40 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">The Future Of Clinical Medicine In The Age Of AI: Ethical Considerations For Practice & Policy</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Prof. Dr. J. A. Jayalal</span>, President of CMA; <span className="font-bold text-emerald-900">Prof. Ananth Padmanabhan</span>, Dean of Vinayaka Mission&apos;s Law School</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">12:40 PM - 01:00 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Integrating AI Into Hospital Administration: Challenges And Opportunities For Healthcare Management</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Dr. K. Manivannan</span>, Associate Professor & HOI i/c Vinayaka Missions School of Health Systems</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border-2 border-amber-300 p-4 shadow-md">
                        <div className="flex items-center justify-center gap-2 text-amber-900 mb-1">
                          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-base">🍽️ Lunch Break</span>
                        </div>
                        <p className="text-center text-xs font-bold text-amber-800">01:00 PM - 01:45 PM</p>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">01:45 PM - 02:05 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI in Public Sector Policy Making Toward Smarter & More Efficient Governance</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Sri. Jayesh Ranjan, IAS</span>, Special Chief Secretary, Govt. of Telangana; <span className="font-bold text-emerald-900">Sri. Ajay Mishra, IAS(Rtd)</span>, Chairman Redcross Society</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">02:05 PM - 02:25 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">The Role of AI In Enhancing Patient Safety & Clinical Reliability</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Sarvesh Singh</span>, Governing Board Member, Global Deeptech Forum</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">02:25 PM - 02:45 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI&apos;s Next Frontier: Addressing The Future Challenges & Opportunities</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Prof. Vishal Karungulam</span>, Clinical Assistant Professor (Teaching), Information Systems Academic Director, The Lab - Office of Experiential Learning ISB</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">02:45 PM - 03:05 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">The Role Of AI In Modernizing Judicial Decision-Making</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Venkata Suresh Bondu</span>, AVP, Hexaware</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">03:05 PM - 03:25 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI-Enhanced Pathology: A New Era Of Diagnostic Excellence And Operational Efficiency</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Dr.Anuradha Sekaran</span>, Director & HOD, Pathology, AIG Hospitals</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">03:25 PM - 03:45 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI - Clinical Diagnosis, Rx & Management</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Prof. Dr. Rajesh Sivaprakasam</span>, Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart&apos;s Health -UK</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border-2 border-blue-300 p-4 shadow-md">
                        <div className="flex items-center justify-center gap-2 text-blue-900">
                          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                          </svg>
                          <span className="font-bold text-base">Workshop Sessions</span>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">03:45 PM - 04:15 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">CMA –Code Of Conduct For AI In Health Care</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Prof. Dr.S.Arulrhaj</span>, Co Chairman, AI & Digital Health, CMA; <span className="font-bold text-emerald-900">Dr. K.M. Abul Hasan</span>, Chairman-Hospital Board of India; <span className="font-bold text-emerald-900">Dr V S Hariharan</span>, CMA Member of AI Digital Committee</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">04:15 PM - 05:15 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Workshop Hands On Experience</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Prof. Bapiraju</span>, Head, Centre For Cognitive Sciences, IIIT, HYD; <span className="font-bold text-emerald-900">Mohan Silaparasetty</span>, Trendwise Analytics AI Bangalore</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">05:15 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900">Evaluation And Assessment</h4>
                      </div>
                    </div>

                    {/* Desktop/Tablet Table View */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gradient-to-r from-emerald-100 to-green-100">
                            <th className="border-b-2 border-emerald-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-left font-bold text-emerald-900 text-xs sm:text-sm md:text-base">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Time</span>
                              </div>
                            </th>
                            <th className="border-b-2 border-emerald-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-left font-bold text-emerald-900 text-xs sm:text-sm md:text-base">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                                </svg>
                                <span>Session Title</span>
                              </div>
                            </th>
                            <th className="border-b-2 border-emerald-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-left font-bold text-emerald-900 text-xs sm:text-sm md:text-base">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                                <span>Speaker/Chairperson</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">08:00 AM - 09:00 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Registrations</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"></td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">08:45 AM - 09:00 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Welcome Note: Introduction Of The Course</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Prof. V.A. Jayalal</span>, President-CMA</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">09:00 AM - 09:20 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">An Introduction To AI: Exploring The Basics & Beyond</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Prof. Vajira H. W. Dissanayake</span>, Chairman, AI & Digital Health CMA; <span className="font-bold text-emerald-900">Mohan Silaparasetty</span>, Trendwise Analytics AI Bangalore</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">09:20 AM - 09:40 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">AI - Google Doctor ------ Challenges</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Dr Prabhu Kumar Challagali</span>, Convenor, AI & Scientific Digital Committee President, IMA, B.Hills; <span className="font-bold text-emerald-900">Dr S. Karthick Prabhu</span> - Secretary, IMA, Tamilnadu; <span className="font-bold text-emerald-900">DR J Gopala Krishna</span>, OMC, Hony.Secretary, IMA B.Hills</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">09:40 AM - 10:00 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Orientation To AI: Empowering Medical Professionals For The Future Of Healthcare</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Prof. Bapiraju</span>, (Head, Centre - Cognitive Sciences, IIIT)</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">10:00 AM - 10:20 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Data Analysis & AI Application In Health Care Research, Publication & Development</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Dr Kamala Kanaparthy</span>, Ex Supdt Esic Hospital, Nacharam, ISB</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">10:20 AM - 10:40 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Optimizing Patient Acquisition & Revenue Cycle Management In Healthcare Through AI</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Lakshmi Mohan</span>, Director of Centre For Industry & Intl. Relations, AV Group of Institutions</td>
                          </tr>
                          <tr className="bg-gradient-to-r from-amber-100 to-yellow-100">
                            <td className="border-b border-amber-200 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-amber-900 whitespace-nowrap">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                                </svg>
                                <span className="hidden sm:inline">10:40 AM - 11:00 AM</span>
                                <span className="sm:hidden">10:40-11:00 AM</span>
                              </div>
                            </td>
                            <td className="border-b border-amber-200 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-amber-900 align-top" colSpan={2}>☕ Coffee / Tea Break</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">11:00 AM - 11:20 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Integrating AI In Healthcare Manpower Management: Challenges & Opportunities</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Dr Suraj Bhansali</span>, VP & Country Head, Certara</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">11:20 AM - 11:40 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">AI Techniques for Enhancing Efficiency In Organizational Administration & Financial Decision-Making</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Deeksha Agarwal</span>, CA</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">11:40 AM - 12:00 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">AI & The Law: Addressing Emerging Legal Complexities & Challenges</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Hon&apos;ble Mr Justice Ujjal Bhuyan</span>, Judge, Supreme Court of India</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">12:00 PM - 12:20 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">AI - Cyber Security</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">D Pradeep VM</span>, Head of Cyber Security, CISO</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">12:20 PM - 12:40 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">The Future Of Clinical Medicine In The Age Of AI: Ethical Considerations For Practice & Policy</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Prof. Dr. J. A. Jayalal</span>, President of CMA; <span className="font-bold text-emerald-900">Prof. Ananth Padmanabhan</span>, Dean of Vinayaka Mission&apos;s Law School</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">12:40 PM - 01:00 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Integrating AI Into Hospital Administration: Challenges And Opportunities For Healthcare Management</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Dr. K. Manivannan</span>, Associate Professor & HOI i/c Vinayaka Missions School of Health Systems</td>
                          </tr>
                          <tr className="bg-gradient-to-r from-amber-100 to-orange-100">
                            <td className="border-b border-amber-200 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-amber-900 whitespace-nowrap">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                                </svg>
                                <span className="hidden sm:inline">01:00 PM - 01:45 PM</span>
                                <span className="sm:hidden">01:00-01:45 PM</span>
                              </div>
                            </td>
                            <td className="border-b border-amber-200 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-amber-900 align-top" colSpan={2}>🍽️ Lunch Break</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">01:45 PM - 02:05 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">AI in Public Sector Policy Making Toward Smarter & More Efficient Governance</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Sri. Jayesh Ranjan, IAS</span>, Special Chief Secretary, Govt. of Telangana; <span className="font-bold text-emerald-900">Sri. Ajay Mishra, IAS(Rtd)</span>, Chairman Redcross Society</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">02:05 PM - 02:25 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">The Role of AI In Enhancing Patient Safety & Clinical Reliability</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Sarvesh Singh</span>, Governing Board Member, Global Deeptech Forum</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">02:25 PM - 02:45 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900">AI&apos;s Next Frontier: Addressing The Future Challenges & Opportunities</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Prof. Vishal Karungulam</span>, Clinical Assistant Professor (Teaching), Information Systems Academic Director, The Lab - Office of Experiential Learning ISB</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">02:45 PM - 03:05 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">The Role Of AI In Modernizing Judicial Decision-Making</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Venkata Suresh Bondu</span>, AVP, Hexaware</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">03:05 PM - 03:25 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">AI-Enhanced Pathology: A New Era Of Diagnostic Excellence And Operational Efficiency</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Dr.Anuradha Sekaran</span>, Director & HOD, Pathology, AIG Hospitals</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">03:25 PM - 03:45 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">AI - Clinical Diagnosis, Rx & Management</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Prof. Dr. Rajesh Sivaprakasam</span>, Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart&apos;s Health -UK</td>
                          </tr>
                          <tr className="bg-gradient-to-r from-blue-100 to-indigo-100">
                            <td className="border-b border-blue-200 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-blue-900" colSpan={3}>
                              <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                </svg>
                                <span>Workshop Sessions</span>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">03:45 PM - 04:15 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">CMA –Code Of Conduct For AI In Health Care</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Prof. Dr.S.Arulrhaj</span>, Co Chairman, AI & Digital Health, CMA; <span className="font-bold text-emerald-900">Dr. K.M. Abul Hasan</span>, Chairman-Hospital Board of India; <span className="font-bold text-emerald-900">Dr V S Hariharan</span>, CMA Member of AI Digital Committee</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">04:15 PM - 05:15 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Workshop Hands On Experience</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Prof. Bapiraju</span>, Head, Centre For Cognitive Sciences, IIIT, HYD; <span className="font-bold text-emerald-900">Mohan Silaparasetty</span>, Trendwise Analytics AI Bangalore</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">05:15 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Evaluation And Assessment</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Hall B - Day 1 */}
                  <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-blue-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                      </svg>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold">Hall B - Innovation Pitch Fest</h3>
                    </div>
                    
                    {/* Mobile Card View */}
                    <div className="md:hidden p-3 space-y-3 bg-blue-50/30 max-h-[60vh] overflow-y-auto">
                      <div className="bg-white rounded-lg border border-blue-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-blue-800">09:00 AM - 04:00 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-blue-900 mb-2">Critical evaluation of 30 stalls Accreditation & certification</h4>
                        <div className="pl-6 border-l-2 border-blue-300">
                          <p className="text-xs text-blue-700"><span className="font-bold text-blue-900">Prof. Dr. J. A. Jayalal</span>, <span className="font-bold text-blue-900">Prof. Dr.S.Arulrhaj</span>, <span className="font-bold text-blue-900">Sarvesh Singh</span>, <span className="font-bold text-blue-900">Prof. Rajesh Shiva Prakasam</span>, <span className="font-bold text-blue-900">Dr. Sivakumar Dhanaraj</span>, <span className="font-bold text-blue-900">Dr. Murugaraj</span></p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300 p-4 shadow-md">
                        <div className="flex items-center justify-center gap-2 text-green-900 mb-1">
                          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          <span className="font-bold text-base">🏆 Announcement of Winners</span>
                        </div>
                        <p className="text-center text-xs font-bold text-green-800 mb-2">04:00 PM</p>
                        <div className="pl-6 border-l-2 border-green-400">
                          <p className="text-xs text-blue-700"><span className="font-bold text-blue-900">Mr. Vijay Anand Sivaprakasam</span>, Founder - Botsystems,USA; <span className="font-bold text-blue-900">Mr. Hari Subramaniam</span>, Banking Investor Bangalore</p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop/Tablet Table View */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gradient-to-r from-blue-100 to-indigo-100">
                            <th className="border-b-2 border-blue-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-left font-bold text-blue-900 text-xs sm:text-sm md:text-base">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Time</span>
                              </div>
                            </th>
                            <th className="border-b-2 border-blue-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-left font-bold text-blue-900 text-xs sm:text-sm md:text-base">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                                </svg>
                                <span>Session Title</span>
                              </div>
                            </th>
                            <th className="border-b-2 border-blue-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-left font-bold text-blue-900 text-xs sm:text-sm md:text-base">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                                <span>Speaker/Chairperson</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="border-b border-blue-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-blue-800 whitespace-nowrap align-top">09:00 AM - 04:00 PM</td>
                            <td className="border-b border-blue-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-blue-900 align-top">Critical evaluation of 30 stalls Accreditation & certification</td>
                            <td className="border-b border-blue-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-blue-700 align-top"><span className="font-bold text-blue-900">Prof. Dr. J. A. Jayalal</span>, <span className="font-bold text-blue-900">Prof. Dr.S.Arulrhaj</span>, <span className="font-bold text-blue-900">Sarvesh Singh</span>, <span className="font-bold text-blue-900">Prof. Rajesh Shiva Prakasam</span>, <span className="font-bold text-blue-900">Dr. Sivakumar Dhanaraj</span>, <span className="font-bold text-blue-900">Dr. Murugaraj</span></td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors bg-gradient-to-r from-green-50 to-emerald-50">
                            <td className="border-b border-blue-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-green-800 whitespace-nowrap">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <span>04:00 PM</span>
                              </div>
                            </td>
                            <td className="border-b border-blue-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-green-900 align-top">🏆 Announcement of Winners</td>
                            <td className="border-b border-blue-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-blue-700 align-top"><span className="font-bold text-blue-900">Mr. Vijay Anand Sivaprakasam</span>, Founder - Botsystems,USA; <span className="font-bold text-blue-900">Mr. Hari Subramaniam</span>, Banking Investor Bangalore</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {agendaDay === 'day2' && (
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  {/* Hall A - Day 2 */}
                  <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-emerald-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-3 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold">Hall A - Advanced Sessions & Convocation</h3>
                    </div>
                    
                    {/* Mobile Card View */}
                    <div className="md:hidden p-3 space-y-3 bg-emerald-50/30 max-h-[60vh] overflow-y-auto">
                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">09:00 AM - 09:20 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Implementation of AI in Healthcare</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Prof. Dr. Rajesh Sivaprakasam</span>, Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart&apos;s Health, UK; <span className="font-bold text-emerald-900">Prof. Dr.S.Arulrhaj</span>, Co Chairman, AI & Digital Health, CMA</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">09:20 AM - 09:40 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Revolutionizing Heart Care: The Transformative Role of AI in Cardiology</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700">Chairpersons: <span className="font-bold text-emerald-900">Dr. Rajeev Menon</span>, HOD & Clinical Director of Cardiology, AIG; <span className="font-bold text-emerald-900">Dr. Anuj Kapadiya</span>, Director of Cathlab & Senior Consultant Cardiologist, AIG</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">09:40 AM - 10:00 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Translating Research Into Clinically Relevant Applications</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Raja Poladi</span>, Head, Centre For Digital Technologies In Healthcare, IIIT, HYD</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">10:00 AM - 10:20 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Agentic AI (Google AI Asia)</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Mohan Silaparasetty</span>, Trendwise Analytics AI Bangalore</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">10:20 AM - 10:40 AM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI Robotics- As A Boon For Surgical Team</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Prof. Dr. Rajesh Sivaprakasam</span>, Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart&apos;s Health - UK</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg border-2 border-amber-300 p-4 shadow-md">
                        <div className="flex items-center justify-center gap-2 text-amber-900 mb-1">
                          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                          </svg>
                          <span className="font-bold text-base">☕ Coffee / Tea Break</span>
                        </div>
                        <p className="text-center text-xs font-bold text-amber-800">10:40 AM - 11:00 AM</p>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300 p-4 shadow-md">
                        <div className="flex items-center justify-center gap-2 text-purple-900 mb-1">
                          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                          </svg>
                          <span className="font-bold text-base">💬 Debate - AI Will It Replace Doctors?</span>
                        </div>
                        <p className="text-center text-xs font-bold text-purple-800 mb-2">11:00 AM - 12:00 PM</p>
                        <div className="pl-6 border-l-2 border-purple-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Dr. Sivakumar Dhanaraj</span>, Consultant Radiologist Neuroradiologist</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">12:00 PM - 12:30 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">How, When & Where To Implement AI Tools In Healthcare – A Talk Can Offer Practical Tips To Delegates On Using AI Based Tools</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Mahesh BMS</span></p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-bold text-xs text-emerald-800">12:30 PM - 12:50 PM</span>
                        </div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">Environmental pollution & Its Impact on Allergy – Asthma, Respiratory Health</h4>
                        <div className="pl-6 border-l-2 border-emerald-300">
                          <p className="text-xs text-emerald-700"><span className="font-bold text-emerald-900">Dr. Vishnun Rao Veerapaneni</span>, Chairman SWASA Hospital & Foundation</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border-2 border-green-300 p-4 shadow-md">
                        <div className="flex items-center justify-center gap-2 text-green-900 mb-1">
                          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                          </svg>
                          <span className="font-bold text-base">🎓 CMA Convocation follows</span>
                        </div>
                        <p className="text-center text-xs font-bold text-green-800">12:50 PM</p>
                      </div>
                    </div>

                    {/* Desktop/Tablet Table View */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gradient-to-r from-emerald-100 to-green-100">
                            <th className="border-b-2 border-emerald-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-left font-bold text-emerald-900 text-xs sm:text-sm md:text-base">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Time</span>
                              </div>
                            </th>
                            <th className="border-b-2 border-emerald-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-left font-bold text-emerald-900 text-xs sm:text-sm md:text-base">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                                </svg>
                                <span>Session Title</span>
                              </div>
                            </th>
                            <th className="border-b-2 border-emerald-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-left font-bold text-emerald-900 text-xs sm:text-sm md:text-base">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                                <span>Speaker/Chairperson</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">09:00 AM - 09:20 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Implementation of AI in Healthcare</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Prof. Dr. Rajesh Sivaprakasam</span>, Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart&apos;s Health, UK; <span className="font-bold text-emerald-900">Prof. Dr.S.Arulrhaj</span>, Co Chairman, AI & Digital Health, CMA</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">09:20 AM - 09:40 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Revolutionizing Heart Care: The Transformative Role of AI in Cardiology</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top">Chairpersons: <span className="font-bold text-emerald-900">Dr. Rajeev Menon</span>, HOD & Clinical Director of Cardiology, AIG; <span className="font-bold text-emerald-900">Dr. Anuj Kapadiya</span>, Director of Cathlab & Senior Consultant Cardiologist, AIG</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">09:40 AM - 10:00 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Translating Research Into Clinically Relevant Applications</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Raja Poladi</span>, Head, Centre For Digital Technologies In Healthcare, IIIT, HYD</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">10:00 AM - 10:20 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Agentic AI (Google AI Asia)</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Mohan Silaparasetty</span>, Trendwise Analytics AI Bangalore</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">10:20 AM - 10:40 AM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">AI Robotics- As A Boon For Surgical Team</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Prof. Dr. Rajesh Sivaprakasam</span>, Transplant Surgeon & Chair of AI and Robotic Surgery Research Bart&apos;s Health - UK</td>
                          </tr>
                          <tr className="bg-gradient-to-r from-amber-100 to-yellow-100">
                            <td className="border-b border-amber-200 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-amber-900 whitespace-nowrap">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                                </svg>
                                <span className="hidden sm:inline">10:40 AM - 11:00 AM</span>
                                <span className="sm:hidden">10:40-11:00 AM</span>
                              </div>
                            </td>
                            <td className="border-b border-amber-200 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-amber-900 align-top" colSpan={2}>☕ Coffee / Tea Break</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors bg-gradient-to-r from-purple-50 to-pink-50">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-purple-800 whitespace-nowrap align-top">11:00 AM - 12:00 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-purple-900 align-top">💬 Debate - AI Will It Replace Doctors?</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Dr. Sivakumar Dhanaraj</span>, Consultant Radiologist Neuroradiologist</td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">12:00 PM - 12:30 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">How, When & Where To Implement AI Tools In Healthcare – A Talk Can Offer Practical Tips To Delegates On Using AI Based Tools</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Mahesh BMS</span></td>
                          </tr>
                          <tr className="hover:bg-emerald-50/50 transition-colors">
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-emerald-800 whitespace-nowrap align-top">12:30 PM - 12:50 PM</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold text-emerald-900 align-top">Environmental pollution & Its Impact on Allergy – Asthma, Respiratory Health</td>
                            <td className="border-b border-emerald-100 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-emerald-700 align-top"><span className="font-bold text-emerald-900">Dr. Vishnun Rao Veerapaneni</span>, Chairman SWASA Hospital & Foundation</td>
                          </tr>
                          <tr className="bg-gradient-to-r from-green-100 to-emerald-100">
                            <td className="border-b border-green-200 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-green-800 whitespace-nowrap">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                </svg>
                                <span>12:50 PM</span>
                              </div>
                            </td>
                            <td className="border-b border-green-200 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-green-900 align-top" colSpan={2}>🎓 CMA Convocation follows</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-emerald-50 px-3 sm:px-6 py-3 sm:py-4 border-t border-emerald-200">
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAgendaModal(false)}
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
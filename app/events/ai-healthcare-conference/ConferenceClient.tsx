'use client';

import Image from "next/image";
import { useState } from "react";
import PersonGrid from "../../components/PersonGrid";
import AgendaTimeline from "../../components/AgendaTimeline";
import {
  chiefGuests,
  guestsOfHonour,
  cmaExecutives,
  aiDigitalHealthCommittee,
  distinguishedSpeakers,
  organisingCommittee,
  advisoryBoard,
  conferenceAgenda,
} from "./data";

export default function AIHealthcareConference() {
  const [activeTab, setActiveTab] = useState<'cma' | 'event'>('event');
  const [showAgendaModal, setShowAgendaModal] = useState(false);


  const openPDF = () => {
    window.open('/AI in Healthcare.pdf', '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
      {/* Event Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-3 sm:mb-4 px-4 leading-tight">
          The CMA Global Conference 2025 on AI in Healthcare & Medicine
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-4 sm:mb-6"></div>
      
        
        {/* Event Motto */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-teal text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 mx-2 sm:mx-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center leading-tight">
            &quot;Transforming Care Together: AI & Digital Health for a Healthier Commonwealth&quot;
          </h2>
        </div>
        
        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl mb-6 sm:mb-8 mx-2 sm:mx-0">
          <Image
            src="/eventPic1.png"
            alt="AI in Healthcare Conference"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 to-brand-navy/40"></div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 sm:mb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-brand-navy/50 p-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveTab('cma')}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'cma'
                  ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg'
                  : 'text-brand-navy hover:bg-brand-surface'
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
                  ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg'
                  : 'text-brand-navy hover:bg-brand-surface'
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
            <div className="bg-gradient-to-br from-white/80 via-brand-surface/30 to-brand-surface/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-navy/50 p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4 sm:mb-6">
              About the Commonwealth Medical Association (CMA)
          </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-brand-navy/10">
              <p className="text-lg sm:text-xl text-brand-navy leading-relaxed text-center font-medium">
                The Commonwealth Medical Association (CMA) is the collective voice of physicians across the Commonwealth of Nations, 
                representing medical associations and professionals from more than <span className="font-bold text-brand-navy">56 member countries</span>. 
                CMA&apos;s vision is to create a healthier Commonwealth through shared expertise, global partnerships, and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Medical Excellence</h3>
                    <p className="text-sm sm:text-base text-brand-navy leading-relaxed">Promote excellence in medical education and clinical practice across the Commonwealth.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Policy Leadership</h3>
                    <p className="text-sm sm:text-base text-brand-navy leading-relaxed">Drive thought leadership in healthcare policy and advocacy on a global scale.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Research & Innovation</h3>
                    <p className="text-sm sm:text-base text-brand-navy leading-relaxed">Support research and innovation for health needs of emerging and developed economies.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Equitable Healthcare</h3>
                    <p className="text-sm sm:text-base text-brand-navy leading-relaxed">Advancing equitable healthcare delivery for all Commonwealth nations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Global Collaboration</h3>
                    <p className="text-sm sm:text-base text-brand-navy leading-relaxed">Build capacity and collaboration among physicians across the Commonwealth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Conference Overview Section */}
      <section className="mb-12 sm:mb-16">
        <div className="bg-gradient-to-br from-white/80 via-brand-surface/30 to-brand-surface/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-navy/50 p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4 sm:mb-6">
              Conference Overview
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Theme Section */}
            <div className="bg-gradient-to-r from-brand-surface to-brand-surface rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-brand-navy/15">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4 sm:mb-6">
                  &quot;Transforming Care Together: AI & Digital Health for a Healthier Commonwealth&quot;
                </h3>
                <p className="text-lg sm:text-xl text-brand-navy leading-relaxed">
                  The CMA Global Conference 2025 on AI in Healthcare & Medicine will convene over <span className="font-bold text-brand-navy">1,000+ delegates</span> including 
                  physicians, innovators, researchers, policymakers, and industry leaders. This premier event will serve as a 
                  knowledge, networking, and innovation hub.
                </p>
              </div>
            </div>

            {/* Distinguished Dignitaries Section - Special Focus */}
            <div className="bg-gradient-to-br from-brand-surface to-brand-surface rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border-2 border-brand-navy/25">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">Distinguished Dignitaries</h3>
                <p className="text-lg text-brand-navy">Honoring Excellence in Healthcare Leadership</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4">
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-brand-navy/15">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-brand-navy">Chief Guest</h4>
                    </div>
                    <p className="text-brand-navy font-semibold">Hon. Justice of India, Supreme Court</p>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-brand-navy/15">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-brand-navy">Government Leadership</h4>
                    </div>
                    <ul className="text-brand-navy space-y-1">
                      <li>• Hon. Minister for IT, Government of Telangana</li>
                      <li>• Hon. Minister for Health, Government of Telangana</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-brand-navy/15">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-brand-navy">Administrative Excellence</h4>
                    </div>
                    <p className="text-brand-navy">Senior IAS officials, regulators, and industry leaders</p>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-brand-navy/15">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-brand-navy">Global Expertise</h4>
                    </div>
                    <p className="text-brand-navy">Renowned international and national speakers from leading universities, global health bodies, and innovation hubs</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conference Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">CME-Accredited Workshops</h3>
                </div>
                <p className="text-brand-navy leading-relaxed">
                  Jointly certified by the Commonwealth Medical Association and the Royal College of Physicians, Edinburgh. 
                  Participants will receive internationally recognized CME credits and certification.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Innovation & Impact Pitch Fest</h3>
                </div>
                <p className="text-brand-navy leading-relaxed">
                  Healthcare and AI startups present breakthrough ideas before a distinguished jury of investors, policymakers, 
                  and healthcare leaders. Top three winners receive the CMA Innovation Award with global visibility and mentorship.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-surface to-brand-surface rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-brand-navy/15">
              <p className="text-lg sm:text-xl text-brand-navy leading-relaxed font-medium">
                This conference positions India and the Commonwealth at the forefront of global healthcare transformation, 
                making it a landmark event in AI, medicine, and health policy.
              </p>
            </div>
          </div>
            </div>
          </section>

          {/* Why Partner Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-brand-surface/30 to-brand-surface/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-navy/50 p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4 sm:mb-6">
              Why Partner with CMA Global Conference 2025?
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-brand-navy/10">
              <p className="text-lg sm:text-xl text-brand-navy leading-relaxed text-center font-medium">
                Becoming a Sponsor or Exhibitor at this prestigious event offers unparalleled opportunities to connect with 
                <span className="font-bold text-brand-navy"> 1,000+ healthcare leaders</span> from across the Commonwealth and beyond.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Brand Leadership</h3>
                </div>
                <p className="text-brand-navy leading-relaxed">
                  Position your company as a global thought leader at the intersection of medicine and technology.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">High-Value Exposure</h3>
                </div>
                <p className="text-brand-navy leading-relaxed">
                  Showcase your products, services, and innovations to a targeted audience of decision-makers, including clinicians, hospital leaders, policymakers, and international delegates.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Direct Engagement</h3>
                </div>
                <p className="text-brand-navy leading-relaxed">
                  Build relationships with healthcare providers, investors, and regulators shaping the future of healthcare.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Media Visibility</h3>
                </div>
                <p className="text-brand-navy leading-relaxed">
                  Featured in national & international media coverage and CMA digital campaigns.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Global Recognition</h3>
                </div>
                <p className="text-brand-navy leading-relaxed">
                  Benefit from association with CMA—an organization with influence across 56 nations—and visibility across international communications and press.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8 sm:mt-12 space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button 
                  onClick={openPDF}
                  className="inline-flex items-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-brand-navy to-brand-teal text-white font-semibold shadow-xl hover:shadow-2xl hover:from-brand-navy-dark hover:to-brand-teal-dark transition-all duration-300 text-lg sm:text-xl"
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
            <div className="bg-gradient-to-br from-white/80 via-brand-surface/30 to-brand-surface/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-navy/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4 sm:mb-6">
                  CMA Innovation & Impact Pitch Fest
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-brand-navy/10">
                  <p className="text-lg sm:text-xl text-brand-navy leading-relaxed text-center font-medium">
                    The highlight of the conference, the Innovation & Impact Pitch Fest, is where 
                    <span className="font-bold text-brand-navy"> future unicorns in health-tech</span> take the stage. 
                    Emerging companies present their solutions before an eminent global jury of physicians, investors, and innovators. 
                    This is not just a competition. It is a launchpad for global credibility.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-8 sm:mb-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-brand-navy/15 shadow-xl">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-4">Participation Details</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-brand-surface rounded-lg p-4 border border-brand-navy/15">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-2 h-2 bg-brand-navy rounded-full"></div>
                          <span className="font-semibold text-brand-navy">Entry Fee</span>
                        </div>
                        <p className="text-lg font-bold text-brand-navy">INR 10000</p>
                      </div>
          
                      <div className="bg-brand-surface rounded-lg p-4 border border-brand-navy/15">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-2 h-2 bg-brand-navy rounded-full"></div>
                          <span className="font-semibold text-brand-navy">Delegate Access</span>
                        </div>
                        <p className="text-brand-navy">2 Complimentary delegate passes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-brand-navy/15 shadow-xl">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-4">The Top 3 Innovations will receive:</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-brand-surface rounded-lg p-4 border border-brand-navy/15">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-brand-navy rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-brand-navy mb-1">CMA Approved Innovation</p>
                            <p className="text-sm text-brand-navy">A seal of excellence recognised across 56 nations</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-brand-surface rounded-lg p-4 border border-brand-navy/15">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-brand-navy rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-brand-navy mb-1">Global Visibility</p>
                            <p className="text-sm text-brand-navy">Elevated recognition and international exposure</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-brand-surface rounded-lg p-4 border border-brand-navy/15">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-brand-navy rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-brand-navy mb-1">Future Opportunities</p>
                            <p className="text-sm text-brand-navy">Showcase opportunities at future CMA events (subject to approval)</p>
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
            <div className="bg-gradient-to-br from-white/80 via-brand-surface/30 to-brand-surface/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-navy/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4 sm:mb-6">
                  A Landmark Event of Knowledge, Networking & Innovation
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-brand-navy/10">
                  <p className="text-lg sm:text-xl text-brand-navy leading-relaxed text-center font-medium">
                    The CMA Global Conference 2025 is more than a medical meeting. It is a 
                    <span className="font-bold text-brand-navy"> premier international platform</span> for:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-brand-navy/15 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-3 sm:mb-4">Knowledge</h3>
                    <p className="text-brand-navy leading-relaxed">CME workshops, global keynotes, and evidence-based updates</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-brand-navy/15 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-3 sm:mb-4">Networking</h3>
                    <p className="text-brand-navy leading-relaxed">Connecting policymakers, industry captains, investors, and clinicians</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-brand-navy/15 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-3 sm:mb-4">Innovation</h3>
                    <p className="text-brand-navy leading-relaxed">Unveiling cutting-edge technologies and disruptive ideas in AI and medicine</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-brand-surface to-brand-surface rounded-2xl p-6 sm:p-8 text-center border border-brand-navy/15">
                  <p className="text-lg sm:text-xl text-brand-navy leading-relaxed font-medium">
                    Join us in Hyderabad for the CMA Global Conference 2025 – where the Commonwealth and the world unite to reimagine the future of healthcare.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conference Overview Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-brand-surface/30 to-brand-surface/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-navy/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4 sm:mb-6">
                  Conference Overview
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-brand-surface to-brand-surface rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 border border-brand-navy/15">
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4 sm:mb-6">
                      &quot;Transforming Care Together: AI & Digital Health for a Healthier Commonwealth&quot;
                    </h3>
                    <p className="text-lg sm:text-xl text-brand-navy leading-relaxed">
                      The CMA Global Conference 2025 on AI in Healthcare & Medicine will convene over <span className="font-bold text-brand-navy">1,000+ delegates</span> including 
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
            <div className="bg-gradient-to-br from-brand-surface to-brand-surface rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-navy/15">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
                  Ready to Join the Conference?
                </h2>
                <p className="text-lg text-brand-navy mb-6 max-w-2xl mx-auto">
                  Register now to secure your spot at the CMA Global Conference 2025 on AI in Healthcare & Medicine
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/events/ai-healthcare-conference/register"
                    className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-brand-navy to-brand-teal text-white font-bold shadow-xl hover:shadow-2xl hover:from-brand-navy-dark hover:to-brand-teal-dark transition-all duration-300 text-lg sm:text-xl transform hover:scale-105"
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
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent mb-4 sm:mb-6 text-center">
            Event Venue & Schedule
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-brand-surface to-brand-surface rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-navy rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-navy">Date</h3>
              </div>
              <p className="text-sm sm:text-base text-brand-navy leading-relaxed">
                    <strong>22nd & 23rd November, 2025</strong>
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-surface to-brand-surface rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-navy rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-navy">Venue</h3>
              </div>
              <p className="text-sm sm:text-base text-brand-navy leading-relaxed">
                    <strong>Jubilee Hills Convention Centre</strong><br/>
                    Hyderabad, India
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Chief Guests Section */}
          <PersonGrid title="Chief Guests" people={chiefGuests} />

          {/* Guest of Honour Section */}
          <PersonGrid title="Guests of Honour" people={guestsOfHonour} initialVisibleCount={8} />

          {/* Special Guests Section */}
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-white/80 via-brand-surface/30 to-brand-surface/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-navy/50 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4 sm:mb-6">
                  Special Guests
                </h2>
                <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
              </div>
              
              <div className="max-w-8xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Special Guest 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-brand-navy/10 group-hover:ring-brand-teal/50">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 1.jpeg"
                          alt="Sri. Sevala Naik Mude"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-brand-navy leading-tight">Sri. Sevala Naik Mude</h3>
                      <div className="pt-2 border-t border-brand-navy/10">
                        <h4 className="text-sm sm:text-base font-semibold text-brand-navy leading-relaxed">Addl. Secretary</h4>
                        <p className="text-xs sm:text-sm text-brand-navy mt-1">Central and West Africa</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Guest 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-brand-navy/10 group-hover:ring-brand-teal/50">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 2.jpg"
                          alt="Sri. Jayesh Ranjan IAS"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-brand-navy leading-tight">Sri. Jayesh Ranjan IAS</h3>
                      <div className="pt-2 border-t border-brand-navy/10">
                        <h4 className="text-sm sm:text-base font-semibold text-brand-navy leading-relaxed">Special Chief Secretary of Telangana</h4>
                        <p className="text-xs sm:text-sm text-brand-navy mt-1">Youth Advancement, Tourism and Culture Department, CEO of SPEED, Chief Minister&apos;s Office</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Guest 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-brand-navy/10 group-hover:ring-brand-teal/50">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 3.jpg"
                          alt="Smt Dr. Christina Z. Chongthu IAS"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-brand-navy leading-tight">Smt Dr. Christina Z. Chongthu IAS</h3>
                      <div className="pt-2 border-t border-brand-navy/10">
                        <h4 className="text-sm sm:text-base font-semibold text-brand-navy leading-relaxed">Secretary to Government</h4>
                        <p className="text-xs sm:text-sm text-brand-navy mt-1">Health Medical & Family Welfare Department, Telangana</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Guest 4 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-brand-navy/10 group-hover:ring-brand-teal/50">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 4.jpg"
                          alt="Sri. Sanjay Kumar IAS"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-brand-navy leading-tight">Sri. Sanjay Kumar IAS</h3>
                      <div className="pt-2 border-t border-brand-navy/10">
                        <h4 className="text-sm sm:text-base font-semibold text-brand-navy leading-relaxed">Special Chief Secretary</h4>
                        <p className="text-xs sm:text-sm text-brand-navy mt-1">ITE & C, Government of Telangana</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Guest 5 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-brand-navy/10 group-hover:ring-brand-teal/50">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 5.jpg"
                          alt="Sri. Obaidullah Kotwal"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-brand-navy leading-tight">Sri. Obaidullah Kotwal</h3>
                      <div className="pt-2 border-t border-brand-navy/10">
                        <h4 className="text-sm sm:text-base font-semibold text-brand-navy leading-relaxed">Chairman</h4>
                        <p className="text-xs sm:text-sm text-brand-navy mt-1">Telangana State Minority Finance Corporation</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Guest 6 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-brand-navy/15 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-brand-navy/10 group-hover:ring-brand-teal/50">
                        <Image
                          src="/Events Pics/Special Guests/Special Guest 6.jpeg"
                          alt="Sri. Deepak John"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: 'center top' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-brand-navy leading-tight">Sri. Deepak John</h3>
                      <div className="pt-2 border-t border-brand-navy/10">
                        <h4 className="text-sm sm:text-base font-semibold text-brand-navy leading-relaxed">Chairman</h4>
                        <p className="text-xs sm:text-sm text-brand-navy mt-1">Telangana Christian Minorities Finance Corporation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

            {/* Commonwealth Medical Association Section */}
            <PersonGrid
              title="Commonwealth Medical Association"
              subtitle="Executive Members 2024-2026 - leadership team and executive members of the Commonwealth Medical Association, dedicated to advancing healthcare excellence across the Commonwealth nations."
              people={cmaExecutives}
              initialVisibleCount={8}
            />

          {/* CMA Subcommittee Section */}
          <PersonGrid
            title="Commonwealth Medical Association"
            subtitle="Subcommittee - AI and Digital Health 2024-2026"
            people={aiDigitalHealthCommittee}
            initialVisibleCount={8}
          />
          {/* Speakers Section */}
          <PersonGrid title="Distinguished Speakers" people={distinguishedSpeakers} initialVisibleCount={8} />

          {/* Local Organising Committee Section */}
          <PersonGrid title="Local Organising Committee" people={organisingCommittee} columns="3" />
          {/* Advisory Board Section */}
          <PersonGrid title="Advisory Board" people={advisoryBoard} columns="3" />

          

          </div>
        )}

   
      {/* Agenda Modal */}
      {showAgendaModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden my-4 sm:my-8">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-brand-navy to-brand-teal p-4 sm:p-6 md:p-8 relative">
              <button
                onClick={() => setShowAgendaModal(false)}
                aria-label="Close agenda"
                className="absolute top-2 right-2 sm:top-4 sm:right-4 min-w-[44px] min-h-[44px] sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-2 pr-8 sm:pr-0">
                Conference Agenda
              </h2>
              <p className="text-brand-surface text-center text-xs sm:text-sm md:text-base">22nd & 23rd November, 2025</p>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(95vh-180px)] sm:max-h-[calc(90vh-200px)]">
              <AgendaTimeline days={conferenceAgenda} />
            </div>

            {/* Modal Footer */}
            <div className="bg-brand-surface px-3 sm:px-6 py-3 sm:py-4 border-t border-brand-navy/15">
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAgendaModal(false)}
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-brand-navy to-brand-teal text-white font-bold rounded-lg hover:from-brand-navy-dark hover:to-brand-teal-dark transition-all duration-300 shadow-lg text-sm sm:text-base"
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
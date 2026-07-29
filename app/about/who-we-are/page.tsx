'use client';

import Link from "next/link";
import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white py-8 sm:py-12 md:py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Who We Are
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            About IMA Banjara Hills
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 md:py-16">
        
        {/* Introduction Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-emerald-100 overflow-hidden transform hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500">
            <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-3 sm:mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-white/20 shadow-xl sm:shadow-2xl">
                      <Image
                        src="/imalogo4.png"
                        alt="IMA Banjara Hills Logo"
                        width={120}
                        height={120}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  About IMA Banjara Hills
                </h2>
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-emerald-100">
                      <h3 className="text-lg sm:text-xl font-semibold text-emerald-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Our Location
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        <strong>Address:</strong><br />
                        Doctors Association IMA Banjara Hills<br />
                        Flat No-201, Annapurna A S Time Square<br />
                        Road No-14, Banjara Hills<br />
                        Hyderabad, Telangana
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-blue-100">
                      <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Legal Status
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Formally registered under the <strong>A.P. Societies Registration Act, 2001</strong>. We operate as a dedicated, non-profit association with a clear, non-commercial motive.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 bg-gradient-to-r from-gray-50 to-slate-50 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border border-gray-200">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    The Indian Medical Association (IMA), Banjara Hills branch, is a premier professional organization representing doctors from all specialties in the region. We are committed to the advancement of healthcare and the welfare of the medical community, ensuring our focus remains on our core objectives and service to society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-green-100 overflow-hidden transform hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500">
            <div className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent"></div>
              <div className="relative text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white flex items-center justify-center gap-2 sm:gap-3 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="leading-tight">Our History and Establishment</span>
                </h2>
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-green-100">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                    The IMA Banjara Hills branch was formally established as a registered society to create a unified platform for medical professionals in one of Hyderabad&apos;s most prominent localities. A primary impetus for our formation was the pressing need to stand against the rampant, unethical, and illegal quackery practices that endanger public health.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    Since our inception, we have been dedicated to building a cohesive community of doctors committed to ethical practice, patient safety, and continuous learning. Our foundation is built on the principles of service, integrity, and the pursuit of scientific excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Objectives Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-teal-100 overflow-hidden transform hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500">
            <div className="bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-transparent"></div>
              <div className="relative text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white flex items-center justify-center gap-2 sm:gap-3 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="leading-tight">Our Core Objectives</span>
                </h2>
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="max-w-6xl mx-auto">
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-center">
                  As an association, we are guided by a set of fundamental objectives that define our mission and activities:
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-emerald-100 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-emerald-800 mb-2 sm:mb-3">Promoting Medical Science</h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Fostering an environment of continuous learning, research, and scientific advancement among our members.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-emerald-100 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-emerald-800 mb-2 sm:mb-3">Improving Public Health</h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Actively working to enhance the health and well-being of the community through awareness programs and health initiatives.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-emerald-100 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-emerald-800 mb-2 sm:mb-3">Maintaining Medical Profession Dignity</h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Upholding the honor, integrity, and ethical standards of the medical profession.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-blue-100 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3">Organizing Medical Camps</h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Conducting free and subsidized medical camps to provide essential healthcare services to underserved populations.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-blue-100 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:scale-105 sm:col-span-1 md:col-span-2 max-w-2xl mx-auto">
                    <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md sm:shadow-lg">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3">Working for Members&apos; Welfare</h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Supporting our members professionally and personally, ensuring their rights and interests are protected.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* President's Message Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-emerald-100 overflow-hidden transform hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500">
            <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent"></div>
              <div className="relative text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white flex items-center justify-center gap-3 sm:gap-4 mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="leading-tight">A Note from the President</span>
                </h2>
                <p className="text-emerald-100 text-sm sm:text-base mt-2">Dr. Prabhukumar Challagali</p>
              </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                  {/* President's Photo */}
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl sm:rounded-3xl transform rotate-3"></div>
                      <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl">
                        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden">
                          <Image
                            src="/presidentnote.jpg"
                            alt="Dr. Prabhukumar Challagali - President IMA Banjara Hills"
                            fill
                            className="object-cover object-center"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="mt-4 sm:mt-6 text-center">
                          <h3 className="text-lg sm:text-xl font-bold text-emerald-800 mb-1">Dr. Prabhukumar Challagali</h3>
                          <p className="text-sm sm:text-base text-emerald-600 font-medium mb-2">MBBS, MD, PGDHS</p>
                          <p className="text-xs sm:text-sm text-gray-600">President, IMA Banjara Hills</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* President's Message */}
                  <div className="lg:col-span-2">
                    <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-emerald-100 shadow-lg">
                      <div className="relative">
                        <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-200/30 rounded-full blur-xl"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-green-200/30 rounded-full blur-xl"></div>
                        <div className="relative">
                          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-emerald-800">President&apos;s Message</h3>
                              <p className="text-sm sm:text-base text-emerald-600">Words from our leader</p>
                            </div>
                          </div>
                          
                          <div className="space-y-4 sm:space-y-6">
                            <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-emerald-100">
                              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                                It is with immense pride that I serve as the President of the Indian Medical Association, Banjara Hills branch. As a senior physician and an active member of the medical community, I am deeply committed to the values this esteemed organization stands for.
                              </p>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-emerald-100">
                              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                                Our primary mission is to serve our community and our members. A cornerstone of this commitment is our unwavering stance against medical fraud. As the Chairman of the Media & Anti-Quackery Committee for IMA Telangana, I am personally dedicated to eradicating quackery and protecting patients from unqualified practitioners.
                              </p>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-emerald-100">
                              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                                Beyond this critical work, we are dedicated to advancing medical science and improving public health outcomes. Through initiatives like free medical camps and public health awareness campaigns, we strive to make a tangible difference in the lives of the people we serve.
                              </p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-4 sm:p-6 rounded-xl border border-emerald-200">
                              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
                                We are, first and foremost, an association for our members. We are committed to fostering a supportive and collaborative environment, advocating for the welfare of our doctors, and providing a platform for them to thrive.
                              </p>
                            </div>
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

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 text-white shadow-xl sm:shadow-2xl transform hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent"></div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Join Our Mission</h2>
              <p className="text-base sm:text-lg lg:text-xl text-emerald-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Be part of IMA Banjara Hills and contribute to the advancement of healthcare excellence in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link
                  href="/events"
                  className="bg-white text-emerald-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
                >
                  View Our Events
                </Link>
            <Link
              href="/about/ima"
                  className="border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
            >
                  About IMA
            </Link>
          </div>
        </div>
          </div>
        </section>
      </div>
    </div>
  );
}

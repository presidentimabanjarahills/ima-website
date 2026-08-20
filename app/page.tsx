'use client';

import HeroSlider from "./components/HeroSlider";

// IMA slides data with local images
const slides = [
  {
    id: 9,
    imageUrl: "/WhatsApp Image 2026-08-20 at 13.37.00.jpeg",
    altText: "Dr Prabhukumar Challagali honoured with the Reverend Jesse Jackson Award at the 2.0 Health Conference, Las Vegas",
    title: "Reverend Jesse Jackson Award",
    description: "Hyderabad-based physician Dr Prabhukumar Challagali honoured at the 2.0 Health Conference, Las Vegas, presented with the prestigious Reverend Jesse Jackson Award for his outstanding contributions to healthcare",
    readMoreLink: "#achievements"
  },
  {
    id: 10,
    imageUrl: "/WhatsApp Image 2026-02-16 at 16.50.48.jpeg",
    altText: "Dr Prabhukumar Challagali receiving an award from Honourable Justice Sri Ujjal Bhuyan, Supreme Court of India",
    title: "Honoured by the Supreme Court of India",
    description: "Dr Prabhukumar Challagali received a prestigious award from Honourable Justice Sri Ujjal Bhuyan, Supreme Court of India, recognising his dedicated service to the medical fraternity",
    readMoreLink: "#achievements"
  },
  {
    id: 11,
    imageUrl: "/WhatsApp Image 2026-08-20 at 17.28.29.jpeg",
    altText: "Dr Prabhukumar Challagali receiving an award from Dr Bobby Mukkamala of the American Medical Association",
    title: "Honoured by the American Medical Association",
    description: "Dr Prabhukumar Challagali received an award from Dr Bobby Mukkamala, one of the most renowned figures in the American Medical Association, honouring his leadership and contributions to global healthcare",
    readMoreLink: "#achievements"
  },
  {
    id: 1,
    imageUrl: "/slider1.jpeg",
    altText: "Welcome to IMA Banjara Hills - Felicitation of Central Cabinet Minister Sri Kishan Reddy",
    title: "Welcome to IMA BANJARA HILLS",
    description: "Felicitation of Central Cabinet Minister Sri Kishan Reddy during IMA Banjara Hills inauguration by Dr Jayalal and Dr Prabhukumar",
    readMoreLink: "#about"
  },
  {
    id: 2,
    imageUrl: "/slider2.jpeg",
    altText: "Representation given to Governor Sri Jishnu Dev Varma by IMA President Dr Prabhukumar on AMR",
    title: "Representation to Governor Sri Jishnu Dev Varma",
    description: "Representation given to Governor Sri Jishnu Dev Varma by IMA President Dr Prabhukumar on AMR (Antimicrobial Resistance)",
    readMoreLink: "#education"
  },
  {
    id: 3,
    imageUrl: "/prabhusircm.jpeg",
    altText: "Representation to Honourable CM of Telangana Sri Revanth Reddy by Dr Prabhukumar",
    title: "Representation to Honourable CM of Telangana",
    description: "Representation to Honourable CM of Telangana Sri Revanth Reddy by Dr Prabhukumar regarding various activities of IMA Banjara Hills",
    readMoreLink: "#policy"
  },
  {
    id: 6,
    imageUrl: "/slider10.jpeg",
    altText: "Representation to Honourable CM Revanth Reddy on Central Protection Act by IMA President Prabhukumar",
    title: "Representation to Honourable CM Revanth Reddy",
    description: "Representation to Honourable CM Revanth Reddy on Central Protection Act by IMA President Prabhukumar along with his Wife Mrs Revathi Goud (Chairman Toddy Tapper Telangana)",
    readMoreLink: "#representation"
  },
  {
    id: 4,
    imageUrl: "/slider5.jpeg",
    altText: "Representation to Honourable Aviation Minister Sri Ram Mohan Naidu on Central Protection Act for Doctors",
    title: "Representation to Honourable Aviation Minister",
    description: "Representation to Honourable Aviation Minister Sri Ram Mohan Naidu on Central Protection Act for Doctors by Dr Prabhukumar Challagali along with MP Sri Prasad Rao Ji",
    readMoreLink: "#networking"
  },
  {
    id: 5,
    imageUrl: "/slider4.jpeg",
    altText: "Representation to Honourable Railway Minister Sri Ashwini Vaishnaw on Central Protection Act for Doctors",
    title: "Representation to Honourable Railway Minister",
    description: "Representation to Honourable Railway Minister Sri Ashwini Vaishnaw on Central Protection Act for Doctors by Dr Prabhukumar Challagali along with MP Sri Prasad Rao Ji",
    readMoreLink: "#research"
  },
  
  {
    id: 7,
    imageUrl: "/slider11.jpeg",
    altText: "Appreciation of Dr Prabhukumar by Prahlad Joshi Hon'ble Central Minister",
    title: "Appreciation by Hon'ble Central Minister",
    description: "Appreciation of Dr Prabhukumar by Prahlad Joshi, Hon'ble Central Minister for Consumer Affairs, Food, and Public Distribution, on the contributions of IMA Hyderabad during COVID Pandemic to vulnerable people",
    readMoreLink: "#appreciation"
  },
  {
    id: 8,
    imageUrl: "/slider12.jpeg",
    altText: "Representation to Shri Sarbananda Sonowal Ji Hon'ble Central Minister for Ports, Shipping, and Waterways",
    title: "Representation to Hon'ble Central Minister for Ports",
    description: "Representation to Shri Sarbananda Sonowal Ji, Hon'ble Central Minister for Ports, Shipping, and Waterways on Central Protection Act by Dr Prabhukumar along with MP Prasad Rao",
    readMoreLink: "#ports"
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider slides={slides} autoPlayInterval={6000} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Welcome Section */}
        <section className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-6 sm:mb-8">
            Welcome to Indian Medical Association
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-700 max-w-4xl mx-auto leading-relaxed">
            India&apos;s premier medical association dedicated to advancing healthcare, supporting medical professionals, and improving patient care across the nation.
          </p>
        </section>



      

        {/* Announcements Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Announcements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Scrollable Announcement Cards */}
          <div className="relative">
            {/* Left Arrow */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-emerald-200 hover:bg-white hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const container = document.getElementById('announcements-scroll');
                if (container) {
                  container.scrollBy({ left: -320, behavior: 'smooth' });
                }
              }}
            >
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-emerald-200 hover:bg-white hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const container = document.getElementById('announcements-scroll');
                if (container) {
                  container.scrollBy({ left: 320, behavior: 'smooth' });
                }
              }}
            >
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div id="announcements-scroll" className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-3 sm:space-x-4 md:space-x-6 pb-4" style={{ width: 'max-content' }}>
                {/* Announcement Card 1 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0 w-72 sm:w-80 md:w-84 lg:w-96">
                  <div className="mb-3 sm:mb-4">
                    <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                      <img 
                        src="/announcement1.jpg" 
                        alt="Chief Minister Meeting" 
                        className="w-full h-full object-cover" 
                        style={{ objectPosition: 'center 10%' }}
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                        <p className="text-white font-semibold text-xs sm:text-sm bg-emerald-600/90 backdrop-blur-sm px-2 py-1 rounded-full inline-block">MEETING</p>
                    </div>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-emerald-800 mb-2 sm:mb-3 leading-tight">Chief Minister Meeting</h3>
                    <p className="text-emerald-700 text-xs sm:text-sm md:text-base leading-relaxed">
                      Our Convenor, Dr. Prabhukumar Challagali, met Hon&apos;ble Chief Minister Sri Revanth Reddy and officially invited him to the AI Global Medical Summit. The Chief Minister extended full support. Guided by Prof. Dr. J. A. Jayalal, this marks a major milestone.
                    </p>
                  </div>
                </div>

                {/* Announcement Card 2 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0 w-72 sm:w-80 md:w-84 lg:w-96">
                  <div className="mb-3 sm:mb-4">
                    <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                      <img 
                        src="/announcement2.jpg" 
                        alt="Sports & Animal Husbandry Minister Invitation" 
                        className="w-full h-full object-cover" 
                        style={{ objectPosition: 'center 30%' }}
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                        <p className="text-white font-semibold text-xs sm:text-sm bg-blue-600/90 backdrop-blur-sm px-2 py-1 rounded-full inline-block">INVITATION</p>
                    </div>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-emerald-800 mb-2 sm:mb-3 leading-tight">Sports & Animal Husbandry Minister Invitation</h3>
                    <p className="text-emerald-700 text-xs sm:text-sm md:text-base leading-relaxed">
                      President Dr. Prabhukumar Challagali presented a formal invitation to Hon&apos;ble Minister Sri Vakati Srihari Mudiraju Garu for the AI Global Medical Summit. The Minister responded positively and assured his support, strengthening momentum for this landmark event.
                    </p>
                  </div>
                </div>

                {/* Announcement Card 3 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0 w-72 sm:w-80 md:w-84 lg:w-96">
                  <div className="mb-3 sm:mb-4">
                    <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                      <img 
                        src="/announcement3.jpg" 
                        alt="Health Minister Support" 
                        className="w-full h-full object-cover" 
                        style={{ objectPosition: 'center 20%' }}
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                        <p className="text-white font-semibold text-xs sm:text-sm bg-green-600/90 backdrop-blur-sm px-2 py-1 rounded-full inline-block">SUPPORT</p>
                    </div>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-emerald-800 mb-2 sm:mb-3 leading-tight">Health Minister Support</h3>
                    <p className="text-emerald-700 text-xs sm:text-sm md:text-base leading-relaxed">
                      Our Convenor, Dr. Prabhukumar Challagali, met Hon&apos;ble Health Minister Sri Damodar Rajanarsimha and invited him to the AI Global Medical Summit. The Minister accepted and pledged full support. With Prof. Dr. J. A. Jayalal&apos;s guidance, preparations advance confidently.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Dots Indicators */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              <div 
                className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full cursor-pointer hover:bg-emerald-500 transition-colors duration-200"
                onClick={() => {
                  const container = document.getElementById('announcements-scroll');
                  if (container) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
              ></div>
              <div 
                className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-200 rounded-full cursor-pointer hover:bg-emerald-300 transition-colors duration-200"
                onClick={() => {
                  const container = document.getElementById('announcements-scroll');
                  if (container) {
                    container.scrollTo({ left: 340, behavior: 'smooth' });
                  }
                }}
              ></div>
              <div 
                className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-200 rounded-full cursor-pointer hover:bg-emerald-300 transition-colors duration-200"
                onClick={() => {
                  const container = document.getElementById('announcements-scroll');
                  if (container) {
                    container.scrollTo({ left: 680, behavior: 'smooth' });
                  }
                }}
              ></div>
            </div>
          </div>
        </section>
          {/* Events Section */}
          <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Upcoming Events
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Event Cards */}
          <div className="relative">
            <div id="events-scroll" className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 md:space-x-6 pb-4" style={{ width: 'max-content' }}>
                {/* CMA Global Conference Event Card */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0 w-72 md:w-80">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-blue-600 font-semibold text-xs md:text-sm">CMA GLOBAL CONFERENCE</p>
                      <h3 className="text-base md:text-lg font-bold text-emerald-800">CMA Global Conference 2025 on AI in Healthcare & Medicine</h3>
                    </div>
                  </div>
                  <p className="text-emerald-700 mb-4 text-xs md:text-sm leading-relaxed">
                    &quot;Transforming Care Together: AI & Digital Health for a Healthier Commonwealth&quot;. Join 1000+ delegates including Supreme Court Justice, Telangana Ministers, and global healthcare leaders.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-500 text-xs">22nd & 23rd Nov 2025</span>
                    <a href="/events/ai-healthcare-conference" className="text-emerald-600 hover:text-green-600 font-semibold text-xs md:text-sm transition-colors duration-200">Learn More →</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dots Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              <div 
                className="w-3 h-3 bg-emerald-400 rounded-full cursor-pointer hover:bg-emerald-500 transition-colors duration-200"
                onClick={() => {
                  const container = document.getElementById('events-scroll');
                  if (container) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
              ></div>
            </div>
          </div>
        </section>
      
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              IMA Office Bearers 2025
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl">
              {/* President Card */}
              <div className="group bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-emerald-200 shadow-2xl mb-6 group-hover:ring-emerald-300 transition-all duration-300">
                    <img 
                      src="https://yt3.googleusercontent.com/ytc/AIdro_nT7c85E7qT1pyhgEgnfpWDE4RdcnAbPwyQDRQH5iLggw=s160-c-k-c0x00ffffff-no-rj" 
                      alt="Dr. Prabhukumar Challagali" 
                      className="w-full h-full object-cover" 
                      style={{ objectPosition: 'center 20%' }}
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
                </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">Dr. Prabhukumar Challagali</h3>
                    <p className="text-base md:text-lg text-emerald-700 font-medium">President, IMA Banjara Hills</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
            </div>
              </div>
            </div>

              {/* Secretary Card */}
              <div className="group bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-emerald-200 shadow-2xl mb-6 group-hover:ring-emerald-300 transition-all duration-300">
                    <img 
                      src="/DrGK.jpg" 
                      alt="Dr. Jakati Gopalakrishna" 
                      className="w-full h-full object-cover" 
                      style={{ objectPosition: 'center 10%' }}
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
                </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">Dr. Jakati Gopalakrishna</h3>
                    <p className="text-base md:text-lg text-emerald-700 font-medium">Honorary Secretary</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
            </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="/Hyd-Banjara hills.xlsx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300"
            >
              View All
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
          </a>
        </div>
        </section> 

        {/* We Need You Section */}
        <section className="mb-16 sm:mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-emerald-200/50 p-6 sm:p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              We Need You! Become IMA Member
            </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Membership Requirements */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 sm:p-8 border border-emerald-200/50 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center mr-3 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    Membership Requirements
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-emerald-800 text-sm sm:text-base font-medium">Duly filled form</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-emerald-800 text-sm sm:text-base font-medium">Two passport size photos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-emerald-800 text-sm sm:text-base font-medium">Any state Medical council registration</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-emerald-800 text-sm sm:text-base font-medium">Aadhar or PAN card copy</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                        <span className="text-white font-bold text-sm">5</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-emerald-800 text-sm sm:text-base font-medium">Registration fee by bank transfer</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Membership Fees */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-amber-200/50 shadow-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-amber-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    Membership Fees
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-xl border border-amber-200">
                      <span className="text-amber-800 font-semibold text-sm sm:text-base">Single Registration</span>
                      <span className="text-xl font-bold text-amber-900">₹20,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-xl border border-amber-200">
                      <span className="text-amber-800 font-semibold text-sm sm:text-base">Couple Registration</span>
                      <span className="text-xl font-bold text-amber-900">₹30,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Details & Address */}
              <div className="space-y-6">
                {/* Payment Details */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200/50 shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    💳 Payment Details
                  </h3>

                  <div className="space-y-3">
                    <div className="bg-white/70 rounded-xl p-3 border border-blue-200">
                      <p className="text-blue-600 font-semibold text-xs mb-1">Account Name</p>
                      <p className="text-blue-900 text-sm sm:text-base font-medium">IMA Banjara Hills, Hyderabad</p>
                    </div>
                    <div className="bg-white/70 rounded-xl p-3 border border-blue-200">
                      <p className="text-blue-600 font-semibold text-xs mb-1">Bank</p>
                      <p className="text-blue-900 text-sm sm:text-base font-medium">State Bank of India</p>
                    </div>
                    <div className="bg-white/70 rounded-xl p-3 border border-blue-200">
                      <p className="text-blue-600 font-semibold text-xs mb-1">Current Account No.</p>
                      <p className="text-blue-900 text-sm sm:text-base font-mono font-bold">40590834080</p>
                    </div>
                    <div className="bg-white/70 rounded-xl p-3 border border-blue-200">
                      <p className="text-blue-600 font-semibold text-xs mb-1">IFSC Code</p>
                      <p className="text-blue-900 text-sm sm:text-base font-mono font-bold">SBIN0008022</p>
                    </div>
                    <div className="bg-white/70 rounded-xl p-3 border border-blue-200">
                      <p className="text-blue-600 font-semibold text-xs mb-1">SWIFT Code</p>
                      <p className="text-blue-900 text-sm sm:text-base font-mono font-bold">SBININBB327</p>
                    </div>
                    <div className="bg-white/70 rounded-xl p-3 border border-blue-200">
                      <p className="text-blue-600 font-semibold text-xs mb-1">Cheques/Demand Drafts</p>
                      <p className="text-blue-900 text-sm sm:text-base font-medium">&quot;IMA, Banjara Hills, Hyderabad&quot;</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-purple-200/50 shadow-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Our Address
                  </h4>
                  <div className="text-purple-700 space-y-2">
                    <p className="font-bold text-sm sm:text-base text-purple-900">DR PRABHUKUMAR CHALLAGALI</p>
                    <p className="font-semibold text-sm sm:text-base text-purple-800">PRESIDENT</p>
                    <div className="pt-2 space-y-1">
                      <p className="text-sm sm:text-base">DR PRABHU LIFE MULTISPECIALITY CLINICS AND HOSPITAL</p>
                      <p className="text-sm sm:text-base">HOUSE NO 3-2-10/6, 3RD FLOOR</p>
                      <p className="text-sm sm:text-base">CHAITANYANAGAR COLONY MANIKONDA</p>
                      <p className="text-sm sm:text-base font-semibold">HYDERABAD - 500089</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Ready to Join IMA?</h3>
                <p className="text-emerald-100 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                  Download the membership form and submit it along with required documents to our branch.
            </p>
            <a 
                  href="/Membership Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-emerald-600 font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
                  Download Membership Form
              <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
              </div>
            </div>
          </div>
        </section>

      

        {/* Registered IMA Members Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-8 sm:mb-12 text-center">
            Registered IMA Members
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* IMA ID Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2">IMA ID-card</h3>
              <a 
                href="https://ima.org.in/memberarea/"
            target="_blank"
            rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm sm:text-base"
          >
                Access Now
          </a>
        </div>

            {/* IMA Certificate */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2">IMA Certificate</h3>
              <a 
                href="https://ima.org.in/memberarea/"
          target="_blank"
          rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm sm:text-base"
              >
                Download
              </a>
            </div>

            {/* Update Profile */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2">Update Your IMA Profile</h3>
              <a 
                href="https://ima.org.in/memberarea/"
          target="_blank"
          rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm sm:text-base"
              >
                Update Now
              </a>
            </div>

            {/* Total Members */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2">367,055</h3>
              <p className="text-sm sm:text-base text-emerald-700">Total IMA Members</p>
            </div>
          </div>

          {/* Search Database */}
          <div className="mt-8 sm:mt-12 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 p-6 sm:p-8">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4 sm:mb-6">Search IMA Member Database</h3>
              <p className="text-sm sm:text-base text-emerald-700 mb-6 sm:mb-8">
                Find and connect with fellow IMA members across India
              </p>
              <a 
                href="https://www.ima-india.org/ima/ima-members.php"
          target="_blank"
          rel="noopener noreferrer"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300"
              >
                Search Database
                <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
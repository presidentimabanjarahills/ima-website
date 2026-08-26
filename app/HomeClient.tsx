'use client';

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import StatsStrip from "./components/StatsStrip";
import CountdownTimer from "./components/CountdownTimer";
import { newsItems } from "./news/data";

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
    readMoreLink: "#research"
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

const stats = [
  { value: 5000, suffix: "+", label: "Medical Camps Conducted" },
  { value: 367055, label: "IMA Members Nationally" },
  { value: 56, label: "Commonwealth Nations" },
];

const initiatives = [
  {
    title: "Medical Camps",
    description: "5,000+ free and subsidized medical camps bringing essential healthcare to underserved communities.",
    href: "/initiatives#medical-camps",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    ),
  },
  {
    title: "AI & Digital Health",
    description: "Advancing artificial intelligence and digital health adoption across the Commonwealth medical community.",
    href: "/initiatives#ai-digital-health",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
  {
    title: "Anti-Quackery",
    description: "Protecting patients from unqualified practitioners through the Media & Anti-Quackery Committee.",
    href: "/initiatives#anti-quackery",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

const partners = [
  { name: "Commonwealth Medical Association", logo: "/partners/cma-logo.svg" },
  { name: "IMA National", logo: "/partners/ima-national-logo.svg" },
  { name: "IMA Telangana State", logo: "/partners/ima-telangana-logo.svg" },
];

export default function HomeClient() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider slides={slides} autoPlayInterval={6000} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* President's Welcome */}
        <section className="mb-16 sm:mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-brand-navy/10 p-6 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-brand-navy/15 shadow-xl flex-shrink-0">
                <Image
                  src="/presidentnote.jpg"
                  alt="Dr. Prabhukumar Challagali"
                  fill
                  sizes="(min-width: 640px) 192px, 160px"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-3">
                  A Message from Our President
                </h2>
                <p className="text-brand-navy/90 text-base sm:text-lg leading-relaxed mb-2">
                  &quot;It is with immense pride that I serve as President of IMA Banjara Hills. Together, we
                  are advancing healthcare, protecting our profession, and building a healthier future for
                  our community.&quot;
                </p>
                <p className="text-brand-navy font-semibold mb-4">
                  — Dr. Prabhukumar Challagali, President
                </p>
                <Link
                  href="/leadership"
                  className="inline-flex items-center text-brand-navy hover:text-brand-teal font-semibold text-sm sm:text-base transition-colors duration-200"
                >
                  Meet Our Leadership
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4">
              Announcements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {newsItems.slice(0, 2).map((item) => (
              <Link
                key={item.slug}
                href={`/news#${item.slug}`}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-brand-navy/10 hover:shadow-xl transition-all duration-300 hover:scale-105 block"
              >
                <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 640px) 400px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                    <p className="text-white font-semibold text-xs sm:text-sm bg-brand-navy/90 backdrop-blur-sm px-2 py-1 rounded-full inline-block">
                      {item.category}
                    </p>
                  </div>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy mb-2 sm:mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-brand-navy text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/news"
              className="inline-flex items-center text-brand-navy hover:text-brand-teal font-semibold text-sm sm:text-base transition-colors duration-200"
            >
              View All News
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Featured Event */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4">
              Featured Event
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/15 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-brand-surface font-semibold text-xs md:text-sm">CMA GLOBAL CONFERENCE</p>
                <h3 className="text-lg md:text-xl font-bold">CMA Global Conference 2025 on AI in Healthcare &amp; Medicine</h3>
              </div>
            </div>
            <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">
              &quot;Transforming Care Together: AI &amp; Digital Health for a Healthier Commonwealth&quot;. Join
              1000+ delegates including Supreme Court Justice, Telangana Ministers, and global healthcare leaders.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CountdownTimer targetDate="2025-11-22T00:00:00+05:30" />
              <div className="flex flex-col sm:items-end gap-1">
                <span className="text-brand-surface text-xs sm:text-sm">22nd &amp; 23rd Nov 2025 · Hyderabad</span>
                <a
                  href="/events/ai-healthcare-conference"
                  className="text-white font-semibold text-sm md:text-base hover:text-brand-surface transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="mb-16 sm:mb-20">
          <p className="text-center text-brand-navy/70 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-6 sm:mb-8">
            In Partnership With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="relative w-36 h-12 sm:w-44 sm:h-14 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image src={partner.logo} alt={partner.name} fill sizes="(min-width: 640px) 176px, 144px" className="object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* IMA Office Bearers */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4">
              IMA Office Bearers 2025
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full"></div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl">
              {/* President Card */}
              <div className="group bg-gradient-to-br from-white/80 to-brand-surface/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-brand-navy/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-brand-navy/15 shadow-2xl mb-6 group-hover:ring-brand-teal/50 transition-all duration-300">
                    <Image
                      src="/presidentnote.jpg"
                      alt="Dr. Prabhukumar Challagali"
                      fill
                      sizes="(min-width: 768px) 176px, 160px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors duration-300">Dr. Prabhukumar Challagali</h3>
                    <p className="text-base md:text-lg text-brand-navy font-medium">President, IMA Banjara Hills</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Secretary Card */}
              <div className="group bg-gradient-to-br from-white/80 to-brand-surface/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-brand-navy/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-brand-navy/15 shadow-2xl mb-6 group-hover:ring-brand-teal/50 transition-all duration-300">
                    <Image
                      src="/DrGK.jpg"
                      alt="Dr. Jakati Gopalakrishna"
                      fill
                      sizes="(min-width: 768px) 176px, 160px"
                      className="object-cover"
                      style={{ objectPosition: 'center 10%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors duration-300">Dr. Jakati Gopalakrishna</h3>
                    <p className="text-base md:text-lg text-brand-navy font-medium">Honorary Secretary</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/leadership"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-navy to-brand-teal text-white font-semibold shadow-md hover:shadow-lg hover:from-brand-navy-dark hover:to-brand-teal-dark transition-all duration-300"
            >
              View All
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </div>

      {/* Stats Strip */}
      <StatsStrip stats={stats} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Initiatives Teaser */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4">
              Our Initiatives
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {initiatives.map((initiative) => (
              <Link
                key={initiative.title}
                href={initiative.href}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-brand-navy/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {initiative.icon}
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors duration-200">
                  {initiative.title}
                </h3>
                <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed">{initiative.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Membership CTA */}
        <section className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-brand-navy to-brand-teal rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              We Need You! Become an IMA Member
            </h2>
            <p className="text-brand-surface text-sm sm:text-lg max-w-2xl mx-auto mb-6">
              Join a community of over 367,000 medical professionals advancing healthcare across India.
            </p>
            <ul className="text-left max-w-md mx-auto mb-6 sm:mb-8 space-y-2">
              <li className="flex items-start gap-2 text-white/90 text-sm sm:text-base">
                <span className="mt-1 text-brand-surface">✓</span>
                <span>Access to national IMA member benefits and ID card</span>
              </li>
              <li className="flex items-start gap-2 text-white/90 text-sm sm:text-base">
                <span className="mt-1 text-brand-surface">✓</span>
                <span>Connect with 367,000+ medical professionals across India</span>
              </li>
              <li className="flex items-start gap-2 text-white/90 text-sm sm:text-base">
                <span className="mt-1 text-brand-surface">✓</span>
                <span>Simple online application with secure UPI or bank payment</span>
              </li>
            </ul>
            <Link
              href="/membership"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-brand-navy font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Apply for Membership
              <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Registered IMA Members Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent mb-8 sm:mb-12 text-center">
            Registered IMA Members
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* IMA ID Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-navy rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">IMA ID-card</h3>
              <a
                href="https://ima.org.in/memberarea/"
            target="_blank"
            rel="noopener noreferrer"
                className="text-brand-navy hover:text-brand-teal font-semibold text-sm sm:text-base"
          >
                Access Now
          </a>
        </div>

            {/* IMA Certificate */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-navy rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">IMA Certificate</h3>
              <a
                href="https://ima.org.in/memberarea/"
          target="_blank"
          rel="noopener noreferrer"
                className="text-brand-navy hover:text-brand-teal font-semibold text-sm sm:text-base"
              >
                Download
              </a>
            </div>

            {/* Update Profile */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-navy rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Update Your IMA Profile</h3>
              <a
                href="https://ima.org.in/memberarea/"
          target="_blank"
          rel="noopener noreferrer"
                className="text-brand-navy hover:text-brand-teal font-semibold text-sm sm:text-base"
              >
                Update Now
              </a>
            </div>

            {/* Total Members */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-navy rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">367,055</h3>
              <p className="text-sm sm:text-base text-brand-navy">Total IMA Members</p>
            </div>
          </div>

          {/* Search Database */}
          <div className="mt-8 sm:mt-12 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-brand-navy/10 p-6 sm:p-8">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4 sm:mb-6">Search IMA Member Database</h3>
              <p className="text-sm sm:text-base text-brand-navy mb-6 sm:mb-8">
                Find and connect with fellow IMA members across India
              </p>
              <a
                href="https://www.ima-india.org/ima/ima-members.php"
          target="_blank"
          rel="noopener noreferrer"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-brand-navy to-brand-teal text-white font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl hover:from-brand-navy-dark hover:to-brand-teal-dark transition-all duration-300"
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

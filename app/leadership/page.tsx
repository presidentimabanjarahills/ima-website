import type { Metadata } from "next";
import Image from "next/image";
import PersonCard from "../components/PersonCard";
import AchievementsTimeline from "../components/AchievementsTimeline";
import { SITE_NAME } from "../lib/site";
import { president, officeBearers, executiveCommittee, advisoryBoard, achievements } from "./data";

const title = "Dr. Prabhukumar Challagali - President, IMA Banjara Hills";
const description =
  "Meet Dr. Prabhukumar Challagali, President of IMA Banjara Hills and Convenor of AI & Digital Health at the Commonwealth Medical Association, along with the Office Bearers, Executive Committee, and Advisory Board.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leadership" },
  openGraph: {
    title,
    description,
    url: "/leadership",
    siteName: SITE_NAME,
    type: "profile",
    images: [{ url: "/presidentnote.jpg", width: 960, height: 1280, alt: president.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/presidentnote.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: president.name,
  jobTitle: "President, IMA Banjara Hills",
  affiliation: {
    "@type": "MedicalOrganization",
    name: SITE_NAME,
  },
  image: "/presidentnote.jpg",
  worksFor: [
    { "@type": "Organization", name: "IMA Banjara Hills" },
    { "@type": "Organization", name: "Commonwealth Medical Association" },
    { "@type": "Organization", name: "Telangana State IMA" },
  ],
};

export default function LeadershipPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* 1. Hero portrait */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-navy-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-56 sm:w-64 lg:w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/15">
                <Image
                  src="/presidentnote.jpg"
                  alt={president.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, 256px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-6">
                {president.name}
              </h1>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start">
                <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm sm:text-base font-medium">
                  President, IMA Banjara Hills
                </span>
                <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm sm:text-base font-medium">
                  Convenor, AI &amp; Digital Health, Commonwealth Medical Association
                </span>
                <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm sm:text-base font-medium">
                  Chairman, Anti-Quackery Committee, Telangana State IMA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* 2. Biography */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
            Biography
          </h2>
          <div className="prose-none space-y-4 text-brand-navy text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              Dr. Prabhukumar Challagali, <span className="font-semibold">MBBS, MD, PGDHS</span>, is a senior
              physician and the President of IMA Banjara Hills. He practices at{" "}
              <span className="font-semibold">Dr Prabhu Life Multispeciality Clinics and Hospital</span>,
              Manikonda, Hyderabad, where he has spent his career serving the local community while
              remaining an active voice for the wider medical fraternity.
            </p>
            <p>
              Beyond clinical practice, Dr. Challagali has taken on national and international
              leadership roles: he serves as Convenor of AI &amp; Digital Health for the Commonwealth
              Medical Association, and as Chairman of the Media &amp; Anti-Quackery Committee for
              Telangana State IMA - a role he describes as being &quot;personally dedicated to
              eradicating quackery and protecting patients from unqualified practitioners.&quot;
            </p>
            <p>
              Under his leadership, IMA Banjara Hills has organized thousands of free and subsidized
              medical camps, run public health awareness campaigns, and represented the medical
              profession directly to state and national leaders - most recently culminating in his
              role chairing the organizing committee for the CMA Global Conference 2025 on AI in
              Healthcare &amp; Medicine.
            </p>
          </div>
        </section>

        {/* 3. Achievements timeline */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-8 sm:mb-10">
            Achievements &amp; Milestones
          </h2>
          <AchievementsTimeline items={achievements} />
        </section>

        {/* 4. YouTube video */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
            Watch
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-brand-navy/10 p-4 sm:p-6">
            <p className="text-brand-navy text-sm sm:text-base mb-4">
              Health awareness talks and updates from Dr. Prabhukumar Challagali on the{" "}
              <span className="font-semibold">Dr Prabhu Health TV</span> YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/@dr.prabhuhealthtv29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-navy to-brand-teal text-white font-semibold shadow-md hover:shadow-lg hover:from-brand-navy-dark hover:to-brand-teal-dark transition-all duration-300"
            >
              Watch on YouTube
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </section>

        {/* 5. Media Kit */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
            Media Kit
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-brand-navy/10 p-6 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-shrink-0 w-24 h-32 sm:w-28 sm:h-36 rounded-xl bg-gradient-to-br from-brand-navy to-brand-teal flex flex-col items-center justify-center shadow-lg text-white">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 3v5h5" />
                </svg>
                <span className="text-xs font-bold tracking-wide">PDF</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">IMA Banjara Hills Press Kit</h3>
                <p className="text-brand-navy/80 text-sm sm:text-base mb-4">
                  Everything media and event organizers need, in one download:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-base text-brand-navy mb-6 max-w-md mx-auto md:mx-0">
                  {[
                    "Biography & career highlights",
                    "High-resolution photos",
                    "Official logo & branding",
                    "Press release template",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 justify-center md:justify-start">
                      <svg className="w-4 h-4 text-brand-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/media-kit.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-brand-navy to-brand-teal text-white font-semibold shadow-md hover:shadow-lg hover:from-brand-navy-dark hover:to-brand-teal-dark transition-all duration-300"
                >
                  Download Media Kit (PDF)
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 6. Office Bearers / Executive Committee / Advisory Board */}
      <div className="bg-brand-surface py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4 sm:mb-6 text-center">
              Office Bearers
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-8 sm:mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
              {officeBearers.map((person) => (
                <PersonCard key={person.name} {...person} size="lg" />
              ))}
            </div>
          </section>

          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-8 sm:mb-10 text-center">
              Executive Committee
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {executiveCommittee.map((person) => (
                <PersonCard key={person.name} {...person} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-8 sm:mb-10 text-center">
              Advisory Board
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {advisoryBoard.map((person) => (
                <PersonCard key={person.name} {...person} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

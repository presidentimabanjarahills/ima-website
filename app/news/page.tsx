import type { Metadata } from "next";
import Image from "next/image";
import { SITE_NAME } from "../lib/site";
import { newsItems, pressCoverage } from "./data";

const title = "News & Press";
const description =
  "Latest announcements, meetings, and press coverage of IMA Banjara Hills and President Dr. Prabhukumar Challagali.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/news" },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/news",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/imalogo.png", width: 800, height: 240, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: ["/imalogo.png"],
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  MEETING: "bg-brand-navy/90",
  INVITATION: "bg-blue-600/90",
  SUPPORT: "bg-brand-teal/90",
};

export default function NewsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
          News &amp; Press
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-brand-navy max-w-3xl mx-auto leading-relaxed">
          Announcements from IMA Banjara Hills, and press coverage of President Dr. Prabhukumar Challagali.
        </p>
      </div>

      {/* Announcements feed */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6 sm:mb-8">Announcements</h2>
        <div className="space-y-6 sm:space-y-8">
          {newsItems.map((item) => (
            <article
              key={item.slug}
              id={item.slug}
              className="scroll-mt-24 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-brand-navy/10 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <details className="group">
                <summary className="cursor-pointer list-none">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-64 h-48 sm:h-auto flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 640px) 256px, 100vw"
                        className="object-cover"
                        style={{ objectPosition: "center 20%" }}
                      />
                      <span
                        className={`absolute bottom-3 left-3 text-white font-semibold text-xs px-2 py-1 rounded-full ${
                          CATEGORY_COLORS[item.category] || "bg-brand-navy/90"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <div className="p-4 sm:p-6 flex-1">
                      <p className="text-brand-teal font-semibold text-xs sm:text-sm mb-1">{item.date}</p>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                        <svg
                          className="w-5 h-5 text-brand-navy flex-shrink-0 mt-1 transition-transform duration-200 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <p className="text-brand-navy/70 text-sm sm:text-base leading-relaxed line-clamp-2 group-open:hidden">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 -mt-2 sm:pl-[17rem]">
                  <p className="text-brand-navy text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      {/* Press coverage */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6 sm:mb-8">Press Coverage</h2>
        <div className="space-y-4">
          {pressCoverage.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md border border-brand-navy/10 p-4 sm:p-6 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300"
            >
              <div>
                <p className="text-brand-teal font-semibold text-xs sm:text-sm mb-1">
                  {item.source} &middot; {item.date}
                </p>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
              <svg
                className="w-5 h-5 text-brand-navy flex-shrink-0 group-hover:text-brand-teal group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

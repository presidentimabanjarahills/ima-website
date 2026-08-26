import type { Metadata } from "next";
import AchievementsTimeline from "../components/AchievementsTimeline";
import type { TimelineItem } from "../components/AchievementsTimeline";
import { SITE_NAME } from "../lib/site";

const title = "Awards & Recognition";
const ogTitle = "Awards & Recognition | IMA Banjara Hills";
const description =
  "Awards and recognition received by IMA Banjara Hills President Dr. Prabhukumar Challagali for his contributions to healthcare and humanitarian service.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/awards" },
  openGraph: {
    title: ogTitle,
    description,
    url: "/awards",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
  },
};

const awards: TimelineItem[] = [
  {
    date: "2026",
    title: "Reverend Jesse Jackson Award",
    description:
      "Honoured at the 2.0 Health Conference, Las Vegas, with the prestigious Reverend Jesse Jackson Award for outstanding contributions to healthcare.",
    image: "/WhatsApp Image 2026-08-20 at 13.37.00.jpeg",
    imageAlt: "Dr Prabhukumar Challagali honoured with the Reverend Jesse Jackson Award at the 2.0 Health Conference, Las Vegas",
  },
  {
    date: "November 2024",
    title: "Honoured by the Commonwealth Medical Association",
    description:
      "Recognized by the Commonwealth Medical Association at its gathering in Chennai (November 9-10, 2024) for his contributions to healthcare and humanitarian service, including over 5,000 medical camps and awareness programs. CMA President Dr. J. A. Jayalal presented the honour before leaders from 56 Commonwealth countries.",
    image: "/presidentnote.jpg",
    imageAlt: "Dr. Prabhukumar Challagali, honoured by the Commonwealth Medical Association",
  },
  {
    date: "Ongoing",
    title: "Chairman, Anti-Quackery Committee, Telangana State IMA",
    description:
      "Appointed Chairman of the Media & Anti-Quackery Committee for IMA Telangana State, leading efforts to eradicate unlicensed medical practice and protect patients from unqualified practitioners.",
    image: "/presidentnote.jpg",
    imageAlt: "Dr. Prabhukumar Challagali, Chairman of the Media & Anti-Quackery Committee, Telangana State IMA",
  },
];

export default function AwardsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
          Awards &amp; Recognition
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl text-brand-navy max-w-2xl mx-auto leading-relaxed">
          Recognition received by President Dr. Prabhukumar Challagali for his contributions to
          healthcare, humanitarian service, and the medical profession.
        </p>
      </div>

      <AchievementsTimeline items={awards} />
    </div>
  );
}

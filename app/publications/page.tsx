import type { Metadata } from "next";
import { SITE_NAME } from "../lib/site";

const title = "Publications";
const ogTitle = "Publications | IMA Banjara Hills";
const description =
  "Newsletters, health advisories, and CME resources from IMA Banjara Hills.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/publications" },
  openGraph: {
    title: ogTitle,
    description,
    url: "/publications",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
  },
};

// TODO: This page is a placeholder structure only. No real newsletters,
// health advisories, or CME resources have been provided yet - do not
// invent titles, dates, or download links. Replace each empty state below
// with real content (and a document/PDF link) as it becomes available.
const sections = [
  {
    id: "newsletters",
    title: "Newsletters",
    description: "Periodic updates on branch activities, events, and member news.",
  },
  {
    id: "health-advisories",
    title: "Health Advisories",
    description: "Public health guidance and advisories issued by IMA Banjara Hills.",
  },
  {
    id: "cme-resources",
    title: "CME Resources",
    description: "Continuing Medical Education materials and resources for members.",
  },
];

export default function PublicationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
          Publications
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl text-brand-navy max-w-2xl mx-auto leading-relaxed">
          Newsletters, advisories, and educational resources from IMA Banjara Hills.
        </p>
      </div>

      <div className="space-y-10 sm:space-y-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">{section.title}</h2>
            <p className="text-brand-navy/70 text-sm sm:text-base mb-6">{section.description}</p>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-dashed border-brand-navy/20 p-8 sm:p-10 text-center">
              <p className="text-brand-navy/70 text-sm sm:text-base">
                Coming soon. Check back for {section.title.toLowerCase()}.
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

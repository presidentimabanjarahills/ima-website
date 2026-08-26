import type { Metadata } from "next";
import Image from "next/image";
import { SITE_NAME } from "../lib/site";

const title = "Our Partners";
const ogTitle = "Our Partners | IMA Banjara Hills";
const description =
  "Organizations and government departments that partner with IMA Banjara Hills to advance healthcare across Telangana and the Commonwealth.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/partners" },
  openGraph: {
    title: ogTitle,
    description,
    url: "/partners",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
  },
};

// TODO: cma-logo.svg, ima-national-logo.svg, ima-telangana-logo.svg,
// telangana-health-dept-logo.svg, and telangana-itec-dept-logo.svg are
// placeholder marks (public/partners/). Swap in the organizations' real
// logos once they are supplied.
const partners = [
  {
    name: "Commonwealth Medical Association",
    logo: "/partners/cma-logo.svg",
    description: "Global umbrella body for Commonwealth medical associations, where Dr. Prabhukumar Challagali serves as Convenor for AI & Digital Health.",
  },
  {
    name: "IMA National",
    logo: "/partners/ima-national-logo.svg",
    description: "The national Indian Medical Association, of which IMA Banjara Hills is a local branch.",
  },
  {
    name: "IMA Telangana State",
    logo: "/partners/ima-telangana-logo.svg",
    description: "State branch of the Indian Medical Association, coordinating IMA activities across Telangana.",
  },
  {
    name: "Health, Medical & Family Welfare Department",
    logo: "/partners/telangana-health-dept-logo.svg",
    description: "Government of Telangana department partnering on public health initiatives and medical camps.",
  },
  {
    name: "IT, Electronics & Communications Department",
    logo: "/partners/telangana-itec-dept-logo.svg",
    description: "Government of Telangana department supporting the AI & Digital Health initiative.",
  },
];

export default function PartnersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
          Our Partners
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl text-brand-navy max-w-2xl mx-auto leading-relaxed">
          Organizations and government departments we work with to advance healthcare.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-brand-navy/10 p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-40 h-14 sm:w-48 sm:h-16 mb-4 sm:mb-6">
              <Image src={partner.logo} alt={partner.name} fill sizes="(min-width: 640px) 192px, 160px" className="object-contain" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-brand-navy mb-2">{partner.name}</h2>
            <p className="text-brand-navy/70 text-sm sm:text-base leading-relaxed">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

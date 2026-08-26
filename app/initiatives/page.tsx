import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StatsStrip from "../components/StatsStrip";
import { SITE_NAME } from "../lib/site";

const title = "Our Initiatives";
const ogTitle = "Our Initiatives | IMA Banjara Hills";
const description =
  "Medical camps, AI & digital health, anti-quackery advocacy, and disaster relief - the initiatives IMA Banjara Hills and President Dr. Prabhukumar Challagali lead across Telangana and beyond.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/initiatives" },
  openGraph: {
    title: ogTitle,
    description,
    url: "/initiatives",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
  },
};

export default function InitiativesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
          Our Initiatives
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl text-brand-navy max-w-3xl mx-auto leading-relaxed">
          The programs IMA Banjara Hills and President Dr. Prabhukumar Challagali lead to advance
          healthcare access, protect patients, and support communities in crisis.
        </p>
      </div>

      <div className="space-y-10 sm:space-y-12">
        {/* 1. Medical Camps & Community Outreach */}
        <section
          id="medical-camps"
          className="scroll-mt-24 bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-brand-navy/10 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-56 md:h-full min-h-[220px]">
              <Image
                src="/presidentnote.jpg"
                alt="Dr. Prabhukumar Challagali, who has led IMA Banjara Hills' medical camp initiatives"
                fill
                sizes="(min-width: 768px) 470px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
                Medical Camps &amp; Community Outreach
              </h2>
              <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed mb-6">
                For over a decade, IMA Banjara Hills has organized free and subsidized medical camps
                bringing screening, diagnosis, and treatment to underserved communities across
                Telangana. These camps remain the backbone of the branch&apos;s community health mission,
                led by President Dr. Prabhukumar Challagali.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <StatsStrip stats={[{ value: 5000, suffix: "+", label: "Medical Camps Conducted" }]} />
              </div>
            </div>
          </div>
        </section>

        {/* 2. AI & Digital Health Initiative */}
        <section
          id="ai-digital-health"
          className="scroll-mt-24 bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-brand-navy/10 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-56 md:h-full min-h-[220px] order-1 md:order-2">
              <Image
                src="/Events Pics/Cma .jpg"
                alt="Official poster for the Commonwealth AI Global Summit 2025, chaired by Dr. Prabhukumar Challagali's AI & Digital Health committee"
                fill
                sizes="(min-width: 768px) 470px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
                AI &amp; Digital Health Initiative
              </h2>
              <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed mb-4">
                As Convenor of the Commonwealth Medical Association&apos;s AI &amp; Digital Health Committee,
                Dr. Challagali chairs a global network of physicians, technologists, and policy advisors
                exploring how artificial intelligence can improve patient care across the Commonwealth.
                This work culminated in the CMA Global Conference 2025 on AI in Healthcare &amp; Medicine,
                hosted in Hyderabad.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base font-semibold">
                <Link href="/events/ai-healthcare-conference" className="text-brand-navy hover:text-brand-teal transition-colors duration-200">
                  About the Conference →
                </Link>
                <Link href="/news#chief-minister-meeting" className="text-brand-navy hover:text-brand-teal transition-colors duration-200">
                  Related News →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Anti-Quackery Program */}
        <section
          id="anti-quackery"
          className="scroll-mt-24 bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-brand-navy/10 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-56 md:h-full min-h-[220px]">
              <Image
                src="/presidentnote.jpg"
                alt="Dr. Prabhukumar Challagali, Chairman of the Media & Anti-Quackery Committee, Telangana State IMA"
                fill
                sizes="(min-width: 768px) 470px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
                Anti-Quackery Program
              </h2>
              <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed">
                As Chairman of the Media &amp; Anti-Quackery Committee for IMA Telangana State,
                Dr. Challagali leads the fight against unlicensed and unqualified medical practice.
                IMA Banjara Hills itself was founded in part to create a unified platform for
                confronting the rampant, unethical quackery that endangers public health in the region.
              </p>
              <Link
                href="/about/who-we-are"
                className="mt-6 inline-block text-sm sm:text-base font-semibold text-brand-navy hover:text-brand-teal transition-colors duration-200 w-fit"
              >
                Read About Our Founding →
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Disaster & Humanitarian Response */}
        <section
          id="disaster-response"
          className="scroll-mt-24 bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-brand-navy/10 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-56 md:h-full min-h-[220px] order-1 md:order-2">
              <Image
                src="/presidentnote.jpg"
                alt="Dr. Prabhukumar Challagali, who led IMA's medical relief mission to Kangpokpi, Manipur"
                fill
                sizes="(min-width: 768px) 470px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
                Disaster &amp; Humanitarian Response
              </h2>
              <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed mb-4">
                In 2023, Dr. Challagali travelled to the Kangpokpi district of strife-torn Manipur,
                coordinating with the Chief Medical Officer to organize emergency medical relief for
                displaced families. His team treated over 600 patients for conditions including
                diarrhoea, viral infections, and dangerously elevated blood sugar, while also
                delivering food, blankets, and clothing to those affected by the unrest.
              </p>
              <a
                href="https://www.thehansindia.com/news/cities/hyderabad/hyderabad-city-doctor-lends-healing-touch-to-manipur-victims-810916"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-semibold text-brand-navy hover:text-brand-teal transition-colors duration-200 w-fit"
              >
                Read Coverage: The Hans India →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

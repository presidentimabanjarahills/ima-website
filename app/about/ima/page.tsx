import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "../../lib/site";

const title = "About IMA | India's Premier Medical Association";
const description =
  "Learn about the Indian Medical Association (IMA), its vision, mission, and objectives in advancing medical science, public health, and the dignity of the medical profession across India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about/ima" },
  openGraph: {
    title,
    description,
    url: "/about/ima",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/imalogo.png", width: 800, height: 240, alt: "Indian Medical Association" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/imalogo.png"],
  },
};

export default function AboutIMAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-surface via-white to-brand-surface">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            About IMA
          </h1>
          <p className="text-xl sm:text-2xl text-brand-surface max-w-3xl mx-auto leading-relaxed">
            India&apos;s Premier Medical Association - Dedicated to Excellence in Healthcare
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vision Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-brand-navy/10 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-navy to-brand-teal px-6 sm:px-8 py-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
                Our Vision
              </h2>
            </div>
            <div className="p-6 sm:p-8 md:p-10">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  IMA is a democratic forum working to maintain dignity, honour and social security of the medical fraternity in the country. It strives to provide quality healthcare to each and every citizen of India. IMA is committed to preserve the autonomy of profession.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-brand-navy/10 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-teal to-brand-teal px-8 py-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Our Objectives
              </h2>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {/* Primary Objectives */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-navy rounded-full"></div>
                    Primary Objectives
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-brand-surface to-brand-surface p-6 rounded-lg border border-brand-navy/10">
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-brand-navy">Medical Excellence:</strong> To promote and advance medical and allied sciences in all their different branches and to promote the improvement of public health and medical education in India.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-brand-surface to-brand-surface p-6 rounded-lg border border-brand-navy/10">
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-brand-navy">Professional Integrity:</strong> To maintain the honour and dignity and to uphold the interest of the medical profession and to promote co-operation amongst the members thereof.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-brand-surface to-brand-surface p-6 rounded-lg border border-brand-navy/10">
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-brand-navy">Equality & Unity:</strong> To work for the abolition of compartmentalism in medical education, medical services and registration in the country and this to achieve equality among all members of the profession.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Academic Wings */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-navy rounded-full"></div>
                    Academic Excellence
                  </h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When it comes to updating the knowledge of its members and keeping them abreast of the latest technologies in health care, we have academic wings for general practitioners, for specialists and for online courses:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                        <h4 className="font-semibold text-brand-navy mb-2">IMA College of General Practitioners</h4>
                        <p className="text-sm text-gray-600">Specialized training for general practitioners</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                        <h4 className="font-semibold text-brand-navy mb-2">IMA Academy of Medical Specialities</h4>
                        <p className="text-sm text-gray-600">Advanced training for medical specialists</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                        <h4 className="font-semibold text-brand-navy mb-2">IMA AKN Sinha Institute</h4>
                        <p className="text-sm text-gray-600">Online courses and digital learning</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hospital Services */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-navy rounded-full"></div>
                    Hospital Services
                  </h3>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-brand-navy">IMA Hospital Board of India</strong> provides comprehensive services related to Hospitals & Nursing Homes, with special focus on patient care and safety standards across the healthcare industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-brand-navy to-brand-teal rounded-2xl p-8 sm:p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl text-brand-surface mb-8 max-w-2xl mx-auto">
              Be part of India&apos;s leading medical association and contribute to the advancement of healthcare excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="bg-white text-brand-navy px-8 py-3 rounded-full font-semibold hover:bg-brand-surface transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View Our Events
              </Link>
              <Link
                href="#"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-brand-teal transition-colors duration-200"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

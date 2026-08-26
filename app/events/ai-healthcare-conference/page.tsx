import type { Metadata } from "next";
import ConferenceClient from "./ConferenceClient";
import { SITE_URL, SITE_NAME } from "../../lib/site";

const title = "CMA Global Conference 2025 on AI in Healthcare & Medicine";
const description =
  "Join the CMA Global Conference 2025 on AI in Healthcare & Medicine, 22-23 November 2025 at Jubilee Hills Convention Centre, Hyderabad. Theme: Transforming Care Together - AI & Digital Health for a Healthier Commonwealth.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/events/ai-healthcare-conference" },
  openGraph: {
    title,
    description,
    url: "/events/ai-healthcare-conference",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/eventPic1.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/eventPic1.png"],
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "The CMA Global Conference 2025 on AI in Healthcare & Medicine",
  description,
  startDate: "2025-11-22",
  endDate: "2025-11-23",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Jubilee Hills Convention Centre",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  },
  image: [`${SITE_URL}/eventPic1.png`],
  organizer: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export default function AIHealthcareConference() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <ConferenceClient />
    </>
  );
}

import type { Metadata } from "next";
import EventsClient from "./EventsClient";
import { SITE_NAME } from "../lib/site";

const title = "Events | Medical Conferences & Workshops";
const ogTitle = "Events | IMA Banjara Hills Medical Conferences & Workshops";
const description =
  "Explore upcoming medical conferences, workshops, and professional development events organized by IMA Banjara Hills, including the CMA Global Conference 2025 on AI in Healthcare & Medicine.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/events" },
  openGraph: {
    title: ogTitle,
    description,
    url: "/events",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/eventPic1.png", width: 1200, height: 630, alt: "IMA Banjara Hills events" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
    images: ["/eventPic1.png"],
  },
};

export default function EventsPage() {
  return <EventsClient />;
}

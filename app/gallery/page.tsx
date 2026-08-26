import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import { SITE_NAME } from "../lib/site";

const title = "Event Gallery";
const ogTitle = "Event Gallery | IMA Banjara Hills";
const description =
  "Browse photos from IMA Banjara Hills events, medical conferences, health camps, and community initiatives across Hyderabad.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: ogTitle,
    description,
    url: "/gallery",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/eventPic1.png", width: 1200, height: 630, alt: "IMA Banjara Hills event gallery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
    images: ["/eventPic1.png"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}

import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_URL, SITE_NAME } from "./lib/site";

const title = "IMA Banjara Hills | Indian Medical Association, Hyderabad";
const description =
  "IMA Banjara Hills is a premier medical association in Hyderabad dedicated to advancing healthcare, supporting medical professionals, and improving patient care across the region.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/imalogo.png", width: 800, height: 240, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/imalogo.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}

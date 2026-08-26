import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { SITE_NAME } from "../lib/site";

const title = "Contact Us";
const description =
  "Get in touch with IMA Banjara Hills. Send us a message, call, email, or visit us at Dr Prabhu Life Multispeciality Clinics and Hospital, Manikonda, Hyderabad.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/contact",
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

export default function ContactPage() {
  return <ContactClient />;
}

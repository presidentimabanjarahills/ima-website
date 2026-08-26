import type { Metadata } from "next";
import RegisterClient from "./RegisterClient";
import { SITE_NAME } from "../../../lib/site";

const title = "Register | CMA Global Conference 2025 on AI in Healthcare";
const description =
  "Register for the CMA Global Conference 2025 on AI in Healthcare & Medicine, 22-23 November 2025 at Jubilee Hills Convention Centre, Hyderabad, organized by IMA Banjara Hills.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/events/ai-healthcare-conference/register" },
  openGraph: {
    title,
    description,
    url: "/events/ai-healthcare-conference/register",
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

export default function ConferenceRegistration() {
  return <RegisterClient />;
}

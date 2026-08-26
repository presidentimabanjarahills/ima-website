import type { Metadata } from "next";
import MembershipClient from "./MembershipClient";
import { SITE_NAME } from "../lib/site";

const title = "Become a Member";
const ogTitle = "Become a Member | IMA Banjara Hills";
const description =
  "Join IMA Banjara Hills. Review membership requirements and fees, apply online, and pay securely by UPI or bank transfer.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/membership" },
  openGraph: {
    title: ogTitle,
    description,
    url: "/membership",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
  },
};

export default function MembershipPage() {
  return <MembershipClient />;
}

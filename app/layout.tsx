import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { SITE_URL, SITE_NAME } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const description =
  "India's premier medical association dedicated to advancing healthcare, supporting medical professionals, and improving patient care across the nation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IMA Banjara Hills",
    template: `%s | ${SITE_NAME}`,
  },
  description,
  openGraph: {
    title: "IMA Banjara Hills",
    description,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/imalogo.png", width: 800, height: 240, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMA Banjara Hills",
    description,
    images: ["/imalogo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: SITE_NAME,
  alternateName: "Indian Medical Association, Banjara Hills",
  url: SITE_URL,
  logo: `${SITE_URL}/imalogo.png`,
  email: "presidentimabanjarahills@gmail.com",
  telephone: "+91-99892-20003",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Flat No-201, Annapurna A S Time Square, Road No-14",
    addressLocality: "Banjara Hills, Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/prabhukumar.challagali?rdid=FRwj9Eov9cwhr3tQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ohATfMHj%2F",
    "https://www.youtube.com/@dr.prabhuhealthtv29",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Preloader />
        <div id="app-content" className="min-h-screen bg-brand-surface">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

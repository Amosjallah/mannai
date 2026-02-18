import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import CompanyHistory from './CompanyHistory';
import MissionVision from './MissionVision';
import SustainabilityPractices from './SustainabilityPractices';

import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description: "Learn about Mennai Farms' journey from humble beginnings in 2017 to becoming a leading pineapple producer in Ghana. Discover our mission, vision, values, and commitment to sustainable farming practices in Marfokrom, Ayensuano District.",
  keywords: [
    "Mennai Farms history",
    "Ghana pineapple farm story",
    "sustainable farming mission",
    "sustainable farming Ghana",
    "pineapple farm team",
    "agricultural company Ghana",
    "Mennai Farms about",
    "pineapple farm established 2017",
    "Ghana agricultural business",
    "sustainable pineapple farming",
    "Marfokrom farm history"
  ],
  authors: [{ name: "Mennai Farms" }],
  openGraph: {
    title: "About Mennai Farms - Our Story & Mission",
    description: "Discover our journey from 2017 to becoming Ghana's leading pineapple producer. Learn about our sustainable farming practices and commitment to quality.",
    url: "https://www.mennaifarms.com/about",
    siteName: "Mennai Farms",
    images: [
      {
        url: "https://www.mennaifarms.com/logo.png",
        width: 1200,
        height: 630,
        alt: "About Mennai Farms",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mennai Farms - Our Story & Mission",
    description: "Discover our journey from 2017 to becoming Ghana's leading pineapple producer.",
    images: ["https://www.mennaifarms.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.mennaifarms.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Organization",
            name: "Mennai Farms",
            foundingDate: "2017",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Marfokrom",
              addressRegion: "Eastern Region",
              addressCountry: "GH",
            },
            description: "Leading pineapple producer in Ghana specializing in premium quality through sustainable farming practices.",
          },
        }}
      />
      <Header />
      <main>
        <AboutHero />
        <MissionVision />
        <SustainabilityPractices />
        <CompanyHistory />
      </main>
      <Footer />
    </div>
  );
}

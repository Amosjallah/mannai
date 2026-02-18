import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FarmHero from './FarmHero';
import FarmStory from './FarmStory';
import MissionVisionValues from './MissionVisionValues';
import SustainabilityCommitment from './SustainabilityCommitment';
import CommunityImpact from './CommunityImpact';
import PrimeLocation from './PrimeLocation';
import FarmScale from './FarmScale';
import FarmingMethods from './FarmingMethods';
import FarmInfrastructure from './FarmInfrastructure';
import FarmGallery from './FarmGallery';

import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: "Our Farm - Location, Scale & Operations",
  description: "Explore Mennai Farms' 50-acre pineapple plantation in Marfokrom, Ayensuano District, Eastern Region, Ghana. Learn about our farming methods, infrastructure, and community impact. Discover our sustainable farming practices and modern agricultural techniques.",
  keywords: [
    "pineapple farm location Ghana",
    "Marfokrom farm",
    "Ayensuano District farming",
    "pineapple plantation Ghana",
    "farm infrastructure",
    "sustainable farming methods",
    "agricultural operations Ghana",
    "pineapple farm scale",
    "community farming Ghana",
    "50 acre pineapple farm",
    "Ghana pineapple plantation",
    "Eastern Region farming",
    "farm operations Ghana",
    "sustainable agriculture practices"
  ],
  authors: [{ name: "Mennai Farms" }],
  openGraph: {
    title: "Our Farm - Mennai Farms Location & Operations",
    description: "Explore our 50-acre pineapple plantation in Marfokrom, Ayensuano District. Learn about our sustainable farming methods and operations.",
    url: "https://www.mennaifarms.com/farm",
    siteName: "Mennai Farms",
    images: [
      {
        url: "https://www.mennaifarms.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mennai Farms - Our Farm",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Farm - Mennai Farms Location & Operations",
    description: "Explore our 50-acre pineapple plantation in Marfokrom, Ayensuano District.",
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
    canonical: "https://www.mennaifarms.com/farm",
  },
};

export default function FarmPage() {
  return (
    <div className="min-h-screen">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Farm",
          name: "Mennai Farms",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Marfokrom",
            addressLocality: "Ayensuano",
            addressRegion: "Eastern Region",
            addressCountry: "GH",
            postalCode: "EO-0865-9013",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "6.123456",
            longitude: "-0.123456",
          },
          areaServed: "Global",
          description: "50-acre pineapple plantation specializing in premium quality pineapples through sustainable farming practices.",
        }}
      />
      <Header />
      <main>
        <FarmHero />
        <PrimeLocation />
        <FarmStory />
        <FarmScale />
        <MissionVisionValues />
        <FarmingMethods />
        <SustainabilityCommitment />
        <FarmInfrastructure />
        <CommunityImpact />
        <FarmGallery />
      </main>
      <Footer />
    </div>
  );
}

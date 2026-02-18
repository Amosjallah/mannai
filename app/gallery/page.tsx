import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GalleryHero from './GalleryHero';
import FarmPhotos from './FarmPhotos';
import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: "Gallery - Farm Photos & Visual Tour",
  description: "Take a visual tour of Mennai Farms through our photo gallery. See our pineapple plantation, farming operations, harvest activities, and beautiful landscapes in Marfokrom, Ayensuano District, Ghana. Experience the beauty of sustainable pineapple farming.",
  keywords: [
    "pineapple farm photos",
    "Ghana farm gallery",
    "pineapple plantation images",
    "farm tour photos",
    "agricultural photography Ghana",
    "pineapple harvest photos",
    "sustainable farming images",
    "Mennai Farms gallery",
    "pineapple farm images",
    "Ghana agriculture photos",
    "farm visual tour"
  ],
  authors: [{ name: "Mennai Farms" }],
  openGraph: {
    title: "Farm Gallery - Mennai Farms Visual Tour",
    description: "Explore our pineapple farm through stunning photos. See our plantation, operations, and beautiful landscapes in Ghana.",
    url: "https://www.mennaifarms.com/gallery",
    siteName: "Mennai Farms",
    images: [
      {
        url: "https://www.mennaifarms.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mennai Farms Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farm Gallery - Mennai Farms Visual Tour",
    description: "Explore our pineapple farm through stunning photos.",
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
    canonical: "https://www.mennaifarms.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Mennai Farms Photo Gallery",
          description: "Visual tour of Mennai Farms pineapple plantation and operations",
          about: {
            "@type": "Farm",
            name: "Mennai Farms",
          },
        }}
      />
      <Header />
      <GalleryHero />
      <FarmPhotos />
      <Footer />
    </main>
  );
}

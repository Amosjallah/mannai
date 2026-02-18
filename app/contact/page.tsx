import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Mennai Farms for inquiries about our premium pineapples, wholesale orders, partnerships, or farm visits. Located in Marfokrom, Ayensuano District, Eastern Region, Ghana. Phone: +233249240156. We're here to help with all your pineapple needs.",
  keywords: [
    "contact pineapple farm Ghana",
    "pineapple wholesale inquiry",
    "Mennai Farms contact",
    "pineapple export inquiry",
    "farm visit Ghana",
    "pineapple supplier contact",
    "Mennai Farms phone number",
    "pineapple farm contact Ghana",
    "wholesale pineapple inquiry",
    "Ghana pineapple exporter contact"
  ],
  authors: [{ name: "Mennai Farms" }],
  openGraph: {
    title: "Contact Mennai Farms - Get in Touch",
    description: "Get in touch with Mennai Farms for wholesale orders, partnerships, or farm visits. Located in Marfokrom, Ayensuano District, Ghana. Phone: +233249240156.",
    url: "https://www.mennaifarms.com/contact",
    siteName: "Mennai Farms",
    images: [
      {
        url: "https://www.mennaifarms.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Mennai Farms",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mennai Farms - Get in Touch",
    description: "Get in touch with Mennai Farms for wholesale orders, partnerships, or farm visits.",
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
    canonical: "https://www.mennaifarms.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.mennaifarms.com/#business",
          name: "Mennai Farms",
          image: "https://www.mennaifarms.com/logo.png",
          description: "Leading pineapple producer in Ghana specializing in premium quality through sustainable farming practices.",
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
          telephone: "+233249240156",
          email: "info@mennaifarms.com",
          url: "https://www.mennaifarms.com",
          priceRange: "$$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "16:00",
            },
          ],
        }}
      />
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  );
}

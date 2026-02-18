import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductsHero from './ProductsHero';
import PremiumVarieties from './PremiumVarieties';
import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: "Our Products - Premium Pineapple Varieties",
  description: "Explore Mennai Farms' premium pineapple varieties. We offer the finest quality pineapples including MD2, Smooth Cayenne, and Sugarloaf. Perfect for export, retail, and processing. Contact us for wholesale inquiries.",
  keywords: [
    "premium pineapples",
    "MD2 pineapple",
    "Smooth Cayenne pineapple",
    "Sugarloaf pineapple",
    "pineapple varieties Ghana",
    "wholesale pineapples",
    "export quality pineapples",
    "fresh pineapples Ghana",
    "pineapple supplier",
    "pineapple products Ghana",
    "fresh pineapple chunks",
    "pineapple juice",
    "dried pineapple",
    "canned pineapple",
    "bulk pineapple orders",
    "pineapple export Ghana"
  ],
  authors: [{ name: "Mennai Farms" }],
  openGraph: {
    title: "Premium Pineapple Varieties - Mennai Farms",
    description: "Discover our premium pineapple varieties MD2, Smooth Cayenne, and Sugarloaf. Export quality pineapples from Ghana.",
    url: "https://www.mennaifarms.com/products",
    siteName: "Mennai Farms",
    images: [
      {
        url: "https://www.mennaifarms.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mennai Farms Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Pineapple Varieties - Mennai Farms",
    description: "Discover our premium pineapple varieties MD2, Smooth Cayenne, and Sugarloaf.",
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
    canonical: "https://www.mennaifarms.com/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Premium Pineapple Products",
          description: "Premium quality pineapple varieties and products from Mennai Farms",
          itemListElement: [
            {
              "@type": "Product",
              name: "MD2 Golden Sweet Pineapple",
              description: "Premium quality MD2 pineapple variety known for exceptional sweetness",
              category: "Fresh Produce",
            },
            {
              "@type": "Product",
              name: "Smooth Cayenne Pineapple",
              description: "Classic pineapple variety prized for robust flavor and firm texture",
              category: "Fresh Produce",
            },
            {
              "@type": "Product",
              name: "Sugarloaf Pineapple",
              description: "Premium variety known for exceptional sweetness and conical shape",
              category: "Fresh Produce",
            },
          ],
        }}
      />
      <Header />
      <main>
        <ProductsHero />
        <PremiumVarieties />
      </main>
      <Footer />
    </div>
  );
}

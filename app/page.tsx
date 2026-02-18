
import type { Metadata } from "next";
import { getPageBySlug } from "@/utils/content";
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutSection from '../components/AboutSection';
import ProductShowcase from '../components/ProductShowcase';
import FarmSection from '../components/FarmSection';
import SustainabilitySection from '../components/SustainabilitySection';
import ContactSection from '../components/ContactSection';
import StructuredData from '../components/StructuredData';

// Map section types to components    
const SECTION_COMPONENTS: Record<string, React.ComponentType<any>> = {
  'hero': HeroSection,
  'why-choose-us': WhyChooseUs,
  'about': AboutSection,
  'products': ProductShowcase,
  'farm': FarmSection,
  'sustainability': SustainabilitySection,
  'contact': ContactSection,
};

export const metadata: Metadata = {
  title: "Home - Premium Pineapples from Ghana",
  description: "Discover Mennai Farms, Ghana's premier pineapple producer. We cultivate exceptional pineapples through sustainable farming practices in Marfokrom, Ayensuano District. Quality that reaches from our fields to your table.",
  // We keep static metadata as fallback, or use generateMetadata similar to layout if needed per page
  // For now, let's keep static here as layout handles global defaults
};

export default async function Home() {
  const page = await getPageBySlug('home');
  const sections = page?.sections || [];

  return (
    <div className="min-h-screen">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Mennai Farms",
          url: "https://www.mennaifarms.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.mennaifarms.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

      {/* Header and Footer are global, but could be dynamic too if needed */}
      <Header />

      <main>
        {sections.length > 0 ? (
          sections.map((section: any) => {
            const Component = SECTION_COMPONENTS[section.section_type];
            if (!Component) {
              // Fallback for unknown section types or custom JSON rendering could go here
              return null;
            }
            return <Component key={section.id} data={section.content} />;
          })
        ) : (
          // Fallback if no sections found (e.g. during migration or error)
          // We show the static layout to prevent broken site
          <>
            <HeroSection />
            <WhyChooseUs />
            <AboutSection />
            <ProductShowcase />
            <FarmSection />
            <SustainabilitySection />
            <ContactSection />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

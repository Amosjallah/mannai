
'use client';

import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

export default function HeroSection({ data }: { data?: any }) {
  const content = data || {};

  const heroImage = content.image || "https://readdy.ai/api/search-image?query=Lush%20tropical%20pineapple%20plantation%20in%20Ghana%20with%20golden%20ripe%20pineapples%20growing%20in%20organized%20rows%2C%20bright%20green%20leaves%2C%20African%20farmers%20working%20in%20the%20background%2C%20warm%20golden%20sunlight%20filtering%20through%2C%20rich%20red%20soil%2C%20sustainable%20farming%20practices%20visible%2C%20peaceful%20rural%20landscape%20with%20rolling%20hills%20in%20the%20distance%2C%20vibrant%20colors%20showcasing%20agricultural%20abundance%20and%20prosperity&width=1920&height=1080&seq=hero-slide-1&orientation=landscape";
  const title = content.title || "Premium Pineapples";
  const subtitle = content.subtitle || "From Ghana's Heart";
  const description = content.description || "Cultivating exceptional pineapples through sustainable farming practices in Marfokrom, Ayensuano District. Quality that reaches from our fields to your table.";

  const btn1Text = content.button1_text || "Explore Our Products";
  const btn1Link = content.button1_link || "/products";

  const btn2Text = content.button2_text || "Learn About Our Farm";
  const btn2Link = content.button2_link || "/about";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover animate-slow-zoom"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/30" />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up" delay={200}>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
              <br />
              <span className="text-yellow-400 inline-block mt-2">
                {subtitle}
              </span>
            </h1>
            <ScrollAnimation animation="fade-in-up" delay={400}>
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                {description}
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={btn1Link}
                  className="group bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 cursor-pointer whitespace-nowrap text-center shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  <span className="inline-flex items-center">
                    {btn1Text}
                    <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </Link>
                <Link
                  href={btn2Link}
                  className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer whitespace-nowrap text-center backdrop-blur-sm hover:scale-105 transform"
                >
                  <span className="inline-flex items-center">
                    {btn2Text}
                    <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

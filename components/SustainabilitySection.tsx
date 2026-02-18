
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function SustainabilitySection({ data }: { data?: any }) {
  const content = data || {};
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setScrollY(rect.top);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  const title = content.title || "Committed to";
  const titleHighlight = content.title_highlight || "Sustainability";
  const description = content.description || "Our farming practices prioritize environmental stewardship while maintaining the highest quality standards.";
  const bgImage = content.background_image || "https://readdy.ai/api/search-image?query=Lush%20tropical%20pineapple%20plantation%20in%20Ghana%20with%20golden%20ripe%20pineapples%20growing%20in%20organized%20rows%2C%20bright%20green%20leaves%2C%20African%20farmers%20working%20in%20the%20background%2C%20warm%20golden%20sunlight%20filtering%20through%2C%20rich%20red%20soil%2C%20sustainable%20farming%20practices%20visible%2C%20peaceful%20rural%20landscape%20with%20rolling%20hills%20in%20the%20distance%2C%20vibrant%20colors%20showcasing%20agricultural%20abundance%20and%20prosperity&width=1920&height=1080&seq=hero-farm&orientation=landscape";

  const features = content.features || [
    {
      text: "Water conservation and rainfall optimization",
      icon: "ri-drop-line"
    },
    {
      text: "Organic waste composting and soil enrichment",
      icon: "ri-recycle-line"
    },
    {
      text: "Natural pest control and biodiversity protection",
      icon: "ri-bug-line"
    },
    {
      text: "Community development and fair labor practices",
      icon: "ri-team-line"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-element"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${bgImage}')`,
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="scale-in">
          <div className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl border border-white/20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {title} <span className="text-green-600">{titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
              {features.map((feature: any, index: number) => (
                <ScrollAnimation key={index} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={100}>
                  <div className="flex items-start space-x-4 group p-4 rounded-lg hover:bg-green-50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300 group-hover:scale-110">
                      <i className={`${feature.icon} text-green-600 text-xl group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                    <span className="text-lg text-gray-700 pt-2 group-hover:text-gray-900 transition-colors duration-300">{feature.text}</span>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Our Methods
              <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

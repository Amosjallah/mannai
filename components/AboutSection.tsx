
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function AboutSection({ data }: { data?: any }) {
  const content = data || {};
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          setScrollY((windowHeight - rect.top) * 0.1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const title = content.title || "Rooted in Tradition,";
  const titleHighlight = content.title_highlight || "Growing for Tomorrow";
  const description1 = content.description1 || "Located in the fertile lands of Marfokrom, Ayensuano District, Mennai Farms has been dedicated to cultivating the finest pineapples in Ghana's Eastern Region. Our journey began with a simple vision: to produce world-class pineapples while supporting our local community and environment.";
  const description2 = content.description2 || "Through innovative farming techniques and unwavering commitment to sustainability, we've built a reputation for excellence that extends from local markets to international shores. Every pineapple tells the story of our passion for agriculture and our dedication to quality.";
  const btnText = content.button_text || "Read Our Full Story";
  const image = content.image || "https://readdy.ai/api/search-image?query=African%20farmers%20working%20in%20pineapple%20plantation%2C%20traditional%20farming%20methods%20combined%20with%20modern%20techniques%2C%20workers%20harvesting%20ripe%20golden%20pineapples%20under%20clear%20blue%20sky%2C%20authentic%20agricultural%20scene%20in%20Ghana%2C%20documentary%20photography%20style%20showing%20dedication%20and%20craftsmanship%20in%20tropical%20farming%20environment&width=800&height=600&seq=about001&orientation=landscape";

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-green-50/30 to-white border-t border-green-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollAnimation animation="fade-in-left" className="order-2 lg:order-1">
            <div
              ref={imageRef}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={image}
                alt={title}
                width={800}
                height={600}
                className="w-full h-96 lg:h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105 parallax-element"
                loading="lazy"
                decoding="async"
                style={{
                  transform: `translateY(${scrollY}px)`,
                }}
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-right" className="order-1 lg:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {title} <span className="text-yellow-500">{titleHighlight}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {description1}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {description2}
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                {btnText}
                <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

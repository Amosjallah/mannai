
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function FarmSection({ data }: { data?: any }) {
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

  const title = content.title || "Our Farm in";
  const titleHighlight = content.title_highlight || "Marfokrom";
  const description = content.description || "Nestled in the heart of Ayensuano District, Eastern Region, our 50-acre farm benefits from Ghana's ideal tropical climate and fertile soil conditions. The region's consistent rainfall and temperature patterns create perfect growing conditions for premium pineapples.";
  const image = content.image || "https://readdy.ai/api/search-image?query=Aerial%20view%20of%20organized%20pineapple%20plantation%20in%20Ghana%2C%20neat%20rows%20of%20pineapple%20plants%20creating%20geometric%20patterns%20across%20rolling%20hills%2C%20tropical%20landscape%20with%20lush%20green%20vegetation%2C%20modern%20agricultural%20planning%20visible%20from%20above%2C%20natural%20lighting%20showcasing%20the%20scale%20and%20organization%20of%20commercial%20farming&width=800&height=600&seq=farm001&orientation=landscape";

  const stats = content.stats || [
    {
      icon: "ri-map-pin-line",
      title: "Strategic Location",
      value: "Marfokrom, Ayensuano District, Eastern Region, Ghana",
      color: "yellow"
    },
    {
      icon: "ri-landscape-line",
      title: "Farm Size",
      value: "50 acres of cultivated pineapple plantation",
      color: "yellow"
    },
    {
      icon: "ri-leaf-line",
      title: "Farming Methods",
      value: "Sustainable practices with rain-fed cultivation",
      color: "yellow"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-green-50/40 to-white border-t border-green-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollAnimation animation="fade-in-right">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {title} <span className="text-green-600">{titleHighlight}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="space-y-5 mb-8">
                {stats.map((stat: any, index: number) => (
                  <ScrollAnimation key={index} animation="fade-in-right" delay={(index + 1) * 100}>
                    <div className="flex items-start space-x-4 group">
                      <div className={`w-12 h-12 bg-${stat.color || 'yellow'}-100 rounded-lg flex items-center justify-center group-hover:bg-${stat.color || 'yellow'}-500 transition-colors duration-300 group-hover:scale-110`}>
                        <i className={`${stat.icon} text-${stat.color || 'yellow'}-600 text-xl group-hover:text-white transition-colors duration-300`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">{stat.title}</h4>
                        <p className="text-gray-600">{stat.value}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>

              <Link
                href="/farm"
                className="group inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Visit Our Farm
                <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-left" className="lg:order-2">
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
        </div>
      </div>
    </section>
  );
}

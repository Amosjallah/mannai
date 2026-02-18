'use client';

import { useState } from 'react';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function CompanyHistory() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const milestones = [
    {
      year: "2017",
      title: "Farm Establishment",
      description: "Founded Mennai Farms in Marfokrom with 50 acres of dedicated pineapple cultivation. Our journey began with a vision to produce world-class pineapples while supporting our local community.",
      image: "/image99.jpg",
      fallbackImage: "/image99.jpg",
      icon: "ri-seedling-line"
    },
    {
      year: "2018",
      title: "Export Market Entry", 
      description: "Began exporting premium pineapples to international markets in Europe and North America. Our quality standards opened doors to global opportunities.",
      image: "https://readdy.ai/api/search-image?query=Fresh%20pineapples%20being%20packed%20into%20export%20containers%20at%20Ghana%20port%2C%20international%20shipping%20containers%20with%20pineapples%2C%20workers%20packing%20premium%20pineapples%20for%20export%2C%20quality%20control%20inspection%2C%20export%20logistics%20pineapple%20farm%20Ghana%2C%20international%20trade%20operations&width=800&height=500&seq=journey-2016&orientation=landscape",
      fallbackImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      icon: "ri-plane-line"
    },
    {
      year: "2020", 
      title: "Sustainability Milestone",
      description: "Strengthened our sustainable farming practices with improved soil management and better waste handling, while maintaining our 50-acre pineapple farm.",
      image: "/pineapple3.jpg",
      fallbackImage: "/pineapple3.jpg",
      icon: "ri-leaf-line"
    },
    {
      year: "2022",
      title: "Improved Farm Management",
      description: "Introduced better field management and quality control practices to consistently deliver export-grade pineapples from our 50-acre farm.",
      image: "/image8.jpg",
      fallbackImage: "/image8.jpg",
      icon: "ri-settings-3-line"
    },
    {
      year: "2024",
      title: "Market Growth & Partnerships",
      description: "Strengthened relationships with local and international buyers while maintaining strict quality standards across all our pineapples.",
      image: "/image98.jpg",
      fallbackImage: "/image98.jpg",
      icon: "ri-rocket-line"
    },
    {
      year: "2025",
      title: "Global Partnership",
      description: "Established strategic partnerships with international retailers and launched premium product line. Our global presence continues to grow.",
      image: "https://readdy.ai/api/search-image?query=Business%20meeting%20between%20Ghana%20pineapple%20farm%20representatives%20and%20international%20retailers%2C%20handshake%20agreement%2C%20premium%20pineapple%20products%20display%2C%20global%20partnership%20discussion%2C%20international%20trade%20negotiation%2C%20strategic%20business%20alliance%20in%20agriculture&width=800&height=500&seq=journey-2025&orientation=landscape",
      fallbackImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
      icon: "ri-global-line"
    }
  ];

  const handleImageError = (year: string) => {
    setImageErrors(prev => ({ ...prev, [year]: true }));
  };

  const getImageSrc = (milestone: typeof milestones[0]) => {
    if (imageErrors[milestone.year]) {
      return milestone.fallbackImage;
    }
    return milestone.image;
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading pineapple producer in Ghana, 
            our story is one of dedication, innovation, and sustainable growth.
          </p>
        </div>
        </ScrollAnimation>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {milestones.map((milestone, index) => (
              <ScrollAnimation key={milestone.year} animation="scale-in" delay={index * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition-all duration-300 border border-gray-100">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={getImageSrc(milestone)}
                      alt={milestone.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={() => handleImageError(milestone.year)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                        <span className="text-gray-900 font-bold text-lg">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md">
                        <i className={`${milestone.icon} text-green-600 text-2xl`}></i>
                      </div>
                      </div>
                    </div>
                    
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Journey Continues */}
          <ScrollAnimation animation="fade-in-up" delay={600}>
          <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-4 bg-gray-50 rounded-full px-8 py-4 border border-gray-200">
                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-lg">The journey continues...</span>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

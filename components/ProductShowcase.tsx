
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

export default function ProductShowcase({ data }: { data?: any }) {
  const content = data || {};
  const title = content.title || "Our Premium";
  const titleHighlight = content.title_highlight || "Products";
  const description = content.description || "From farm to table, we offer various pineapple varieties and packaging options to meet diverse market needs.";

  const products = content.products || [
    {
      title: "Fresh Whole Pineapples",
      description: "Premium quality whole pineapples, carefully selected for optimal sweetness and freshness. Perfect for retail and wholesale markets.",
      image: "https://readdy.ai/api/search-image?query=Fresh%20whole%20golden%20pineapple%20with%20crown%2C%20perfect%20ripeness%20and%20natural%20golden%20yellow%20color%2C%20clean%20white%20background%2C%20professional%20product%20photography%20for%20commercial%20use%2C%20high%20quality%20tropical%20fruit%20showcase%20with%20excellent%20texture%20and%20natural%20lighting&width=400&height=300&seq=product001&orientation=landscape",
      link: "/products",
      color: "yellow"
    },
    {
      title: "Pre-cut Pineapple",
      description: "Convenient ready-to-eat pineapple chunks, processed under strict hygiene standards for maximum freshness and convenience.",
      image: "https://readdy.ai/api/search-image?query=Pre-cut%20pineapple%20chunks%20in%20clear%20packaging%20container%2C%20fresh%20yellow%20pineapple%20pieces%20ready%20for%20consumption%2C%20clean%20commercial%20packaging%20design%2C%20professional%20food%20photography%20with%20bright%20lighting%20and%20appetizing%20presentation%20for%20retail%20market&width=400&height=300&seq=product002&orientation=landscape",
      link: "/products",
      color: "yellow"
    },
    {
      title: "Premium Pineapples",
      description: "High-quality pineapples grown using conventional methods combined with sustainable, organic-inspired practices, perfect for health-conscious consumers and premium markets.",
      image: "/pineapples2.jpg",
      link: "/products",
      color: "green"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title} <span className="text-yellow-500">{titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" data-product-shop>
          {products.map((product: any, index: number) => (
            <ScrollAnimation key={index} animation="scale-in" delay={(index + 1) * 100}>
              <div className={`group bg-white rounded-xl shadow-sm overflow-hidden hover-lift transition-all duration-300 border border-gray-100 hover:border-${product.color || 'yellow'}-200`}>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold text-gray-900 mb-3 group-hover:text-${product.color || 'yellow'}-600 transition-colors duration-300`}>{product.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <Link
                    href={product.link}
                    className={`inline-flex items-center text-${product.color || 'yellow'}-500 font-semibold hover:text-${product.color || 'yellow'}-600 transition-all duration-300 cursor-pointer group/link`}
                  >
                    Learn More
                    <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover/link:translate-x-1"></i>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

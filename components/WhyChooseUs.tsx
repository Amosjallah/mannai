
import ScrollAnimation from './ScrollAnimation';

export default function WhyChooseUs({ data }: { data?: any }) {
  const content = data || {};
  const title = content.title || "Why Choose";
  const titleHighlight = content.title_highlight || "Mennai Farms";
  const description = content.description || "Our commitment to excellence and sustainability makes us a trusted partner for premium pineapple production.";

  const features = content.features || [
    {
      title: "Sustainable Farming",
      description: "Eco-friendly practices that preserve soil health and promote biodiversity while ensuring premium quality produce.",
      icon: "ri-plant-line",
      color: "green"
    },
    {
      title: "Premium Quality",
      description: "Rigorous quality control ensures every pineapple meets international standards for sweetness, texture, and appearance.",
      icon: "ri-award-line",
      color: "yellow"
    },
    {
      title: "Global Reach",
      description: "Serving both local and international markets with reliable supply chains and export capabilities.",
      icon: "ri-global-line",
      color: "green"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-50 border-t border-yellow-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title} <span className="text-green-600">{titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature: any, index: number) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={(index + 1) * 100}>
              <div className={`group text-center bg-white p-8 rounded-xl shadow-sm hover-lift transition-all duration-300 border border-transparent hover:border-${feature.color || 'green'}-100`}>
                <div className={`w-20 h-20 bg-gradient-to-br from-${feature.color || 'green'}-100 to-${feature.color || 'green'}-50 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <i className={`${feature.icon || 'ri-star-line'} text-3xl text-${feature.color || 'green'}-600`}></i>
                </div>
                <h3 className={`text-xl font-semibold text-gray-900 mb-4 group-hover:text-${feature.color || 'green'}-600 transition-colors duration-300`}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

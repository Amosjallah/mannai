import ScrollAnimation from '../../components/ScrollAnimation';

export default function SustainabilityPractices() {
  const practices = [
    {
      icon: 'ri-drop-line',
      title: 'Water-Conscious Farming',
      description: 'Careful field planning and timing help us make the most of natural rainfall and avoid unnecessary water use.',
      stat: 'Smart',
      statLabel: 'Rainfall Use'
    },
    {
      icon: 'ri-recycle-line',
      title: 'Composting & Soil Care',
      description: 'We convert farm waste into nutrient-rich compost and focus on building healthy soils with practices suited to our local conditions.',
      stat: '500+ tons',
      statLabel: 'Plant Material Reused'
    },
    {
      icon: 'ri-bug-line',
      title: 'Integrated Pest Management',
      description: 'Integrated pest management using monitoring, good field hygiene, and targeted treatments to protect crops responsibly.',
      stat: 'Targeted',
      statLabel: 'Pest Control'
    },
    {
      icon: 'ri-seedling-line',
      title: 'Soil Health',
      description: 'Crop rotation and cover cropping practices help maintain soil fertility and prevent erosion over the long term.',
      stat: 'Strong',
      statLabel: 'Soil Structure'
    },
    {
      icon: 'ri-plant-line',
      title: 'Biodiversity',
      description: 'Maintaining natural habitats and wildlife corridors to support local ecosystem balance.',
      stat: '15+',
      statLabel: 'Species Supported'
    },
    {
      icon: 'ri-team-line',
      title: 'Safe Field Practices',
      description: 'Training our team in safe handling of inputs and careful field work to protect both workers and the environment.',
      stat: 'Ongoing',
      statLabel: 'Staff Training'
    }
  ];

  const impacts = [
    { label: 'Better use of natural rainfall and field resources', icon: 'ri-drop-line' },
    { label: 'Responsible use of crop protection products', icon: 'ri-shield-check-line' },
    { label: '100% organic waste recycled back into fields', icon: 'ri-recycle-line' }
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in-up">
        <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Environmental Stewardship
              </span>
            </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Sustainable</span> Farming Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to environmental stewardship drives every decision we make, 
            ensuring a healthy planet for future generations.
          </p>
        </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {practices.map((practice, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover-lift transition-all duration-300 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className={`${practice.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-green-600 mb-1">{practice.stat}</div>
                    <div className="text-sm text-gray-500 font-medium">{practice.statLabel}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {practice.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{practice.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in-up">
          <div className="bg-gradient-to-br from-green-50 via-white to-yellow-50 p-10 md:p-12 rounded-3xl shadow-xl border border-green-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-block mb-6">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Our Impact
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Environmental Impact
                </h3>
                <div className="space-y-5">
                  {impacts.map((impact, index) => (
                    <ScrollAnimation key={index} animation="fade-in-left" delay={index * 100}>
                      <div className="flex items-center space-x-4 group">
                        <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                          <i className={`${impact.icon} text-white text-xl`}></i>
                        </div>
                        <span className="text-lg font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                          {impact.label}
                        </span>
                  </div>
                    </ScrollAnimation>
                  ))}
                </div>
                  </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="/pineapples2.jpg"
                    alt="Sustainable Farming Practices at Mennai Farms"
                    width={800}
                    height={600}
                    className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100 hidden lg:block">
                  <div className="text-3xl font-bold text-green-600 mb-1">Since 2017</div>
                  <div className="text-sm text-gray-600">Continuous Sustainable Improvements</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

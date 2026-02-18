import ScrollAnimation from '../../components/ScrollAnimation';

export default function MissionVision() {
  const values = [
    {
      icon: 'ri-leaf-line',
      title: 'Sustainability',
      description: 'Environmental responsibility in all our practices',
      color: 'green'
    },
    {
      icon: 'ri-award-line',
      title: 'Quality',
      description: 'Uncompromising standards in everything we do',
      color: 'yellow'
    },
    {
      icon: 'ri-team-line',
      title: 'Community',
      description: 'Supporting local communities and farmers',
      color: 'green'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'Embracing new technologies and methods',
      color: 'yellow'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & <span className="text-green-600">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that shape everything we do at Mennai Farms
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <ScrollAnimation animation="fade-in-right">
            <div className="group bg-white p-8 md:p-10 rounded-2xl shadow-lg hover-lift transition-all duration-300 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="ri-focus-3-line text-3xl text-white"></i>
            </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-300">
                  Our Mission
                </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To cultivate the highest quality pineapples using sustainable farming practices that respect 
              the environment, support local communities, and contribute to Ghana's agricultural economy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are committed to providing premium produce to both local and international markets while 
              maintaining our dedication to environmental stewardship and social responsibility.
            </p>
          </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-left">
            <div className="group bg-white p-8 md:p-10 rounded-2xl shadow-lg hover-lift transition-all duration-300 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="ri-eye-2-line text-3xl text-white"></i>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-yellow-600 transition-colors duration-300">
                  Our Vision
                </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To become West Africa's leading sustainable pineapple producer, recognized globally for our 
              commitment to quality, innovation, and environmental responsibility.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a future where Mennai Farms serves as a model for sustainable agriculture, 
              inspiring other farmers and contributing to a more sustainable food system.
            </p>
          </div>
        </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="scale-in">
          <div className="bg-gradient-to-br from-green-600 via-green-500 to-green-700 text-white p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full -ml-48 -mb-48"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h3>
                <p className="text-green-100 text-lg max-w-2xl mx-auto">
                  The fundamental beliefs that drive our commitment to excellence
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                    <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-default">
                      <div className={`w-16 h-16 flex items-center justify-center bg-white/20 rounded-xl mb-4 mx-auto group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300`}>
                        <i className={`${value.icon} text-3xl text-white`}></i>
                </div>
                      <h4 className="text-xl font-semibold mb-2 text-center">{value.title}</h4>
                      <p className="text-green-100 text-sm text-center leading-relaxed">{value.description}</p>
              </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

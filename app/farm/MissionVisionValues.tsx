
export default function MissionVisionValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission, Vision & Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-focus-3-line text-yellow-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To cultivate premium pineapples through sustainable farming practices while empowering local communities and contributing to Ghana's agricultural development.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-eye-line text-green-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be West Africa's leading sustainable pineapple producer, recognized globally for quality, innovation, and positive community impact.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-heart-line text-yellow-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Quality excellence, environmental stewardship, community empowerment, integrity in all dealings, and continuous innovation in farming practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

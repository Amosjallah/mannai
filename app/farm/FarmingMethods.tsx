
export default function FarmingMethods() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Farming Methods</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine traditional Ghanaian farming wisdom with modern sustainable agricultural practices to produce the finest pineapples.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/pineapples2.jpg" 
              alt="Field Management at Mennai Farms" 
              width={800}
              height={600}
              className="w-full h-80 object-cover object-top rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Careful Field Management</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our fields are primarily rain-fed, supported by careful planning of planting seasons and hands-on field monitoring to keep plants healthy throughout the year.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-check-line text-yellow-500"></i>
                </div>
                <span className="text-gray-600">Thoughtful planning of planting and harvest windows</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-check-line text-yellow-500"></i>
                </div>
                <span className="text-gray-600">Regular field inspections to monitor crop health</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-check-line text-yellow-500"></i>
                </div>
                <span className="text-gray-600">Practical, water-conscious practices suited to the local climate</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Soil Health Management</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We maintain soil health through natural composting, cover cropping, and careful, responsible use of conventional inputs where necessary, ensuring sustainable production for generations to come.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-check-line text-yellow-500"></i>
                </div>
                <span className="text-gray-600">On-farm composting from plant residues</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-check-line text-yellow-500"></i>
                </div>
                <span className="text-gray-600">Regular soil testing and pH monitoring</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-check-line text-yellow-500"></i>
                </div>
                <span className="text-gray-600">Integrated pest management practices</span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="/image44.jpg" 
              alt="Organic Composting" 
              className="w-full h-80 object-cover object-top rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Pineapple%20harvest%20season%20with%20workers%20carefully%20selecting%20ripe%20fruits%2C%20traditional%20harvesting%20methods%20combined%20with%20modern%20quality%20control%2C%20golden%20ripe%20pineapples%20being%20collected%2C%20agricultural%20workers%20in%20protective%20gear%2C%20sunny%20plantation%20setting&width=800&height=600&seq=harvest001&orientation=landscape" 
              alt="Quality Harvest Process" 
              className="w-full h-80 object-cover object-top rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Harvest Process</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our experienced team hand-selects each pineapple at peak ripeness, ensuring only the highest quality fruits reach our customers.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-check-line text-yellow-500"></i>
                </div>
                <span className="text-gray-600">Expert assessment of ripeness indicators</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-check-line text-yellow-500"></i>
                </div>
                <span className="text-gray-600">Careful handling to prevent damage</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-check-line text-yellow-500"></i>
                </div>
                <span className="text-gray-600">Immediate post-harvest processing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

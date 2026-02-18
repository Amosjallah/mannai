
export default function FarmInfrastructure() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Farm Infrastructure</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our modern facilities and equipment ensure efficient operations from planting to packaging, maintaining the highest standards throughout.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20agricultural%20processing%20facility%20for%20pineapples%2C%20clean%20industrial%20setting%20with%20stainless%20steel%20equipment%2C%20quality%20control%20stations%2C%20workers%20in%20protective%20gear%2C%20efficient%20fruit%20processing%20line%2C%20hygienic%20food%20safety%20standards&width=400&height=300&seq=facility001&orientation=landscape" 
              alt="Processing Facility" 
              className="w-full h-48 object-cover object-top rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Processing Facility</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              State-of-the-art processing center with temperature-controlled environments for washing, sorting, and packaging operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <img 
              src="https://readdy.ai/api/search-image?query=Cold%20storage%20warehouse%20for%20fresh%20pineapples%2C%20temperature%20controlled%20environment%2C%20organized%20storage%20systems%2C%20industrial%20refrigeration%20units%2C%20quality%20preservation%20technology%2C%20efficient%20logistics%20setup&width=400&height=300&seq=storage001&orientation=landscape" 
              alt="Cold Storage" 
              className="w-full h-48 object-cover object-top rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cold Storage</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Climate-controlled storage facilities maintaining optimal temperature and humidity levels to preserve freshness and extend shelf life.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <img 
              src="https://readdy.ai/api/search-image?query=Agricultural%20machinery%20and%20equipment%20for%20pineapple%20farming%2C%20modern%20tractors%20and%20specialized%20tools%2C%20maintenance%20workshop%2C%20farming%20technology%2C%20efficient%20agricultural%20operations%2C%20well-organized%20equipment%20storage&width=400&height=300&seq=equipment001&orientation=landscape" 
              alt="Farm Equipment" 
              className="w-full h-48 object-cover object-top rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Equipment</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced agricultural machinery including specialized planters, cultivators, and harvest equipment designed for pineapple farming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

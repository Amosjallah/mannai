
export default function PrimeLocation() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Prime Location</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in Marfokrom, Ayensuano District in Ghana's Eastern Region, our farm benefits from ideal tropical conditions for pineapple cultivation. The region's rich volcanic soil, consistent rainfall patterns, and optimal temperature ranges create perfect growing conditions.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-map-pin-line text-green-600"></i>
                </div>
                <span className="text-gray-700">Marfokrom, Ayensuano District, Eastern Region</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-temp-hot-line text-green-600"></i>
                </div>
                <span className="text-gray-700">Average temperature: 26-30°C year-round</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-drop-line text-green-600"></i>
                </div>
                <span className="text-gray-700">Annual rainfall: 1,200-1,500mm</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-landscape-line text-green-600"></i>
                </div>
                <span className="text-gray-700">Elevation: 200-300 meters above sea level</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our strategic location provides easy access to major transportation routes, enabling efficient distribution to both domestic and international markets.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.123456789!2d-0.123456!3d6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMjQuNCJOIDDCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sgh!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center pointer-events-none">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="ri-map-pin-fill text-lg"></i>
                  </div>
                  <p className="font-semibold">Mennai Farms</p>
                  <p className="text-sm opacity-90">Marfokrom, Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

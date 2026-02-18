
export default function FarmScale() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Farm Scale & Production</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our farm operations span across 50 acres of prime agricultural land, producing thousands of premium pineapples annually.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50</div>
            <div className="text-gray-600 font-medium mb-2">Acres</div>
            <p className="text-sm text-gray-500">Total farm area under pineapple cultivation</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">25,000</div>
            <div className="text-gray-600 font-medium mb-2">Plants per Acre</div>
            <p className="text-sm text-gray-500">Optimal planting density for quality</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">18</div>
            <div className="text-gray-600 font-medium mb-2">Months</div>
            <p className="text-sm text-gray-500">Growth cycle from planting to harvest</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">65</div>
            <div className="text-gray-600 font-medium mb-2">Workers</div>
            <p className="text-sm text-gray-500">Permanent workers are 15 and casual workers around 50</p>
          </div>
        </div>
      </div>
    </section>
  );
}

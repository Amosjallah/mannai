
export default function FarmStory() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2017, Mennai Farms began as a small family operation with just 5 acres of land in Marfokrom. What started as a dream to produce the finest pineapples in Ghana has grown into a thriving enterprise that serves both local and international markets.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mennai is founded on determination and vision. Over the years, we've expanded our operations to 50 acres while maintaining our commitment to quality, sustainability, and community development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Mennai Farms stands as a testament to what can be achieved through dedication, innovation, and respect for the land. We continue to honor our roots while embracing modern farming techniques that ensure the highest quality produce.
            </p>
          </div>
          <div>
            <img 
              src="/image33.jpg" 
              alt="Mennai Farms founder" 
              className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

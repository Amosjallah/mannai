
export default function ProductsHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Premium%20fresh%20golden%20pineapples%20arranged%20beautifully%20on%20wooden%20surface%2C%20variety%20of%20pineapple%20products%20including%20fresh%20juice%20bottles%2C%20dried%20pineapple%20rings%2C%20canned%20products%2C%20professional%20food%20photography%2C%20warm%20lighting%20highlighting%20quality%20and%20freshness%2C%20Ghana%20agricultural%20excellence%2C%20tropical%20fruit%20showcase%2C%20clean%20minimalist%20background&width=1920&height=800&seq=products-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-yellow-400">Premium Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            From fresh golden pineapples to processed delights, discover our complete range 
            of premium products cultivated with care in Ghana's fertile Eastern Region.
          </p>
        </div>
      </div>
    </section>
  );
}

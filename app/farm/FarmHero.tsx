
export default function FarmHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Expansive%20pineapple%20farm%20in%20Ghana%20showing%20vast%20organized%20plantation%20rows%2C%20modern%20farming%20infrastructure%2C%20irrigation%20systems%2C%20workers%20in%20the%20field%2C%20rolling%20hills%20landscape%2C%20African%20agricultural%20excellence%2C%20sustainable%20farming%20operations%2C%20golden%20hour%20lighting%2C%20professional%20aerial%20perspective%20showcasing%20scale%20and%20modern%20farming%20techniques&width=1920&height=800&seq=farm-hero-new&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-yellow-400">Farm</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Discover our journey from humble beginnings to becoming Ghana's premier pineapple producer, 
            committed to sustainability and community development in Marfokrom, Ayensuano District.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function AboutHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Aerial%20view%20of%20expansive%20pineapple%20plantation%20in%20Ghana%20showing%20organized%20farming%20rows%2C%20lush%20green%20pineapple%20plants%20stretching%20to%20horizon%2C%20African%20agricultural%20landscape%2C%20sustainable%20farming%20practices%20visible%2C%20rural%20Ghana%20countryside%2C%20golden%20hour%20lighting%2C%20professional%20agricultural%20photography%20showcasing%20scale%20and%20organization&width=1920&height=800&seq=about-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-yellow-400">Mennai Farms</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Pioneering sustainable pineapple farming in Ghana's Eastern Region since 2017,
            with a firm commitment to quality, community, and environmental stewardship.
          </p>
        </div>
      </div>
    </section>
  );
}

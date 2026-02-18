
export default function GalleryHero() {
  return (
    <section className="relative h-96 bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Beautiful%20aerial%20view%20of%20lush%20green%20pineapple%20plantation%20fields%20in%20Ghana%20with%20workers%20harvesting%20golden%20ripe%20pineapples%2C%20tropical%20agricultural%20landscape%2C%20vibrant%20green%20rows%20of%20pineapple%20plants%20stretching%20to%20horizon%2C%20golden%20hour%20lighting%2C%20professional%20agricultural%20photography&width=1200&height=400&seq=gallery-hero-001&orientation=landscape')`
             }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-yellow-400">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Explore the beauty of our pineapple farm through stunning visuals showcasing our journey from planting to harvest
          </p>
        </div>
      </div>
    </section>
  );
}

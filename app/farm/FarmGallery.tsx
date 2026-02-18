
import Link from 'next/link';

export default function FarmGallery() {
  const galleryImages = [
    {
      src: "https://readdy.ai/api/search-image?query=Aerial%20view%20of%20pineapple%20plantation%20in%20Ghana%2C%20organized%20rows%20of%20pineapple%20plants%20stretching%20across%20rolling%20hills%2C%20geometric%20patterns%20of%20agricultural%20fields%2C%20lush%20green%20tropical%20landscape%2C%20sustainable%20farming%20layout%20visible%20from%20above&width=400&height=300&seq=aerial001&orientation=landscape",
      alt: "Aerial Farm View",
      title: "Aerial Farm View"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Close-up%20of%20healthy%20pineapple%20plants%20growing%20in%20organized%20rows%2C%20young%20pineapple%20fruits%20developing%20on%20plants%2C%20rich%20green%20foliage%2C%20optimal%20growing%20conditions%2C%20detailed%20view%20of%20pineapple%20cultivation%20process&width=400&height=300&seq=plants001&orientation=landscape",
      alt: "Growing Pineapples",
      title: "Growing Pineapples"
    },
    {
      src: "/image33.jpg",
      alt: "Farm Workers",
      title: "Farm Workers"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Ripe%20golden%20pineapples%20ready%20for%20harvest%2C%20perfect%20fruit%20quality%2C%20natural%20ripening%20process%2C%20premium%20agricultural%20produce%2C%20harvest%20season%20abundance%2C%20quality%20control%20standards%20visible&width=400&height=300&seq=ripe001&orientation=landscape",
      alt: "Ripe Pineapples",
      title: "Ripe Pineapples"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Sustainable%20farming%20equipment%20in%20pineapple%20plantation%2C%20modern%20agricultural%20machinery%2C%20eco-friendly%20farming%20tools%2C%20efficient%20irrigation%20systems%2C%20technology%20integration%20in%20agriculture%2C%20environmental%20responsibility&width=400&height=300&seq=sustainable001&orientation=landscape",
      alt: "Sustainable Practices",
      title: "Sustainable Practices"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Beautiful%20sunset%20over%20pineapple%20plantation%20in%20Ghana%2C%20golden%20hour%20lighting%20across%20agricultural%20fields%2C%20peaceful%20rural%20landscape%2C%20natural%20beauty%20of%20farming%20environment%2C%20inspiring%20agricultural%20scenery&width=400&height=300&seq=sunset001&orientation=landscape",
      alt: "Farm Sunset",
      title: "Farm at Sunset"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Farm <span className="text-yellow-500">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our farm operations, from planting to harvest, showcasing our commitment to quality and sustainability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover object-top rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/gallery" 
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 whitespace-nowrap"
          >
            View Full Gallery
            <div className="w-5 h-5 flex items-center justify-center ml-2">
              <i className="ri-arrow-right-line"></i>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
